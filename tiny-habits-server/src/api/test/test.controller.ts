import { Controller, Get } from '@nestjs/common';
import { TestService } from './test.service';

@Controller('api/test')
export class TestController {
  constructor(private readonly testService: TestService) {}

  @Get()
  test() {
    return this.testService.test(false);
  }
}
