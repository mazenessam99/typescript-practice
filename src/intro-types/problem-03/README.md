# Problem 03 - Union Types & Function Safety

## 🧩 Problem Description

We have a function that takes two parameters and returns a formatted string containing both values.

The goal is to ensure type safety using TypeScript without using `any`.

We only want to allow:
- number
- string

Any other type (like boolean or arrays) must NOT be allowed.

---

## ❌ Wrong Behavior (Before Fix)

function printInfo(valueOne, valueTwo) {
  return `Value One Is ${valueOne}, Value Two Is ${valueTwo}`;
}

console.log(printInfo(10, 20));
console.log(printInfo("10", "20"));
console.log(printInfo(true, [1, 2, 3]));
// ❌ The last line must NOT be allowed

---

## 🎯 Requirement

- Accept only `number | string`
- Reject boolean, arrays, or any other types
- Do NOT use `any`
- Ensure compile-time safety using TypeScript

---

## ✅ Solution

We use Union Types:

function printInfo(valueOne: number | string, valueTwo: number | string): string {
  return `Value One Is ${valueOne}, Value Two Is ${valueTwo}`;
}

---

## 🚀 Final Code Example

console.log(printInfo(10, 20));
// Value One Is 10, Value Two Is 20

console.log(printInfo("10", "20"));
// Value One Is "10", Value Two Is "20"

---

## ❌ This will NOT work (Type Error)

console.log(printInfo(true, [1, 2, 3]));
// ❌ Error: Argument of type 'boolean' is not assignable to type 'string | number'

---

## 🧠 Key Learning

- Union types allow multiple valid types
- TypeScript enforces type safety at compile time
- Invalid types are blocked before execution
- Avoid using `any` for safer code

---

## 💡 Important Note

- Only `string | number` are allowed
- Arrays and booleans are rejected automatically
- This is a core concept in TypeScript