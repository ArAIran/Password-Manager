const passwordlist = document.querySelector("#passwordList")
const search = document.querySelector("#Search")

const data = localStorage.getItem("Data")
const passwords = JSON.parse(data)

passwords.forEach(function (password) {

    const card = document.createElement("div")
    card.classList.add("password-card")


    // Delete
    const deleteBtn = document.createElement("button")
    deleteBtn.textContent = "Delete"
    deleteBtn.classList.add("delete-btn")

    deleteBtn.addEventListener("click", function () {

        card.remove()

        const index = passwords.indexOf(password)

        passwords.splice(index, 1)

        localStorage.setItem("Data", JSON.stringify(passwords))
    })

    card.appendChild(deleteBtn)


    // Created Date
    const createdDate = new Date(password.createdAt)

    const year = createdDate.getFullYear()
    const month = createdDate.getMonth() + 1
    const day = createdDate.getDate()

    const dateElement = document.createElement("p")

    dateElement.textContent = `Created: ${day}/${month}/${year}`

    card.appendChild(dateElement)
    dateElement.classList.add("created-date")

    // Site Name
    const sitename = document.createElement("h3")
    sitename.textContent = password.name

    card.appendChild(sitename)


    // Address
    const address = document.createElement("p")
    address.textContent = "Address: " + password.address

    const copyAddress = document.createElement("button")
    copyAddress.textContent = "Copy"
    copyAddress.classList.add("copy-btn")

    copyAddress.addEventListener("click", function () {
        navigator.clipboard.writeText(password.address)
    })

    const addressRow = document.createElement("div")
    addressRow.classList.add("info-row")

    addressRow.appendChild(address)
    addressRow.appendChild(copyAddress)

    card.appendChild(addressRow)


    // Username
    const username = document.createElement("p")
    username.textContent = "Username: " + password.username

    const copyUsername = document.createElement("button")
    copyUsername.textContent = "Copy"
    copyUsername.classList.add("copy-btn")

    copyUsername.addEventListener("click", function () {
        navigator.clipboard.writeText(password.username)
    })

    const usernameRow = document.createElement("div")
    usernameRow.classList.add("info-row")

    usernameRow.appendChild(username)
    usernameRow.appendChild(copyUsername)

    card.appendChild(usernameRow)


    // Password
    const passwordText = document.createElement("p")
    passwordText.textContent = "Password: " + password.password

    const copyPassword = document.createElement("button")
    copyPassword.textContent = "Copy"
    copyPassword.classList.add("copy-btn")

    copyPassword.addEventListener("click", function () {
        navigator.clipboard.writeText(password.password)
    })

    const passwordRow = document.createElement("div")
    passwordRow.classList.add("info-row")

    passwordRow.appendChild(passwordText)
    passwordRow.appendChild(copyPassword)

    card.appendChild(passwordRow)


    // Add card to page
    passwordlist.appendChild(card)

})


// Search
search.addEventListener("input", function () {

    const searchvalue = search.value.toLowerCase()

    passwords.forEach(function (password, index) {

        const card = passwordlist.children[index]

        if (password.name.toLowerCase().includes(searchvalue)) {

            card.style.display = "block"

        } else {

            card.style.display = "none"

        }

    })

})