function saveInvoiceToFile(invoice) {
    let invoices = JSON.parse(localStorage.getItem("invoices")) || [];
    invoices.push(invoice);
    localStorage.setItem("invoices", JSON.stringify(invoices));
    alert("تم حفظ الفاتورة بنجاح!");
}

function loadInvoices() {
    let invoices = JSON.parse(localStorage.getItem("invoices")) || [];
    console.log("الفواتير المحفوظة:", invoices);
}