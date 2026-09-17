export default function Checkout() {
  return (
    <main
      style={{
        minHeight: "100vh",
        background: "#070707",
        color: "#fff",
        padding: "30px 20px",
        fontFamily: "Arial, sans-serif",
      }}
    >
      <div style={{ maxWidth: "600px", margin: "0 auto" }}>
        <h1 style={{ fontSize: "32px", marginBottom: "10px" }}>
          Finalizar compra
        </h1>

        <p style={{ color: "#aaa", marginBottom: "30px" }}>
          Confira seu pedido e escolha a forma de pagamento.
        </p>

        <div
          style={{
            background: "#121212",
            border: "1px solid #292929",
            borderRadius: "16px",
            padding: "22px",
            marginBottom: "20px",
          }}
        >
          <h2 style={{ marginTop: 0 }}>Seu pedido</h2>

          <p style={{ color: "#aaa" }}>
            O produto selecionado aparecerá aqui.
          </p>

          <hr style={{ borderColor: "#292929" }} />

          <h2 style={{ color: "#f5b400" }}>
            Total do pedido
          </h2>
        </div>

        <div
          style={{
            background: "#121212",
            borderRadius: "16px",
            padding: "22px",
          }}
        >
          <h2>Pagamento seguro</h2>

          <p style={{ color: "#aaa", lineHeight: "1.6" }}>
            Pagamento por PIX ou cartão através do Mercado Pago.
          </p>

          <button
            style={{
              width: "100%",
              padding: "16px",
              marginTop: "15px",
              background: "#f5b400",
              color: "#000",
              border: "none",
              borderRadius: "10px",
              fontSize: "17px",
              fontWeight: "bold",
            }}
          >
            PAGAR COM MERCADO PAGO
          </button>
        </div>

        <p
          style={{
            textAlign: "center",
            color: "#777",
            marginTop: "30px",
          }}
        >
          © 2026 Black Box Shop
        </p>
      </div>
    </main>
  );
}
