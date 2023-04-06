const wrapping = (gifts: string[]) => {
    return gifts.map(gift => {
        const startLength = gift.length + 2

        const starts = "*".repeat(startLength);

        return `${starts}\n*${gift}*\n${starts}`;
    })
}

export default wrapping