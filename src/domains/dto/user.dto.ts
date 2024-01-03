import { IsString, IsNotEmpty, MinLength, IsEmail } from "class-validator";

export class UserDto {

    @IsNotEmpty()
    @IsString()
    name: string;

    @IsNotEmpty()
    @IsString() 
    lastname: string;

    @IsString()
    @IsNotEmpty()
    @MinLength(3)
    username: string;

    @IsString()
    @IsNotEmpty()
    @MinLength(3)
    password: string;
    
    @IsEmail({}, { message: 'Invalid email address' })
    @IsNotEmpty()
    email: string;


}