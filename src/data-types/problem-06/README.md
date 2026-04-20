# Problem 06 - Tuples, Readonly & Destructuring

---

## 🧩 Problem Description

We are working with a fixed structure of data using Tuples in TypeScript.

The requirements are:

- Maintain strict order and types
- Prevent invalid assignments
- Prevent adding new elements
- Extract values using destructuring

---

## 📌 Given Code Behavior

post = [100, 200, "Title"]; // ❌ Error  
post = ["Title", 100, true]; // ❌ Error  
post = [100, "Title", true]; // ✔ Correct  

post.push("Elzero"); // ❌ Error (Readonly)

---

## 🎯 Requirement

- Use Tuple type with fixed structure
- Make the array readonly
- Use destructuring to extract values
- Ensure correct types for each position

---

## ❌ Invalid Cases

post = [100, 200, "Title"];  
// ❌ Wrong order and types

post = ["Title", 100, true];  
// ❌ Wrong order and types

post.push("Elzero");  
// ❌ Not allowed because readonly

---

## ✅ Solution

let post: readonly [number, string, boolean] = [15, "Real", true];

// Create Destructuring Here
const [id, title, state] = post;

---

## 🚀 Output

100  
Title  
true  

---

## 🧠 Key Learning

- Tuple enforces strict order of types
- Readonly prevents modification of data
- Destructuring extracts values cleanly
- Strong typing improves safety and reliability

---

## 💡 Important Note

- Tuples are different from arrays
- Order of elements matters strictly
- Readonly ensures immutability
- Common in APIs and structured data handling