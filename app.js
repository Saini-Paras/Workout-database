const token = "6841236728:AAGw3RG-msw2TJhzOHG_2U0G7DW9cqxm51Q";
const chat_id = 1070276630;

const date = new Date();
const days = [
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
  "Sunday",
];
const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

const time = `${days[date.getDay() - 1].slice(0, 3)}, ${
  months[date.getMonth()]
} ${date.getDate()}, ${date.getFullYear()}, (${date.getHours()}:${String(
  date.getMinutes()
).padStart(2, "0")})`;
let message = ` Hola😄 %0A
${time}
%0A
%0A
%0A`;

const allInputs = Array.from(document.querySelectorAll('input[type="number"]'));

const form = document.querySelector("form");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const durationInput = document.querySelector(".duration input");

  const filledInputs = allInputs.filter((inpt) => {
    return inpt.value;
  });

  for (let selected of filledInputs) {
    const previousEle = selected.previousElementSibling.textContent;
    message += `
${previousEle}: ${selected.value}
%0A
%0A
`;
  }
  message += `
Duration: ${durationInput.value}
    %0A
    `;

  const link = `https://api.telegram.org/bot${token}/sendMessage?chat_id=${chat_id}&text=${message}`;
  const xml = new XMLHttpRequest();
  xml.open("GET", link);
  xml.send();

const inputs=document.querySelectorAll('input');
for(inpt of inputs){
    inpt.value=''
}
});
