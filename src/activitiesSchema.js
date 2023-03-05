import mongoose, { Schema } from "mongoose";

const activity_schema = new mongoose.Schema({
    type: {
        type: String, enum: ["CONTENT",
            "SYSTEM_GENERATED",
        ], required: true
    },
}, { minimize: true, timestamps: { createdAt: "created_at", updatedAt: "updated_at" } })

const ActivityModel = mongoose.model('Activity', activity_schema)

export default ActivityModel