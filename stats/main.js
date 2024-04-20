const verbal = localStorage.getItem("verbal-storage");
if (verbal) {
    document.getElementById("verbal").innerHTML = "Verbal Memory: " + verbal;
}

const matching = localStorage.getItem("matching-storage");
if (matching) {
    document.getElementById("matching").innerHTML =
        "Number Memory: " + matching;
}

const grid = localStorage.getItem("grid-storage");
if (grid) {
    document.getElementById("grid").innerHTML = "Grid: " + grid;
}
