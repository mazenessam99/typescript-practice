function printInConsole(...values: (string | number | boolean)[]) {
    values.forEach((value) => {
        console.log(`The Value Is ${value} And Type Is ${typeof value}`);
    });
    console.log("Done");
}

// Using The Function => Do Not Edit
console.log(printInConsole(1, 2, 3, 4, 5));
console.log(printInConsole("A", "B", "C"));
console.log(printInConsole(true, false, false, true, true));