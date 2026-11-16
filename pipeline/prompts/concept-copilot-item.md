You are writing one concept page for Release Ledger. Work only on the concept `{{slug}}`.

1. Read `pipeline/prompts/concept-agent.md` and `wiki/SCHEMA.md` and follow them exactly.
2. The task brief is at `{{brief}}`.
3. Save your JSON to `{{output}}`, then run
   `node pipeline/write-concept.mjs {{slug}} {{output}}`.
   If it prints `REJECTED`, fix the JSON it complains about and run it again, up to three times.
4. Stop as soon as it prints `OK`. Do not run lint, do not touch any other file, do not edit
   `wiki/` or `raw/` directly, and do not start any other page. Nobody is available to answer
   questions: make the best supported choice and record real uncertainty under openQuestions.

Reply with one line only: `DONE {{id}}`, `DECLINED {{id}}` or `FAILED {{id}}: <reason>`.
