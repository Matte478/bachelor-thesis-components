import { newE2EPage } from '@stencil/core/testing';

describe('obd-table', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<obd-table></obd-table>');

    const element = await page.find('obd-table');
    expect(element).toHaveClass('hydrated');
  });
});
