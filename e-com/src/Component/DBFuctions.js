const pool = require('./Connection');

function insertData(data) {
    const sql = 'INSERT INTO Product (ProductName, ProductPrice, ProductStock, ProdctDescription, ProductImage_url) VALUES (?, ?, ?, ?, ?)';
    const values = [data.Name, data.Price, data.Stock, data.Description, data.image]; 
    pool.query(sql, values, (error, results) => {
        if (error) {
            console.error('Error inserting data:', error);
        } 
        console.log('Data inserted successfully');
    });
}  
module.exports = {
    insertData,
};
 