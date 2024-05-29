const {MongoClient} = require('mongodb');

const uri = "mongodb://localhost:27017/";
module.exports = async function (req,res) {
    const body = req.body;
    const keys = Object.keys(body)
    const client = new MongoClient(uri);
    const db = client.db("Movie_Management");
    const collection = db.collection('movies');
    const projection = {
        '_id': 0
      };
    try{
    const result = await collection.find(body,{projection});
    console.log(result);
    var movies_list = []
    for await (const val of result){
        console.log(val);
        movies_list.push(val);
    }
    console.log(movies_list);
    res.json({"movies_list":movies_list});
    }
    catch(e){
        res.json(e);
        console.log(e);
    }
    finally{
        await client.close()
    }
}