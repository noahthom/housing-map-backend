const express = require('express')
const kijiji = require('kijiji-scraper')
const app = express()

const port  = process.env.PORT || 3000

app.use(express.json())

app.post('', async (req, res) => {
    
    const params = {
        locationId: req.body.locationId,
        categoryId: 30349001,
        minPrice: req.body.minPrice,
        maxPrice: req.body.maxPrice
    }

    const options = {
        maxResults: 100
    }

    try{
        const ads = await kijiji.search(params, options)
        res.status(200).send(ads)
    }catch(e){
        res.status(400).send(e)
    }


})

app.listen(port, () => {
    console.log(port)
})