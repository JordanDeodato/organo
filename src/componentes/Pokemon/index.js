import './Pokemon.css';

const Pokemon = ({nome, tipo, imagem, corDeFundo, apagar}) => {

    return (
        <div className='pokemon'>
            <div className='cabecalho' style={{backgroundColor: corDeFundo}}>
                <img src={imagem} alt='' />
            </div>
            <div className='rodape'>
                <h4>{nome}</h4>
                <h5>{tipo}</h5>
                <div className='apagar'>
                    <img onClick={apagar} alt="icone excluir" src="./imagens/excluir.png" />
                </div>
            </div>
        </div>
    )
}

export default Pokemon;