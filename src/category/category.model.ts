import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { ApiProperty, ApiTags } from '@nestjs/swagger';
import { Document } from 'mongoose';

@Schema()
@ApiTags('category')
export class Category {
  @Prop()
  @ApiProperty()
  title: string;

  @Prop()
  @ApiProperty()
  photo: string;
}

export type CategoryDocument = Category & Document;

export const CategorySchema = SchemaFactory.createForClass(Category);
