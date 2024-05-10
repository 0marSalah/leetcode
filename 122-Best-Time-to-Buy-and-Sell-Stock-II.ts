function maxProfit(prices) {
    let maxProfit = 0
    let i = 0
    while (i < prices.length) {
        if (prices[i + 1] > prices[i]) {
            const profit = prices[i+1] - prices[i]
            maxProfit += profit
        }
        i++
    }
    return maxProfit
};