request = require('request')
currencyModel = require('../database/models/currency-model')

const saveResult = jsonStringBody => {
    data = JSON.parse(jsonStringBody)['data']['market_cap_percentage']
    for (key in data){
        let testObj = {
            id: key,
            value: data[key]
        }
        currencyModel.currencyModel.updateOne(testObj, (err, res) => {
            if(err) return console.log(err);
            else if (res.n == 0) {
                let model = currencyModel.currencyModel(testObj)
                model.save()
            }
        })
    }
}

exports.getIndexPage = (req, res) =>{
    res.render('../views/index-layout.pug')
}

exports.refreshInfo = (req, res) => {
    console.log('refresh req <----')
    request('https://api.coingecko.com/api/v3/global', (err, response, body) => {
        if (err) {
            console.log('err: ')
        }
        else {
            saveResult(response.body)
        }
    })
    res.redirect('/')
}

exports.getInfo = (req, res) => {
    console.log('get_info req <----')
    currencyModel.currencyModel.find({}).then(doc => {
        res.render('../views/table.pug', {data: JSON.stringify(doc)}, (err, html) => {
            res.send(html)
        })
    })
}