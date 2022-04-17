import React from 'react';
import PropTypes from 'prop-types';

class Form extends React.Component {
  render() {
    const { cardName, cardDescription,
      cardAttr1, cardAttr2,
      cardAttr3, cardImage,
      cardRare, cardTrunfo,
      hasTrunfo, isSaveButtonDisabled,
      onInputChange, onSaveButtonClick } = this.props;

    return (
      <form>
        <label htmlFor="cardName">
          Nome:
          <input
            type="text"
            id="name"
            data-testid="name-input"
            value={ cardName }
            onChange={ onInputChange }
            name="cardName"
          />
        </label>
        <label htmlFor="cardDescription">
          Descrição:
          <input
            type="textarea"
            id="description"
            data-testid="description-input"
            value={ cardDescription }
            onChange={ onInputChange }
            name="cardDescription"
          />
        </label>
        <label htmlFor="cardAttr1">
          Força:
          <input
            type="number"
            id="power"
            data-testid="attr1-input"
            min={ 0 }
            max={ 90 }
            value={ cardAttr1 }
            onChange={ onInputChange }
            name="cardAttr1"
          />
        </label>
        <label htmlFor="cardAttr2">
          Magia:
          <input
            type="number"
            id="magic"
            data-testid="attr2-input"
            min={ 0 }
            max={ 90 }
            value={ cardAttr2 }
            onChange={ onInputChange }
            name="cardAttr2"
          />
        </label>
        <label htmlFor="cardAttr3">
          Iniciativa:
          <input
            type="number"
            id="initiative"
            data-testid="attr3-input"
            min={ 0 }
            max={ 90 }
            value={ cardAttr3 }
            onChange={ onInputChange }
            name="cardAttr3"
          />
        </label>
        <label htmlFor="cardImage">
          Imagem:
          <input
            type="text"
            id="image"
            data-testid="image-input"
            value={ cardImage }
            onChange={ onInputChange }
            name="cardImage"
          />
        </label>
        <label htmlFor="cardRare">
          Raridade:
          <select
            id="rarity"
            data-testid="rare-input"
            value={ cardRare }
            onChange={ onInputChange }
            name="cardRare"
          >
            <option value="normal">Normal</option>
            <option value="raro">Raro</option>
            <option value="muito raro">Muito Raro</option>
          </select>
        </label>
        <label htmlFor="cardTrunfo">
          Super Trunfo:
          {hasTrunfo === true
            ? <p>Você já tem um Super Trunfo em seu baralho</p>
            : (
              <input
                type="checkbox"
                data-testid="trunfo-input"
                id="super"
                checked={ cardTrunfo }
                onChange={ onInputChange }
                name="cardTrunfo"
              />)}
        </label>
        <label htmlFor="isSaveButtonDisabled">
          <input
            type="button"
            data-testid="save-button"
            value="Salvar"
            id="save"
            onClick={ onSaveButtonClick }
            disabled={ isSaveButtonDisabled }
            name="isSaveButtonDisabled"
          />
        </label>
      </form>
    );
  }
}

Form.propTypes = {
  cardName: PropTypes.string,
  cardDescription: PropTypes.string,
  cardAttr1: PropTypes.string,
  cardAttr2: PropTypes.string,
  cardAttr3: PropTypes.string,
  cardImage: PropTypes.string,
  cardRare: PropTypes.string,
  cardTrunfo: PropTypes.bool,
  isSaveButtonDisabled: PropTypes.bool,
  onInputChange: PropTypes.func,
  onSaveButtonClick: PropTypes.func.isRequired,
}.isRequired;

export default Form;
