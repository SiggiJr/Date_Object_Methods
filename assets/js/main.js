"use strict";

//# Date Object und Methoden

//#Level_1_1

const section1_1 = document.querySelector(".level_1_1");

const date1 = new Date("September 2, 2019 09:00:00");
const date2 = new Date(0);
const date3 = new Date(31556908800);
const date4 = new Date(86400000);

section1_1.innerHTML = `<p>${date1} = new Date("September 2, 2019 09:00:00")</p><p>${date2} = new Date(0)</p><p>${date3} = new Date(31556908800)</p><p>${date4} = new Date(86400000)</p>`;

//# Level_1_3

const section1_3 = document.querySelector(".level_1_3");

const date5 = new Date();
date5.setFullYear(2022);
section1_3.innerHTML = `<p>${date5}</p>`;
date5.setMonth(1);
date5.setDate(24);
date5.setFullYear(2123);

section1_3.innerHTML += `<p>${date5}</p>`;

date5.setMonth(2);
section1_3.innerHTML += `<p>${date5}</p>`;
date5.setDate(3);
section1_3.innerHTML += `<p>${date5}</p>`;
date5.setMonth(5);
date5.setDate(20);
date5.setFullYear(2023);
section1_3.innerHTML += `<p>${date5}</p>`;

//# Level_1_4

const maxDays = (month, year) => {
  const d = new Date(year, month, 0);
  return d.getDate();
};

console.log(maxDays(1, 2016));
console.log(maxDays(2, 2016));
console.log(maxDays(2, 2017));
console.log(maxDays(12, 2017));

//# Level_1_5

const monatsName = (dateString) => {
  let date = new Date(dateString);
  return date.toLocaleDateString("de", { month: "long" });
};

console.log(monatsName("2001, 3, 4"));
console.log(monatsName("2019, 12, 24"));
console.log(monatsName("1410,07,15"));

//# Level_1_6

const checkAmPm = (date) => {
  return date.getHours() >= 12 ? "PM" : "AM";
};

console.log(checkAmPm(new Date(1999, 10, 5, 15)));
console.log(checkAmPm(new Date()));
console.log(checkAmPm(new Date(2019, 12, 3, 12)));
console.log(checkAmPm(new Date(2000, 1, 1, 11)));

//# Level_1_9
const section1_9 = document.querySelector(".level_1_9");

const startTime = () => {
  const currentDate = new Date();
  const output = `${currentDate.toLocaleTimeString("de")}`;
  section1_9.innerHTML = output;
};

startTime();

setInterval(startTime, 1000);

//# Level_2_1

const currentDate = new Date();

console.log(new Date().toLocaleDateString("de"));
console.log(`${currentDate.getDate()}/${currentDate.getMonth() + 1}/${currentDate.getFullYear()}`);
console.log(`${currentDate.getDate()}-${currentDate.getMonth() + 1}-${currentDate.getFullYear()}`);

//# Level_3_2

const friday13th = (year) => {
  for (let month = 0; month < 12; month++) {
    const newDate = new Date(year, month, 13);
    if (newDate.getDay() === 5) {
      console.log(`Der ${newDate.toLocaleDateString("de")} ist ein Freitag der 13.`);
    }
  }
};

friday13th(2023);
