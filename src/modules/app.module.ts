import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { CompaniesController } from './company.controller';

@Module({
  modules: [],
  controllers: [AppController, CompaniesController],
  components: [],
})
export class ApplicationModule {}
