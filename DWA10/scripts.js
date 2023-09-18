

let value = 0

const html = {
    buttons: {
        increase: document.querySelector("[data-increase]"),
        decrease: document.querySelector("[data-decrease]"),
        reset: document.querySelector("[data-reset]"),
    },
    count: document.querySelector("[data-count]"),

    dialog: document.querySelector("sl-dialog"),
}


/* ----------- Functions for increasing and decreasing ---------- */    
const increaseCount = () =>{
    value += 1
    updateCount(value)
    return value
}

const decreaseCount = () =>{
    value -= 1
    updateCount(value)
    return value
}

/**
 * Function to update the html to show the value of the count.
 * @param {number} count - Current value of the count
 * @returns 
 */
const updateCount = (count) => {
    html.count.innerText = count
}

const handleInc = () => {
    increaseCount()
}

const handleDec = () => {
    decreaseCount()
}

const handleReset = () => {
    value = 0;
    updateCount(value)
    html.dialog.toggleAttribute("open")
    console.log("wut")
}



html.buttons.increase.addEventListener('click', handleInc)
html.buttons.decrease.addEventListener('click', handleDec)
html.buttons.reset.addEventListener('click', handleReset)
html.dialogClose.addEventListener('click', handleReset)