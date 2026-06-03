# Problem 02 — Object Interface

## 🎯 Objective

Create a TypeScript interface named `Client` that matches the provided object structure.

The object should be assigned to the interface without any TypeScript errors.

---

## 📄 Problem

Given the following object:

```ts
let client: Client = {
  id: 100,
  username: "Elzero",
  active: true,
  discount: 10,
  getPrice(price: number) {
    return price - this.discount;
  }
}
```

Create the interface that describes all properties and methods correctly.

---

## ✅ Solution

```ts
interface Client {
  id: number;
  username: string;
  active: boolean;
  discount: number;
  getPrice(price: number): number;
}
```

---

## 🧠 Concepts Practiced

### Property Types

```ts
id: number;
username: string;
active: boolean;
discount: number;
```

Interfaces can define the expected type for each property.

---

### Method Signatures

```ts
getPrice(price: number): number;
```

Defines a method that:

* Receives a number parameter
* Returns a number

---

## 📚 Key Takeaways

* Interfaces describe object shapes.
* Every property must match its declared type.
* Methods can be typed using method signatures.
* TypeScript validates object structures at compile time.

---

## 🚀 Result

The object successfully implements the `Client` interface and all data can be accessed safely with full type checking.
