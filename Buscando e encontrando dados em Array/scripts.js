const booksByCategory = [
    {
        category: "Riqueza",
        books: [
            {
                title: "Os segredos da mente milionária",
                author: "T. Harv Eker",
            },
            {
                title: "O homem mais rico da Babilônia",
                author: "George S. Clason",
            },
            {
                title: "Pai rico, pai pobre",
                author: "Robert T. Kiyosaki e Sharon L. Lechter",
            },
        ],
    },
    {
        category: "Inteligência Emocional",
        
        books: [
            {
                title: "Você é Insubstituível",
                author: "Augusto Cury",
            },
            {
                title: "Ansiedade – Como enfrentar o mal do século",
                author: "Augusto Cury",
            },
            {
                title: "Os 7 hábitos das pessoas altamente eficazes",
                author: "Stephen R. Covey",
            },
        ],
    },
];


// Contar o número de categorias e o número de livros em cada categoria
const totalCategorias = booksByCategory.length
console.log(totalCategorias)

for (let category of booksByCategory) {
    console.log('Total de livros da categoria', category.category, category.books.length)
}


// Contar o número de autores
function contarAutores(){
    let autores = [];

    for (let category of booksByCategory) {
        for (let book of category.books) {
            if(autores.indexOf(book.author) == -1){
                autores.push(book.author)
            }
        }
    }
    console.log('Total de autores: ', autores.length)
}
contarAutores();


// Mostrar livros do autor Auguto Cury
function livrosAugustoCury(){
    let livros = [];

    for (let category of booksByCategory) {
        for (let book of category.books) {
            if(book.author === "Augusto Cury"){
                livros.push(book.title)
            }
        }
    }

    console.log(`Livros do autor: ${livros.join(", ")}`)
}
livrosAugustoCury();


// Transformar a função acima em uma função que irá receber o nome do autor e devolver os livros desse autor
function livrosAutor(autor){
    let livros = [];

    for (let category of booksByCategory) {
        for (let book of category.books) {
            if(book.author === autor){
                livros.push(book.title)
            }
        }
    }
    console.log(`Livros do autor ${autor}: ${livros.join(", ")}`)
}
livrosAutor("Stephen R. Covey");