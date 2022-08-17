import { html, fixture, expect } from '@open-wc/testing';
import '../src/LoanEMIDetails/LoanEMIDetails.js';

describe('Loan EMI details', () => {
  it('loads the loan EMI screen fine', async ()=> {
    const el = await fixture(html`<loanemi-details></loanemi-details>`);
    expect(el).to.be.accessible();
  });
});
