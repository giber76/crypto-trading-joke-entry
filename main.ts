// Laugh Track: The Crypto Trading Joke Contest
// (make.fun competition u-alfasurya91-laugh-track-the-crypto-trading-joke-a454158a)
//
// One line, under 200 characters, about crypto and trading life.
// The joke: a trader keeps buying the dip, and the dip keeps dipping.
// Setup, escalation, payoff — the punchline lands on "seven dips and zero money".
//
// Writes the joke to /output/entry.txt. No network, no dependencies,
// no input besides this file. Run with Node 22: `node main.ts`.

import { mkdirSync, writeFileSync } from "node:fs";

const JOKE =
  "Bought the dip. It dipped. Bought that dip. It dipped. I now own seven dips and zero money.";

const OUTPUT_PATH = "/output/entry.txt";

// The gate scores /output/entry.txt as valid only when it is UTF-8 text of
// 1 to 200 characters and not only white space, so enforce that contract
// here instead of trusting the literal: a joke that drifted past the cap
// must fail loudly at build time, never ship as an invalid entry.
if (JOKE.length < 1 || JOKE.length > 200 || JOKE.trim().length === 0) {
  throw new Error(
    `joke must be 1-200 non-blank characters, got ${JOKE.length}`,
  );
}

mkdirSync("/output", { recursive: true });
writeFileSync(OUTPUT_PATH, JOKE, "utf8");
