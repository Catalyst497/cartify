const express = require('express');
const app = express();

require('dotenv').config();
const Flutterwave = require('flutterwave-node-v3');
const flw = new Flutterwave(
	process.env.FLW_PUBLIC_KEY,
	process.env.FLW_SECRET_KEY
);

app.use(function (req, res, next) {
	res.header('Access-Control-Allow-Origin', '*');
	res.header(
		'Access-Control-Allow-Headers',
		'Origin, X-Requested-With, Content-Type, Accept'
	);
	next();
});

app.get('/api', (req, res) => {
	res.json({ message: 'Hello from server!' });
});
app.get('/checkout', (req, res) => {
	const charge_ng_acct = async () => {
		try {
			const payload = {
				tx_ref: 'example01',
				amount: '100',
				account_bank: 'Guaranty Trust Bank',
				account_number: '0568771609',
				currency: 'NGN',
				email: 'olufemi@flw.com',
			phone_number: '09000000000',
				fullname: 'Flutterwave Developers',
			};

			const response = await flw.Charge.ng(payload);
			console.log(response);
			res.redirect('back');
		} catch (error) {
			console.log(error);
			res.redirect('back');
		}
	};

	charge_ng_acct();
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
	console.log(`Server listening on ${PORT}`);
});
