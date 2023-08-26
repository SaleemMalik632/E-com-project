const MySql = require('mysql');

module.exports = function connection_() {

    const connection = MySql.createConnection({
        host: 'localhost',
        password: '',
        user: 'root',
        database: 'ecommerce'
    });

    connection.connect(function (err) {
        if (err) {
            console.log('There is Error in the connection ');
        } else {
            console.log("Connected to Database");
        }
    })
    return connection
}

