const getFilesToBackup = (lastBackup: number, changes: number[][]) => {
    const result: number[] = []
    changes.forEach(([id, time]) => {
        if (time > lastBackup) {
            result.push(id)
        }
    })

    const orderResult = result.sort((a, b) => a - b)
    return [...new Set(orderResult)]
}

export default getFilesToBackup