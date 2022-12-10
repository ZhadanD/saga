import { Test, TestingModule } from '@nestjs/testing';
import { TechnicController } from './technic.controller';

describe('TechnicController', () => {
  let controller: TechnicController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [TechnicController],
    }).compile();

    controller = module.get<TechnicController>(TechnicController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
