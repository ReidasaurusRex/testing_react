import React, { Component } from 'react';
import Link from '../src/link';
import renderer from 'react-test-renderer';

test('Link changes the class when hovered', () => {
  const linkComponent = renderer.create(
    <Link page="https://www.facebook.com">Facebook</Link>
  );
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();

  // Triggering callback
  tree.props.onMouseEnter();
  // re-render
  tree = component.toJSON();
  expect(tree).toMatchSnapshot();

  // Triggering callback
  tree.props.onMouseLeave();
  // re-render
  tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});