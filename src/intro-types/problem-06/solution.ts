let nothing;
let theName: string = "Elzero";

function showMyDetails(
    a: string = "",
    b: string = "",
    c: string = ""
) {
    return `${a}${b}${c}`;
}

console.log(showMyDetails(theName, nothing, ""));