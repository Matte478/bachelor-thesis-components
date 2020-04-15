import { newE2EPage } from '@stencil/core/testing';

describe('obd-page-not-found', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<obd-page-not-found></obd-page-not-found>');

    const element = await page.find('obd-page-not-found');
    expect(element).toHaveClass('hydrated');
  });
});
