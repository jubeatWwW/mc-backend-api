import { Module } from '@nestjs/common';
import { DatasetController } from './dataset.controller';
import { DatasetService } from './dataset.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Dataset } from './entities/dataset.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Dataset])],
  controllers: [DatasetController],
  providers: [DatasetService],
})
export class DatasetModule {}
