import ActivityModel from './activitiesSchema.js'

async function totalActivitiesRaw(type) {
    try {
        const activities = await ActivityModel.find({ type }).select("_id")
        if (!activities || !activities.length) return null;

        return { type, count: activities.length }
    } catch (error) {
        console.log(error)
    }
}

export default totalActivitiesRaw;
