# Write your MySQL query statement below
# select product_name, year, price FROM Product as p, Sales as s
# WHERE p.product_id = s.product_id
select product_name, year, price FROM Product as p JOIN Sales as s
ON p.product_id = s.product_id