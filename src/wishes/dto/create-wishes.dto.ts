import {
  IsDecimal,
  IsInt,
  IsNotEmpty,
  IsString,
  IsUrl,
  Length,
} from 'class-validator';

export class CreateWishDto {
  @IsString()
  @Length(1, 250)
  @IsNotEmpty()
  name: string;

  @IsUrl()
  link: string;

  @IsUrl()
  image: string;

  @IsDecimal()
  price: number;

  @IsString()
  @Length(1, 1024)
  description: string;
}
