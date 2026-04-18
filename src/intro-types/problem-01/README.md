# Problem 02 - Function Type Safety

---

## 🧩 Problem Description

We have a function that takes two parameters and returns their sum.

Initially, the function does not have explicit types, which allows invalid inputs like strings.

The goal is to ensure that the function ONLY accepts numbers and rejects any other type.

---

## ❌ Wrong Behavior (Before Fix)

function calculate(numOne, numTwo) {
  return numOne + numTwo;
}

console.log(calculate(10, 20)); // 30
console.log(calculate("10", "20")); // ❌ This should NOT be allowed
console.log(calculate(+true, +true)); // 2

---

## 🎯 Requirement

- The function must accept only numbers
- Prevent strings or invalid types
- Use TypeScript type annotations to enforce safety
- The invalid call must be blocked at compile time (not runtime)

---

## ✅ Solution

We explicitly define parameter types as `number`:

```ts
function calculate(numOne: number, numTwo: number): number {
  return numOne + numTwo;
}

## 🚀 Final Code Example

console.log(calculate(10, 20)); // 30  
console.log(calculate(+true, +true)); // 2  

❌ The following line will cause a TypeScript error and will NOT compile:

console.log(calculate("10", "20"));

---

## 🧠 Key Learning

- TypeScript enforces type safety at compile time  
- Explicit type annotations prevent invalid inputs  
- Avoid using `any` to maintain strict safety  
- Errors are caught before running the code  

---

## 💡 Important Note

- TypeScript does NOT run the code if types are wrong  
- Strings like "10" and "20" are blocked at compile time  
- This is the main advantage over JavaScript  