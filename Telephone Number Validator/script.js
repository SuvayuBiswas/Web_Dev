const userInput = document.getElementById("user-input");
const checkBtn = document.getElementById("check-btn");
const resultsDiv = document.getElementById("results-div");

checkBtn.addEventListener("click", () => {
  const phone = userInput.value.trim();

  if (phone === "") {
    alert("Please provide a phone number");
    return;
  }

  const validPhoneRegex = /^(1\s?)?(\(\d{3}\)|\d{3})([\s\-]?)\d{3}([\s\-]?)\d{4}$/;

  if (validPhoneRegex.test(phone)) {
    resultsDiv.textContent = `Valid US number: ${phone}`;
  } else {
    resultsDiv.textContent = `Invalid US number: ${phone}`;
  }
});
const clearBtn = document.getElementById("clear-btn");

clearBtn.addEventListener("click", () => {
  resultsDiv.textContent = "";
});
