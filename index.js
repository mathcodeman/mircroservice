import * as dotenv from 'dotenv';
import express from 'express';
import fetch from 'node-fetch';

dotenv.config();

const app = express();
const port = process.env.PORT || 3000;
const API = process.env.API;

app.get('/zipcode', async (req, res) => {
    const code = req.query.code;
    const radius = req.query.radius;
    const country = req.query.country;

    try {
        const results = await fetch(`https://app.zipcodebase.com/api/v1/radius?apikey=${API}&code=${code}&radius=${radius}&country=${country}`)
        const jsonResult = await results.json()
        res.status(200).json(jsonResult);
    }
    catch (err) {
        res.status(404).json(err);
    }

})

app.listen(port, () => {
    console.log(`App is running on port: ${port}`)
})