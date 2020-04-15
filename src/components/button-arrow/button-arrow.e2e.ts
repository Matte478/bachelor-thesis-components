import { newE2EPage } from '@stencil/core/testing';

describe('obd-button-arrow', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<obd-button-arrow></obd-button-arrow>');

    const element = await page.find('obd-button-arrow');
    expect(element).toHaveClass('hydrated');
  });
});
