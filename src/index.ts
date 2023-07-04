import { Component, html } from '@plumejs/core';
import globalstyles from './styles/styles.scss?inline';

@Component({
  selector: 'test-ele'
})
class TestElement {
  render() {
    return html`<div data-testid="test-ele">i'm child element</div>`;
  }
}

@Component({
  selector: 'app-root',
  styles: globalstyles,
  root: true
})
export class AppComponent {
  title = '';
  greeting = '';

  mount() {
    setTimeout(() => {
      this.title = 'Hello world';
    }, 2000);
  }

  greet() {
    this.greeting = 'Hi There';
  }

  render() {
    return html`
      <main class="center" data-testid="container">
        <img src="./images/logo.jpg" />
        <h1>Welcome to PlumeJS</h1>
        <p>
          Please check
          <a href="https://github.com/KiranMantha/plumejs">here</a> for documentation
        </p>
        ${this.title ? `<div data-testid='content'>${this.title}</div>` : `<div data-testid='loader'>Loading</div>`}
        <button
          data-testid="btn-greet"
          onclick=${() => {
            this.greet();
          }}
        >
          Clickme
        </button>
        ${this.greeting ? html`<div data-testid="greeting-placeholder">${this.greeting}</div>` : null}
        <test-ele></test-ele>
      </main>
    `;
  }
}
