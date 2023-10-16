import {HttpException, HttpStatus, Injectable} from '@nestjs/common';
import {InjectModel} from "@nestjs/mongoose";
import {Token} from "./schemas/token.schema";
import {Model} from "mongoose";
import {HttpService} from "@nestjs/axios";
import {GetTokenDto} from "./dto/get-token.dto";
import {ApiService} from "../api/api.service";
import {DbTokensDto} from "./dto/db-tokens.dto";

@Injectable()
export class AmocrmService {
  constructor(
    @InjectModel(Token.name) private readonly tokenModel: Model<Token>,
    private readonly httpService: HttpService,
    private readonly apiService: ApiService
  ){}

  // fetches access token and refresh token and stores them in the database
  async auth(code: string) {
    try{
      const data: GetTokenDto = await this.apiService.getTokens(code)
      await this.tokenModel.deleteMany({})
      await this.tokenModel.create({
        access_token: data.access_token,
        refresh_token: data.refresh_token
      })
    } catch(e){
      throw new HttpException("Unexpected error", HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }

  // creates new contact
  async createContact(){
    try{
      const tokens: DbTokensDto[] = await this.tokenModel.find()
      const response = await this.apiService.createContact(tokens[0].access_token)
      return response._embedded.contacts[0].id
    } catch(e){
      throw new HttpException("Unexpected error", HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }

  // creates new company
  async createCompany(){
    try{
      const tokens: DbTokensDto[] = await this.tokenModel.find()
      const response = await this.apiService.createCompany(tokens[0].access_token)
      return response._embedded.companies[0].id
    } catch(e){
      throw new HttpException("Unexpected error", HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }

  // creates new lead
  async createLead(){
    try{
      const tokens: DbTokensDto[] = await this.tokenModel.find()
      const response = await this.apiService.createLead(tokens[0].access_token)
      return response._embedded.leads[0].id
    } catch(e){
      throw new HttpException("Unexpected error", HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }
}
