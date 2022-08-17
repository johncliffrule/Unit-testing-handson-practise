import { html, fixture, expect } from '@open-wc/testing';

import '../loan-application.js';

describe('LoanApplication', () => {
  it('loads the main loan application screen fine', async ()=> {
    const el = await fixture(html`<loan-application></loan-application>`);
    expect(el).to.be.accessible();
  });    
});
