import { User } from 'src/domains/user.entity';
import { Repository } from 'typeorm';
import { UUID } from 'crypto';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { HttpLocalService } from 'src/client/http-local.service';
import { UserDto } from '../domains/dto/user.dto';
import * as bcrypt from 'bcrypt';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private userRepository: Repository<User>,
    private readonly httpLocalService: HttpLocalService,
  ) {}

  async create(user: UserDto) {
    user.password = await bcrypt.hash(user.password, await bcrypt.genSalt());
    return await this.userRepository.save(user);
  }

  async findById(id: UUID) {
    return await this.userRepository.findOneBy({ id });
  }

  async findOneByEmail(email: string) {
    return await this.userRepository.findOneBy({ email });
  }

  async findAll() {
    return await this.httpLocalService.get(process.env.API_URL);
  }
}
