const form = document.getElementById("form")

const userId = document.getElementById("userId")
const password = document.getElementById("password")
const name = document.getElementById("name")
const address = document.getElementById("address")
const country = document.getElementById("country")
const postalCode = document.getElementById("postalCode")
const email = document.getElementById("email")

const male = document.getElementById("male")
const female = document.getElementById("female")

const finnish = document.getElementById("finnish")
const otherLanguage = document.getElementById("otherLanguage")

const success = document.getElementById("success")


form.addEventListener("submit", function(e) {

    e.preventDefault()

    document.getElementById("userIdError").innerText = ""
    document.getElementById("passwordError").innerText = ""
    document.getElementById("nameError").innerText = ""
    document.getElementById("addressError").innerText = ""
    document.getElementById("countryError").innerText = ""
    document.getElementById("postalCodeError").innerText = ""
    document.getElementById("emailError").innerText = ""
    document.getElementById("genderError").innerText = ""
    document.getElementById("languageError").innerText = ""

    success.innerText = ""

    let valid = true

    if (userId.value.length < 6) {

        document.getElementById("userIdError").innerText =
            "Käyttäjä ID:n pitää olla vähintään 6 merkkiä."

        valid = false
    }

    const passwordRegex = /^(?=.*[0-9])(?=.*[A-Z])(?=.*[!@£$€&%#]).{6,}$/

    if (!passwordRegex.test(password.value)) {

        document.getElementById("passwordError").innerText =
            "Salasanassa pitää olla vähintään 6 merkkiä, numero, iso kirjain ja erikoismerkki (!@£$€&%#)."

        valid = false
    }

    if (name.value.trim() === "") {

        document.getElementById("nameError").innerText =
            "Nimi on pakollinen."

        valid = false
    }

    if (address.value.trim() === "") {

        document.getElementById("addressError").innerText =
            "Osoite on pakollinen."

        valid = false
    }

    if (country.value === "") {

        document.getElementById("countryError").innerText =
            "Valitse maa."

        valid = false
    }

    const postalCodeRegex = /^[0-9]{5}$/

    if (!postalCodeRegex.test(postalCode.value)) {

        document.getElementById("postalCodeError").innerText =
            "Postinumerossa pitää olla 5 numeroa."

        valid = false
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

    if (!emailRegex.test(email.value)) {

        document.getElementById("emailError").innerText =
            "Anna kelvollinen sähköpostiosoite."

        valid = false
    }

    if (!male.checked && !female.checked) {

        document.getElementById("genderError").innerText =
            "Valitse sukupuoli."

        valid = false
    }

    if (!finnish.checked && !otherLanguage.checked) {

        document.getElementById("languageError").innerText =
            "Valitse vähintään yksi kieli."

        valid = false
    }

    if (valid) {

        success.innerText = "Lomake on lähetetty, vastaamme sinulle tuota pikaa, tai emme, lähetitte lomakkeen...ette yhtään minnekkään."

    }

})