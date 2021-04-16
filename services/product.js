const { getAll } = require('../data')

module.exports = () => ({
    path: '/products/:id',
    method: 'GET',
    response: async(req, res, querystring, data, params) => {
        const result = await getAll()
        return {
            data: result.data.find(e => e.id == params[0]),
            status: 200,
        }
    },
    delay: 0,
});