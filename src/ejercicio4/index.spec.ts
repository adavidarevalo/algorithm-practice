import fitsInOneBox from '.'

describe("fitsInOneBox", () => {
    it("fitsInOneBox should return true", () => {
        const cajasDeRegalos = fitsInOneBox([
            { l: 1, w: 1, h: 1 },
            { l: 2, w: 2, h: 2 }
        ])

        expect(cajasDeRegalos).toBeTruthy()
    })
    it("fitsInOneBox should return false", () => {
        const boxes = [
            { l: 1, w: 1, h: 1 },
            { l: 2, w: 2, h: 2 },
            { l: 3, w: 1, h: 3 }
        ]

        const cajasDeRegalos = fitsInOneBox(boxes)

        expect(cajasDeRegalos).toBeFalsy()
    })
    it("fitsInOneBox should return true", () => {
        const boxes = [
            { l: 1, w: 1, h: 1 },
            { l: 3, w: 3, h: 3 },
            { l: 2, w: 2, h: 2 }
        ]

        const cajasDeRegalos = fitsInOneBox(boxes)

        expect(cajasDeRegalos).toBeTruthy()
    })
})