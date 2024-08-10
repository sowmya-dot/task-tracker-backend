import { Controller, Get, Post, Body, Request, UseGuards } from '@nestjs/common';
import { TaskService } from './task.service';
import { JwtAuthGuard } from '../auth/auth.guard';

@Controller('tasks')
export class TaskController {
  constructor(private readonly taskService: TaskService) {}

  @UseGuards(JwtAuthGuard)
  @Get()
  async getTasks(@Request() req: any) {
    return this.taskService.findAll(req.user.userId);
  }

  @UseGuards(JwtAuthGuard)
  @Post()
  async addTask(@Body() body: any, @Request() req: any) {
    return this.taskService.create({ ...body, userId: req.user.userId });
  }
}
