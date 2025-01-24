import { database } from './aquariumData.js';

export const fishList = () => {
    // Generate an HTML representation of each fish
    let fishHTML = '<article class="fish">'

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