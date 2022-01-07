import { Injectable } from '@nestjs/common';

@Injectable()
export class TestService {
  test(returnNumber: boolean): string | number {
    if (returnNumber) {
      return 0;
    }

    return `This action returns test`;
  }
}
