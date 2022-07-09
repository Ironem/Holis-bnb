import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Location } from './Location.entity';
import { CreateLocationDto, UpdateLocationPriceDto } from './Location.dto';

@Injectable()
export class LocationService {
  constructor(
    @InjectRepository(Location)
    private readonly locationRepository: Repository<Location>,
  ) {}

  async getLocations() {
    return await this.locationRepository.find({ relations: ['category'] });
  }

  addLocation(createLocationDto: CreateLocationDto) {
    return this.locationRepository.insert(createLocationDto);
  }

  updateLocationPrice(
    id: number,
    updateLocationPriceDto: UpdateLocationPriceDto,
  ) {
    return this.locationRepository.update({ id }, updateLocationPriceDto);
  }
}
