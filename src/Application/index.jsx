import { Component } from 'preact';

export class Application extends Component {
  constructor() {
    super();
    this.state = {
      active: false,
    };
  }

  render({ name, href }) {
    return (
      <div>
        <span>{name} ({href})</span>
      </div>
    );
  }
}
