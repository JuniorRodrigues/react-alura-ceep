import React, { Component } from "react";
import "./estilo.css";

class FormularioCadastro extends Component {
    constructor (props) {
        super(props);
        this.titulo = 'Link';
        this.texto = 'Hey, Listen';
        this.categoria = 'Sem categoria';
        this.state = { categorias: [] };

        this._novasCategorias = this._novasCategorias.bind(this);
    }

    componentDidMount () {
        this.props.categorias.inscrever(this._novasCategorias);
    }

    componentWillUnmount () {
        this.props.categorias.desinscrever(this._novasCategorias);
    }

    _novasCategorias (categorias) {
        this.setState({ ...this.state, categorias })
    }

    _handleTitleChange (e) {
        this.titulo = e.target.value;
    }

    _handleTextChange (e) {
        this.texto = e.target.value;
    }

    _handleCategoryChange (e) {
        this.categoria = e.target.value;
    }

    _createSticky (e) {
        e.preventDefault();
        this.props.criarNota(this.titulo, this.texto, this.categoria);
    }

    render () {
        return (
            <form className="form-cadastro" onSubmit={ this._createSticky.bind(this) }>
                <select
                    onChange={ this._handleCategoryChange.bind(this) }
                    className="form-field"
                >
                    <option>Sem categoria</option>
                    { this.state.categorias.map((category, index) => {
                        return <option key={ index }>{ category }</option>
                    })}
                </select>
                <input
                    type="text"
                    placeholder="Título"
                    className="form-field"
                    onChange={ this._handleTitleChange.bind(this) }
                />
                <textarea
                    rows={15}
                    placeholder="Escreva sua nota..."
                    className="form-field"
                    onChange={ this._handleTextChange.bind(this) }
                />
                <button className="form-field form-cadastro_submit">
                    Criar Nota
                </button>
            </form>
        );
    }
}

export default FormularioCadastro;
