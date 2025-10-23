const listEl = document.getElementById("list")

const APIurl = "https://flynn.boolean.careers/exercises/api/random/mail"

function randomEmails() {
// decalre the function
    listEl.innerHTML = ""
    // clean string
    for (let i = 0; i < 10; i++) {
        axios.get(APIurl)
            .then(resp => {
                console.log(resp.data.response);
                listEl.innerHTML += `
            <li>${resp.data.response}</li>
            `
            })
            .catch(error => {
                console.log(error);
                listEl.innerHTML = `Error`
            })
    }
}

randomEmails()
// initialize the function

const btnEl = document.getElementById("btn")
// link the button
btnEl.addEventListener("click", newEmails)
// the event triggers when button is clicked and it starts the function randomEmails
function newEmails() {
    randomEmails()
}