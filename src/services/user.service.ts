import { User } from 'src/domains/user.entity';
import { Repository } from 'typeorm';
import { UUID } from 'crypto';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { HttpLocalService } from 'src/client/http-local.service';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private userRepository: Repository<User>,
    private readonly httpLocalService: HttpLocalService,
  ) {}

  async findById(id: UUID) {
    return await this.userRepository.findOneBy({ id });
  }

  async findAll() {
    return await this.httpLocalService.get(process.env.API_URL);
  }
}
