import { html, fixture, expect } from '@open-wc/testing';
import sinon, { stub } from 'sinon';
import '../src/LoanBasicDetails/BasicDetails';
import { BasicDetails } from '../src/LoanBasicDetails/BasicDetails';

describe('Basic details', () => {
  it('renders the basic details', async () => {
    const el = await fixture(html`<basic-details></basic-details>`);
    expect(el).to.be.accessible();
  });

  var basicDetails;

  beforeEach(() => {
    basicDetails = new BasicDetails();
  });

  it('calls _captureDetails when submit/next btn is clicked', async() => {
    setTimeout( async() => {
      const el = await fixture(html`<basic-details></basic-details>`);      
      const spy = sinon.spy(basicDetails._captureDetails);
      el.requestUpdate();
      await el.updateComplete;
    
      el.shadowRoot.getElementById('lion-submit-btn').click;      
      expect(spy.called).to.be.true;
    }, 2000);
  });
});
