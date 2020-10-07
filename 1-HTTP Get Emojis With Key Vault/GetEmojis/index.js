const axios = require('axios');

let url='https://emoji-api.com/emojis'
module.exports = async function (context, req) {
    var secretKey = process.env["SecretKeyFromKeyVault"]
    url += `?access_key=${secretKey}`;
    
    if(req.query.search) url += `&search=${req.query.search}`
    const response = await axios.get(url).then(x => x.data)
    
    context.res = {
        // status: 200, /* Defaults to 200 */
        body: response,
        headers: {
            'Content-Type': 'application/json'
        }
    };  
}