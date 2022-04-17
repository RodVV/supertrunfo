import React from 'react';
import Form from './components/Form';
import Card from './components/Card';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      cardName: '',
      cardDescription: '',
      cardAttr1: '0',
      cardAttr2: '0',
      cardAttr3: '0',
      cardImage: '',
      cardRare: 'normal',
      cardTrunfo: false,
      hasTrunfo: false,
      isSaveButtonDisabled: true,
      newCard: [],
    };
    this.onInputChange = this.onInputChange.bind(this);
    this.onSaveButtonClick = this.onSaveButtonClick.bind(this);
    this.trunfoCheck = this.trunfoCheck.bind(this);
  }

  onInputChange =({ target }) => {
    const { name } = target;
    const value = (target.type === 'checkbox') ? target.checked : target.value;
    this.setState({
      [name]: value,
    }, () => this.validate());
  }

  onSaveButtonClick(event) {
    event.preventDefault();
    const { cardName, cardDescription, cardAttr1,
      cardAttr2, cardAttr3, cardImage, cardRare,
      cardTrunfo, hasTrunfo,
    } = this.state;
    const cardArray = { cardName,
      cardDescription,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardImage,
      cardRare,
      cardTrunfo,
      hasTrunfo,
    };
    this.setState((prevState) => ({
      newCard: [...prevState.newCard, cardArray],
    }));
    this.setState(
      {
        cardName: '',
        cardDescription: '',
        cardAttr1: '0',
        cardAttr2: '0',
        cardAttr3: '0',
        cardImage: '',
        cardRare: 'normal',
        cardTrunfo: false,
        hasTrunfo: false,
      },
      () => this.trunfoCheck(),
    );
  }

  validate = () => {
    const { cardName, cardDescription,
      cardAttr1, cardAttr2,
      cardAttr3, cardImage,
      cardRare,
    } = this.state;

    const attr1 = parseInt(cardAttr1, 10);
    const attr2 = parseInt(cardAttr2, 10);
    const attr3 = parseInt(cardAttr3, 10);
    const attrTotal = attr1 + attr2 + attr3;
    const maxTotal = 210;
    const maxAttr = 90;
    const minAttr = 0;

    if (
      cardName === ''
      || cardDescription === ''
      || cardImage === ''
      || cardRare === ''
      || cardAttr1 < minAttr
      || cardAttr1 > maxAttr
      || cardAttr2 < minAttr
      || cardAttr2 > maxAttr
      || cardAttr3 < minAttr
      || cardAttr3 > maxAttr
      || attrTotal > maxTotal
    ) {
      this.setState({ isSaveButtonDisabled: true });
    } else {
      this.setState({ isSaveButtonDisabled: false });
    }
  }

  trunfoCheck() {
    const { newCard } = this.state;
    const cardWithTrunfo = newCard.some((check) => check.cardTrunfo === true);
    if (cardWithTrunfo) {
      this.setState({ hasTrunfo: true });
    } else {
      this.setState({ hasTrunfo: false });
    }
  }

  render() {
    const { cardName, cardDescription,
      cardAttr1, cardAttr2,
      cardAttr3, cardImage,
      cardRare, cardTrunfo,
      hasTrunfo, isSaveButtonDisabled,
      newCard,
    } = this.state;

    return (
      <div>
        <title>Adicionar nova Carta</title>
        <h1>Informacoes da carta</h1>
        <div>
          <Form
            cardName={ cardName }
            cardDescription={ cardDescription }
            cardAttr1={ cardAttr1 }
            cardAttr2={ cardAttr2 }
            cardAttr3={ cardAttr3 }
            cardImage={ cardImage }
            cardRare={ cardRare }
            cardTrunfo={ cardTrunfo }
            hasTrunfo={ hasTrunfo }
            isSaveButtonDisabled={ isSaveButtonDisabled }
            onInputChange={ this.onInputChange }
            onSaveButtonClick={ this.onSaveButtonClick }
          />
        </div>
        <h2>Prévia da Carta</h2>
        <div>
          <Card
            cardName={ cardName }
            cardDescription={ cardDescription }
            cardAttr1={ cardAttr1 }
            cardAttr2={ cardAttr2 }
            cardAttr3={ cardAttr3 }
            cardImage={ cardImage }
            cardRare={ cardRare }
            cardTrunfo
          />
        </div>
        <h3>Lista de cartas</h3>
        <div>
          {newCard.map((cardNew) => (
            <div key={ cardNew.cardName }>
              <Card
                key={ cardNew.cardName }
                cardName={ cardNew.cardName }
                cardDescription={ cardNew.cardDescription }
                cardAttr1={ cardNew.cardAttr1 }
                cardAttr2={ cardNew.cardAttr2 }
                cardAttr3={ cardNew.cardAttr3 }
                cardImage={ cardNew.cardImage }
                cardRare={ cardNew.cardRare }
                cardTrunfo={ cardNew.cardTrunfo }
              />
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default App;
