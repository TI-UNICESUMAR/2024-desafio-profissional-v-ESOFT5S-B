import app from '../app'
import { describe, it, afterAll } from '@jest/globals'
import mongoose from 'mongoose'
import BookModel from '../src/books/book.schema'
import * as request from 'supertest'

describe('/books endpoint', () => {
    afterAll(async () => {
        await mongoose.connection.close()
    })

    it.skip('Deve inserir um livro no banco de dados', async () => {
        const BookMock = {
            title: 'O Pequeno Principe',
            author: 'Antonio',
            ISBN: '123B',
            price: 10.99
        }

        const response = await request.default(app).post('/books').send(BookMock)
        const findedBook = await BookModel.findById(response.body._id)

        expect(response.status).toEqual(201)
        expect(response.body._id).toBeDefined()
        expect(BookMock.title).toBe(findedBook?.title)
        expect(BookMock.author).toBe(findedBook?.author)
        expect(BookMock.ISBN).toBe(findedBook?.ISBN)
        expect(BookMock.price).toBe(findedBook?.price)
    })

    it('Deve bucar todos os livros no banco de dados', async () => {
        const response = await request.default(app).get('/books')
        const totalBooksOnDatabase = await BookModel.countDocuments()

        expect(response.body.length).toEqual(totalBooksOnDatabase)
    })
})