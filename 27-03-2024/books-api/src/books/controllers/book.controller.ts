import { Request, Response } from 'express'
import bookService from "../services/book.service";

class bookController {
    async create(req: Request, res: Response) {
        const createdBook = await bookService.create(req.body)
        res.status(201)
        return res.json(createdBook)
    }

    async findAll(req: Request, res: Response) {
        const findedBooks = await bookService.findAll()
        res.status(200)
        return res.json(findedBooks)
    }

    async findById(req: Request, res: Response) {
        const findedBook = await bookService.findById(req.params.id)
        res.status(200)
        return res.json(findedBook)
    }

    async update(req: Request, res: Response) {
        const updatedBook = await bookService.update(req.params.id, req.body)
        res.status(200)
        return res.json(updatedBook)
    }

    async delete(req: Request, res: Response) {
        const deleted = await bookService.delete(req.params.id)
        res.status(200)
        return res.json(deleted)
    }
}

export default new bookController()