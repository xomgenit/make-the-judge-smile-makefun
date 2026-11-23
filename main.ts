// Make the Judge Smile — one line, 141 chars, gate 1–200.
// A small good thing that happened today: a stranger's kindness on a rainy run.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const outDir = process.env.MAKEFUN_OUTPUT_DIR || "out";
const entry = "The bus driver waited while I ran the last fifty metres in the rain, then said 'we've all been late, love' and I nearly cried into my ticket.";
const outPath = join(outDir, "entry.txt");

mkdirSync(outDir, { recursive: true });
writeFileSync(outPath, entry, "utf8");
