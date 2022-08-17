import { html, fixture, expect } from '@open-wc/testing';
import { stub } from 'sinon';
import '../src/LoanBasicDetails/BasicDetails';

describe('Basic details', () => {
  it('renders the basic details', async () => {
    const el = await fixture(html`<basic-details></basic-details>`);
    expect(el).to.be.accessible();
  })

  it('calls _captureDetails when submit/next btn is clicked', async () => {
    const el = await fixture(html`<basic-details></basic-details>`);
    const myFunctionStub = stub(el, '_captureDetails');
    el.requestUpdate();
    await el.updateComplete;
   
    el.shadowRoot.getElementById('lion-submit-btn').click();
    expect(myFunctionStub).to.have.calledOnce();
  })
});
