import { Controller } from '@nestjs/common';

import { BaseController } from 'src/shared/base.controller';
import { CategoryService } from './category.service';
import { Category, CategoryDocument } from './category.model';

// BaseController Não funciona
@Controller('category')
export class CategoryController extends BaseController<
  CategoryDocument,
  Category
> {
  constructor(private readonly categoryService: CategoryService) {
    super(categoryService, Category);
  }
}
