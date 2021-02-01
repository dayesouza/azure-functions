module.exports = async function (context, req) {
    if(1+1==2) {
        const conn = require("../mysql-conf");
        const email = 'banana1';
        await conn.promise().query('SELECT * FROM list where email = ? and enabled = ?', [email, 1])
                    .then(([rows,fields]) => {
            
            let result = rows.length ? true : false;
            context.res = {
                status: 200,
                headers: {
                    'Content-Type': 'application/json'
                },
                body: result
            };
        })
    }
    else{
        context.res = {
            status: 401,
            body: "Please pass a name on the query string or in the request body"
        };
        context.done();

    }
    context.done();
}