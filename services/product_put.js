const { update } = require('../data/product')

module.exports = () => ({
    path: '/products/:id',
    method: 'PUT',
    response: async(req, res, querystring, data, params) => {
        const result = await update(params[0], data)
        return {
            data: result,
            status: 201,
        }
    },
    delay: 0,
});