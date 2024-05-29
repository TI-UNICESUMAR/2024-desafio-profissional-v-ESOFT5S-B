import { Injectable } from '@nestjs/common';
import { CreateBookDto } from './dto/create-book.dto';
//import { UpdateBookDto } from './dto/update-book.dto';
import { Book } from './schemas/book.schema';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

@Injectable()
export class BooksService {
  constructor(@InjectModel(Book.name) private bookModel: Model<Book>) {}

  create(createBookDto: CreateBookDto) {
    const createdBook = this.bookModel.create(createBookDto);
    return createdBook;
  }

  findAll() {
    return this.bookModel.find();
  }

  findById(id: string) {
    return this.bookModel.findById(id);
  }

  // update(id: string, updateBookDto: UpdateBookDto) {
  //   return `This action updates a #${id} book`;
  // }

  remove(id: string) {
    return this.bookModel.findByIdAndDelete(id);
  }
}
