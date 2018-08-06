const handleItem = (db) => (req, res) => {
	db.select('id', 'gtin14', 'brand_name', 'name', 'images')
		.from('grocery.items')
		.orderBy('id')
		.then (product => {
			if (product.length){
				console.log(typeof product)
				res.json(product)
			} else {
				res.status(400).json('not found')
			}
		})
		.catch(err => res.status(400).json('error getting products'))
}

module.exports = {
	handleItem: handleItem
}