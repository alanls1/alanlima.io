const form = document.getElementById("form")
const buttonForm = document.getElementById("buttonForm")
const nameInput = document.getElementById("name")
const email = document.getElementById("email")
const message = document.getElementById("message")


form.addEventListener("change", () => checkInput())


function checkInput() {
    let inputValid = 1
    const pattern =  /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;

    if(nameInput.value){
        inputValid += 33
    }

    if(email.value){
        if(email.value.match(pattern)){
            inputValid += 33
        }
        
    }

    if(message.value){
        inputValid += 33
    }


    if(inputValid == 100){
        buttonForm.disabled = false
    }else {
        buttonForm.disabled = true
    }
}

buttonForm.addEventListener("click", (e) => {
    e.preventDefault()
    
    sendForm(e)
})

function getValues() {
    const inputValues = {}
    const getValuesInput = [...form.querySelectorAll("[name]")].forEach(input => {
        inputValues[input.getAttribute("name")] = input.value 
    })
    return inputValues
}

function redinifirForm(){
    nameInput.value = ""
    email.value = ""
    message.value = ""

}

function onSubmission(event) {
    event.preventDefault()
    event.target.disabled = true
}

async function sendForm(e) {
    try {
        onSubmission(e)
        await fetch("https://formsubmit.co/alanlima4123@gmail.com", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Accept: "application/json",
            },
            body: JSON.stringify(getValues()),
            });
        redinifirForm(e)
      } catch (error) {
        throw new Error(error);
      }
}



