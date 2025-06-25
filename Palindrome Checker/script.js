document.getElementById("check-btn").addEventListener("click", function () {
  const input = document.getElementById("text-input").value.trim();
  if (input === "") {
    alert("Please input a value.");
    return;
  }
  isPalindrome(input);
});

function isPalindrome(input) {
  const resultElement = document.getElementById("result");
  const cleaned = input.toLowerCase().replace(/[^a-z0-9]/g, "");
  const reversed = cleaned.split("").reverse().join("");

  if (cleaned === reversed) {
    resultElement.textContent = `${input} is a palindrome.`;
  } else {
    resultElement.textContent = `${input} is not a palindrome.`;
  }

  resultElement.style.display = "inline-block";
}

