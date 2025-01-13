const INT_MAX = Number.MAX_SAFE_INTEGER;

/**
 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
 */
var coinChange = function(coins, amount) {
    return solve(coins, amount);
};

function solve(coins, amount) {
    let dp = new Array(amount + 1).fill(INT_MAX);
    dp[0] = 0;

    for(let i = 0; i <= amount; i++) {
        //check every coin for each amount
        for(let j = 0; j < coins.length; j++) {

            if((i - coins[j]) >= 0 && dp[i - coins[j]] !== INT_MAX) {
                dp[i] = Math.min(dp[i], 1 + dp[i - coins[j]]);
            }
        }
    }

    if(dp[amount] === INT_MAX)
        return -1;
    return dp[amount];
}
