


module.exports = async function (context, req) {
    //if admin
    console.log('req: ',req);
    if(1+1==2) {

        const conn = require("../mysql-conf");
        await conn.promise().query('SELECT * FROM list').then(([rows,fields]) => {
            console.log(`result: `,rows)

            const emails = rows.map(x => x.email);
            context.res = {
                status: 200,
                headers: {
                    'Content-Type': 'application/json'
                },
                body: emails
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