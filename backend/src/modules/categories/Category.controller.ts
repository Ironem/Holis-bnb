import { Body, Controller, Get, Post, Res } from '@nestjs/common';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { CategoryService } from './Category.service';
import { CreateCategoryDto } from './Category.dto';

@Controller('Category')
export class CategoryController {
  constructor(private readonly CategoryService: CategoryService) {}

  /** List all Categories in database with this endpoint */
  @Get()
  async getCategories() {
    return await this.CategoryService.getCategories();
  }

  // Add a new category
  @Post()
  addCategory(@Body() createCategoryDto: CreateCategoryDto) {
    return this.CategoryService.addCategory(createCategoryDto);
  }

  // Get or add category
  @Post('addOrGet')
  async getOrCreateCategoryByName(@Body() name: string) {
    return await this.CategoryService.getOrCreateCategoryByName(name);
  }
}
