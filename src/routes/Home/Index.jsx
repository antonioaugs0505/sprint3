import guincho from '../../assets/img/guincho.jpg'
import { Link } from 'react-router-dom'

export default function Home(){
    return(

       <main>
            <section className="apresentacao">
            <div className="apresentacao-texto">
                 <h3>ModalSure</h3>
                <p>O novo método em solicitação de guinchos. Com a nossa tecnologia integrada, automatização e eficiência, o guincho ideal para sua demanda chegará no menor tempo!</p>
                <Link to='/solicitacao' className='link-solicitacao'>SOLICITAR GUINCHO</Link> 
            </div>

            <figure className='imagem-apresentacao' ><img src={guincho} alt=" imagem descrivitva" /></figure>
            </section>

            <section  id='contato' className="contato">

            <form action="" className='form-email'>
                <input type="text" placeholder='Nome' />
                <input type="text" placeholder='Email' />

            <button className='btn-enviar'>ENVIAR</button>
                
            </form>
               
            <h3>Caso queira mais informações entre contato!</h3>


            
         

            </section>
       </main>

    )
}