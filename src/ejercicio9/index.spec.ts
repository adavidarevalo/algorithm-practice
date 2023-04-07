import countTime from '.'

describe("countTime", () => {
    it("countTime should return 7", () => {
        const leds = [0, 1, 1, 0, 1]

        const ledActiveTime = countTime(leds)

        expect(ledActiveTime).toBe(7);
    })
    it("countTime should return 14", () => {
        const leds = [1, 0, 0, 1, 0, 0]

        const ledActiveTime = countTime(leds)

        expect(ledActiveTime).toBe(14);
    })
    it("countTime should return 21", () => {
        const leds = [0, 0, 0, 1]

        const ledActiveTime = countTime(leds)

        expect(ledActiveTime).toBe(21);
    })
})