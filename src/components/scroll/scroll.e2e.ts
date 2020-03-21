import { newE2EPage } from '@stencil/core/testing';

describe('obd-scroll', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<obd-scroll></obd-scroll>');

    const element = await page.find('obd-scroll');
    expect(element).toHaveClass('hydrated');
  });
});
