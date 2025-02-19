import { Module } from '@nestjs/common'

import { CrudController } from './controllers/crud.controller'

import { EntityModule } from '../entity/entity.module'
import { ManifestModule } from '../manifest/manifest.module'
import { CrudService } from './services/crud.service'
import { PaginationService } from './services/pagination.service'
import { ValidationModule } from '../validation/validation.module'
import { AuthService } from '../auth/auth.service'
import { DatabaseService } from './services/database.service'
import { DatabaseController } from './controllers/database.controller'

@Module({
  imports: [EntityModule, ManifestModule, ValidationModule],
  controllers: [CrudController, DatabaseController],
  providers: [CrudService, PaginationService, AuthService, DatabaseService],
  exports: [DatabaseService]
})
export class CrudModule {}
