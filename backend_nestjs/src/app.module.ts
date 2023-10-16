import {Module} from "@nestjs/common";
import {AmocrmModule} from './amocrm/amocrm.module';
import {MongooseModule} from "@nestjs/mongoose";
import {ConfigModule} from "@nestjs/config";
import { ApiModule } from './api/api.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: '.env'
    }),
    MongooseModule.forRoot('mongodb://localhost:27017/tokens'),
    AmocrmModule,
    ApiModule
  ],
  controllers: []
})
export class AppModule{
}
