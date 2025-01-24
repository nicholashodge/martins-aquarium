import { database } from './aquariumData.js';

export const mostHolyFish = () => {
    // 3, 6, 9, 12, etc... fish
    let holyFish = ''

    for (const data of database.fish) {
        if(data.length % 3 == 0){
            holyFish += `
            <article class="fish__object">
            <img src="${data.image}" class="fish__image">
                <div class=fish_details>
                    <h2 class="fish__name">${data.name}</h2>
                    <p class ="fish__species"><b>Species</b>: ${data.species}</p>
                    <p class ="fish__length"><b>Length</b>: ${data.length}</p>
                    <p class ="fish__location"><b>Location</b>: ${data.location}</p>
                    <p class ="fish__diet"><b>Diet</b>: ${data.diet}</p>
                </div>
            </article>
            `
        }
    }

    return holyFish
}

export const soldierFish = () => {
    // 5, 10, 15, 20, 25, etc... fish
    let soldierFish = ''

    for (const data of database.fish) {
        if(data.length % 5 == 0){
            soldierFish += `
            <article class="fish__object">
            <img src="${data.image}" class="fish__image">
                <div class=fish_details>
                    <h2 class="fish__name">${data.name}</h2>
                    <p class ="fish__species"><b>Species</b>: ${data.species}</p>
                    <p class ="fish__length"><b>Length</b>: ${data.length}</p>
                    <p class ="fish__location"><b>Location</b>: ${data.location}</p>
                    <p class ="fish__diet"><b>Diet</b>: ${data.diet}</p>
                </div>
            </article>
            `
        }
    }


    return soldierFish
}

export const regularFish = () => {
    // Any fish not a multiple of 3 or 5
    let regularFish = ''

    for (const data of database.fish) {
        if((data.length % 3 != 0) && (data.length % 5 != 0)){
            regularFish += `
            <article class="fish__object">
            <img src="${data.image}" class="fish__image">
                <div class=fish_details>
                    <h2 class="fish__name">${data.name}</h2>
                    <p class ="fish__species"><b>Species</b>: ${data.species}</p>
                    <p class ="fish__length"><b>Length</b>: ${data.length}</p>
                    <p class ="fish__location"><b>Location</b>: ${data.location}</p>
                    <p class ="fish__diet"><b>Diet</b>: ${data.diet}</p>
                </div>
            </article>
            `
        }
    }

    return regularFish
}

export const fishList = () => {
    // Generate an HTML representation of each fish
    let fishHTML = '<h2>Fish</h2><article class="fish">'

    for (const data of database.fish){
        fishHTML += `
            <article class="fish__object">
            <img src="${data.image}" class="fish__image">
                <div class=fish__details>
                    <h2 class="fish__name">${data.name}</h2>
                    <p class ="fish__species"><b>Species</b>: ${data.species}</p>
                    <p class ="fish__length"><b>Length</b>: ${data.length}</p>
                    <p class ="fish__location"><b>Location</b>: ${data.location}</p>
                    <p class ="fish__diet"><b>Diet</b>: ${data.diet}</p>
                </div>
            </article>
        `
    }
    fishHTML += '</article>'
    return fishHTML
};