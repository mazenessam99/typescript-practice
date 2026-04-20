# Problem 03 - Type Extension Using Intersection Types

---

## 🧩 Problem Description

We have two functions:

- One requires basic user info
- The other requires full user info including country

We must define types correctly without repeating properties and by extending existing types.

---

## 📌 Given Code

function showInfo(data: Info) { ... }

function showFullInfo(data: Full) { ... }

---

## 🎯 Requirement

- Define type `Info`
- Extend it to create type `Full`
- Do NOT repeat properties
- Use TypeScript best practices

---

## ❌ Wrong Approach

type Full = {
  theName: string;
  theAge: number;
  country: string;
}
// ❌ Repetition is not allowed

---

## ✅ Solution

We define a base type:

type Info = {
  theName: string;
  theAge: number;
};

Then extend it using intersection:

type Full = Info & {
  country: string;
};

---

## 🚀 Output Example

The Name Is Elzero  
The Age Is 40  

The Name Is Elzero  
The Age Is 4  
The Country Is Egypt  

---

## 🧠 Key Learning

- Type extension using `&`
- Reusability of types
- Avoid repeating properties
- Build scalable type structures

---

## 💡 Important Note

- `&` is called Intersection Type
- It combines multiple types into one
- Common in real-world TypeScript applications