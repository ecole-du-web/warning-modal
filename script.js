const consentBtn = document.querySelector('.consent-btn');

consentBtn.addEventListener("click", toggleDisclaimer)

function toggleDisclaimer(){
  document.querySelector('.consent-modal').style.display = "none"
  document.querySelector('main').style.filter = "blur(0px)"
  document.body.style.overflowY = "auto";
}