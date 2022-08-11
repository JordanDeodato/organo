import Pokemon from '../Pokemon';
import './Time.css';

const Time = (props) => {
    const cssBackground = {background: props.corSecundaria};
    const cssBackgroundH3 = {borderColor: props.corPrimaria};

    const apagar = (event) => {
        event.target.parentNode.parentNode.parentNode.parentNode.remove();
    }

    return (
        <section style={cssBackground} className='time'>
            <h3 style={cssBackgroundH3}>{props.nome}</h3>
            <div className='container'>
                {props.pokemons.map(pokemon => 
                    <div className='pokemon'>
                        <Pokemon 
                        key={pokemon.nome}
                        nome={pokemon.nome} 
                        tipo={pokemon.tipo} 
                        imagem={pokemon.imagem}
                        time={pokemon.time}
                        corDeFundo={props.corPrimaria}
                        apagar={apagar}/>
                    </div>)
                    }
            </div>
        </section>
    )
}

export default Time;