const express = require('express');
const bcrypt = require('bcrypt-nodejs');
const cors = require('cors');

const { v4: uuidv4 } = require('uuid');

var knex = require('knex');

const database = knex({
  client: 'pg',
  connection: {
    host : '127.0.0.1',
    user : 'postgres',
    password : 'password',
    database : 'azusa_db'
  }
});

// database.select('*').from('users').then(data => {
// 	console.log(data);
// });

const app = express();

app.use(express.json());
app.use(cors());

// Login endpoint
app.post('/signin', (req, res) => {
	const { email, password }  = req.body;

	database.select('email', 'hash').from('login')
	.where({email})
	.then(data => {
		const validate = bcrypt.compareSync(password, data[0].hash);
		if (validate) {
			return database.select('*').from('users')
			.where({email})
			.then(user => {
				console.log(user);
				res.json(user[0]);
			})
			.catch(err => res.status(400).json('Unable to sign in.'))
		} else {
			res.json("The email and password does not match any account.");
		}
	})
	.catch(err => res.json('Unable to sign in.'))


})

// Registry endpoint
app.post('/signup', (req, res) => {
	const { email, name, password, passwordConfirm } = req.body;
	const id = uuidv4();

	console.log(password);
	console.log(passwordConfirm);
	console.log(password === passwordConfirm);

	if (password !== passwordConfirm) {
		return res.json('ERROR: passwords must match.');
	}

	const hashedPwd = bcrypt.hashSync(password);

	database.transaction(trx => {
		trx.insert({
			hash: hashedPwd,
			email: email,
			uuid: id
		})
		.into('login')
		.returning('uuid')
		.then(id => {
			return trx('messages').insert({
				uuid: id[0]
			}).returning('uuid')
		})
		.then(id => {
			return trx('stores').insert({
				uuid: id[0]
			}).returning('uuid')
		})
		.then(id => {
			return trx('starred').insert({
				uuid: id[0]
			}).returning('uuid')
		})
		.then(id => {
			return trx('users').returning('*').insert({
				name: name,
				email: email,
				uuid: id[0]
			}).then(user => {
				res.json(user[0])
			}).catch(err => {
				res.status(400).json('error')
			})
		})
		.then(trx.commit)
		.catch(trx.rollback)
	}).catch(err => res.status(400).json('ERROR: Email may already associated with another account.'));
})

// Search endpoint
app.get('/search', (req, res) => {
	const { search } = req.body;
	// Look up stores in database
})

var nodemailer = require('nodemailer');

var transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'azusa.help@gmail.com',
    pass: '@476958123cs'
  }
});

// Contact form endpoint
app.get('/contact', (req, res) => {
	const { email, comment } = req.body;

	if (!email) {
		res.json('Please provide a contact email.');
	}

	if (!comment) {
		res.json('Please explain your needs to us.');
	}

	let mailOptions = {
		from: 'azusa.help@gmail.com',
		to: 'azusa.help@gmail.com',
		subject: 'Contact',
		text: `email contact: ${email} \n email content: ${comment}`
	}

	transporter.sendMail(mailOptions, function(error, info){
		if (error) {
			console.log('Error!');
		} else {
			console.log('Sent!')
		}
	});

	res.json("Thanks for contacting our customer service team. We'll do our best to get back to you in 48 hours.");
})

// Account recovery endpoint
app.post('/recover', (req, res) => {
	const { email } = req.body;

	database.select('email').from('users')
	.where({email})
	.then(data => {
		if (email.length > 0) {
			let mailOptions = {
				from: 'azusa.help@gmail.com',
				to: email,
				subject: 'Azusa Password Reset',
				text: 'To reset your password please click on the following link, the link will be active for the next 30 minutes: www.google.com. If you did not reset your password ignore this email.'
			}

			transporter.sendMail(mailOptions, function(error, info){
			  if (error) {
			    console.log('Error while sending recovery email');
			  } else {
			  	console.log('Recovery email sent.')
			  }
			});

			res.json('Password reset has been sent to the selected email.');
		}
		else {
			res.json('No email found associated with the selected email.');
		}
	})
})

// Password reset > Req user to be logged in

// Starred
// Messages

app.listen(3001);

/*

standard get - fetch('http://localhost:3001').then(response => response.json())

standard post - fetch('http://localhost:3001', {
	method: 'post',
	headers: {'Content-Type': 'application/json'},
	body: JSON.stringify({
		email: this.state.email,
		name: this.state.name,
		password: this.state.password
	})
})

^ - the above applies to put as well

*/
