import { renderizarCatalogo } from "./src/cartaoProduto.js"
import { inicializarFiltros } from "./src/filtrosCaralogo.js"
import {
    atualizarPrecoCarrinho,
    inicializarCarrinho,
    renderizarProdutosCarrinho,
} from "./src/menuCarrinho.js"

renderizarCatalogo()
inicializarCarrinho()
renderizarProdutosCarrinho()
atualizarPrecoCarrinho()
inicializarFiltros()
