import checkJump from '.'

describe("checkJump", () => {
    it("checkJump should return true", () => {
        const heights = [1, 3, 8, 5, 2]

        const parabola = checkJump(heights)

        expect(parabola).toBeTruthy();
    })
    it("checkJump should return false", () => {
        const heights = [1, 7, 3, 5]

        const parabola = checkJump(heights)

        expect(parabola).toBeFalsy();
    })

    it("checkJump should return false", () => {
        const heights = [2, 2, 2, 2]

        const parabola = checkJump(heights)

        expect(parabola).toBeFalsy();
    })

    it("checkJump should return false", () => {
        const heights = [1, 2, 3]

        const parabola = checkJump(heights)

        expect(parabola).toBeFalsy();
    })
})