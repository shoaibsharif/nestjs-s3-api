import { Global, Module } from '@nestjs/common';
import { StorageController } from './storage.controller';
import { ConfigurableModuleClass } from './storage.module-definition';
import { StorageService } from './storage.service';
import { HttpModule } from '@nestjs/axios';

@Global()
@Module({
  imports: [HttpModule],
  providers: [StorageService],
  exports: [StorageService],
  controllers: [StorageController],
})
export class StorageModule extends ConfigurableModuleClass {}
