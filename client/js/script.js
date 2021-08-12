//variables
const herokuUrl = "https://pipeline-predators.herokuapp.com/home";
//const newEntry = document.querySelector("#entry").value;
const body = document.getElementById("page-container");
const element = document.getElementById("entry");
const journalEntry = document.getElementById("journal-entry");
const user = document.getElementById("user");
const indEntry = document.getElementById("individual");
//variables

//display all entries on the page
const getEntries = (e) =>{
  e.preventDefault();
  fetch(herokuUrl)
  .then(r => r.json())
  .then(data =>{
    data.map(entries => {
      appendEntry(entries)
    })
  })
  .catch(console.warn());
}

const appendEntry = entries => {
    const newJournalEntry = createEntry(entries);
    body.appendChild(newJournalEntry);

}

const createEntry = data => {
  user.textContent = "Anonymous";
  journalEntry.textContent = data.entry;
  indEntry.appendChild(user);
  indEntry.appendChild(journalEntry);
  return indEntry;
}

// newEntry.addEventListener("submit", function(e){
//     e.preventDefault();
//     let formElements = document.querySelector("form.newEntry").elements;
//     console.log(formElements);
//     let journalEntry = formElements["entry"].value;
//     let data = {
//         "entry": journalEntry
//     }
//     console.log("Data to POST:", data);
//     sendJournalEntry(data);
// })

// sendJournalEntry = data => {
//     fetch(`${herokuUrl}/create`, {
//         method: 'post',
//         headers: {
//             "Content-type": "application/json"
//         },
//         body: JSON.stringify(data)
//     });
// }

const data = { entry };
element.addEventListener("submit", function (e) {
  e.preventDefault();
  //fetch(`${herokuUrl}/home`, {
  fetch("https://localhost:3000/home", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  })
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
      // body.appendChild(data);
    })
    .catch((error) => {
      console.log("Error: ", error);
    });
});

getEntries();


module.exports = getEntries;
