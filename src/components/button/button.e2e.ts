import { newE2EPage } from '@stencil/core/testing';

describe('obd-button', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<obd-button></obd-button>');

    const element = await page.find('obd-button');
    expect(element).toHaveClass('hydrated');
  });
});
