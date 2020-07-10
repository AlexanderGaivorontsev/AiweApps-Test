request = require('request')

const parseJSON = jsonStringBody => {
    dataBody = JSON.parse(jsonStringBody)['data']['market_cap_percentage']
    for (key in dataBody){
        console.log(key)
        console.log(dataBody[key])
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
            parseJSON(response.body)
        }
    })
    res.redirect('back')
}

exports.getInfo = (req, res) => {
    console.log('get_info req <----')
    res.redirect('back')
}