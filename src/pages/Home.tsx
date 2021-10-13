import illustrationImg from '../assets/images/illustration.svg'
import logoImg from '../assets/images/logo.svg';
import googleImg from '../assets/images/googleImg.svg'
import '../styles/auth.scss'
import  {Button} from '../components/Button'
export const Home = () =>{  //tela de authentication

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
                                <button className="create-room">
                                    <img src={googleImg} alt="Logo do Google" />
                                    Crie sua sala com Google
                                </button>
                                <div className="separator">ou entre em uma sala</div>
                                <form >
                                        <input type="text"
                                            placeholder="Digite o código da sala"
                                        />
                                        <Button type="submit">entrar na sala</Button>



                                </form>
                            </div>

                    </main>

            </div>

    );

}