import { Test, TestingModule } from '@nestjs/testing';
import { TechnicService } from './technic.service';

describe('TechnicService', () => {
  let service: TechnicService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [TechnicService],
    }).compile();

    service = module.get<TechnicService>(TechnicService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
