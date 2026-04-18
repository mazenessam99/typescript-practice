# Problem 08 - Rest Parameters & Type Detection

---

## 🧩 Problem Description

We have a function that accepts an unknown number of arguments.

The function must:
- Accept unlimited parameters
- Detect the type of each value
- Print each value with its type
- Print "Done" after finishing

---

## 🎯 Requirement

- Use rest parameters
- Support: string | number | boolean
- Print each value with its type
- Handle any number of arguments

---

## ❌ Wrong Approach

function printInConsole(values) {
  // ❌ fixed parameter list
}

---

## ✅ Solution

We use REST PARAMETERS:

function printInConsole(...values: (string | number | boolean)[]) {
  values.forEach((value) => {
    console.log(`The Value Is ${value} And Type Is ${typeof value}`);
  });

  console.log("Done");
}

---

## 🚀 Output Example

The Value Is 1 And Type Is number  
The Value Is 2 And Type Is number  
The Value Is 3 And Type Is number  
Done  

The Value Is A And Type Is string  
The Value Is B And Type Is string  
Done  

The Value Is true And Type Is boolean  
Done  

---

## 🧠 Key Learning

- Rest parameters allow unlimited arguments
- `typeof` detects runtime types
- Arrays + loops used to process dynamic inputs
- TypeScript enforces allowed types

---

## 💡 Important Note

- `...values` collects all arguments into an array
- Works with any number of inputs
- Very common in real-world APIs and utilities