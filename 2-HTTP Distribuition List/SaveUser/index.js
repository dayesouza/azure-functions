


module.exports = async function (context, req) {
    const conn = require("../mysql-conf");
    // if already exists, return
    conn.query('SELECT * FROM list where email = ?;', ['banana1'], 
    function (err, results, fields) {
        if (err) throw err;
        if (results.length > 0) return;
        conn.query('INSERT INTO list (email) VALUES (?);', ['banana1'], 
        function (err, results, fields) {
            if (err) throw err;
        })
    });

    context.res = {
        status: 200
    };
    context.done();
}