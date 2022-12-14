require('./models/db');
const Users=require('./models/users_model')
const express = require('express');
const path = require('path');
const exphbs = require('express-handlebars');
const bodyparser = require('body-parser');
const port=process.env.PORT ||3000

const employeeController = require('./controllers/employeeController');

var app = express();
app.use(bodyparser.urlencoded({
    extended: true
}));
app.use(bodyparser.json());

app.get('/GetUserDetail',async (req,res)=>{
    try{
     const getUserData=await Users.find({})
     res.status(201).send(getUserData)
    }catch(e){
         res.status(400).send(e)
    }
})
app.set('views', path.join(__dirname, '/views/'));
app.engine('hbs', exphbs({ extname: 'hbs', defaultLayout: 'mainLayout', layoutsDir: __dirname + '/views/layouts/' }));
app.set('view engine', 'hbs');

if (process.env.NODE_ENV === 'production') {
	app.use(express.static(path.join(__dirname, 'LOOT LE BUDDY/build')));

	app.use('*', (req, res) =>
		res.sendFile(path.resolve(__dirname, 'LOOT LE BUDDY ', 'build', 'server.js'))
	);
}

app.listen(port, () => {
    console.log(`Express server started at port : ${port}`);
});

app.use('http://localhost:3000/pool', employeeController);