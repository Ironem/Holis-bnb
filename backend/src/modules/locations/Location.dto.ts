import { IsInt, IsNumber, IsString, Max, Min } from 'class-validator';

/**
 * This dto is used to control user inputs and make sure it is valid data to create locations.
 * If the input provided to the endpoint does not match the rules defined by decorators here,
 * the endpoint will immediately return an error.
 * More info here: https://docs.nestjs.com/techniques/validation
 */
export class CreateLocationDto {
  @IsString()
  title: string;

  @IsString()
  description: string;

  @IsString()
  location: string;

  @IsString()
  picture: string;

  @IsNumber()
  @Min(0)
  @Max(5)
  stars: number;

  @IsInt()
  numberOfRooms: number;

  @IsNumber()
  price: number;

  @IsString()
  categoryName: string;
}

export class UpdateLocationPriceDto {
  @IsNumber()
  price: number;
}
