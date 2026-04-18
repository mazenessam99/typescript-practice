# Problem 02 - Union Types with Type Alias

---

## 🧩 Problem Description

We are given a variable with an unknown type alias (`mix`) and we need to define it properly so the code works without modifying the existing logic.

The goal is to understand how Union Types work in TypeScript.

---

## 📌 Given Code

let myInfo: mix;

myInfo = 1000; // No Problem Here
myInfo = true; // No Problem Here

---

## 🎯 Requirement

- Define the missing type alias `mix`
- Allow both `number` and `boolean`
- Do NOT modify the existing code
- Ensure TypeScript does not throw any errors

---

## ❌ Wrong Approach

let myInfo: any;
// ❌ Not allowed because we avoid using any

---

## ✅ Solution

We define a Union Type:

type mix = number | boolean;

let myInfo: mix;

---

## 🚀 Final Output

1000  
true  

---

## 🧠 Key Learning

- Union types allow multiple possible types
- Type Alias can be used to simplify complex types
- `|` operator is used to combine types
- TypeScript enforces type safety at compile time

---

## 💡 Important Note

- Avoid using `any` whenever possible
- Union types are a safer alternative
- This is widely used in real-world TypeScript projects