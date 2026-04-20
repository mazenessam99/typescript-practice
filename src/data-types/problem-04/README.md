# Problem 04 - Literal Types & Type Safety

---

## 🧩 Problem Description

We have a function that should:

- Accept only numbers
- Return specific string values ("True" or "False")
- Prevent invalid inputs like strings

---

## 📌 Given Code

function yesOrNo(val: number): res {
  return val > 10 ? "True" : "False";
}

---

## 🎯 Requirement

- Accept only `number`
- Return only `"True"` or `"False"`
- Throw TypeScript error when passing string
- Do NOT allow invalid inputs

---

## ❌ Invalid Call

yesOrNo("100"); 
// ❌ TypeScript Error (string is not allowed)

---

## ✅ Solution

type res = "True" | "False";

function yesOrNo(val: number): res {
  return val > 10 ? "True" : "False";
}

---

## 🚀 Output

True  
False  

---

## 🧠 Key Learning

- Literal Types restrict exact return values
- Type Alias improves readability
- TypeScript prevents invalid input at compile time
- Strong typing improves code safety

---

## 💡 Important Note

- The function only accepts numbers
- Passing a string will cause a compile-time error
- This is the power of TypeScript over JavaScript