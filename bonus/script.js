const listEl = document.getElementById("list")

const APIurl = "https://flynn.boolean.careers/exercises/api/random/mail"


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