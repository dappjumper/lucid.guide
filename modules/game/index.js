const game = {}

module.exports = (app)=>{
	if(app) {
		let path = require('path')
		app.get('/js/vue.min.js', (req, res)=>{
			res.sendFile(path.join(__dirname, './dist/js', 'vue.min.js'))
		})
		app.get('/js/game.js', (req, res)=>{
			res.sendFile(path.join(__dirname, './dist/js', 'game.js'))
		})
		app.get('/js/avatars.js', (req, res)=>{
			res.sendFile(path.join(__dirname, './dist/js', 'avatars.js'))
		})
		app.get('/js/qr.js', (req, res)=>{
			res.sendFile(path.join(__dirname, './dist/js', 'qr.js'))
		})
		app.get('/css/game.css', (req, res)=>{
			res.sendFile(path.join(__dirname, './dist/css', 'game.css'))
		})
	}
	return game;
}