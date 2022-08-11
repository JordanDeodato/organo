import './Rodape.css';

const Rodape = () => {
    return(
        <div className='footer'>
            <div>
                <img alt="icone fb" src="./imagens/fb.png" />
                <img alt="icone tt" src="./imagens/tw.png" />
                <img alt="icone ig" src="./imagens/ig.png" />
            </div>
            <div className='logo-rodape'>
                <img alt="logo" src="imagens/banner-logo.png" />
            </div>
            <div>
                <p>Desenvolvido por Jordan Deodato</p>
            </div>
        </div>
    )
}

export default Rodape;