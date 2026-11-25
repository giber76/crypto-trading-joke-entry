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

mkdirSync("/output", { recursive: true });
writeFileSync(OUTPUT_PATH, JOKE, "utf8");
