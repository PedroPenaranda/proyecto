export const articulos = [
                    {id: "1", producto: "Juego 1", precio: 1000, imagen: '../Img/juegosPs4/assassinsCreedValhalla-PS4.jpg', CategoriaId: 'PS'},
                    {id: "2", producto: "Juego 2", precio: 2000, imagen: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRwHsXnutTuawyUFrks0Oc4Bh3nz1Y1vueV1A&usqp=CAU', CategoriaId: 'PS'},
                    {id: "3", producto: "Juego 3", precio: 3000, imagen: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRwHsXnutTuawyUFrks0Oc4Bh3nz1Y1vueV1A&usqp=CAU', CategoriaId: 'PS'},
                    {id: "4", producto: "Juego 4", precio: 4000, imagen: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRwHsXnutTuawyUFrks0Oc4Bh3nz1Y1vueV1A&usqp=CAU', CategoriaId: 'PS'},
                    {id: "5", producto: "Juego 5", precio: 5000, imagen: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRwHsXnutTuawyUFrks0Oc4Bh3nz1Y1vueV1A&usqp=CAU', CategoriaId: 'PS'},
                    {id: "6", producto: "Juego 6", precio: 6000, imagen: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRwHsXnutTuawyUFrks0Oc4Bh3nz1Y1vueV1A&usqp=CAU', CategoriaId: 'XX'},
                    {id: "7", producto: "Juego 7", precio: 7000, imagen: './img/juegosPs4/assassinsCreedValhalla-PS4.jpg', CategoriaId: 'XX'},
                    {id: "8", producto: "Juego 8", precio: 8000, imagen: './img/juegosPs4/assassinsCreedValhalla-PS4.jpg', CategoriaId: 'XX'},
                    {id: "9", producto: "Juego 9", precio: 9000, imagen: './img/juegosPs4/assassinsCreedValhalla-PS4.jpg', CategoriaId: 'XX'}]

export const traerArticulos = new Promise((resolve, reject)=>{
    resolve(articulos);
});