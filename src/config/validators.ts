import mongoose, { mongo } from 'mongoose';



export class Validators {


  static isMongoID( id: string ) {
    return mongoose.isValidObjectId(id);
  }

}