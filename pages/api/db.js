import mysql from "mysql2/promise";


// SERWER


const dbconnection = mysql.createPool({
  host: "localhost",
  database: "p593293_kalina",
  user: "p593293_kalina",
  password: "kalina1369",
  socketPath: "",
});


// DEV

// const dbconnection = mysql.createPool({
//   host: "localhost",
//   database: "kalina",
//   user: "root",
//   password: "",
//   socketPath: "",
// });


export async function getOffers() {
  try {
    const [data] = await dbconnection.execute("SELECT * FROM offers");
    return data;
  } catch (error) {
    console.error(error);
    return [];
  }
}

export async function getPortfolio() {
  try {
    const [data] = await dbconnection.execute("SELECT * FROM portfolio");
    return data;
  } catch (error) {
    console.error(error);
    return [];
  }
}

export async function getTest() {
  try {
    const [data] = await dbconnection.execute("SELECT * FROM test");
    return data;
  } catch (error) {
    console.error(error);
    return [];
  }
}

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { name } = req.body;

    try {
      const connection = await dbconnection.getConnection();
      const [result] = await connection.execute('INSERT INTO test (name) VALUES (?)', [name]);
      connection.release();
      console.log('Data inserted successfully!');
      res.status(200).json({ message: 'Data inserted successfully!' });
    } catch (error) {
      console.error('An error occurred:', error);
      res.status(500).json({ message: 'An error occurred while inserting data.' });
    }
  } else if (req.method === 'DELETE') {
    const { id } = req.query;

    try {
      const connection = await dbconnection.getConnection();
      const [result] = await connection.execute('DELETE FROM test WHERE id = ?', [id]);
      connection.release();
      console.log('Element deleted successfully!');
      res.status(200).json({ message: 'Element deleted successfully!' });
    } catch (error) {
      console.error('An error occurred:', error);
      res.status(500).json({ message: 'An error occurred while deleting the element.' });
    }
  } else {
    res.status(405).json({ message: 'Method Not Allowed' });
  } 
  
}