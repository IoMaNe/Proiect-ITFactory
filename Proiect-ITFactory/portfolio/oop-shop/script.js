// Creaza o clasa Product cu proprietati name, price, description si image
// - toate proprietatile sunt parametri in constructor
// - name - string
// - price - number
// - description - string
// - image - string sub forma cale de fisier ce indica catre o imagine din directorul img 
//          -ex: 'img/jeans1.jpg'
// instantiaza un obiect de test si afiseaza-l in consola

class Product{
    constructor(name, price, description, image){
        this.name = name;
        this.price = price;
        this.description = description;
        this.image = image ;
    }
}

const blugi = new Product('Blugi', 100, 'Frumosi','img/jeans1.jpg');
console.log(blugi);

// Creaza o clasa DiscountProduct ce mosteneste din clasa Product:
// - are o proprietate noua discount - numar intreg parametru in constructor (ex: 20)
// - are o metoda getDiscountedPrice() - intoarce pretul produsului cu discount aplicat
// instantiaza un obiect de test si afiseaza-l in consola

class DiscountProduct extends Product{
    constructor(name, price, description, image, discount){
       
        super(name, price, description, image)
        this.discount = discount;
    }
    getDiscountedPrice(){
        const discountPrice = this.price - ((this.price * this.discount) / 100)
        return discountPrice.toFixed(2);
        
    }
}
const disc = new DiscountProduct('Blugi', 200,'Frumosi','img/jeans1.jpg',20)

console.log(disc);

//test
disc.getDiscountedPrice();
console.log(disc.getDiscountedPrice());


// creaza un array numit products
// - instantiaza 3 obiecte din clasa DiscountProduct si adauga-le in array-ul creat
// afiseaza array-ul creat in consola

const products = [];

const product1 = new DiscountProduct('Blugi 1', 179.99, 'Interesanti', 'img/jeans1.jpg', 20)
const product2 = new DiscountProduct('Blugi 2', 199.99, 'Interesanti', 'img/jeans2.jpg', 30)
const product3 = new DiscountProduct('Blugi 3', 209.99, 'Interesanti', 'img/jeans3.jpg', 10)

products.push(product1, product2, product3);

console.log(products);

// folosind 'for' itereaza array-ul de obiecte si creeaza elemente HTML sub forma de mai jos
// si adauga-le ca si copii in elementul din DOM cu id='products-list'
/**
 * <div class="card">
        <img src="${product.image}" alt="Denim Jeans">
        <h1>${product.name}</h1>
        <p class="price">
            <span class="full-price">${product.price}</span>
            <span class="discounted-price">${product.getDiscountedPrice()}</span>
        </p>
        <p>${product.description}</p>
        <p><button>Add to Cart</button></p>
    </div>
 */

const container = document.getElementById('products-list');

for (const product of products) {
    const card = document.createElement('div');
    card.className = "card";
    card.innerHTML = `<img src="${product.image}" alt="Blug 1">
                      <h1>${product.name}</h1>
                      <p class="price">
                          <span class="full-price">${product.price}RON</span>
                          <span class="discounted-price">${product.getDiscountedPrice()}RON</span>
                      </p>
                      <p>${product.description}</p>
                      <p><button>Add to Cart</button></p>`;
    
    container.appendChild(card);
}