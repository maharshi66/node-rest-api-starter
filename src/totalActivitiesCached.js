import totalActivitiesRaw from "./totalActivitiesRaw.js";

const CACHE_TTL = 30 * 1000 // 30 Seconds TTL
const cache = new Map()

async function totalActivitiesCached(type) {
    if (cache.has(type)) {
        console.log('Cache Hit!')
        return cache.get(type);
    }

    const resultPromise = totalActivitiesRaw(type)
    cache.set(type, resultPromise)
    resultPromise.then(() => {
        setTimeout(() => {
            cache.delete(type)
        }, CACHE_TTL);
    }, err => {
        cache.delete(type)
        throw err
    })

    return resultPromise;
}

export default totalActivitiesCached