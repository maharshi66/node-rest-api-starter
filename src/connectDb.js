import mongoose from 'mongoose'

function connectdb() {
    const server = `mongodb+srv://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@${process.env.DB_HOST_NAME}/${process.env.DB_NAME}`
    console.log(server)
    mongoose.connect(`${server}`)
        .then(() => {
            console.log('Database connection successful')
        })
        .catch(err => {
            console.error('Database connection error', err)
        })
}
export default connectdb