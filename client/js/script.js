//variables
const herokuUrl = "https://pipeline-predators.herokuapp.com"
//variables

//display all entries on the page
const getEntries=()=>{
    fetch(`${herokuUrl}/home`)
    .then(function(response) {
        if(response.status!== 200){
            console.log('There was a problem accessing this site. Status Code: '+ response.status);
        return;
        }
        //extract data from promise
        response.json()
        .then(function(entryData){
           // console.log(entryData);
            for(let i = 0; i<entryData.length; i++){
                console.log(entryData[i].entry);

                let row = document.createElement("section")
                row.className = "";

                let newSection = document.createElement("section");
                newSection.className = "alert alert-info";
                let para = document.createElement('p');
                para.textContent = `${entryData[i].entry}`
                let paraComment = document.createElement('p');
                paraComment.className = "comment";
                paraComment.textContent = `${entryData[i].comments}`

                let entryArea = document.createElement("section");
                entryArea.className = "col-md"
                entryArea.appendChild(para);
                entryArea.appendChild(paraComment);
                
                //still need to append reaction emotes here 
                //maybe get svg's and add functions to up the counter on click
            }
        })
    })
}

module.exports = getEntries;
