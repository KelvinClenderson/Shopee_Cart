/*  CASOS DE USO
    
    ✅ Adicionar item
    ✅ Calcular valor total
    ✅ Deletar item
    ✅ Remover item 

*/
// Mostrar itens do carrinho
async function displayCart(userCart) {
  console.log("\n 📝Shopee cart list");
  userCart.forEach((item, index) => {
    console.log(
      `${index++}. ${item.name} - R$ ${item.price} | ${
        item.quatity
      }x | Subtotal = ${item.subtotal()}`
    );
  });
}

// Adicionar item
async function addItem(userCart, item) {
  userCart.push(item);
}

// Calcular valor total
async function calculateTotal(userCart) {
  console.log("\n 🛒💵 Shopee Cart Total is");

  const result = userCart.reduce((total, item) => total + item.subtotal(), 0);
  console.log(`\n 💵 Total: ${result.toFixed(2)}`);
}

// Deletar o item selecionado do Carrinho
async function deleteItem(userCart, name) {
  const index = userCart.findIndex((item) => item.name === name);

  if (index !== -1) {
    userCart.splice(index, 1);
  }
}

// // Remover item by Index
async function removeItem(userCart, item) {
  // 1. Encontrar o indice do item
  const indexFound = userCart.findIndex(
    (product) => product.name === item.name
  );

  // 2. Caso não encontre o item no index
  if (indexFound == -1) {
    console.log("Item não encontrado.");
    return;
  }

  // 3. Item > 1 subtrair um item.
  if (userCart[indexFound].quatity > 1) {
    userCart[indexFound].quatity -= 1;
    return;
  }
  // 4. Caso item = 1 deletar item.
  if (userCart[indexFound].quatity === 1) {
    userCart.splice(indexFound, 1);
    return;
  }
}

export { addItem, calculateTotal, deleteItem, removeItem, displayCart };
