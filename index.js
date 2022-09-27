let hsBtnOne = document.getElementById("hs-btn1")
let hsBtnTwo = document.getElementById("hs-btn2")
let hsBtnThree = document.getElementById("hs-btn3")
let homeStoreEl = document.getElementById("h-score")
let hScore = 0
function onePlus(){
    hScore += 1
    homeStoreEl.textContent = hScore
}
function twoPlus(){
    hScore += 2
    homeStoreEl.textContent = hScore
}
function threePlus(){
    hScore += 3
    homeStoreEl.textContent = hScore
}
let gsBtnOne = document.getElementById("gs-btn1")
let gsBtnTwo = document.getElementById("gs-btn2")
let gsBtnThree = document.getElementById("gs-btn3")
let guestStoreEl = document.getElementById("g-score")
let gScore = 0
function OnePlus(){
    gScore += 1
    guestStoreEl.textContent = gScore
}
function TwoPlus(){
    gScore += 2
    guestStoreEl.textContent = gScore
}
function ThreePlus(){
    gScore += 3
    guestStoreEl.textContent = gScore
}