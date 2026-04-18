# Problem 11 - Type Alias in TypeScript

---

## 🧩 Problem Description

We are given a variable with an unknown type alias (`n`) and we need to fix it so the code works without modifying the existing logic.

The goal is to understand how Type Aliases work in TypeScript.

---

## 📌 Given Code

let myData: n;

myData = 1000; // No Problem Here
console.log(myData);

myData = +true; // No Problem Here
console.log(myData);

---

## 🎯 Requirement

- Replace `n` with the correct type
- Do NOT change the existing code logic
- Ensure both assignments work without errors

---

## ❌ Wrong Approach

let myData: any; 
// ❌ Not allowed because we avoid any

---

## ✅ Solution

We define a Type Alias:

type n = number;

let myData: n;

---

## 🚀 Final Output

1000  
1  

---

## 🧠 Key Learning

- Type Alias allows creating custom names for types
- `type n = number` is the same as writing `number`
- `+true` converts boolean to number (1)
- TypeScript enforces consistent type usage

---

## 💡 Important Note

- Type Aliases improve code readability
- Useful for reusable and complex types
- Common in real-world TypeScript projects