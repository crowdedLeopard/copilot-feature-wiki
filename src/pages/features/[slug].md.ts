import type { APIRoute } from 'astro';
import { readFile } from 'node:fs/promises';
import { allFeatures } from '../../lib/data';

export async function getStaticPaths() {
  const features = await allFeatures();
  return features.map((f) => ({ params: { slug: f.data.slug }, props: { file: f.filePath } }));
}

export const GET: APIRoute = async ({ props }) => {
  const raw = await readFile(props.file as string, 'utf8');
  return new Response(raw, { headers: { 'Content-Type': 'text/markdown; charset=utf-8' } });
};
