/* CASOS DE USO DOS ITENS
    => Criar itens como subtotal
 */

// => Criar itens como subtotal
async function createItem(name, price, quatity) {
  return {
    name,
    price,
    quatity,

    // Função que ja calcula o subtotal
    subtotal: () => price * quatity,
  };
}

export default createItem;
