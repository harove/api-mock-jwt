module.exports = () => ({
    path: '/products',
    method: 'POST',
    response: async(req, res, querystring, data, params) => {
        // const result = await getData()
        return {
            data,
            status: 200,
        }
    },
    delay: 0,
});