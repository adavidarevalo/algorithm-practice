import countHours from '.'

describe("countHours", () => {
    it("validate countHours", () => {
        const year = 2022
        const holidays = ['01/06', '04/01', '12/25']

        const time = countHours(year, holidays)

        expect(time).toBe(4)
    })
})