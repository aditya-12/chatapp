import mongoose from 'mongoose';

const db = async() => {
    try {
        await mongoose.connect(process.env.MONGO_DB_URL);
        console.log("DB connected");

    } catch (error) {
        console.log("Error connecting the database", error.message);
    }
};

export default db;