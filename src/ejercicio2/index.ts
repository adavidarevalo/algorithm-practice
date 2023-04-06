
const countHours = (year: number, holidays: string[]) => {
    let daysToRecover = 0;

    holidays.forEach(date => {
        const day = new Date(`${year}-${date.replace('/', "-")}`).getDay();

        if (![0, 6].includes(day)) {
            daysToRecover += 1;
        }
    })

    return daysToRecover * 2;
}

export default countHours;