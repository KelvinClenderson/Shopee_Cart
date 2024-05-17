//Importações
import createItem from "./services/item.js";
import * as cartServices from "./services/cart.js";

const myCart = [];
const myWhishList = [];

console.log(" 🛒 Welcome to the your Shopee Cart!");

const item1 = await createItem(" 🏎️ HotWheels Ferrari", 20.99, 2);
const item2 = await createItem(" 🏎️ HotWheels Lamborghini", 39.99, 3);
const item3 = await createItem(" 💻 Notebook", 3999.99, 2);
const item4 = await createItem(" 💻 Notebook Gamer", 7999.99, 3);

//Adicionando itens ao carrinho
await cartServices.addItem(myCart, item1);
await cartServices.addItem(myCart, item2);
await cartServices.addItem(myCart, item3);
await cartServices.addItem(myCart, item4);

//Deletando um item do cart
await cartServices.deleteItem(myCart, item1.name);

// Exibindo os itens do carrinho
await cartServices.displayCart(myCart);

//Deletei um item do carrinho
// await cartServices.deleteItem(myCart, item1.name);

// removendo um item ate deletar.
await cartServices.removeItem(myCart, item3);

await cartServices.calculateTotal(myCart);
