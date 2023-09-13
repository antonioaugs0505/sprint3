import { Link } from "react-router-dom";

export default function Solicitacao() {
  return (
    <main className="dados">
      <div className="form">
            <form action="#">
                <div className="form-header">
                    <div className="title">
                        <h1>Dados pessoais</h1>
                    </div>
                </div>

                <div className="input-group">
                    <div className="input-box">
                        <label>Nome</label>
                        <input id="name" type="text" name="name" placeholder="Digite seu nome" required/>
                    </div>

                    <div className="input-box">
                        <label>Sobrenome</label>
                        <input id="sobrenome" type="text" name="sobrenome" placeholder="Digite seu sobrenome" required/>
                    </div>

                    <div className="input-box">
                        <label>E-mail</label>
                        <input id="email" type="email" name="email" placeholder="Digite seu e-mail" required/>
                    </div>

                    <div className="input-box">
                        <label>Telefone</label>
                        <input id="tel" type="tel" name="tel" placeholder="Digite seu telefone" required/>
                    </div>

                    <div className="input-box">
                        <label>Data de nascimento</label>
                        <input id="date" type="date" name="number" required/>
                    </div>

                    <div className="input-box">
                        <label>CPF</label>
                        <input id="cpf" type="number" name="cpf" placeholder="Ex: 44422233380" required/>
                    </div>

                    <div className="input-box">
                        <label>CEP</label>
                        <input id="cep" type="number" name="cep" placeholder="Digite seu CEP" required/>
                    </div>

                    <div className="input-box">
                        <label>Estado</label>
                        <input id="estado" type="text" name="estado" placeholder="Digite seu estado" required/>
                    </div>

                    <div className="input-box">
                        <label>Cidade</label>
                        <input id="cidade" type="text" name="cidade" placeholder="Digite sua cidade" required/>
                    </div>

                    <div className="input-box">
                        <label>Endereço</label>
                        <input id="end" type="text" name="end" placeholder="Digite seu endereço" required/>
                    </div>

                    <div className="input-box">
                        <label>Número</label>
                        <input id="numero" type="text" name="numero" placeholder="Digite seu número" required/>
                    </div>

                    <div className="input-box">
                        <label>Complemento</label>
                        <input id="complemento" type="text" name="complemento" placeholder="Digite seu completemnto" required/>
                    </div>


                </div>

                <div className="gender-inputs">
                    <div className="gender-title">
                        <h6>Gênero</h6>
                    </div>

                    <div className="gender-group">
                        <div className="gender-input">
                            <input id="female" type="radio" name="gender"/>
                            <label>Feminino</label>
                        </div>

                        <div className="gender-input">
                            <input id="male" type="radio" name="gender"/>
                            <label>Masculino</label>
                        </div>

                        <div className="gender-input">
                            <input id="others" type="radio" name="gender"/>
                            <label>Outros</label>
                        </div>

                        <div className="gender-input">
                            <input id="none" type="radio" name="gender"/>
                            <label>Prefiro não dizer</label>
                        </div>
                    </div>
                </div>

             
                
            </form>
        </div>

        <div className="form">
            <form action="#">
                <div className="form-header">
                    <div className="title">
                        <h1>Dados do veículo</h1>
                    </div>
                </div>

                <div className="input-group">
                    <div className="input-box">
                        <label>Carro</label>
                        <input id="carro" type="text" name="carro" placeholder="Digite seu carro" required/>
                    </div>

                    <div className="input-box">
                        <label for="placa">Placa</label>
                        <input id="placa" type="text" name="placa" placeholder="Digite sua placa" required/>
                    </div>

                    <div className="input-box">
                        <label>Ano de fabricação</label>
                        <input id="anofab" type="number" name="anofab" placeholder="Digite o ano de fabricação" required/>
                    </div>

                    <div className="input-box">
                        <label>Eixos</label>
                        <input id="eixps" type="number" name="eixos" placeholder="Digite a quantidade de eixos" required/>
                    </div>

                    <div class="input-box">
                        <label for="comp">Comprimento</label>
                        <input id="comp" type="number" name="eixos" placeholder="Ex: 120" required/>
                    </div>

                    <div class="input-box">
                        <label for="altura">Altura</label>
                        <input id="altura" type="number" name="altura" placeholder="Ex: 80" required/>
                    </div>

                    <div class="input-box">
                        <label for="peso">Peso</label>
                        <input id="peso" type="number" name="peso" placeholder="Digite o peso" required/>
                    </div>

                    <div class="input-box">
                        <label for="chassi">Chassi</label>
                        <input id="chassi" type="number" name="chassi" placeholder="Digite a quantidade de chassi" required/>
                    </div>
                </div>
            </form>
        </div>

        <div class="form">
            <form action="#">
                <div class="form-header">
                    <div class="title">
                        <h1>Dados do acidente</h1>
                    </div>
                </div>

                <div class="input-group">
                   
                <div class="input-box">
                        <label for="hora">Horário</label>
                        <input id="hora" type="text" name="hora" placeholder="Ex: 23:20" required/>
                    </div>

                    <div class="input-box">
                        <label for="estado-p">Estado</label>
                        <input id="estado-p" type="text" name="estado-p" placeholder="Digite sua cidade" required/>
                    </div>

                    <div class="input-box">
                        <label for="cidade-p">Cidade</label>
                        <input id="cidade-p" type="text" name="cidade-p" placeholder="Digite sua cidade" required/>
                    </div>

                    <div class="input-box">
                        <label for="end-p">Endereço</label>
                        <input id="end-p" type="text" name="end-p" placeholder="Digite seu endereço" required/>
                    </div>

                    <div class="input-box">
                        <label for="numero-p">Número</label>
                        <input id="numero-p" type="text" name="numero-p" placeholder="Digite seu número" required/>
                    </div>

                    <div class="input-box">
                        <label for="complemento-p">Complemento</label>
                        <input id="complemento-p" type="text" name="complemento-p" placeholder="Digite seu completemnto" required/>
                    </div>


                </div>

                <div class="gender-inputs">           <div class="gender-title">
                        <h6>Tipo de problema</h6>
                    </div>

                    <div class="gender-group">
                        <div class="gender-input">
                            <input id="female" type="radio" name="gender"/>
                            <label for="female">Pneu furado</label>
                        </div>

                        <div class="gender-input">
                            <input id="male" type="radio" name="gender"/>
                            <label for="male">Problema na bateria</label>
                        </div>

                        <div class="gender-input">
                            <input id="others" type="radio" name="gender"/>
                            <label for="others">Motor fundido</label>
                        </div>

                        <div class="gender-input">
                            <input id="others" type="radio" name="gender"/>
                            <label for="others">Problemas na direção</label>
                        </div>

                        <div class="gender-input">
                            <input id="none" type="radio" name="gender"/>
                            <label for="none">Outro</label>
                        </div>
                    </div>
                </div>

                
                <div class="input-box">
                        <label for="numero-p">Outro</label>
                        <input id="complemento-p" type="textarea" name="complemento-p" placeholder="Digite seu completemnto" required/>
                    </div>

             
                
            </form>

            <div class="btn-continuar">
                    <Link to="/enviado" ><button><a href="">Continuar</a> </button></Link>
            </div>


        </div>

       


       
    </main>
  );
}