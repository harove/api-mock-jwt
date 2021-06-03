const { getAll } = require('../data/user')

module.exports = () => ({
    path: '/users',
    method: 'GET',
    response: async(req, res, querystring, data, params) => {
        const result = await getAll()
        return {
            data: result,
            status: 200,
        }
    },
    delay: 0,
});