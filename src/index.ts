import { Component, html } from '@plumejs/core';
import globalstyles from './styles/styles.scss?inline';

@Component({
  selector: 'app-root',
  styles: globalstyles,
  root: true
})
export class AppComponent {
  title = '';
  mount() {
    setTimeout(() => {
      this.title = 'Hello world';
    }, 2000);
  }

  render() {
    return html`
      <main class="center">
        <img src="./images/logo.jpg" />
        <h1>Welcome to PlumeJS</h1>
        <p>
          Please check
          <a href="https://github.com/KiranMantha/plumejs">here</a> for documentation
        </p>
        ${this.title ? `<div>${this.title}</div>` : `<div title='loader'>Loading</div>`}
      </main>
    `;
  }
}
