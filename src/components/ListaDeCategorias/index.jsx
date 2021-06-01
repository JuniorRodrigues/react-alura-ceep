import React, { Component } from "react";
import "./styles.css";

class ListaDeCategorias extends Component {
    constructor() {
        super();
        this.state = { categorias: []}
        this._novasCategorias = this._novasCategorias.bind(this)
    }

    componentDidMount() {
        this.props.categorias.inscrever(this._novasCategorias);
    }

    componentWillUnmount () {
        this.props.categorias.inscrever(this._novasCategorias);
    }

    _novasCategorias(categorias) {
        this.setState({...this.state, categorias});
    }

    _handlerSubmit (e) {
        e.preventDefault();

        const input = e.target.querySelector('input');
        const categoryValue = input.value;
        this.props.adicionarCategoria(categoryValue);
        input.value = '';
    }

    render() {
        return (
            <div className="wrap-categories">
                <ul>
                    <li>Sem categoria</li>
                    { this.state.categorias.map((categoria, index) => {
                        return (
                            <li key={ index }>
                                { categoria }
                            </li>
                        );
                    }) }
                </ul>
                <form onSubmit={ this._handlerSubmit.bind(this) }>
                    <input type="text"
                        placeholder="Adicionar Categoria"
                    />
                </form>
            </div>
        );
    }
}

export default ListaDeCategorias;
