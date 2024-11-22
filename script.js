// عرض الوقت والتاريخ الحالي
function updateTime() {
    const now = new Date();
    const time = now.toLocaleTimeString();
    const date = now.toLocaleDateString();
    document.getElementById('currentTime').textContent = `الساعة: ${time}`;
    document.getElementById('currentDate').textContent = `التاريخ: ${date}`;
}
setInterval(updateTime, 1000);

// طباعة الفواتير
document.getElementById('printPurchaseInvoice').addEventListener('click', () => {
    const invoiceData = document.getElementById('purchaseForm');
    window.print();
});

document.getElementById('printSalesInvoice').addEventListener('click', () => {
    const invoiceData = document.getElementById('salesForm');
    window.print();
});

// حساب المجموع
document.getElementById('calculateTotal').addEventListener('click', () => {
    const quantity = parseInt(document.getElementById('salesItemQuantity').value, 10);
    const remaining = parseInt(document.getElementById('remainingStock').value, 10);
    const total = quantity + remaining;
    document.getElementById('totalStock').value = total;
});

// قائمة الحضور والانصراف
document.getElementById('addEmployee').addEventListener('click', () => {
    const table = document.getElementById('attendanceTable').querySelector('tbody');
    const newRow = document.createElement('tr');
    newRow.innerHTML = `
        <td>اسم الموظف</td>
        <td>${new Date().toLocaleTimeString()}</td>
        <td>-</td>
        <td><button>تعديل</button> <button>حذف</button></td>
    `;
    table.appendChild(newRow);
});

document.getElementById('printAttendance').addEventListener('click', () => {
    window.print();
});
