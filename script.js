let people = 0;

function increment() {
  console.log("clicked");

  people += 1;
  console.log(people);
  document.getElementById("count-el").textContent = people;
}

function save() {
  let peopleStr = " - " + people;

  document.getElementById("saves").textContent += peopleStr;

  people = 0;
  document.getElementById("count-el").textContent = people;
}
