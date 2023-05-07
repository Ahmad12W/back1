
const fs = require('fs')

fs.writeFileSync("data1.text","ahmad salah")

const yargs = require('yargs')


var dataA =require("./dataA")

yargs.command({
    command :"add",
    descrip :" to add item",
    builder : {
        fname :{
            descrip :"this is first name",
            demandOption :true,
            typ:"string"
        },
        lname :{
            descrip :"this is last name",
            demandOption :false,
            typ:"string"
        },
        age :{
            descrip :"this is last name",
            demandOption :true,
            typ:"string"
        },        
        city :{
            descrip :"this is city",
            demandOption :true,
            typ:"string"
        }
    },
    handler :(x)=>{
       dataA.AddPirson(x.id,x.fname, x.lname ,x.age,x.city)
    }
})
//////////////////////////////////////////////////////////////////////////

// delet

yargs.command({
    command :"del",
    descrip :" to deleted item",
    handler :(x)=>{
       dataA.deletData(x.id)
    }
})
////////////////////////////////////////////////
//                   read
yargs.command({
    command : "read",
    describe : "read data",
    builder :{
        id :{
            describe :" this is id in items",
            demandOption : true,
            typ :"string"
        }
    },
    handler: (x)=>{
        dataA.readData(x.id)
    }
})

yargs.command({
    command :"list",
    describe :"list data ",
    handler :()=>{
        dataA.listData()
    }
})
yargs.parse()
