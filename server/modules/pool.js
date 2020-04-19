const pg = require('pg');
const Pool = pg.Pool;

const config = {
	database: 'prime_feedback',
	host: 'localhost',
	port: 5432,
	max: 10,
	idleTimeoutMillis: 26000,
};

pool = new Pool(config);

pool.on('connect', (client) => {
	console.log(`Successful connection to the ${database} database`);
});

pool.on('error', (err, client) => {
	console.log('Error on idle pg client', err);
	process.exit(-1);
});

module.exports = pool;
