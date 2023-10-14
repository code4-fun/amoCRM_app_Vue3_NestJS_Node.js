import 'dotenv/config'
import Token from '../dao/Token.js'
import fetch from 'node-fetch'

class AmoCrmService {
  // fetches access token and refresh token and stores them to database
  async fetchToken(params){
    console.log(params)
    if(params.code){
      const response = await fetch(`${process.env.BASE_URL}/oauth2/access_token`, {
        method: 'POST',
        body: JSON.stringify({
          client_id: process.env.CLIENT_ID,
          client_secret: process.env.CLIENT_SECRET,
          grant_type: "authorization_code",
          code: params.code,
          redirect_uri: process.env.REDIRECT_URI
        }),
        headers: {
          'Content-Type': 'application/json'
        }
      })
      const data = await response.json()
      await Token.deleteMany({})
      await Token.create({
        access_token: data.access_token,
        refresh_token: data.refresh_token
      })
    }
  }

  // creates new contact
  async createContact(){
    const token = await Token.find()
    try{
      const response = await fetch(`${process.env.BASE_URL}/api/v4/contacts`, {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${token[0].access_token}`,
          'Content-Type': 'application/json'
        },
        body: JSON.stringify([
          {
            name: '',
          }
        ])
      })
      const json = await response.json()
      return json._embedded.contacts[0].id
    } catch(e){
      console.log(e)
    }
  }

  // creates new company
  async createCompany(){
    const token = await Token.find()
    try{
      const response = await fetch(`${process.env.BASE_URL}/api/v4/companies`, {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${token[0].access_token}`,
          'Content-Type': 'application/json'
        },
        body: JSON.stringify([
          {
            name: '',
          }
        ])
      })
      const json = await response.json()
      return json._embedded.companies[0].id
    } catch(e){
      console.log(e)
    }
  }

  // creates new lead
  async createLead(){
    const token = await Token.find()
    try{
      const response = await fetch(`${process.env.BASE_URL}/api/v4/leads`, {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${token[0].access_token}`,
          'Content-Type': 'application/json'
        },
        body: JSON.stringify([
          {
            name: '',
          }
        ])
      })
      const json = await response.json()
      return json._embedded.leads[0].id
    } catch(e){
      console.log(e)
    }
  }
}

export default new AmoCrmService()
