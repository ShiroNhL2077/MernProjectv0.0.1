// ~ insert many documents :
db.collection.insertMany([{doc 1 },{doc 2 },....{doc n }])
// ~ insert one doc :
db.collection.insertOne(
   {document}
)

// ~  find documents :
 db.collection.find({filter}, {rows to show})   // ~ filter = {} means empty filter ,
 so we return all documents
db.collection.find({}, {age : 1 , adress : 1})

// ~  find one doc: 
db.collection.findOne({_id: 54zd6545cff465465cfe4}) 
db.collection.findOne({title : my article }) 

// ~  count how muany result we returned
db.collection.find().count()

// ~  return the only 3 documents of our query
db.collection.find().limit(3)

// ~  sort the result
db.collection.find().sort({the field we gonna sort by})
db.collection.find().sort({age : 1 }) // ~  1 = ascending order ; -1 = descanding order

// ~ Nested documents

{title : "parent element" , author : "big element" ,
[{name : "nested element" , body : "nes1 "} ,
{name : "nested element2" , body : "nes2"}
]}

// ~  Operators & Complex Queries
find({item_filtered_by : { $operator : value } , item_filtred_by2 : "value" }) // ~  filter
by 2 filters at same time
db.books.find({ rating : {$gt : 7}}) // ~  get all books which
their rating is grater than 7 , 
not including 7 rating
{$lte : 10 } = less than or equal to 10
{$gte : 10 } = grater than or equal to 10

// ~  Operator $or
db.books.find({$or : [{filter1},{filter2},{filter3}] }) // ~  filter by first
 or second or third filter .

 // ~  $in & $nin
 db.books.find({ rating: {$in: [7,8,9]}}) 
same as :
 db.books.find({$or: [{rating: 7}, {rating: 8}, {rating: 9}]})
// ~  $nin means not in

// ~ Querying Arrays
// ~  if magic exists in genres return the book
 db.books.find({genres: "magic"}) 
// ~  if magic exists solo in genres return the book (exact matching)
 db.books.find({genres: ["magic"]}) 
// ~  if magic and fanatsy exist both return the book ($all)
 db.books.find({genres: {$all: [fantasy", "magic"]}})
// ~  use query names 
 db.books.find({"clé": "valeur"}) // ~  exemple :  db.books.find({"reviews.name": "luigi"})

// ~ Delete docs 
db.books.deleteOne({_id : ObjectId("54132120231ezdfzef54")})
db.books.deleteMany({author : "ayoub"})

// ~ Update docs 
$set = set new data ;
$inc = increament integer ;
$pull = delete from array ;
$push = add to array.
// ~  update pages and rating fileds by using the $set operator
db.books.updateOne({_id : ObjectId("54ef54")}, {$set :{rating : 8,pages:60} } )
// ~  incremente the number of pages by 2 using $inc
db.books.updateOne({_id : ObjectId("54ef54")}, {$inc :{pages:2} } )
// ~  update Many , update evrey book with author called ayoub .
db.books.updateMany({author : "ayoub"} , {$set : {author : "ayoubUpdated"}})
// ~  $push and $pull
db.books.updateOne({_id: ObjectId("641")}, {$push: {genres: "fantasy"}})

// ~ MongoDB Drivers