import getMaxGifts from '.';

describe("getMaxGifts", () => {
    it("getMaxGifts should return 20", () => {
        const sumaMaxRegalos = getMaxGifts([12, 3, 11, 5, 7], 20, 3)

        expect(sumaMaxRegalos).toEqual(20)
    })

    it("getMaxGifts should return 0", () => {
        const sumaMaxRegalos = getMaxGifts([50], 15, 1)

        expect(sumaMaxRegalos).toEqual(0)
    })
    it("getMaxGifts should return 50", () => {
        const sumaMaxRegalos = getMaxGifts([50], 100, 1)

        expect(sumaMaxRegalos).toEqual(50)
    })
    it("getMaxGifts should return 70", () => {
        const sumaMaxRegalos = getMaxGifts([50, 70], 100, 1)

        expect(sumaMaxRegalos).toEqual(70)
    })
    it("getMaxGifts should return 100", () => {
        const sumaMaxRegalos = getMaxGifts([50, 70, 30], 100, 2)

        expect(sumaMaxRegalos).toEqual(100)
    })
    it("getMaxGifts should return 100", () => {
        const sumaMaxRegalos = getMaxGifts([50, 70, 30], 100, 3)

        expect(sumaMaxRegalos).toEqual(100)
    })
    it("getMaxGifts should return 100", () => {
        const sumaMaxRegalos = getMaxGifts([50, 70, 30], 100, 4)

        expect(sumaMaxRegalos).toEqual(100)
    })
    it("getMaxGifts should return 100", () => {
        const sumaMaxRegalos = getMaxGifts([50, 10, 40, 1000, 500, 200], 199, 4)

        expect(sumaMaxRegalos).toEqual(100)
    })
})