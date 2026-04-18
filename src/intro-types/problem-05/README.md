# Problem 05 - TypeScript Config & Strict Mode

---

## 🧩 Problem Description

We have a function that currently contains multiple issues that should be detected by TypeScript compiler.

The goal is not only to fix the code but also to configure TypeScript properly to catch these issues automatically.

---

## ❌ Issues in the Code

- `username` has implicit `any` type
- `rank` variable is declared but never used
- `age` parameter is unused
- Code after `return` is unreachable

---

## 🎯 Requirement

- Fix type inference for `username`
- Enable compiler errors for:
  - unused variables
  - unused parameters
  - unreachable code
- Do NOT use `any`
- Use TypeScript strict configuration

---

## ✅ Solution

function reportErrors(username: string, age: number) {
  let rank = "Professor";

  return `Username: ${username}`;
  console.log("We Will Not Reach Here");
}

---

## ⚙️ TypeScript Config Fix

We enable strict compiler checks:

- noUnusedLocals
- noUnusedParameters
- noFallthroughCasesInSwitch
- strict mode

This ensures TypeScript catches mistakes at compile time.

---

## 🧠 Key Learning

- TypeScript can act as a linter when strict mode is enabled
- Unused variables should be detected at compile time
- Explicit typing removes implicit `any`
- Code after return is unreachable and should be flagged

---

## 💡 Important Note

- TypeScript is not just types — it’s also code quality enforcement
- Proper tsconfig turns TypeScript into a powerful safety tool