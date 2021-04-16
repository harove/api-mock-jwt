const { add } = require('../data/product')

module.exports = () => ({
    path: '/products',
    method: 'POST',
    response: async(req, res, querystring, data, params) => {
        const result = await add(data)
        return {
            data: result,
            status: 201,
        }
    },
    delay: 0,
});