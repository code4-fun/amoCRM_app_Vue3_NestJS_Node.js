import { Injectable } from '@nestjs/common';
import axios from 'axios'
import {GetTokenDto} from "../amocrm/dto/get-token.dto";

@Injectable()
export class ApiService {
  makeRequest(url, options): any{
    const api = axios.create({
      baseURL: process.env.BASE_URL
    })

    return api(url, options)
      .then(res => res.data)
      .catch(error => Promise.reject(error?.response?.data?.message ?? "Error"))
  }

  getTokens(code:string): GetTokenDto{
    return this.makeRequest('oauth2/access_token', {
      method: 'POST',
      data: JSON.stringify({
        client_id: process.env.CLIENT_ID,
        client_secret: process.env.CLIENT_SECRET,
        grant_type: "authorization_code",
        code: code,
        redirect_uri: process.env.REDIRECT_URI
      }),
      headers: {
        'Content-Type': 'application/json'
      }
    })
  }

  createContact(token:string){
    return this.makeRequest('api/v4/contacts', this.options(token))
  }

  createCompany(token:string){
    return this.makeRequest('api/v4/companies', this.options(token))
  }

  createLead(token:string){
    return this.makeRequest('api/v4/leads', this.options(token))
  }

  options(token:string){
    return {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${token}`,
        'Content-Type': 'application/json'
      },
      data: JSON.stringify([
        {
          name: '',
        }
      ])
    }
  }
}
