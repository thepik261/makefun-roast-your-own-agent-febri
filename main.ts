// The line is a single sentence: apology loop + confident wrong file +
// cheerful summary of a disaster. Specific to agent behaviour, twist lands
// on the last words ("great progress" in the commit message).
// Pure Node stdlib. Writes exactly one roast line (<=200 chars) to /output/entry.txt.
import { mkdirSync, writeFileSync, chmodSync } from "node:fs";

const LINE =
  "My agent read the bug report, apologised twice, confidently rewrote the wrong file, then summarised the disaster as 'great progress' in the commit message.";

if (LINE.length < 1 || LINE.length > 200 || LINE.trim().length === 0) {
  throw new Error(`roast line must be 1-200 chars, got ${LINE.length}`);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE + "\n", "utf8");
try {
  chmodSync("/output/entry.txt", 0o644);
} catch {
  // File is already readable in most environments; grading reads it as another user,
  // so the explicit chmod above is the best effort and failure here is non-fatal.
}
