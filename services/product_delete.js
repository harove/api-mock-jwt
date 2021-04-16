const { remove } = require('../data/product')

module.exports = () => ({
    path: '/products/:id',
    method: 'DELETE',
    response: async(req, res, querystring, data, params) => {
        await remove(params[0])
        return {
            data: {},
            status: 204,
        }
    },
    delay: 0,
});