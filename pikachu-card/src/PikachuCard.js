import { html, css, LitElement } from 'lit';

export class PikachuCard extends LitElement {
  static styles = css`
    .detailsBtn{
      text-transform: uppercase;
      padding: 8px;
      background-color: black;
      color: red;
    }
    
    .card{
      text-align: center;
      background-color: orange;
      max-width:400px;
      margin: 16px;
    }
    
    .pikachuImage{
      height: auto;
      width: 200px;
      padding: 8px;
    }
    
    .title {
      font-size: 60px;
      margin: 8px;
      font-family: Arial, Helvetica, sans-serif;
    }
    
    .paragraph {
      font-size: 20px;
      margin: 16px 8px 8px;
      border: 3px solid #555;
    }
    
    @media only screen and (max-width: 500px) {
      .detailsBtn {
        visibility: hidden;
      }
    }
    
    @media only screen and (min-width: 800px) {
      .detailsBtn {
        visibility: hidden;
      }
    }
    
    @media screen and (max-width: 500px) {
      .card {
        width: 300px;
        height: auto;
      }
      .title {
        font-size: 35px;
      }
      .paragraph {
        font-size: 16px;
      }
      .detailsBtn {
        width: 150px;
        height: auto;
      }
    }
    
    .buttons button:hover {
      background-color: pink;
      color: red;
    }
    
    .buttons button:focus {
      background-color: green;
    }
  `;

  render() {
    return html`
      <div class="buttons">
      <button class="duplicateBtn">Duplicate Card</button>
      <button class="deleteCardBtn">Delete Last Card</button>
      <button class="changeColorBtn">Change Color</button>
      <button class="changeTextBtn">Change Text</button>
      </div>
      <div class="card">
        <button class="detailsBtn">Details</button>
        <h4 class="title">Pikachu</h4>
        <img class="pikachuImage"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTxYVal1cEpqlLP77-gaeY8Jd_AZpKhvo9RJA&usqp=CAU">
        <p class="paragraph" hidden>Pikachu, the Mouse Pokémon. It can generate electric attacks from the electric pouches located in both of its cheeks.</p>
      </div>
    `;
  }
}
