import { html, fixture, expect } from '@open-wc/testing';
import { stub } from 'sinon';
import '../src/Customer/Customer-details.js';

describe('customer details', () => {
  it('loads the header fine', async ()=> {
    const el = await fixture(html`<customer-details></customer-details>`);
    expect(el).to.be.accessible();
  });
});
