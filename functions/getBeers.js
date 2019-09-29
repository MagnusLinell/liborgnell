
const MongoClient = require('mongodb').MongoClient;
const uri = "mongodb+srv://liborgnell:QPpKyTF5phA6GtKn@cluster0-93bme.mongodb.net/liborgnell?retryWrites=true&w=majority";
const dbName = 'liborgnell';

const unknownError = (e) => ({ statusCode: 500, body: JSON.stringify({ code: 500, error: { message: 'Unknown Error', trace: e } }) });

exports.handler = async (event, context) => {
    try {
        const client = await MongoClient.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true });
        const col = client.db(dbName).collection('rates');
        const results = await col.find({}).toArray();
        client.close();
        return {
            statusCode: 200,
            body: JSON.stringify(results),
        };
    } catch (e) {
        return unknownError(e);
    }
}