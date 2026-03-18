// --- Sidebar Logic ---
function toggleSidebar() {
    document.getElementById('mobile-sidebar').classList.toggle('active');
    document.getElementById('sidebar-overlay').classList.toggle('active');
}
// --- Profile Menu Logic ---
function toggleProfileMenu(event) {
    event.stopPropagation(); // Prevents the click from immediately closing the menu
    const menu = document.getElementById('profileMenu');
    menu.classList.toggle('active');
}

// --- View Switching Logic ---
function showDashboard() {
    document.getElementById('dashboard-view').style.display = 'flex';
    document.getElementById('contract-view').style.display = 'none';
    document.querySelector('.nav-links a:nth-child(1)').classList.add('active');
    document.querySelector('.nav-links a:nth-child(2)').classList.remove('active');
}

function showContractView() {
    document.getElementById('dashboard-view').style.display = 'none';
    document.getElementById('contract-view').style.display = 'block';
    document.querySelector('.nav-links a:nth-child(1)').classList.remove('active');
    document.querySelector('.nav-links a:nth-child(2)').classList.add('active');
    goToStep(1); 
}

// --- Modal Logic ---
function openModal(modalId) {
    document.getElementById(modalId).classList.add('active');
}

function switchModal(closeId, openId) {
    document.getElementById(closeId).classList.remove('active');
    document.getElementById(openId).classList.add('active');
}

function closeAllModals() {
    document.querySelectorAll('.modal-overlay').forEach(modal => {
        modal.classList.remove('active');
    });
}

// Close modal when clicking outside the box
document.querySelectorAll('.modal-overlay').forEach(overlay => {
    overlay.addEventListener('click', function(e) {
        if (e.target === this) closeAllModals();
    });
});

// --- Create Contract Flow Logic ---
function selectRole(element) {
    document.querySelectorAll('.role-card').forEach(card => card.classList.remove('active'));
    element.classList.add('active');
}

function startContractFlow() {
    closeAllModals();
    showContractView();
}

function goToStep(stepNumber) {
    document.querySelectorAll('.contract-step').forEach(step => step.style.display = 'none');
    document.getElementById('step-' + stepNumber).style.display = 'block';

    document.getElementById('indicator-1').className = stepNumber >= 1 ? (stepNumber > 1 ? 'step completed' : 'step active') : 'step';
    document.getElementById('line-1').className = stepNumber > 1 ? 'stepper-line completed' : 'stepper-line';
    
    document.getElementById('indicator-2').className = stepNumber >= 2 ? (stepNumber > 2 ? 'step completed' : 'step active') : 'step';
    document.getElementById('line-2').className = stepNumber > 2 ? 'stepper-line completed' : 'stepper-line';
    
    document.getElementById('indicator-3').className = stepNumber >= 3 ? 'step active' : 'step';
}

// --- Demo File Upload Logic (Step 2) ---
const uploadBox = document.getElementById('upload-box');
const fileInput = document.getElementById('contract-file');
const fileNameDisplay = document.getElementById('file-name-display');

// Clicking the box triggers the hidden file input
if(uploadBox && fileInput) {
    uploadBox.addEventListener('click', () => {
        fileInput.click();
    });

    // When a file is selected, update the UI
    fileInput.addEventListener('change', function() {
        if (this.files && this.files[0]) {
            const fileName = this.files[0].name;
            fileNameDisplay.textContent = `Selected: ${fileName}`;
            fileNameDisplay.style.display = 'block';
            uploadBox.style.borderColor = 'var(--primary)';
            uploadBox.style.background = '#F0F0FF';
        }
    });
}

// --- Custom Dropdown Logic ---
function toggleDropdown(dropdownId) {
    const dropdown = document.getElementById(dropdownId);
    dropdown.classList.toggle('active');
}

document.querySelectorAll('.option').forEach(option => {
    option.addEventListener('click', function() {
        const parentSelect = this.closest('.custom-select');
        parentSelect.querySelectorAll('.option').forEach(opt => opt.classList.remove('selected'));
        this.classList.add('selected');
        
        // Get text and optionally the bank logo if it exists
        const text = this.querySelectorAll('span')[1].innerText;
        const logoImg = this.querySelector('.bank-logo');
        let logoHTML = '';
        
        if (logoImg) {
             logoHTML = `<img src="${logoImg.src}" alt="${logoImg.alt}" class="${logoImg.className}" style="margin-right:10px;">`;
        } else {
             logoHTML = `<span class="radio-circle" style="border-color:var(--primary); margin-right:10px;"><span style="background:var(--primary); width:8px; height:8px; border-radius:50%; display:block; margin:2px;"></span></span>`;
        }

        const trigger = parentSelect.querySelector('.select-trigger div');
        trigger.innerHTML = `${logoHTML} ${text}`;
        
        parentSelect.classList.remove('active');
    });
});

window.addEventListener('click', function(e) {
    if (!e.target.closest('.custom-select')) {
        document.querySelectorAll('.custom-select').forEach(select => {
            select.classList.remove('active');
        });
    }
});

// --- OTP Input Auto-Advance (Optional nice feature) ---
const otpInputs = document.querySelectorAll('.otp-input');
otpInputs.forEach((input, index) => {
    input.addEventListener('input', function() {
        if (this.value.length === 1 && index < otpInputs.length - 1) {
            otpInputs[index + 1].focus();
        }
    });
    input.addEventListener('keydown', function(e) {
        if (e.key === 'Backspace' && this.value === '' && index > 0) {
            otpInputs[index - 1].focus();
        }
    });
});
// Profile stuff 
window.addEventListener('click', function(e) {
    // Closes Custom Select Dropdowns
    if (!e.target.closest('.custom-select')) {
        document.querySelectorAll('.custom-select').forEach(select => {
            select.classList.remove('active');
        });
    }
    
    // Closes Profile Menu Dropdown
    if (!e.target.closest('.profile-dropdown-container')) {
        const profileMenu = document.getElementById('profileMenu');
        if (profileMenu && profileMenu.classList.contains('active')) {
            profileMenu.classList.remove('active');
        }
    }
});