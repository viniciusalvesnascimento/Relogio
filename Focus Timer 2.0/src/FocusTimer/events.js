import {icon, twoCard} from "./elements.js";
import * as actions from "./actions.js";

export function registerControls() {
    icon.addEventListener('click', (event) => {
        const action = event.target.dataset.action;
        if (typeof actions[action] != "function") {
            return;
        }
        
        // Executa a ação associada ao `icon`
        actions[action]();
    });

    twoCard.addEventListener('click', (event) => {
        const action = event.target.dataset.action;
        if (typeof actions[action] != "function") {
            return;
        }
        // Executa a ação associada ao `twoCard`
        actions[action]()    
    });
}

export function registerClick(){
    MusicFloresta.addEventListener('click', event =>{

    })
}