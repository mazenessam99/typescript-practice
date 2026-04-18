# Problem 07 - Optional Parameters & Flexible Function Arguments

---

## 🧩 Problem Description

We have a function that must handle multiple calling patterns without errors.

The function should work with different numbers of arguments and different types.

We are NOT allowed to use default parameter values.

---

## 📌 Given Code (Before Fix)

function showMsg(user: number, age: boolean, country: boolean) {
  return `${user}${age}${country}`;
}

---

## 🎯 Requirement

The function must support all of the following calls:

showMsg();
showMsg("Elzero");
showMsg("Elzero", 40);
showMsg("Elzero", "40", "Egypt");

---

## ❌ Problems in Original Code

- Wrong parameter types (number/boolean)
- No optional parameters
- No flexibility for different argument patterns
- Default parameter values are NOT allowed

---

## ✅ Solution

We use optional parameters and union types:

function showMsg(
  user?: string,
  age?: string | number,
  country?: string
) {
  return `${user ?? ""}${age ?? ""}${country ?? ""}`;
}

---

## 🚀 Final Working Code

console.log(showMsg());
console.log(showMsg("Elzero"));
console.log(showMsg("Elzero", 40));
console.log(showMsg("Elzero", "40", "Egypt"));

---

## 🧠 Key Learning

- Optional parameters are defined using `?`
- Union types allow multiple possible types
- Nullish coalescing (`??`) handles undefined values safely
- Functions can be flexible without breaking type safety

---

## 💡 Important Note

- Default parameter values are NOT used here
- Undefined values are handled using `??`
- This pattern is very common in real-world APIs