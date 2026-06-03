# Problem 01 — Interfaces Basics

## 🎯 Objective

Modify the `Member` interface to fix all TypeScript errors without changing the object implementation or any code below it.

---

## 📄 Original Problem

A `Member` interface is provided.

The object assigned to that interface produces four TypeScript errors:

1. Missing property `country`
2. Missing method definition `getName`
3. `id` should accept both number and string values
4. `state` should be writable

The goal is to update the interface only.

---

## ✅ Solution

```ts
interface Member {
  id: number | string;
  username: string;
  country?: string;
  state: boolean;
  getName(): string;
}
```

---

## 🧠 Concepts Practiced

### Optional Properties

```ts
country?: string;
```

Makes a property optional.

---

### Method Signatures

```ts
getName(): string;
```

Defines a method inside an interface.

---

### Union Types

```ts
id: number | string;
```

Allows multiple possible types.

---

### Readonly Properties

```ts
readonly state: boolean;
```

A readonly property cannot be reassigned.

Removing `readonly` allows:

```ts
user.state = false;
```

---

## 📚 Key Takeaways

* Interfaces define object structure.
* Optional properties use `?`.
* Methods can be declared inside interfaces.
* Union types allow multiple data types.
* `readonly` prevents reassignment.

---

## 🚀 Result

All TypeScript errors are resolved while keeping the original object and code unchanged.
