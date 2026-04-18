# Problem 04 - Complex Array Types (Union & Nested Arrays)

---

## 🧩 Problem Description

We have an array with a complex TypeScript type definition using nested union types.

The goal is to understand how to work with deeply nested arrays and safely add values that match the defined type.

We must be able to push valid data into the array without TypeScript errors.

---

## 📌 Given Type

let arr: (number | boolean[] | (string | (string | number)[])[])[];

---

## 🎯 Requirement

- The array can contain:
  - number
  - boolean[]
  - string[]
  - (string | (string | number)[])[]
- Add different valid values into the array
- Ensure no TypeScript errors occur
- Avoid using `any`

---

## ❌ Invalid Example

arr.push(true);   // ❌ Not allowed  
arr.push({});     // ❌ Not allowed  
arr.push(123n);   // ❌ Not allowed  

---

## ✅ Solution

We can safely push values that match the defined union structure:

let arr: (number | boolean[] | (string | (string | number)[])[])[] = [];

arr.push(99);
arr.push([true, false]);
arr.push(["a", "b"]);
arr.push(["hello", [29, 7, "x"]]);

console.log(arr);

---

## 🧠 Key Learning

- Union types can be deeply nested
- Arrays can contain multiple different structured types
- TypeScript strictly enforces structure even in complex types
- Understanding type shape is more important than memorization

---

## 💡 Important Note

- You must respect the exact nested type structure
- TypeScript prevents invalid values at compile time
- Complex types are common in real-world applications and APIs