import {Schema, model} from 'mongoose'

const Token = new Schema({
  access_token: {type: String, required: true},
  refresh_token: {type: String, required: false},
})

export default model('Token', Token)
