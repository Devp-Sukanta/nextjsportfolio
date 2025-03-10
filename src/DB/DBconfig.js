import mongoose from "mongoose";

export async function connect(){

    // console.log(process.env.NEXT_DATABASE_URL,'databaseurl')
    
    try {
        mongoose.connect(`${process.env.NEXT_DATABASE_URL}`);
        const connect = await mongoose.connection;
        connect.on('connected',()=>{
            console.log("Database connection established successfully.")
        });

        connect.on('error',()=>{
            console.log("Database connection failed.");
            process.exit();
        });

    } catch (error) {
        console.log(error,'Something went wrong');
    }
}