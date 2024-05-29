const {MongoClient} = require('mongodb');

const uri = "mongodb://localhost:27017/";

module.exports = async function (req,res) {
    const body = req.body;
    const condition = body.condition;
    
    
    const client = new MongoClient(uri);
    const db = client.db("Movie_Management");
    const collection = db.collection('movies');
   
    try{
    const result = await collection.deleteMany(condition);
    console.log(result);
    
    res.json({"message":"The document(s) have been deleted"});
    }
    catch(e){
        res.json(e);
        console.log(e);
    }
    finally{
        await client.close()
    }
}