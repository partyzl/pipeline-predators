//variables
const herokuUrl = "https://pipeline-predators.herokuapp.com";
const newEntry = document.querySelector("#entry").value;
const body = document.getElementById("main-body");
const element = document.getElementById("entry");
//variables

//display all entries on the page
const getEntries = () => {
  //fetch(`${herokuUrl}/home`)
  fetch(`https://localhost:3000/home`).then(function (response) {
    if (response.status !== 200) {
      console.log(
        "There was a problem accessing this site. Status Code: " +
          response.status
      );
      return;
    }
    //extract data from promise
    response.json().then(function (entryData) {
      // console.log(entryData);
      for (let i = 0; i < entryData.length; i++) {
        console.log(entryData[i].entry);

        let row = document.createElement("section");
        row.className = "";

        let newSection = document.createElement("section");
        newSection.className = "alert alert-info";
        let para = document.createElement("p");
        para.textContent = `${entryData[i].entry}`;
        let paraComment = document.createElement("p");
        paraComment.className = "comment";
        paraComment.textContent = `${entryData[i].comments}`;

        let entryArea = document.createElement("section");
        entryArea.className = "col-md";
        entryArea.appendChild(para);
        entryArea.appendChild(paraComment);

        //still need to append reaction emotes here
        //maybe get svg's and add functions to up the counter on click
      }
    });
  });
};

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
