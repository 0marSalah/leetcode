function findRelativeRanks(score: number[]): string[] {
  const rankMap = [
    "Gold Medal",
    "Silver Medal",
    "Bronze Medal",
  ];

    const sortedScore = [...score].sort((a, b) => b - a);

    const res = new Array(score.length);

    for (let i = 0; i < score.length; i++) {
        const index = score.indexOf(sortedScore[i]);
        if (i < 3) {
            res[index] = rankMap[i];
        } else {
            res[index] = (i + 1).toString();
        }
    }

    return res;
};