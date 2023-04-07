const checkJump = (heights: number[]) => {
    const parabolaMax = Math.max(...heights);
    const parabolaMaxIndex = heights.findIndex((number) => number === parabolaMax);
    let result = true

    if (parabolaMaxIndex === 0 || parabolaMaxIndex === heights.length - 1) return false

    heights.forEach((height, index) => {
        if (
            index < parabolaMaxIndex && height > heights[index + 1] ||
            index >= parabolaMaxIndex && height < heights[index + 1]) {
            result = false;
        }
    })

    return result
}

export default checkJump;