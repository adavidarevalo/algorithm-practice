import wrapping from '.'

describe("validate wrapped Fn", () => {
    it("validate result", () => {
        const gifts = ['cat', 'game', 'socks']

        const wrapped = wrapping(gifts)

        expect(wrapped).toEqual([
            "*****\n*cat*\n*****",
            "******\n*game*\n******",
            "*******\n*socks*\n*******"
        ]);
    });
})