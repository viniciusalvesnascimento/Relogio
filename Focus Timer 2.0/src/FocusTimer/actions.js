import state from "./state.js"

export function toggleRunning(){
state.isRunning = document.documentElement.classList.toggle('running')
}

export function repeat(){
state.isRunning = false
document.documentElement.classList.toggle('running')
}

export function timer(){
state.isRunning = false
document.documentElement.classList.add('timer')
}

export function mais(){
    
}

export function menos(){
    
}

/*TwoCard - music*/
export function MusicFloresta(){
state.isMute = document.documentElement.classList.toggle('MusicFloresta')
const color = "black"
    if (color.style.backgroundColor === "black") {
        color.style.backgroundColor = 'red';
    } else {
        color.style.backgroundColor = 'black';
    }
}

export function MusicCloud(){
    
}

export function MusicCaffe(){
    
}

export function MusicFire(){
    
}