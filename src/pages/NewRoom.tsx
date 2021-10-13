import illustrationImg from '../assets/images/illustration.svg'
import '../styles/auth.scss'
import  {Button} from '../components/Button'
import logoImg from '../assets/images/logo.svg';
export const NewRoom= () =>{  //tela de criar salas

    return (
            <div id="page-auth">
                    <aside>
                        <img src={illustrationImg} alt="Illustração" />
                        <strong>Crie salas Q&amp;A ao-vivo</strong>
                        <p>Tire as dúvidas da sua audiência em tempo-real</p>
                    </aside>
                    <main>
                            <div className="main-content">
                                <img src={logoImg} alt="Letmeask" />
                                <h2>Criar uma nova sala</h2>
                                
                                <form >
                                        <input type="text"
                                            placeholder="Nome da sala"
                                        />
                                        <Button type="submit">Criar sala</Button>



                                </form>
                                <p>
                                    Quer entrar em uma sala existente? <a href="#">Clique aqui</a>
                                </p>
                            </div>

                    </main>

            </div>

    );

}