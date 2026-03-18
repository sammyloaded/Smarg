// --- Payments Page Specific Logic ---

// Function to handle switching between "Income" and "Spent" tabs
function switchTab(tabName, element) {
    // Remove 'active' class from all tabs
    const allTabs = document.querySelectorAll('.tab');
    allTabs.forEach(tab => tab.classList.remove('active'));

    // Add 'active' class to the clicked tab
    element.classList.add('active');

    const transactionsList = document.getElementById('transactions-list');

    // Simple demo logic to show interaction
    // In a real app, you would fetch different data here
    if (tabName === 'income') {
        transactionsList.style.opacity = '0.5';
        setTimeout(() => {
            transactionsList.style.opacity = '1';
        }, 200);
    } else if (tabName === 'spent') {
        transactionsList.style.opacity = '0.5';
        setTimeout(() => {
            transactionsList.style.opacity = '1';
        }, 200);
    }
}