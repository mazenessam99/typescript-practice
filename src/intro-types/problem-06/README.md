# Problem 06 - Function Arguments & Variable Usage

---

## 🧩 Problem Description

We have a function that concatenates three parameters and returns a string.

We are only allowed to use the provided variables to achieve the required output.

No extra values or hardcoded strings are allowed inside the function call.

---

## 📌 Given Code

let nothing;
let theName: string = "Elzero";

function showMyDetails(a = "", b = "", c) {
  return `${a}${b}${c}`;
}

console.log(showMyDetails(????));

---

## 🎯 Requirement

- Use ONLY the available variables
- Do NOT write any new values manually
- Arrange parameters correctly to produce the expected output
- Output must be:
  Elzero

---

## ❌ Wrong Approach

console.log(showMyDetails("Elzero", "", ""));
// ❌ Not allowed (hardcoded string)

---

## ✅ Solution

console.log(showMyDetails(theName, nothing, ""));

---

## 🧠 Key Learning

- Function parameters order matters
- Default values in functions can handle missing arguments
- Undefined variables can be safely used in string concatenation
- TypeScript allows flexible runtime behavior with string interpolation

---

## 💡 Important Note

- You must use only provided variables
- No manual string creation is allowed
- undefined behaves safely when used in template strings
- This teaches real-world function argument handling