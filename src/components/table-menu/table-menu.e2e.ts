import { newE2EPage } from '@stencil/core/testing';

describe('obd-table-menu', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<obd-table-menu></obd-table-menu>');

    const element = await page.find('obd-table-menu');
    expect(element).toHaveClass('hydrated');
  });
});
