const { default: mongoose } = require("mongoose");



const contactSchema= new mongoose.Schema({
    name:{
        type: String,
        require:[true,'Name required'],
    },
    email:{
        type: String,
        require:[true,'Email required'],
    },
    phone:{
        type: String,
    },
    subject:{
        type: String,
    } ,
    message:{
        type: String,
    }    
},{timestamps:true});


const Contact= mongoose.models.Contact || mongoose.model("Contact",contactSchema);


export default Contact;