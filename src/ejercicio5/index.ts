const getMaxGifts = (giftsCities: number[], maxGifts: number, maxCities: number): number => {
    let maxTotalGifts = 0;

    const backtrack = (cityIndex: number, citiesLeft: number, totalGifts: number) => {
        if (cityIndex === giftsCities.length || citiesLeft === 0) {
            if (totalGifts > maxTotalGifts) {
                maxTotalGifts = totalGifts;
            }
            return;
        }

        if (giftsCities[cityIndex] <= maxGifts - totalGifts) {
            backtrack(cityIndex + 1, citiesLeft - 1, totalGifts + giftsCities[cityIndex]);
        }

        backtrack(cityIndex + 1, citiesLeft, totalGifts);
    }

    backtrack(0, maxCities, 0);

    return maxTotalGifts;
}

export default getMaxGifts
