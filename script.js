const form = document.getElementById("demo-form");
const statusEl = document.getElementById("form-status");

function showError(inputId, messageId) {
  const input = document.getElementById(inputId);
  const msg = document.getElementById(messageId);
  input.setAttribute("aria-invalid", "true");
  msg.hidden = false;
}

function clearError(inputId, messageId) {
  const input = document.getElementById(inputId);
  const msg = document.getElementById(messageId);
  input.removeAttribute("aria-invalid");
  msg.hidden = true;
}

function isValidEmail(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

form.addEventListener("submit", (e) => {
  e.preventDefault();

  statusEl.textContent = "";
  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const message = document.getElementById("message").value.trim();

  // Clear previous errors
  clearError("name", "name-error");
  clearError("email", "email-error");
  clearError("message", "message-error");

  let firstInvalidId = null;

  if (!name) {
    showError("name", "name-error");
    firstInvalidId = firstInvalidId || "name";
  }
  if (!email || !isValidEmail(email)) {
    showError("email", "email-error");
    firstInvalidId = firstInvalidId || "email";
  }
  if (!message) {
    showError("message", "message-error");
    firstInvalidId = firstInvalidId || "message";
  }

  if (firstInvalidId) {
    statusEl.textContent = "Please fix the highlighted fields and try again.";
    document.getElementById(firstInvalidId).focus();
    return;
  }

  statusEl.textContent = "Form submitted successfully (demo).";
  form.reset();
});