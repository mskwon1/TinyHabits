import { HttpStatus, INestApplication } from '@nestjs/common';
import { Test } from '@nestjs/testing';
import request from 'supertest';
import { TestModule } from './test.module';

describe('TestController', () => {
  let app: INestApplication;

  beforeAll(async () => {
    const moduleRef = await Test.createTestingModule({
      imports: [TestModule],
    }).compile();

    app = moduleRef.createNestApplication();
    await app.init();
  });

  it('/GET test', () => {
    return request(app.getHttpServer()).get('/api/test').expect(HttpStatus.OK);
  });
});
