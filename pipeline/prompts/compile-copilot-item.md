You are writing one briefing for Release Ledger. Work only on roadmap item {{id}}.

1. Read `pipeline/prompts/compile-agent.md` and `wiki/SCHEMA.md` and follow them exactly. Where
   compile-agent.md talks about a list of tasks, your list has exactly one entry: item {{id}}.
2. The task brief is at `{{brief}}`. The raw roadmap record is at `{{raw}}`.
3. Save your briefing JSON to `{{output}}`, then run
   `node pipeline/write-briefing.mjs {{id}} {{output}}`.
   If it prints `REJECTED`, fix the JSON it complains about and run it again, up to three times.
4. Stop as soon as it prints `OK`. Do not run lint, do not touch any other file, do not edit
   `wiki/` or `raw/` directly, and do not start any other item. Nobody is available to answer
   questions: make the best supported choice and record real uncertainty under openQuestions.

Reply with one line only: `DONE {{id}}` or `FAILED {{id}}: <reason>`.
