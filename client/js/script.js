//variables
const herokuUrl = "https://pipeline-predators.herokuapp.com/home";
//const newEntry = document.querySelector("#entry").value;
const body = document.getElementById("page-container");
const element = document.getElementById("entry");


//variables

//display all entries on the page

const createEntry = data => {
  const user = document.createElement('p');
  const indEntry= document.createElement('section')
  const journalEntry = document.createElement('p')
  
  journalEntry.setAttribute('class', 'journal-entry')
  indEntry.setAttribute('class', 'individual')
  user.setAttribute('class', 'user');
  
  user.textContent = "Anonymous";
  
  journalEntry.textContent = data.entry;
  indEntry.appendChild(user);
  indEntry.appendChild(journalEntry);
  return indEntry;
}

const appendEntry = entries => {
  const newJournalEntry = createEntry(entries);
  body.appendChild(newJournalEntry);
  
}

const getEntries = () =>{
  //e.preventDefault();
  fetch(herokuUrl)
  .then(r => r.json())
  .then(data =>{
    data.map(entries => {
      appendEntry(entries)
    })
  })
  .catch(console.warn());
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


//module.exports = getEntries;
