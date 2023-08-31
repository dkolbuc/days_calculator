document.getElementById("calculateBtn").addEventListener("click", function () {
  const inputDate = document.getElementById("dateInput").value;
  const daysLeft = daysUntilEndOfYear(inputDate);
  const resultElement = document.getElementById("result");

  if (daysLeft === 1) {
    resultElement.textContent = `There is ${daysLeft} day left until the end of the year.`;
  } else {
    resultElement.textContent = `There are ${daysLeft} days left until the end of the year.`;
  }
});

function daysUntilEndOfYear(inputDate) {
  const currentDate = new Date(inputDate);
  const currentYear = currentDate.getFullYear();
  const endOfYearDate = new Date(currentYear, 11, 31);

  const timeDifference = endOfYearDate - currentDate;
  const daysRemaining = Math.ceil(timeDifference / (1000 * 60 * 60 * 24));

  return daysRemaining;
}

const daysLeft = daysUntilEndOfYear(inputDate);
