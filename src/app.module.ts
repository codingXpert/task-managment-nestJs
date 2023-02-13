import { Module } from '@nestjs/common';
import { TaskModule } from './modules/task/task.module';
import { TaskController } from './modules/task/task.controller';
import { TaskService } from './modules/task/task.service';
@Module({
  imports: [TaskModule],
  controllers: [TaskController],
  providers: [TaskService]
})
export class AppModule {}
