import {Controller, Get, Query, Res} from '@nestjs/common';
import {AmocrmService} from "./amocrm.service";

@Controller('api')
export class AmocrmController {
  constructor(private readonly amocrmService: AmocrmService) {}

  @Get('/auth')
  async auth(@Query('code') code: string, @Res() res){
    await this.amocrmService.auth(code)
    res.redirect(`${process.env.CLIENT_URL}/main`)
  }

  @Get('/contacts')
  async createContact(){
    return await this.amocrmService.createContact()
  }

  @Get('/companies')
  async createCompany(){
    return await this.amocrmService.createCompany()
  }

  @Get('/leads')
  async createLead(){
    return await this.amocrmService.createLead()
  }
}
