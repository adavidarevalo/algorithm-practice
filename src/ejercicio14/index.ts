const getOptimalPath = (piramide: number[][]) => {
    const n = piramide.length;
    const dp = [...piramide];

    for (let i = n - 2; i >= 0; i--) {
        for (let j = 0; j <= i; j++) {
            dp[i][j] += Math.min(dp[i + 1][j], dp[i + 1][j + 1]);
        }
    }

    return dp[0][0];
}

export default getOptimalPath