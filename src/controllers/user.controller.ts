import { Controller, Get, Param, ParseUUIDPipe } from '@nestjs/common';
import { UserService } from 'src/services/user.service';

@Controller('users')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get(':id')
  async getUser(@Param('id', ParseUUIDPipe) id) {
    return await this.userService.findById(id);
  }

  @Get()
  async getUsers() {
    return await this.userService.findAll();
  }
}
