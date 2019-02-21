# Overview sobre MongoDB

- mongod
- mongo
- show dbs
- use db_finance
- db

- db.createCollection('billingCycles')
- show collections

# Insert
- db.billingCycles.drop()
- db.billingcycles.count()
- db.billingcycles.insert({name: "Janeiro/17", month: 1, year: 2017})
- db.billingcycles.save({name: "Fevereiro/17", month: 2, year: 2017})
- db.billingcycles.insert({name: "Março/17", month: 3, year: 2017, credits:[{name: "Salário", value: 5000}], debts:[{name:"Luz", value: 100, status: "PAGO"}, {name: "Telefone", value: 100, status: "PENDENTE"}]})

# Select
- db.billingcycles.find()
- db.billingcycles.find().pretty()
- db.billingcycles.findOne()
- db.billingcycles.findOne({month: 2})
- db.billingcycles.find({$or: [{month: 1}, {month: 2}]}).pretty()
- db.billingcycles.find({credits: {$exists: true}}).pretty()
- db.billingcycles.find({year: 2017})
- db.billingcycles.find({year: 2017}).skip(1)
- db.billingcycles.find({year: 2017}).skip(1).limit(1)
- db.billingcycles.find({credits: {$exists: true}}, {_id: 0, name: 1}).pretty()

# Group by
- db.billingcycles.aggregate([{
	$project: {credit: {$sum: "$credits.value"}, debt: {$sum: "$debts.value"}},
	}, {
	$group: {_id: null, credit: {$sum: "$credit"}, debt: {$sum: "$debt"}}
}])

# Update
- db.billingcycles.update(
	{$and: [{month: 1}, {year: 2017}]},
	{$set: {credits: [{name: "Salário", value: 5000}]}}
)

# Delete
- db.billingcycles.remove({month: 2})
- db.billingcycles.remove({year: 2017}, 1)
- db.dropDatabase()
