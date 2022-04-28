import { newSpecPage } from '@stencil/core/testing';
import { ShulWidgetZmanimTicker } from '../shul-widget-zmanim-ticker';
import FakeTimers from "@sinonjs/fake-timers";

describe('shul-widget-zmanim-ticker', () => {
  let clock: FakeTimers.InstalledClock;

  beforeEach(() => {
    clock = FakeTimers.install({ now: new Date("4/1/2022, 12:00:00 PM") });
  })

  afterEach(() => {
    clock.uninstall();
  })

  it('renders', async () => {
    const page = await newSpecPage({
      components: [ShulWidgetZmanimTicker],
      html: `<shul-widget-zmanim-ticker></shul-widget-zmanim-ticker>`,
    });
    expect(page.root.outerHTML).toContain(`<shul-widget-zmanim-ticker>`);

    console.log(page.root.shadowRoot.innerHTML);
    const text1 = page.root.shadowRoot.textContent;
    expect(text1).toContain('The time is now:');
    expect(text1).toContain('4/1/2022');

    clock.setSystemTime(new Date("4/1/2000, 12:00:00 PM"));
    clock.tick(30_000); // Advance the ticks to allow the setInterval to pass
    await page.waitForChanges();

    const text2 = page.root.shadowRoot.textContent;
    expect(text2).toContain('The time is now:');
    expect(text2).toContain('4/1/2000');
    console.log(text1);
    console.log(text2);
    expect(text1).not.toEqual(text2);
  });
});
