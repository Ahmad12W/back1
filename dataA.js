const { on } = require('events');
const fs = require('fs');


const AddPirson = (id ,fname , lname , age , city) => {
    const allData = loadInfo()
    const duplicatedData = allData.filter ((obj) =>{
        return obj.id === id
    })
    if (duplicatedData.length == 0 ) {
    allData.push ({
        id : id,
        fname : fname ,
        lname : lname ,
        age : age,
        city : city
        })

    saveAllData (allData)

    }else{
        console.log("eror")
    }
};

const loadInfo = () => {
    try {
        const dataJson = fs.readFileSync("dataA.json").toString();
        return JSON.parse(dataJson);
    }catch{
        return[]
    }
}

var saveAllData = (allData) => {
    const saveAllDataJson = JSON.stringify(allData);
    fs.writeFileSync("dataA.json", saveAllDataJson);
};


//////////////////////////////////////////////////////

// delet data

const deletData =(id)=>{
    const allData = loadInfo()
    const dataToKeep=allData.filter((obj)=>{
        return obj.id !==id
    })
    saveAllData(dataToKeep)
}
// ////////////////////////////
// /////////////////////read data 
const readData =(id)=>{
    const allData=loadInfo()
    const itemNeeded =allData.find((obj)=>{
        return obj.id ==id
    })
    console.log(itemNeeded)
    if(itemNeeded){
        console.log(itemNeeded.id)
    }else{
        console.log("Eroor")
    }
}

const listData =()=>{
    const allData =loadInfo()
    allData.forEach((obj) => {
        console.log(obj.fname,obj.city,obj.age)
    });
}



module.exports = {
    AddPirson,
    deletData,
    readData,
    listData
};