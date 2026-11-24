// One-Line Office Joke: 24-Hour Sprint
// Writes a single original office joke to /output/entry.txt.
//
// The joke is built from two parts — a very specific Reply-All
// mishap as the setup, and the punchline that the fallout was
// accidentally the best-attended "meeting" of the year — so the
// program assembles it from its parts instead of dumping a blob.

import { mkdirSync, writeFileSync } from "node:fs";
import { dirname } from "node:path";

const OUTPUT_PATH = "/output/entry.txt";

// Setup: one careless click, addressed to the whole company.
const setup =
  "I hit Reply All to beg everyone to stop hitting Reply All";

// Punchline: the thread snowballs, and Legal rebrands the chaos.
const punchline =
  "214 people replied to agree, and Legal declared it our best-attended meeting of the year.";

function buildJoke(): string {
  const line = `${setup} — ${punchline}`;
  // Guard the competition gate: one line, 1–200 characters.
  if (line.includes("\n") || line.length < 1 || line.length > 200) {
    throw new Error(`joke must be a single line of 1-200 chars, got ${line.length}`);
  }
  return line;
}

function main(): void {
  const joke = buildJoke();
  mkdirSync(dirname(OUTPUT_PATH), { recursive: true });
  writeFileSync(OUTPUT_PATH, joke + "\n", "utf8");
}

main();
