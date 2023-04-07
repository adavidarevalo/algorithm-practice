interface Sleigh {
    name: string;
    consumption: number;
}

const selectSleigh = (distance: number, sleighs: Sleigh[]) => {
    const maxWhats = 20;
    if (sleighs[0].consumption * distance > maxWhats) return null

    for (let i = 0; i < sleighs.length; i++) {
        if (sleighs[i].consumption * distance > maxWhats) {
            return sleighs[i - 1].name
        }
    }
    return sleighs[sleighs.length - 1].name
}

export default selectSleigh;