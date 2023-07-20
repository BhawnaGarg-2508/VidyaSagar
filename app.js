const express = require('express');
const app = express();
const port = 3000;
const path = require('path');
const fs = require('fs');


//EXPRESS specific stuff
app.use('/static', express.static('static'));
app.use(express.urlencoded({ extended: true }));



//PUG specific stuff
app.set('view engine', 'pug');
app.set('views', path.join(__dirname, 'views'));



//ENDPOINTS
app.get('/',(req,res) =>{
    const params = {};

    res.status(200).render('home.pug', params);
})

app.get('/courses',(req,res) =>{
    const params = {};

    res.status(200).render('courses.pug', params);
})

app.get('/contact',(req,res) =>{
    const params = {};

    res.status(200).render('contact.pug', params);
})

app.get('/admission',(req,res) =>{
    const params = {};

    res.status(200).render('admission.pug', params);
})

app.post('/admission', (req, res) => {

    name1 = req.body.name;
    email = req.body.email;
    gender = req.body.gender;
    degree = req.body.degree;
    marks10th = req.body.marks10th;
    marks12th = req.body.marks12th;
    jeepercentile = req.body.jeepercentile;
    more = req.body.more;

    let outputToWrite = `The name of the client is ${name1}, 
    email: ${email}, 
    gender: ${gender},
    degree he wants to apply for: ${degree},
    his class 10 marks: ${marks10th},
    his class 12 marks: ${marks12th},
    his JEE percentile: ${jeepercentile}.
    More about him/her: ${more}`;

    fs.writeFileSync('output.txt', outputToWrite );
    const params = {'message': 'Your form has been submitted successfully'};

    res.status(200).render('admission.pug', params);

})


//START THE SERVER
app.listen(port, () => {
    console.log(`The application started successfully on port ${port}`);
})
