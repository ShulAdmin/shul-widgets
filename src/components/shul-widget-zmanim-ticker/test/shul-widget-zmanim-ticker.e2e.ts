import { newE2EPage } from '@stencil/core/testing';

describe('shul-widget-zmanim-ticker', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<shul-widget-zmanim-ticker></shul-widget-zmanim-ticker>');

    const component = await page.find('shul-widget-zmanim-ticker');
    expect(component).not.toBeNull();
    expect(component).toHaveClass('hydrated');

    const text1 = component.shadowRoot.textContent;
    expect(text1).toContain('The time is now:');
  });
});
