const countTime = (leds: number[]) => {
    const allLeds = [...leds, ...leds]
    let repeticiones = 0;
    const result: number[] = []

    allLeds.forEach((led, index) => {
        if (led === 0) repeticiones++;
        if (led !== 0 || allLeds.length - 1 === index) {
            result.push(repeticiones)
            repeticiones = 0
        }
    })

    return Math.max(...result) * 7
}

export default countTime