import bookModel from '../schemas/book.schema'
import { bookType } from '../types/book.type'

class bookService {

    async create(book: bookType) {
        const createdBook = await bookModel.create(book)
        return createdBook
    }

    async findAll() {
        const findedBooks = await bookModel.find()
        return findedBooks
    }

    async findById(id: string) {
        const findedBook = await bookModel.findById(id)
        return findedBook
    }

    async update(id: string, book: bookType) {
        const updatedBook = await bookModel.findByIdAndUpdate(id, {
            title: book.title,
            author: book.author,
            price: book.price
        }, { new: true })

        return updatedBook
    }

    async delete(id: string) {
        try {
            await bookModel.findByIdAndDelete(id)
            return "Livro removido com sucesso"
        } catch (error) {
            throw new Error(`Ocorreu um erro ao remover o livro: ${error}`)
        }
    }

}


export default new bookService()