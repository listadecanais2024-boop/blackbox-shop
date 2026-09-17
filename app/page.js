
  export default function Home() {
  const produtos = [
    { nome: "Fire TV Stick", preco: "R$ 375,00", desc: "Streaming rápido, compacto e fácil de usar." },
    { nome: "Xiaomi TV Stick", preco: "R$ 299,00", desc: "Transforme sua TV em uma Smart TV." },
    { nome: "TV Box", preco: "R$ 249,00", desc: "Entretenimento e aplicativos na sua televisão." },
    { nome: "Acessórios", preco: "A partir de R$ 39,90", desc: "Controles, cabos e acessórios para seus aparelhos." },
  ];

  return (
    <main style={{ margin: 0, background: "#070707", color: "#fff", minHeight: "100vh", fontFamily: "Arial, sans-serif" }}>
      <header style={{ padding: "22px", borderBottom: "1px solid #222" }}>
        <div style={{ fontSize: "25px", fontWeight: "900" }}>
          BLACK <span style={{ color: "#f5b400" }}>BOX</span> SHOP
        </div>
      </header>

      <section style={{ padding: "55px 22px", textAlign: "center", background: "linear-gradient(180deg,#111,#070707)" }}>
        <div style={{ color: "#f5b400", fontWeight: "bold" }}>TECNOLOGIA & ENTRETENIMENTO</div>

        <h1 style={{ fontSize: "38px", margin: "15px 0" }}>
          Tecnologia para deixar sua casa mais conectada.
        </h1>

        <p style={{ color: "#bbb", fontSize: "17px", lineHeight: "1.6" }}>
          Produtos selecionados, compra fácil e pagamento seguro.
        </p>

        <a
          href="#produtos"
          style={{
            display: "inline-block",
            marginTop: "20px",
            padding: "15px 25px",
            background: "#f5b400",
            color: "#000",
            borderRadius: "10px",
            fontWeight: "bold",
            textDecoration: "none",
          }}
        >
          VER PRODUTOS
        </a>
      </section>

      <section id="produtos" style={{ padding: "35px 20px" }}>
        <h2 style={{ fontSize: "28px" }}>Produtos em destaque</h2>

        <div style={{ display: "grid", gap: "18px" }}>
          {produtos.map((produto) => (
            <div
              key={produto.nome}
              style={{
                background: "#121212",
                border: "1px solid #292929",
                borderRadius: "16px",
                padding: "22px",
              }}
            >
              <div style={{ height: "120px", background: "#1c1c1c", borderRadius: "12px", marginBottom: "18px", display: "flex", alignItems: "center", justifyContent: "center", color: "#777" }}>
                FOTO DO PRODUTO
              </div>

              <h3 style={{ fontSize: "22px", marginBottom: "8px" }}>{produto.nome}</h3>

              <p style={{ color: "#aaa", lineHeight: "1.5" }}>{produto.desc}</p>

              <div style={{ color: "#f5b400", fontSize: "22px", fontWeight: "bold", margin: "18px 0" }}>
                {produto.preco}
              </div>

              <button
                style={{
                  width: "100%",
                  padding: "14px",
                  background: "#f5b400",
                  color: "#000",
                  border: "none",
                  borderRadius: "9px",
                  fontWeight: "bold",
                  fontSize: "16px",
                }}
              >
                COMPRAR
              </button>
            </div>
          ))}
        </div>
      </section>

      <section style={{ margin: "20px", padding: "28px 20px", background: "#111", borderRadius: "16px", textAlign: "center" }}>
        <h2>Pagamento seguro</h2>
        <p style={{ color: "#aaa", lineHeight: "1.6" }}>
          Em breve: pagamento por PIX e cartão integrado ao Mercado Pago.
        </p>
      </section>

      <footer style={{ padding: "35px 20px", textAlign: "center", color: "#777", borderTop: "1px solid #222" }}>
        © 2026 Black Box Shop
      </footer>
    </main>
  );
}

