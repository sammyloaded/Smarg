// PROFILE DROPDOWN
const profileBtn = document.getElementById("profileBtn");
const profileMenu = document.getElementById("profileMenu");

profileBtn.onclick = () => {
  profileMenu.classList.toggle("show");
};

// MOBILE SIDEBAR
const sidebar = document.getElementById("sidebar");
const overlay = document.getElementById("overlay");

document.getElementById("menuToggle").onclick = () => {
  sidebar.classList.add("show");
  overlay.classList.add("show");
};

overlay.onclick = () => {
  sidebar.classList.remove("show");
  overlay.classList.remove("show");
};

// MODAL HELPERS
function openModal(id){
  document.getElementById(id).classList.add("show");
}

function closeAll(){
  document.querySelectorAll(".modal").forEach(m => m.classList.remove("show"));
}

// CREATE CONTRACT
document.getElementById("createContractBtn").onclick = () => {
  openModal("contractModal");
};

document.getElementById("continueContract").onclick = () => {
  window.location.href = "contract-step-2.html";
};

// WITHDRAW FLOW
document.getElementById("withdrawBtn").onclick = () => {
  openModal("withdrawModal");
};

document.getElementById("toCard").onclick = () => {
  closeAll();
  openModal("cardModal");
};

document.getElementById("backToAmount").onclick = () => {
  closeAll();
  openModal("withdrawModal");
};

// CARD DROPDOWN
const cardSelect = document.getElementById("cardSelect");
const cardDropdown = document.getElementById("cardDropdown");

cardSelect.onclick = () => {
  cardDropdown.classList.toggle("show");
};

// ADD BANK FLOW
document.getElementById("addBank").onclick = () => {
  closeAll();
  openModal("addBankModal");
};

document.getElementById("backToCard").onclick = () => {
  closeAll();
  openModal("cardModal");
};

document.getElementById("addBankBtn").onclick = () => {
  closeAll();
  openModal("otpModal");
};

// OTP CONFIRM
document.getElementById("confirmBank").onclick = () => {
  closeAll();
  openModal("withdrawModal");
};

// FINAL WITHDRAW
document.getElementById("withdrawNow").onclick = () => {
  closeAll();
  openModal("successModal");
};

// CLOSE ALL
document.getElementById("closeAll").onclick = () => {
  closeAll();
};