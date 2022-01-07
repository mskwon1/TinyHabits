import { Test } from '@nestjs/testing';
import { TestService } from './test.service';

describe('TestService', () => {
  let testService: TestService;

  beforeEach(async () => {
    const moduleRef = await Test.createTestingModule({
      providers: [TestService],
    }).compile();

    testService = moduleRef.get<TestService>(TestService);
  });

  describe('test func', () => {
    it('should return string when returnNumber is nil', () => {
      const result = testService.test(null);
      expect(typeof result).toBe('string');

      const result2 = testService.test(undefined);
      expect(typeof result2).toBe('string');
    });

    it('should return string when returnNumber is false', () => {
      const result = testService.test(false);
      expect(typeof result).toBe('string');
    });

    it('should return number when returnNumber is true', () => {
      const result = testService.test(true);
      expect(typeof result).toBe('number');
    });
  });
});
