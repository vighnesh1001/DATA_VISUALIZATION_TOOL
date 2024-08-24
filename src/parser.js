const express = require("express");
const multer = require("multer");
const csv = require("csv-parser");
const fs = require("fs");
const path1 = require("path");
const { csvmodel } = require("./mongodb");
const mongose = require("mongoose")


const router = express.Router()
const upload = multer({ dest: "/uploads" });

//router.use(express.static("templates"));
router.get("/page", (req, res) => {
    res.send("hello");
})

router.post('/parser/upload', upload.single("csvfile"), (req, res) => {
    const filepath = path.join(__dirname, req.csvfile.path);
    const columns = [];


    fs.createReadStream(filepath)
        .pipe(csv())
        .on("headers", async (headers) => {
            columns.push(...headers);

            //res.json({ columns });



        }).on("end", async () => {
            try {
                const csvData = {
                    filename: req.file.originalname,
                    columns: columns
                }
                res.json({ columns });
                await csvmodel.insertMany([csvData]);
                fs.unlinkSync(filepath)





            }
            catch (err) {
                res.status(500).json({ error: "Failed to save data" })
            }



        })


        .on("error", (error) => {
            res.status(500).json({ error: "Failed to load file" });

        });


}

);

module.exports = router;

