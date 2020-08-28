const axios = require("axios");

module.exports = {
    async getStores(req, res){
        axios.get("https://goanalytics.executeti.com.br/api/stores")
        .then(docs =>{
            let a = docs.data.map(s => { return s})
            return res.json(a)
        })
        .catch(err =>{
            console.log(err)
            return res.sendStatus(400)
        })
    },

    async ProductsInStore(req,res){
        axios.get("https://goanalytics.executeti.com.br/api/products")
        .then(docs =>{
            let temp = [];
            docs.data.map(s => {
                if (req.params.storeRefId === s.storeRefId){
                    temp.push(s)
                }
            })
            return res.json(temp)
        })
        .catch(err =>{
            console.log(err)
            return res.sendStatus(400)
        })
    },

    async getInfo(req, res){
        let info = {Users:0,ActiveStores:0,ActiveProducts:0}
        Promise.all([
            axios.get("https://goanalytics.executeti.com.br/api/customers/count"),
            axios.get("https://goanalytics.executeti.com.br/api/query/store/total/count/active"),
            axios.get("https://goanalytics.executeti.com.br/api/products/count")  
        ])
        .then(result =>{
            info.Users = result[0].data;
            info.ActiveStores = result[1].data;
            info.ActiveProducts = result[2].data;
            return res.json(info)
        });
        

    }


}