import { Injectable } from '@nestjs/common';
import { User } from '@src/models/users/user.entity';
import { UserService } from '@src/models/users/user.service';
import _ from 'lodash';
import bcrypt from 'bcrypt';

@Injectable()
export class AuthService {
  constructor(private usersService: UserService) {}

  async validateUser(email: string, password: string): Promise<User | null> {
    const user = await this.usersService.findOneByEmail(email, true);

    if (_.isNil(user)) {
      return null;
    }

    const loginResult = await bcrypt.compare(password, user.password);

    if (!loginResult) {
      return null;
    }

    return _.omit(user, ['password']);
  }
}
