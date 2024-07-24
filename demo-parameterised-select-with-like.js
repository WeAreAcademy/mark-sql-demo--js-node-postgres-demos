const { Client } = require("pg");

async function doDemo() {
  const client = new Client({ database: 'demos' });
  await client.connect();

  const searchTerm = "ing";

  //note: there's also ilike for case-insensitive search (postgres-specific)
  const text = "select * from words where word like $1";
  const values = [`%${searchTerm}%`];

  const res = await client.query(text, values);
  console.log(res.rows);
  await client.end();
}

doDemo();
