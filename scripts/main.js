import { fishList, mostHolyFish, soldierFish, regularFish } from './fishList.js'
import { tipList } from './tipList.js'
import { locationList } from './locationList.js'

// Generate the fish list
//const fishHTML = fishList()

// Generate the care tips
const tipHTML = tipList()

// Generate the location list
const locationHTML = locationList()
// Render each HTML string to the correct DOM element
const renderFishToDOM = (fHTML) => {
    const fList = document.getElementById('fishList')
    if(fList){
        fList.innerHTML = fHTML
    }else{
        console.log('Could not find element with id "fishList"')
    }
}

const renderTipsToDOM = (tHTML) => {
    const tList = document.getElementById('tipList')
    if(tList){
        tList.innerHTML = tHTML
    }else{
        console.log('Could not find element with id "tipList')
    }
}

const renderLocationsToDOM = (lHTML) => {
    const lList = document.getElementById('locationList')
    if(lList){
        lList.innerHTML = lHTML
    }else{
        console.log('Could not find element with id "locationList"')
    }
}

debugger
let holy = mostHolyFish()
let soldier = soldierFish()
let regular = regularFish()
const fishHTML = `<h2>Fish</h2><article class="fish">${holy}${soldier}${regular}</article>`

renderFishToDOM(fishHTML)
renderTipsToDOM(tipHTML)
renderLocationsToDOM(locationHTML)