const express = require('express')
const cors =require('cors')
const app = express();

app.use(cors())
app.use(express.json());

const port = 5000;

app.get('/', (req, res) => {
    res.send('Hello From My 1st ever node and practice learn and learn with nodemon. kaj kortese nodemon kaj korer')
});



const users =[
    {id: '0', name: 'Md', email: 'md@gmail.com', phone: '05659659'},
    {id: '1', name: 'alamin', email: 'alamin@gmail.com', phone: '05659659'},
    {id: '2', name: 'mahmuda',email: 'md@gmail.com', phone: '05659659'},
    {id: '3', name: 'nodi', email: 'md@gmail.com', phone: '05659659'},
    {id: '4', name: 'tanisha',email: 'md@gmail.com', phone: '05659659'},
    {id: '5', name: 'israt', email: 'md@gmail.com', phone: '05659659'},
    {id: '6', name: 'payel', email: 'md@gmail.com', phone: '05659659'},
    {id: '7', name: 'pabiha', email: 'md@gmail.com', phone: '05659659'},
    {id: '8', name: 'jannat', email: 'md@gmail.com', phone: '05659659'},
    {id: '9', name: 'pariya', email: 'md@gmail.com', phone: '05659659'},
]
app.get('/users', (req, res) => {
    const search = req.query.search;
    // use query parameter
    if(search){
        const searchResult = user.filter(user => user.name.toLocaleLowerCase().includes(search));
        res.send(searchResult);
    }
    else{
        res.send(users)
    }
    res.send(users)
});
// app.Method
app.post('/users',(req, res) => {
    const newUser = req.body;
    newUser.id = users.length;
    users.push(newUser);
    console.log('hitting the post', req.body)
    // res.send(JSON.stringify(newUser));
    res.json(newUser)
})

//  dynamic api

app.get('/users/:id', (req, res) => {
    const id = req.params.id;
    const user = users[id]
    res.send(user);

}) 
app.get('/fruits/mangoes/fruits', (req, res) => {
    res.send('Yummi Yummi Mango');
})

app.listen(port, () => {
    console.log('listening on port', port);
});