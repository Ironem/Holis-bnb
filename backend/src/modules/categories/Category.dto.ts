import { IsString } from 'class-validator';

/**
 * This dto is used to control user inputs and make sure it is valid data to create locations.
 * If the input provided to the endpoint does not match the rules defined by decorators here,
 * the endpoint will immediately return an error.
 * More info here: https://docs.nestjs.com/techniques/validation
 */
export class CreateCategoryDto {
  @IsString()
  description: string;

  @IsString()
  name: string;
}
