# Problem 03 — Interface Inheritance

## 🎯 Objective

Create a `Superman` interface without repeating properties already defined in other interfaces.

Use TypeScript Interface Inheritance to combine multiple interfaces into one.

---

## 📄 Problem

Two interfaces are already provided:

```ts
interface Man {
  title: string;
  weight: number;
  age: number;
}

interface Bird {
  canFly: boolean;
}
```

Create a `Superman` interface that supports the following object:

```ts
let creature: Superman = {
  title: "Superman",
  weight: 100,
  age: 500,
  canFly: true,
  bodyType: "Iron",
  origin: "Krypton"
}
```

Without repeating existing properties.

---

## ✅ Solution

```ts
interface Superman extends Man, Bird {
  bodyType: string;
  origin: string;
}
```

---

## 🧠 Concepts Practiced

### Interface Inheritance

TypeScript interfaces can inherit from one or multiple interfaces.

```ts
interface Superman extends Man, Bird {}
```

This allows code reuse and avoids duplication.

---

### Multiple Inheritance

```ts
extends Man, Bird
```

The `Superman` interface receives all properties from both interfaces.

From `Man`:

```ts
title
weight
age
```

From `Bird`:

```ts
canFly
```

---

### Adding New Properties

Additional properties can be defined directly inside the new interface.

```ts
bodyType: string;
origin: string;
```

---

## 📚 Key Takeaways

* Interfaces can inherit from other interfaces.
* Multiple inheritance is supported.
* Avoid repeating properties already defined elsewhere.
* Interface inheritance improves maintainability and readability.

---

## 🚀 Result

The `Superman` interface combines the structure of both `Man` and `Bird` while adding its own unique properties, resulting in a clean and reusable design.
