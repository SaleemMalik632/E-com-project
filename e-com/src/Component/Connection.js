const MySql = require('mysql');

const connection = MySql.createConnection({
    host: 'localhost',
    password: '',
    user: 'root',
    database: 'ecommerce'
});
module.exports = connection; 