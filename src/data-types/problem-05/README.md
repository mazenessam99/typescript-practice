# Problem 05 - Literal Types & Type Safety (Custom Return Type)

---

## 🧩 Problem Description

We have a function that should:

- Accept only numbers
- Compare the value with a condition
- Return only "Yes" or "No"
- Prevent invalid inputs like strings

---

## 📌 Given Code

function isHeOld(age: number): custom {
  return age > 40 ? "Yes" : "No";
}

---

## 🎯 Requirement

- Define a custom type called `custom`
- Allow only "Yes" or "No" as return values
- Accept only numbers as input
- Ensure TypeScript throws an error for invalid input like strings

---

## ❌ Invalid Case

isHeOld("100"); 
// ❌ TypeScript Error (string is not allowed)

---

## ✅ Solution

type custom = "Yes" | "No";

function isHeOld(age: number): custom {
  return age > 40 ? "Yes" : "No";
}

---

## 🚀 Output

Yes  
No  

---

## 🧠 Key Learning

- Literal Types restrict exact values
- Type Alias improves code readability
- TypeScript enforces strict type safety
- Prevents runtime bugs at compile time

---

## 💡 Important Note

- Only numbers are allowed as input
- Return values are strictly "Yes" or "No"
- This pattern is widely used in real-world TypeScript projects