export default function Home() {
  const produtos = [
    { nome: "Fire TV Stick", preco: "R$ 375,00", valor: "375.00" },
    { nome: "Xiaomi TV Stick", preco: "R$ 299,00", valor: "299.00" },
    { nome: "TV Box", preco: "R$ 249,00", valor: "249.00" },
    { nome: "Acessórios", preco: "A partir de R$ 39,90", valor: "39.90" },
    ];
  return (
    <main>
     <header>
     <h1>Black Box Shop</h1>
    <p>Ofertas em tecnologia para você</p>
  </header>
  <section>
    <h2>Produtos</h2>
  {produtos.map((produto) => (
    <div key={produto.nome}>
    <h3>{produto.nome}</h3>
                <p>{produto.preco}</p>
                <button>Comprar</button>
                </div>
                ))}
  </section>
  </main>
  );
}
