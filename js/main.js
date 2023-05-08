let a = prompt("introduce valor de A");
let b = prompt("introduce valor de B");
let c = prompt("introduce valor de C");


if (a > b && a > c) {
    alert("a es el mayor");
    if (b > c) {
        alert("c es el menor");
    }
}

if (b > c && b > a) {
    alert("b es la mayor");
    if (c > a) {
        alert("a es la menor");
    }
}

if (c > a && c > b) {
    alert("c es la mayor");
    if (a > b) {
        alert("b es la menor");
    }

}
