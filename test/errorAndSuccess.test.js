import { html, fixture, expect } from '@open-wc/testing';
// import { stub } from 'sinon';
import '../src/SuccessAndError/Success.js';
import '../src/SuccessAndError/Error.js';

describe('Success screen ', () => {
  it('loads the success screen fine', async ()=> {
    const el = await fixture(html`<loan-error></loan-error>`);
    expect(el).to.be.accessible();
  });
});

describe('error screen', () => {  
  it('loads the error screen fine', async ()=> {
    const el = await fixture(html`<loan-success></loan-success>`);
    expect(el).to.be.accessible();
  });
});
