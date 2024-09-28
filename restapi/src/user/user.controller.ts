import { Controller, Get, Post, Body, Patch, Param, Delete, Req } from '@nestjs/common';
import { UserService } from './user.service';
import { User } from './entities/user.entity';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get()
  async findAll(): Promise<User[]> {
    
    return await this.userService.findAll();
  }

  @Post()
  async create(@Req() req): Promise<User> {
    const user = req.body

    return await this.userService.create(user);
  }
}
