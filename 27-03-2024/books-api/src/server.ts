import app from './app'

function main() {
    app.listen(3000, 'localhost', () => {
        console.log("Servidor rodando")
    })
}

main()