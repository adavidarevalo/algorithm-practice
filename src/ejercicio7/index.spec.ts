import getGiftsToRefill from '.'

describe("getGiftsToRefill", () => {
    it("getGiftsToRefill should return ['muñeca', 'pc']", () => {
        const a1 = ['bici', 'coche', 'bici', 'bici']
        const a2 = ['coche', 'bici', 'muñeca', 'coche']
        const a3 = ['bici', 'pc', 'pc']

        const gifts = getGiftsToRefill(a1, a2, a3)
        expect(gifts).toEqual(['muñeca', 'pc'])
    })
})