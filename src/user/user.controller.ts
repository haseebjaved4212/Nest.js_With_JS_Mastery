import { Body, Controller, Get, Post } from '@nestjs/common';

@Controller('user')
export class UserController {

// Get user 
 @Get()
 getUsers() {
  return [
    {id: 1 , name: 'John Doe'},
    {id: 2 , name: 'Haseeb'},
  ];
 }
 @Post()
  createUser(@Body() CreateUserDto: CreateUserDto) {
    return {
      message: 'User created successfully',
    };
  }
}
