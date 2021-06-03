const jwt = require('jsonwebtoken')
const { getByKey } = require('../data/user')

/*
localhost:4000/auth/login

{
    "username": "claudio.rojas",
    "password": "123.123"
}

*/

// require('crypto').randomBytes(64).toString('hex')
const TOKEN_SECRET = '33a5334558e8b94e3e538b34dd5c7ed27576024d8ec4c85a7f178129c4152a5097c211022a5a0b0ed56105dc797d278206ddc092b38aa4bb76011d6c3720bd32'
function generateAccessToken(username) {
    return jwt.sign(username, TOKEN_SECRET, { expiresIn: '1800s' });
}

module.exports = () => ({
    path: '/auth/login',
    method: 'POST',
    response: async (req, res, querystring, data, params) => {
        const r = await getByKey('username', data.username)
        if (r.password === data.password) {
            return {
                data: {
                    jwt: generateAccessToken({ username: data.username }),
                },
                status: 200,
            }
        }
        return {
            data: {
                login: false,
            },
            status: 401,
        }
    },
    delay: 0,
})