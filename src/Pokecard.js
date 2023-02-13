import React, { Component } from 'react';
import pokecard from './Pokecard.css'

const POKE_API = 'https://assets.pokemon.com/assets/cms2/img/pokedex/detail/'
function addZero(id) {
    const onezero = '0'
    const twozero = '00'

    if (id < 10) {
        id = twozero + id;
    }
    else if (id < 100) {
        id = onezero + id;
    }
    return id;
}
class Pokecard extends Component {
    render() {
        let imgSrc = `${POKE_API}${addZero(this.props.id)}.png`;

        return (
            <div className='Pokecard' >
                <h1 className='Pokecard-title'>{this.props.name}</h1>
                <div className='img'>
                    <img src={imgSrc} alt={this.props.name} />

                </div>
                <p className='Pokecard-data'>Type : {this.props.type}</p>
                <p >Exp : {this.props.exp}</p>
            </div>
        );


    }
}

export default Pokecard