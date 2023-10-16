import { Module } from '@nestjs/common';
import { AmocrmController } from './amocrm.controller';
import { AmocrmService } from './amocrm.service';
import {MongooseModule} from "@nestjs/mongoose";
import {Token, TokenSchema} from "./schemas/token.schema";
import {HttpModule} from "@nestjs/axios";
import {ApiModule} from "../api/api.module";

@Module({
  imports: [
    MongooseModule.forFeature([{name: Token.name, schema: TokenSchema}]),
    HttpModule,
    ApiModule
  ],
  controllers: [AmocrmController],
  providers: [AmocrmService]
})
export class AmocrmModule {}
