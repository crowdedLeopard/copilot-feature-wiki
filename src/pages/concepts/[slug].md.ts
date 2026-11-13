import type { APIRoute } from 'astro';
import { readFile } from 'node:fs/promises';
import { allConcepts } from '../../lib/data';

export async function getStaticPaths() {
  const concepts = await allConcepts();
  return concepts.map((c) => ({ params: { slug: c.data.slug }, props: { file: c.filePath } }));
}

export const GET: APIRoute = async ({ props }) => {
  const raw = await readFile(props.file as string, 'utf8');
  return new Response(raw, { headers: { 'Content-Type': 'text/markdown; charset=utf-8' } });
};
