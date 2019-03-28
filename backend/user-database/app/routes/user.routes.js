module.exports = (app) => {
	const user = require('../controllers/user.controller.js');

	// user sign-up
	app.post('/user/signUp', user.signUp);

	// verify that user-provided username is unique
	app.post('/user', user.isUniqueUsername);

	// user sign-in
	app.post('/user/signIn', user.signIn);

	// game initialization
	app.post('/user/initializeGame', user.initializeGame);

	// store user score data
	app.post('/user/score', user.storeScoreData);

	// close game and set 'completed' field to true
	app.post('/user/closeGame', user.closeGame);
}