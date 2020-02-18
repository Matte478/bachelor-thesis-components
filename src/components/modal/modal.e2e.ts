import { newE2EPage } from '@stencil/core/testing';

describe('obd-modal', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<obd-modal></obd-modal>');

    const element = await page.find('obd-modal');
    expect(element).toHaveClass('hydrated');
  });
});
