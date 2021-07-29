import mongoose from 'mongoose';

export interface IMongoParams {
    host: string,
    port: Number,
    dbName: string
}

export default function attemptMongooseConnection(params: IMongoParams) {
    const { host, port, dbName } = params;

    mongoose.connect(`mongodb://${host}:${port}/${dbName}`, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    });

    // get the connection object for mongoose
    const db = mongoose.connection;

    // handler for a failed mongodb connection
    db.on("error", console.error.bind(console, "ERROR CONNECTING TO MONGODB!"));

    // handler for a successful mongodb connection
    db.once("open", function () {
        console.log("Mongoose is now connected to mongodb :)");
    });
}