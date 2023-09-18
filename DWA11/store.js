export const initial = {
    value: 0,
}

export const createState = (initial) => {
    const states = [initial];
    let value = 0;

    const getState = () => {
        return states.at(-1).value
    }

    const ADD = (value) => {
        value += 1
        return value;
    }

    const SUBTRACT = (value) => {
        value -= 1
        return value 
        
    }

    const RESET = (value) => {
        value = 0
        return value
}

    return {
        value,
        states,
        getState,
        ADD,
        SUBTRACT,
        RESET,
    }
}