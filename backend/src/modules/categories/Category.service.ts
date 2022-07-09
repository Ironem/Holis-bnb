import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateCategoryDto } from './Category.dto';
import { Category } from './Category.entity';

@Injectable()
export class CategoryService {
  constructor(
    @InjectRepository(Category)
    private readonly categoryRepository: Repository<Category>,
  ) {}

  async getCategories() {
    return await this.categoryRepository.find();
  }

  addCategory(createCategoryDto: CreateCategoryDto) {
    this.categoryRepository.insert(createCategoryDto);
  }

  async getOrCreateCategoryByName(name: string) {
    const category = await this.categoryRepository.find({ where: { name } });
    if (category == undefined) {
      return await this.addCategory({ name, description: 'New description' });
    }
    return category;
  }
}
