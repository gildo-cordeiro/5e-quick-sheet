import { Body, Controller, Get, Param, ParseUUIDPipe, Post, UseGuards } from '@nestjs/common';
import { Roles } from 'src/decorators/roles.decorator';
import { UserDto } from 'src/domains/dto/user.dto';
import { Role } from 'src/enums/roles.enum';
import { AuthGuard } from 'src/guards/auth.guard';
import { RolesGuard } from 'src/guards/roles.guard';
import { UserService } from 'src/services/user.service';

@Roles(Role.ADMIN)
@UseGuards(AuthGuard, RolesGuard)
@Controller('users')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post('create')
  async createUser(@Body() data: UserDto) {
    return await this.userService.create(data);
  }

  @Get(':id')
  async getUser(@Param('id', ParseUUIDPipe) id) {
    return await this.userService.findById(id);
  }

  @Get()
  async getUsers() {
    return await this.userService.findAll();
  }
}
