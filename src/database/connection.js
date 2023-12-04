import sql from "mssql";

const dbSettings = {
    user: process.env.USER_DB,
    password: process.env.PASSWORD_DB,
    server: "localhost",
    database: process.env.NAME_DB,
    options: {
        encrypt: true,
        trustServerCertificate: true
    }
};

export async function getConnection() {
    // sql.connect(dbSettings).then((pool) => {
    //     return pool;
    // })
    // .catch((err) => {
    //     console.log(err);
    // });
    try{
        const pool = await sql.connect(dbSettings);
        return pool;
    }catch (error){
        console.log(error);
    }
}

export { sql };