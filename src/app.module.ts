import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AuthModule } from './auth/auth.module';
import { TaskModule } from './tasks/task.module';
import { UsersModule } from './users/user.module';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    ConfigModule.forRoot(),
    MongooseModule.forRoot(process.env.MONGODB_URI="mongodb+srv://swmgunturu:Soumya%402325@cluster0.7govj.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"),
    AuthModule,
    TaskModule,
    UsersModule,
  ],
})
export class AppModule {}
