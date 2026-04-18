let arr: (number | boolean[] | (string | (string | number)[])[])[]=[];
// number
arr.push(99);

// boolean[]
arr.push([true, false]);

// string[]
arr.push(["a", "b"]);

// (string | (string | number)[])[]
arr.push(["hello", [29, 7, "x"]]);

console.log(arr);