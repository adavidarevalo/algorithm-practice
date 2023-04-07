import getFilesToBackup from '.'

describe('getFilesToBackup', () => {
    it('should return an array of file numbers that have changed since the last backup', () => {
        const lastBackup = 1546300800
        const changes = [
            [3, 1546301100],
            [2, 1546300800],
            [1, 1546300800],
            [1, 1546300900],
            [1, 1546301000]
        ]
        expect(getFilesToBackup(lastBackup, changes)).toEqual([1, 3])
    })
})