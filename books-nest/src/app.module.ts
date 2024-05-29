import { Module } from '@nestjs/common';
import { BooksModule } from './books/books.module';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://0.0.0.0/books-nest'),
    BooksModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
