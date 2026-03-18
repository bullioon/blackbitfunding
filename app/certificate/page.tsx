export default function CertificateIndexPage() {
  return (
    <main
      style={{
        minHeight: "100vh",
        background: "#050505",
        color: "white",
        padding: "60px",
        fontFamily: "system-ui",
      }}
    >
      <h1 style={{ fontSize: "42px", marginBottom: "10px" }}>
        BlackBit Certificate Registry
      </h1>

      <p style={{ opacity: 0.7 }}>Open a certificate using the ID.</p>

      <p style={{ marginTop: "30px", opacity: 0.5 }}>Example:</p>

      <code>/certificate/BB-EVAL-2026-8605</code>
    </main>
  );
}