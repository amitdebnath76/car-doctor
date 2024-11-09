
import { mongoose } from 'mongoose';





const carsModel = new mongoose.Schema({
    name:String
})


export const carsSchema = mongoose.models.cars || mongoose.model('cars',carsModel)