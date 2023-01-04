import { IsEmail, IsNotEmpty, IsString } from "class-validator"; //class validators to validate data

export class AuthDto {
    @IsEmail()
    @IsNotEmpty()
    email: string;

    @IsString()
    @IsNotEmpty()
    password: string;
}
export class TextInput {
    data: string
}
export class Form {
    {
    //section
    {
        input: []
    }
}
}
