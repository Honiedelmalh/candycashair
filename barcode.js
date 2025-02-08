document.getElementById("barcodeInput").addEventListener("keypress", function(event) {
    if (event.key === "Enter") {
        addProduct();
    }
});