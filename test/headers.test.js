import { html, fixture, expect } from '@open-wc/testing';
import sinon, { stub } from 'sinon';
import '../src/header/Header';
import { Header } from '../src/header/Header';

describe('loan-header', () => {
  it('loads the header fine', async ()=> {
    const el = await fixture(html`<loan-header></loan-header>`);
    expect(el).to.be.accessible();
  });

  it('calls locale method when language is clicked', async () => {
    const el = await fixture(html`<loan-header></loan-header>`);
    const header = new Header();    

    el.shadowRoot.querySelector('button').click();
    const spy = sinon.spy(header, "localeChanged");
    // expect(spy.called).to.be.true();
  });
});
