import { Body, Controller, Get, Param, Patch, Post } from '@nestjs/common';
import { LocationService } from './Location.service';
import { CreateLocationDto, UpdateLocationPriceDto } from './Location.dto';

@Controller('locations')
export class LocationController {
  constructor(private readonly locationService: LocationService) {}

  /** List all locations in database with this endpoint */
  @Get()
  async getLocations() {
    return await this.locationService.getLocations();
  }

  // Add a new Location
  @Post()
  addLocation(@Body() createLocationDto: CreateLocationDto) {
    return this.locationService.addLocation(createLocationDto);
  }

  // Update the price of the location which has locationId = id
  @Patch('/:id/price')
  updateLocationPrice(
    @Param('id') id: string,
    @Body() updateLocationPriceDto: UpdateLocationPriceDto,
  ) {
    return this.locationService.updateLocationPrice(
      parseInt(id),
      updateLocationPriceDto,
    );
  }
}
