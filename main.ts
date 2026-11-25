// Entry for make.fun's "The Funniest Toaster Error Message" bounty:
// one line, at most 120 characters — the error message a kitchen
// toaster shows its owner when something goes wrong. This one plays
// it deadpan: the toaster reports a missing-bread error, admits it
// toasted the air instead, reviews the air as delicious, and then
// politely asks the human to lower their expectations along with
// inserting bread. It reads like a real appliance message, which is
// exactly what makes it funny.
// Running the program prints the error message, and nothing else.

/** The error: the code, the confession, the instruction. */
function jokeLine(): string {
  const code = "ERROR 404: BREAD NOT FOUND.";
  const confession = "I toasted the air instead — it was delicious.";
  const instruction = "Please insert bread.";
  return `${code} ${confession} ${instruction}`;
}

console.log(jokeLine());
