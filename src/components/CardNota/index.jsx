import React, { Component } from "react";
import "./styles.css";

class CardNota extends Component {
    apagar () {
        const indice = this.props.indice;
        this.props.apagarNota(indice)
    }

    render() {
        return (
            <section className="card-nota">
                <header className="card-nota_cabecalho">
                    <h3 className="card-nota_titulo">{ this.props.titulo }</h3>
                    <button className="card-trash" onClick={ this.apagar.bind(this) } type="button" id="delete">🗑️</button>
                    <h4 className="card-category">{ this.props.categoria }</h4>
                </header>
                <p className="card-nota_texto">{ this.props.texto }</p>
            </section>
        );
    }
}

export default CardNota;
