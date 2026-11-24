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

// The joke, in beats: one careless click, a thread that proves
// its own point, and Legal rebranding the chaos as attendance.
const beats = [
  "I hit Reply All to beg 214 colleagues to stop hitting Reply All",
  "all 214 replied to agree, two of them from annual leave",
  "and Legal minuted it as our best-attended meeting of the year.",
];

function buildJoke(): string {
  const line = beats.join(" — " );
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
