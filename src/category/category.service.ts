import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

import { BaseService } from 'src/shared/base.service';
import { Category, CategoryDocument } from './category.model';

@Injectable()
export class CategoryService extends BaseService<CategoryDocument> {
  constructor(
    @InjectModel(Category.name)
    private readonly userModel: Model<CategoryDocument>,
  ) {
    super(userModel);
  }
}
