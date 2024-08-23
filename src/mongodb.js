const mongoose = require("mongoose");
const mongodb = require("mongodb")


mongoose.connect("mongodb://localhost:27017/DatavizCredential")
    .then(() => {
        console.log("mongodb connected");

    })
    .catch(() => {
        console.log("failed to connect");

    });


//schema of login credentials
const LogInSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    }
})
// ---------------------------------------------------------------------------------------------------------------------------------------------------

//   the code below is an implementation of how to store the csv file in mongo db which we can use if we we need and also use as a reference
// const gfs = Grid(conn.db, mongoose.mongo);
// gfs.collection1("csv_file");

// const storage = new GridFsStorage({
//     db: con.db,
//     file: (req, file) => {
//         return {
//             filename: file.originalname,
//             bucketName: "uploads"
//         };
//     }
// });
// const csv_files = multer({ storage });

// ---------------------------------------------------------------------------------------------------------------------------------------------------



//schema for csv data uploading
const csvSchema = new mongoose.Schema({
    filename: {
        type: String,
        required: true
    },
    columns: {
        type: [String],
        required: true
    },
    uploadedAt: {
        type: Date,
        default: Date.now
    }
})
const collection1 = mongoose.model("Collection1", LogInSchema);
const csvmodel = mongoose.model("csv_data", csvSchema)

module.exports = { collection1, csvmodel }


