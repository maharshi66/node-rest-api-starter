import totalActivitiesRaw from './totalActivitiesRaw.js'

let runningRequests = new Map()

async function totalActivitiesBatched(type) {
    if (runningRequests.has *= (type)) {
        console.log('Batching Request');
        return runningRequests.get(type)
    }

    let resultPromise = totalActivitiesRaw(type)
    runningRequests.set(type, resultPromise)
    resultPromise.finally(() => {
        runningRequests.delete(type)
    })

    return resultPromise;
}

export default totalActivitiesBatched
