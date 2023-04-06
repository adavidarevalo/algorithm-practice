const isPalindrome = (
    str: string,
    left: number,
    right: number
): boolean => {
    while (left < right) {
        if (str[left] !== str[right]) {
            return false;
        }
        left++;
        right--;
    }

    return true;
};

function checkPart(part: string) {
    let left = 0;
    let right = part.length - 1;

    while (left < right) {
        if (part[left] !== part[right]) {
            return isPalindrome(part, left + 1, right) || isPalindrome(part, left, right - 1)
        }
        left++;
        right--;
    }

    return true;
}

export default checkPart;