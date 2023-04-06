const createCube = (cube: number) => {
    let cubeDesign = ""
    let startSpace = cube - 1
    const totalRows = cube * 2

    for (let i = 0; i < totalRows; i++) {
        const firstSpace = " ".repeat(startSpace)
        const firstPattern = i < cube ? "/\\".repeat(i + 1) : "\\/".repeat(totalRows - i)
        const lastPattern = i < cube ? "_\\".repeat(cube) : "_/".repeat(cube)
        const lineBreak = i !== (totalRows - 1) ? "\n" : ""
        cubeDesign += firstSpace + firstPattern + lastPattern + lineBreak

        if ([cube - 2, cube - 1].includes(i)) {
            startSpace = 0
        } else {
            startSpace = i < cube ? startSpace - 1 : startSpace + 1
        }
    }
    return cubeDesign
}

export default createCube
