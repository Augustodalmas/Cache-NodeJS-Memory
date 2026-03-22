const cache = require('../config/cache');

const cacheMiddleware = (duration = 60) => {
    return (req, res, next) => {
        const key = `${req.method}:${req.originalUrl}`;

        const cached = cache.get(key);

        if (cached) {
            console.log('CACHE HIT');
            return res.json(cached);
        }

        console.log('CACHE MISS');

        // bind serve para pegar o contexto do meu (Res)
        const originalJson = res.json.bind(res);

        // Em casos de MISS, ele intercepta o res.json e aplica o cache com .set(...)
        res.json = (body) => {
            cache.set(key, body, duration);
            return originalJson(body);
        };

        // res.json(products) -> cache.set(key, products) -> originalJson(products)

        next();
    };
};

module.exports = cacheMiddleware;