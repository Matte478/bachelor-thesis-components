import { newE2EPage } from '@stencil/core/testing';

describe('obd-table-employee', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<obd-table-employee></obd-table-employee>');

    const element = await page.find('obd-table-employee');
    expect(element).toHaveClass('hydrated');
  });
});
