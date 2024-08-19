let count = 0;
let countArr = [];

let up = document.getElementById("increment")
let counter = document.getElementById("counter")
let prevCount = document.getElementById("previous-count")

function increment() {
    count++;
    counter.innerHTML = count.toString();
}

function saveCount() {
   countArr.push(`${count.toString()} - `);
   console.log(countArr)
   prevCount.innerHTML = ''.concat(...countArr);
   count = 0;
}