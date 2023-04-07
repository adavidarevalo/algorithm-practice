function convertHoursToMinutes(time: string) {
    const [hours, minutes, seconds] = time.split(':').map(Number);
    const totalSeconds = hours * 3600 + minutes * 60 + seconds;
    const convertedSeconds = totalSeconds % 60;
    return `${hours * 60 + minutes}:${convertedSeconds.toString().padStart(2, '0')}`;
}


const getCompleted = (timeWorked: string, executionTime: string) => {
    const decimalResult = +convertHoursToMinutes(timeWorked).replaceAll(":", "") / +convertHoursToMinutes(executionTime).replaceAll(":", "")

    let numerator = 1;
    let denominator = 1;

    while (Math.abs(decimalResult - numerator / denominator) > 0.0001) {
        if (decimalResult > numerator / denominator) {
            numerator++;
        } else {
            denominator++;
        }
    }

    return numerator + '/' + denominator;
}

export default getCompleted