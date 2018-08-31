

module.exports= {
    get: (req, res) => {
        const dbInstance = req.app.get('db');
        dbInstance.get_inventory().then((inventory) => {
            res.status(200).send(inventory)
        })
    }, 
    post: (req, res) => {
        const dbInstance = req.app.get('db')
        
		const { name, price, image_url } = req.body;

		dbInstance.create_product([ name, price, image_url ]).then(() => res.sendStatus(200)).catch((err) => {
			res.status(500).send({ errorMessage: 'Something went wrong!' });
			console.log(err);
		});
        
    },
    delete: ( req, res, next ) => {
        const dbInstance = req.app.get('db');
        const { params } = req;
    
        dbInstance.delete_product([ params.id ])
          .then( () => res.sendStatus(200) )
          .catch( err => {
            res.status(500).send({errorMessage: "Oops! Something went wrong. Our engineers have been informed!"});
            console.log(err)
          } );
    
}}

