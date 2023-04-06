import createCube from '.'

describe("createCube", () => {
    it("createCube of 3x3", () => {
        const cube = createCube(3);
        const result = "  /\\_\\_\\_\\\n /\\/\\_\\_\\_\\\n/\\/\\/\\_\\_\\_\\\n\\/\\/\\/_/_/_/\n \\/\\/_/_/_/\n  \\/_/_/_/"

        expect(cube).toBe(result)
    })
    it("createCube of 1x1", () => {
        const cube = createCube(1)
        const result = "/\\_\\\n\\/_/"

        expect(cube).toEqual(result)
    })

    it("createCube of 2x2", () => {
        const cubeOfTwo = createCube(2)
        const result = " /\\_\\_\\\n/\\/\\_\\_\\\n\\/\\/_/_/\n \\/_/_/"

        expect(cubeOfTwo).toEqual(result)
    })

})