# endpoints: 

### filtering : 
get all where category home
http://localhost:4000/items?category=home


get all where category home and price 10
http://localhost:4000/items?category=home&price=10


search in all fields letters sa: 
http://localhost:4000/items?q=sa


### sorting: 
sort by price
http://localhost:4000/items?_sort=price


sort by price and sort desc 
http://localhost:4000/items?_sort=price&_order=desc


sort by price desc and discount asc 
http://localhost:4000/items?_sort=price,discount&_order=desc,asc

### operators: 
get all where : 
    price greater than or equal 10 
    and less than or equal 50
http://localhost:4000/items?price_gte=10&price_lte=50


get all where id not equal : 
http://localhost:4000/items?id_ne=2


like operator to spcify regex to find data: 
get all where category start with letter s : 
http://localhost:4000/items?category_like=^s


### realtions: 
populate the reviews for each item in the response : 
http://localhost:4000/items?_embed=reviews


populate the reviews for the item id 1
http://localhost:4000/items/1?_embed=reviews


populate the item for the review : 
http://localhost:4000/reviews?_expand=item



### pagination
see youtube tutorial saved as playlist name json-server tutorial


