let totalPrice = 0;
const salesTable = document.querySelector("#salesTable tbody");

function addProduct() {
    const barcodeInput = document.getElementById("barcodeInput").value;
    if (barcodeInput === "") return alert("الرجاء إدخال المنتج أو الباركود");

    const price = Math.floor(Math.random() * 100) + 5;
    const quantity = 1;
    const total = price * quantity;
    totalPrice += total;

    const row = document.createElement("tr");
    row.innerHTML = `
        <td>${barcodeInput}</td>
        <td>${price} جنيه</td>
        <td>${quantity}</td>
        <td>${total} جنيه</td>
        <td><button onclick="removeProduct(this, ${total})">❌</button></td>
    `;
    salesTable.appendChild(row);
    document.getElementById("totalPrice").innerText = totalPrice;
    document.getElementById("barcodeInput").value = "";
}

function removeProduct(button, price) {
    button.parentElement.parentElement.remove();
    totalPrice -= price;
    document.getElementById("totalPrice").innerText = totalPrice;
}

function saveInvoice() {
    const rows = document.querySelectorAll("#salesTable tbody tr");
    const invoiceData = [];
    rows.forEach(row => {
        const cells = row.getElementsByTagName("td");
        invoiceData.push({
            product: cells[0].innerText,
            price: cells[1].innerText,
            quantity: cells[2].innerText,
            total: cells[3].innerText
        });
    });

    localStorage.setItem("savedInvoice", JSON.stringify(invoiceData));
    alert("تم حفظ الفاتورة بنجاح!");
}

function showReceipt() {
    window.open("receipt.html", "_blank");
}