import { Component, Host, h, State } from '@stencil/core';

@Component({
  tag: 'shul-widget-zmanim-ticker',
  styleUrl: 'shul-widget-zmanim-ticker.scss',
  shadow: true,
})
export class ShulWidgetZmanimTicker {

  @State() private uiCurrentDateTime: string = '';

  componentWillLoad() {
    console.log(`init`);
    this.refreshUi();
    setInterval(() => {
      this.refreshUi();
    }, 999);
  }

  refreshUi() {
    const dateTime = `${new Date().toLocaleString()}`;
    this.uiCurrentDateTime = dateTime;
  }

  render() {
    return (
      <Host>
        <slot>
          <div>The time is now: {this.uiCurrentDateTime}</div>
        </slot>
      </Host>
    );
  }

}
