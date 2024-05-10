function maxProfit(prices: number[]): number {
    let maxProfit = 0
    let l = 0, r = 1
    while (r < prices.length) {
            // calc the profit`
            // compare with maxProfit
            if (prices[r] < prices[l]) l = r
            const profit = prices[r] - prices[l]
            maxProfit = maxProfit < profit ? profit : maxProfit
            r++
    }

    return maxProfit    
};