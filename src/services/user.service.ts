import { User } from 'src/domains/user.entity';
import { Repository } from 'typeorm';
import { UUID } from 'crypto';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private userRepository: Repository<User>,
  ) {}

  async findById(id: UUID) {
    return await this.userRepository.findOneBy({ id });
  }

  async findAll() {
    return await this.userRepository.find();
  }
}
