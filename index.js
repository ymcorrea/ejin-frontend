const express = require('express');
const { MongoClient } = require('mongodb');
const app = express();
const cors = require('cors');
const port = process.env.PORT || 5000;
require('dotenv').config()

app.use(cors());
app.use(express.json());

// pass: gKMsQqXaDYVq0Rqq

const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.ha2x2.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`;
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });

async function run() {
    try {
        await client.connect();
        const database = client.db("travel_agency");
        const placeCollection = database.collection("destination");
        const serviceCollection = database.collection("resort");

        app.get('/destination/', async (req, res) => {
            const cursor = await placeCollection.find({}).toArray();
            res.send(cursor);
        })
        app.get('/services/', async (req, res) => {
            const cursor = await serviceCollection.find({}).toArray();
            res.send(cursor);
        })
    }
    finally {
        // await client.close();
    }
}
run().catch(console.dir);

app.get('/', (req, res) => {
    res.send("Hello World")
})



app.listen(port, () => {
    console.log("running " + port)
})