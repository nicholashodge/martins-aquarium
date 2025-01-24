import { database } from './aquariumData.js';

export const locationList = () => {
    let locationHTML = '<h2>Locations</h2><article class="locations">'

    for(const data of database.locations){
        locationHTML += `
            <section><b>Name: </b>${data.name}</section>
            <section><b>Country: </b>${data.country}</section>
            <section><b>Description: </b>${data.description}</section>
        `
    }

    locationHTML += '</article>'
    
    return locationHTML
}