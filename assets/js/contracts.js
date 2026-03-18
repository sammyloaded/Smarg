// --- Page View Toggling ---
function showContractsList() {
    document.getElementById('contracts-list-view').style.display = 'flex';
    document.getElementById('contract-details-view').style.display = 'none';
    
    // CRITICAL: Ensure wizard hides when returning to list
    const contractView = document.getElementById('contract-view');
    if (contractView) contractView.style.display = 'none';
}

function showContractDetails() {
    document.getElementById('contracts-list-view').style.display = 'none';
    document.getElementById('contract-details-view').style.display = 'flex';
    
    // CRITICAL: Ensure wizard hides when viewing details
    const contractView = document.getElementById('contract-view');
    if (contractView) contractView.style.display = 'none';
}

// OVERRIDE: Tell the page how to switch to the Contract Wizard specifically
window.showContractView = function() {
    // 1. Hide the list and details views
    document.getElementById('contracts-list-view').style.display = 'none';
    document.getElementById('contract-details-view').style.display = 'none';
    
    // 2. Show the Contract Wizard
    const contractView = document.getElementById('contract-view');
    if (contractView) {
        contractView.style.display = 'block'; // MUST BE 'block', NOT 'flex'!
        goToStep(1); 
    }
};

// --- 3-Dot Document Menu Logic ---
function toggleDocMenu(event) {
    event.stopPropagation(); // Stop click from bubbling up
    const menu = document.getElementById('docDropdownMenu');
    if (menu) menu.classList.toggle('active');
}

function closeDocMenu() {
    const menu = document.getElementById('docDropdownMenu');
    if (menu) menu.classList.remove('active');
}

// Close the 3-dot menu if clicked anywhere else on the screen
window.addEventListener('click', function(e) {
    if (!e.target.closest('.dropdown-wrapper')) {
        closeDocMenu();
    }
});

// --- File Upload Logic for "Replace Contract" Modal ---
const replaceUploadBox = document.getElementById('replace-upload-box');
const replaceFileInput = document.getElementById('replace-file');
const replaceFileName = document.getElementById('replace-file-name');

if (replaceUploadBox && replaceFileInput) {
    replaceUploadBox.addEventListener('click', () => {
        replaceFileInput.click();
    });

    replaceFileInput.addEventListener('change', function() {
        if (this.files && this.files[0]) {
            const fileName = this.files[0].name;
            replaceFileName.textContent = `Selected: ${fileName}`;
            replaceFileName.style.display = 'block';
            replaceUploadBox.style.borderColor = 'var(--primary)';
            replaceUploadBox.style.background = '#F0F0FF';
        }
    });
}