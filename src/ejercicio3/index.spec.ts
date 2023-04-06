import distributeGifts from '.'

describe("distributeGifts", () => {
    it.only("validate distributeGifts", () => {
        const packOfGifts = ["book", "doll", "ball"]
        const reindeers = ["dasher", "dancer"]

        const cajasDeRegalos = distributeGifts(packOfGifts, reindeers)

        expect(cajasDeRegalos).toBe(2)
    })
})