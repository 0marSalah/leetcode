function twoSum(numbers: number[], target: number): number[] {
    let map = {}
    for (let i = 0; i < numbers.length; i++) {
        const diff = target - numbers[i]
        if (diff in map) return [map[diff][0]+1, i+1]
        map[numbers[i]] = [i, diff]
    }
};