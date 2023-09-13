import { Link } from "react-router-dom";

export default function Enviado() {
  return (
    <main className="enviado">
      <div>
        <p>Muito obrigado pela solicitação!</p>
        <p>Seus dados foram coletados e foram encaminhados para nossa Central! Em breve, você receberá um contato referente à sua solicitação</p>
      </div>

      <Link to="/" className="voltar">Voltar para Home</Link>
    </main>
  );
}
