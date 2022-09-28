const express = require('express');
const app = express();
const members=[
    {
        id:1,
        name:'Rishav',
        email:'rishav@gmail.com',
        status:'active'
    },
    {
        id:2,
        name:'Raj',
        email:'raj@gmail.com',
        status:'active'
    },
    {
        id:3,
        name:'Raj',
        email:'raj@gmail.com',
        status:'active'
    },
];
//get all members
app.get('/api/members',(req,res)=>{
    res.json(members);
});
const PORT = process.env.PORT || 3012;
app.listen(PORT,()=>console.log('server started'));
