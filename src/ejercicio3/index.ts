const fitsInOneBox = (packOfGifts: string[], reindeers: string[]) => {
    let pesoDeRegalos = packOfGifts
        .join(' ')
        .replaceAll(" ", "").length;

    let pesoDeRenos = reindeers
        .join(' ')
        .replaceAll(" ", "").length * 2

    return Math.floor(pesoDeRenos / pesoDeRegalos)
}



export default fitsInOneBox;