import checkPart from '.'

describe("checkPart", () => {
    it("checkPart should return true", () => {
        const check = checkPart("uwu")
        expect(check).toBeTruthy();
    })
    it("checkPart should return true", () => {
        const check = checkPart("zzzoonzzz")
        expect(check).toBeTruthy();
    })
})