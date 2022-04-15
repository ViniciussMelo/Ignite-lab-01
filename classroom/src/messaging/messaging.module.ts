import { Module } from '@nestjs/common';

import { PurchasesController } from './controllers/purchases.controller';
import { EnrollmentsService } from '../services/enrollments.service';
import { StudentsService } from '../services/students.service';
import { DatabaseModule } from '../database/database.module';
import { CoursesService } from '../services/course.service';

// Controllers:
// HTTP (MVC)
// Kafka receptors
@Module({
  imports: [DatabaseModule],
  controllers: [PurchasesController],
  providers: [StudentsService, CoursesService, EnrollmentsService],
})
export class MessagingModule {}
