import { html, css, LitElement } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { sendMessage, onMessagesUpdated } from './room-connection';


// Check out README.md for the instructions

// TODO: Your new component(s) go here! You can render them from the App component


@customElement('custom-chat')
class CustomChat extends LitElement {

  handleSubmit(e: Event) {
    e.preventDefault();
    console.log(e)
    // const usernameInput = this.shadowRoot.getElementById('usernameInput');
    // const messageInput = this.shadowRoot.getElementById('messageInput');
  
    //sendMessage(usernameInput.value, messageInput.value);
  }

  render() {
    return html`
      <h1>Hello world!</h1>
      <!-- Render new <component-tags> here! -->
      <form @submit=${this.handleSubmit}>
      <input type="text" placeholder="Username.." id="usernameInput">
      <input type="text" placeholder="Message.." id="messageInput">
      <button>Send</button>
      </form>
    `;
  }
}

@customElement('lit-app')
class App extends LitElement {
  @property({type: String})
  title = 'Realtime Test';

  static styles = css`
    :host {
      font-family: sans-serif;
      display: block;
      padding: 20px;
    }

    h1 {
      color: #00a667;
    }
  `;

  render() {
    return html`
      <h1>${this.title}</h1>
      <!-- Render new <component-tags> here! -->
      <custom-chat></custom-chat>
    `;
  }
}

































/**



  👀 Looking for an internship or job at the best employer in the Netherlands? 👀
                        👉 https://arcady.nl/ 👈



*/
