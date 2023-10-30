SELECT E.name 
FROM (
    SELECT managerId
    FROM Employee
    WHERE managerId IS NOT NULL
    GROUP BY managerId
    HAVING COUNT(id) >= 5
) AS M
JOIN Employee AS E ON M.managerId = E.id;
