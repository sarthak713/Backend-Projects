const express = require('express')
const fileUpload = require('express-fileupload')
const path = require('path')

// create express instance
const app = express()

// enable express-fileUpload middleware
app.use(fileUpload({
    createParentPath:true   // creates the file folder wher file is saved
}));

// serve index.html on '/' route
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, "index.html"));
})

// handle file upload over 'POST' request
app.post('/upload', (req, res) => {
    // process uploaded file
    // check if file is included in request -> by checking if req.files object is defined or not
    // if not send 400 response
    if (!req.files) {
        return res.status(400).send("No files were uploaded")
    }
    // uploaded file is assigned under req.files.myFile (which we named in 'name' attribute)
    const file = req.files.myFile;
    // use methods provided by express-fileUpload middleware to perform operation on the file
    // using file.mv() save the file on your system
    // mv() method will send file from temporary path to path we specify as parameter
    const path = __dirname + '/files/' + file.name;
    // path = where file will be moved
    // callback = will be executed once the move process is done
    // mv() also send error object to callback func, so we can check & send err if occurs
    file.mv(path, (err) => {
        if (err) {
            return res.status(500).send(err)
        }
        return res.send({ status: "success", path: path })
    })
})

app.listen(5000, () => {
    console.log(`Server Running on http://localhost:${5000}`)
})