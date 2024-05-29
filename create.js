const {MongoClient} = require('mongodb');

const uri = "mongodb://localhost:27017/";

module.exports = async function (req,res) {
    const body = req.body;
    const client = new MongoClient(uri);
    const db = client.db("Movie_Management");
    const collection = db.collection('movies');
    const doc = body.movie_list;
    try{
    const result = await collection.insertMany(doc);
    console.log(result);
    res.json({"message":"Movie(s) have been added to the database."});
    }
    catch(e){
        res.json(e);
        console.log(e);
    }
    finally{
        await client.close()
    }
}