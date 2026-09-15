export const metadata = {
  title: "Black Box Shop",
  description: "Tecnologia e entretenimento em um só lugar",
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR">
      <body style={{ margin: 0 }}>{children}</body>
    </html>
  );
}
