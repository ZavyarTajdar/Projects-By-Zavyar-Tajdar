const form = document.querySelector('form')
const AddButton = document.querySelector('btnAdd');
const transactionList = document.querySelector('.transactions-list')
const SummarySect = document.querySelector('.summary-section')
const totalExpensesElem = document.querySelector('.totalExpenses')
const totalIncomeElem = document.querySelector('.totalIncome')
const balanceElem = document.querySelector('.balance')

let totalIncome = 2000;  // initial income
let totalExpenses = 0;
const result = form.addEventListener('submit', (e) => {
    e.preventDefault();
    const description = form.querySelector('input[type="text"]').value;
    const amount = parseFloat(form.querySelector('input[type="number"]').value);

    if (description && amount) {
        const li = document.createElement('li');
        li.textContent = `${description} - $${amount}`;

        transactionList.appendChild(li);

        totalExpenses += amount;
        const currentBalance = totalIncome - totalExpenses;
        totalIncomeElem.textContent = `Total Income: $${totalIncome}`;
        totalExpensesElem.textContent = `Total Expenses: $${totalExpenses}`;
        balanceElem.textContent = `Balance: $${currentBalance}`;

        // Clear the form

        form.reset();
    }
})