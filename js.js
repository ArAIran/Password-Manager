const form = document.querySelector("form")
const namesite = document.querySelector("#Namesite")
const adderss = document.querySelector("#AddressSite")
const username = document.querySelector("#Username")
const password = document.querySelector("#Password")
const message = document.querySelector("#message")
const genrate = document.querySelector("#generateBtn")
const uppercase = document.querySelector("#uppercase")
const numbers = document.querySelector("#numbers")
const symbols = document.querySelector("#symbols")
const showPassword = document.querySelector("#showPassword")

form.addEventListener("submit", function (event) {

    event.preventDefault()

    const namevalue = namesite.value
    const adderssvalue = adderss.value
    const usernamevalue = username.value
    const passwordvalue = password.value

  

const passworddata = {
    name: namevalue,
    address: adderssvalue,
    username: usernamevalue,
    password: passwordvalue,
    createdAt: new Date()
}


    const oldData = localStorage.getItem("Data")

    let passwords = []

    if (oldData) {
        passwords = JSON.parse(oldData)
    }

    passwords.push(passworddata)

    localStorage.setItem("Data", JSON.stringify(passwords))

    message.textContent = "Saved successfully!"
    message.classList.add("show");

    setTimeout(function () {

        window.location = "index.html"

    }, 1000)


})

genrate.addEventListener("click", function () {

    const length = 12

    let characters = ""

    if (uppercase.checked) {
        characters += "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
    }
    if (numbers.checked) {
        characters += "0123456789"
    }

    if (symbols.checked) {
        characters += "!@#$&*"
    }
    if (characters.length === 0) {
        characters = "abcdefghijklmnopqrstuvwxyz"
    }

    let generatedPassword = ""

    for (var i = 0; i < length; i++) {

        const randomIndex = Math.floor(Math.random() * characters.length)
        generatedPassword += characters[randomIndex]
    }
    password.value = generatedPassword
})
showPassword.addEventListener("click", function () {
    if (password.type === "password") {
        password.type = "text"
    } else {
        password.type = "password"
    }
})