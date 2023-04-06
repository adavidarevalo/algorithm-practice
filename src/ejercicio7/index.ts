const getGiftsToRefill = (a1: string[], a2: string[], a3: string[]) => {
    const allGifts = new Set([...a1, ...a2, ...a3]);
    const result: string[] = []

    for (const gift of allGifts) {
        let val = 0;
        if (a1.includes(gift)) val += 1;
        if (a2.includes(gift)) val += 1;
        if (a3.includes(gift)) val += 1;
        if (val === 1) {
            result.push(gift);
        }
    }

    return result
}

export default getGiftsToRefill