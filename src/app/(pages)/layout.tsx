export default function PagesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      {/* Header compartilhado */}
      <header style={{ background: "#333", color: "#fff", padding: "20px" }}>
        <h1>Meu Portfolio</h1>
        <nav>
          <a href="/">Home</a>
          <a href="/teste">Teste</a>
          <a href="/sobre">Sobre</a>
        </nav>
      </header>

      {/* Conteúdo das páginas */}
      <main style={{ padding: "20px" }}>{children}</main>

      {/* Footer compartilhado */}
      <footer
        style={{
          background: "#333",
          color: "#fff",
          padding: "20px",
          textAlign: "center",
        }}
      >
        <p>&copy; 2025 Meu Portfolio</p>
      </footer>
    </>
  );
}
