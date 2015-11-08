jest.dontMock('../js/components/page.js');

import React from 'react';
import ReactDOM from 'react-dom';
import TestUtils from 'react-addons-test-utils';

const Page = require('../js/components/page');

describe('Page', () => {
  it('renders the page', () => {
    // Render page
    let page = TestUtils.renderIntoDocument(
      <Page />
    );
    let pageNode = ReactDOM.findDOMNode(page);
    
    // Verify content
    expect(pageNode.textContent).toContain('My Page');
  });
});
