jest.dontMock('../js/components/nomatch.js');

import React from 'react';
import ReactDOM from 'react-dom';
import TestUtils from 'react-addons-test-utils';

const NoMatch = require('../js/components/nomatch');

describe('No Match', () => {
  it('renders the 404 page', () => {
    // Render page
    let nomatch = TestUtils.renderIntoDocument(
      <NoMatch />
    );
    let nomatchNode = ReactDOM.findDOMNode(nomatch);
    
    // Verify content
    expect(nomatchNode.textContent).toContain('Page Not Found');
  });
});
