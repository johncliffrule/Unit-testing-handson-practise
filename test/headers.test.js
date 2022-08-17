import { html, fixture, expect } from '@open-wc/testing';
import { stub } from 'sinon';
import '../src/header/Header';

describe('loan-header', () => {
  it('loads the header fine', async ()=> {
    const el = await fixture(html`<loan-header></loan-header>`);
    expect(el).to.be.accessible();
  });
});
