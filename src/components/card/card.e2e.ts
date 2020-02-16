import { newE2EPage } from '@stencil/core/testing';

describe('obd-card', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<obd-card></obd-card>');

    const element = await page.find('obd-card');
    expect(element).toHaveClass('hydrated');
  });
});
