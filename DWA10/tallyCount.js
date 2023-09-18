export const tallyCount = () => {
    let value = 0
    
    const increaseCount = () =>{
        value += 1
        return value
    }

    const decreaseCount = () =>{
        return value -= 1
    }

    return {
        value, 
        increaseCount,
        decreaseCount,
    }
}