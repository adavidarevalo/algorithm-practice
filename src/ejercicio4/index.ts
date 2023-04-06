enum boxesKeys {
    ONE = 'l',
    TWO = 'w',
    THREE = 'h'
}

const fitsInOneBox = (boxes: { [key in boxesKeys]: number }[]) => {
    const ordenporAltura = boxes.sort((a, b) => a.h - b.h)

    let result = true

    ordenporAltura.forEach((box, index) => {
        if (index === 0) return
        if (
            box.l <= ordenporAltura[index - 1].l ||
            box.w <= ordenporAltura[index - 1].w ||
            box.h <= ordenporAltura[index - 1].h
        ) {
            result = false
        }

    })

    return result
}



export default fitsInOneBox;