import {HydratedDocument} from "mongoose";
import {Prop, Schema, SchemaFactory} from "@nestjs/mongoose";

export type TokenDocument = HydratedDocument<Token>

@Schema()
export class Token{
  @Prop()
  access_token: string

  @Prop()
  refresh_token: string
}

export const TokenSchema = SchemaFactory.createForClass(Token)
