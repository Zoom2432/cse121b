/* W02-Task - Profile Home Page */

/* Step 1 - Setup type tasks - no code required */

/* Step 2 - Variables */
const fullName = "Valery Statov"
let currentYear = 2024
let profilePicture = "images/photo.jpg"



/* Step 3 - Element Variables */
let nameElement = document.getElementById("name")
let foodElement = document.getElementById("food")
let yearElement = document.querySelector("#year")
let imageElement = document.querySelector("picture img")


/* Step 4 - Adding Content */
nameElement.innerHTML = `<strong>${fullName}</strong>`
yearElement.textContent = currentYear
imageElement.setAttribute('src', profilePicture)
imageElement.setAttribute('alt', `Profile image of ${fullName}`)


/* Step 5 - Array */
let favoriteFood = ["Pizza", "Pasta", "Burger"]
foodElement.textContent = favoriteFood
let meal = "Rice"
favoriteFood.push(meal)
foodElement.innerHTML += `<br>${favoriteFood}`
favoriteFood.shift()
foodElement.innerHTML += `<br>${favoriteFood}`
favoriteFood.pop()
foodElement.innerHTML += `<br>${favoriteFood}`
