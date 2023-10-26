let num = 0
const numInput = document.getElementById("num-input")
const lenghtEL = document.getElementById("length-el")
const volumeEL = document.getElementById("volume-el")
const massEL = document.getElementById("mass-el")

function convert() {
    num = numInput.value
    length()
    volume()
    mass()
}

function length() {
    let feets = (num * 3.280).toFixed(3)
    let meters = (num * 0.304).toFixed(3)
    lenghtEL.innerText = `${num} meters = ${feets} feet | ${num} feet = ${meters} meters`
}

function volume() {
    let gallons = (num * 0.264).toFixed(3)
    let liters = (num * 3.785).toFixed(3)
    volumeEL.innerText = `${num} liters = ${gallons} gallons | ${num} gallons = ${liters} liters`
}

function mass() {
    let pounds = (num * 2.2).toFixed(3)
    let kelograms = (num * 0.453).toFixed(3)
    massEL.innerText = `${num} kilos = ${pounds} pounds | ${num} pounds = ${kelograms} kilos`
}