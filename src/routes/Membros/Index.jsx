import { Link } from "react-router-dom";

export default function Membros() {
  return (
    <main className="membros">
      <div>
        <p>550113 - Charles Pinto da Silveira Carvalho</p>
        <p>550344 - Antonio Augusto Gomes dos Santos</p>
        <p>99354 - Raphael Torres Gonçalves</p>
        <p>99491 - Camilla Ribeiro Santana</p>
        <p>94156 - Luan Ribeiro Dias</p>
      </div>

      <Link to="/" className="voltar">Voltar para Home</Link>
    </main>
  );
}