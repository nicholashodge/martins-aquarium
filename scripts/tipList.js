import { database } from './aquariumData.js';

export const tipList = () => {
    let tipsHTML = '<ul class="tips"><h3>Tips</h3>'
    for (const data of database.tips){
        tipsHTML += `
            <ul class="tips">
                <li class="tip"><b>${data.topic}</b>:\n${data.text}</li>
            </ul>
        `

    }

    return tipsHTML
}