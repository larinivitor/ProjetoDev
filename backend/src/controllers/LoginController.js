const Usuario = require('../models/Usuario');

exports.login = async (req, res) => {    

    await Usuario.findOne({
		where: {
			username: req.body.username,
            password: req.body.password
		}
	})
	.then(data => {
		res.json(data);
	})
	.catch(err => {
		res.status(500).json({
			message: err.message
		});
	});
}