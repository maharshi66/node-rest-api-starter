import ActivityModel from './activitiesSchema.js'

async function totalActivitiesRaw(type) {
    try {
        const activities = await ActivityModel.find({ type }).lean()
        if (!activities || !activities.length) return null;

        return { type, count: activities.length }
    } catch (error) {
        console.log(error)
    }
}

export default totalActivitiesRaw;
