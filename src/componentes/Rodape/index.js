import './Rodape.css';

const Rodape = () => {
    return(
        <div className='footer'>
            <div>
                <img alt="icone fb" src="./imagens/fb.png" />
                <img alt="icone tt" src="./imagens/tw.png" />
                <a href="https://www.instagram.com/jordan_deodato/"><img alt="icone ig" src="./imagens/ig.png" /></a>
            </div>
            <div className='logo-rodape'>
                <img alt="logo" src="imagens/banner-logo.png" />
            </div>
            <div>
                <p>Desenvolvido por <a href="https://www.linkedin.com/in/jordandeodato/" target="blank">Jordan Deodato</a></p>
            </div>
        </div>
    )
}

export default Rodape;