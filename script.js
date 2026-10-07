const printButton = document.getElementById("print-resume");

if (printButton) {
    printButton.addEventListener("click", () => window.print());
}
