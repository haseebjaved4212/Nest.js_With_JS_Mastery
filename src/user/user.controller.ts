import { Body, Controller, Get, Post } from '@nestjs/common';
import { UpdateUserDto } from './dto/update-user.dto';

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
      data : CreateUserDto,
      message: 'User created successfully',
    };
  };

  @Put()
  updateUser(@Body() UpdateUserDto: UpdateUserDto) {
    return {
      data : {id, ...UpdateUserDto},
      message: 'User created successfully',
    };
  }
}
