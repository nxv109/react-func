const dotenv = require('dotenv');
const express = require('express');
const mongoose = require('mongoose');
const i18n = require('i18n');

i18n.configure({
  locales:['en', 'de'],
  staticCatalog: {
    en: require('./lang'),
  },
  register: global,
});

const app = express();
dotenv.config();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(i18n.init);

// disable cross
app.use(function(req, res, next) {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Credentials", "true");
  res.setHeader("Access-Control-Allow-Methods", "GET, HEAD, OPTIONS, POST, PUT, DELETE, PATCH");
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Cache-Control, Pragma, Origin, Authorization, token, Access-Control-Allow-Headers,Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers"
  );
  return next();
});

// middlewares
const { userRouter } = require('./routes');

// connect to mongodb
mongoose.connect(process.env.DATABASE_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}, err => {
  if (err) throw new Error(err);
  console.log('Connected to mongodb');
})

// routes
app.use('/api', userRouter);

app.use((req, res, next) => {
	const error = new Error('Not Found');

	error.status(404);
	next(error);
});

app.use((error, req, res, next) => {
	res.status(error.status || 500);
	res.json({
		error: {
			message: error.message,
		}
	})

});

const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`Server started at port: ${port}`));