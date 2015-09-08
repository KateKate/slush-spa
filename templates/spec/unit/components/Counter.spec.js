import jsdomReact from '../jsdomReact';
import React from 'react/addons';
import Counter from 'scripts/components/Counter';

const { TestUtils } = React.addons;

function setup() {
  const actions = {
    increment: sinon.spy(),
    incrementIfOdd: sinon.spy(),
    incrementAsync: sinon.spy(),
    decrement: sinon.spy(),
  };
  const component = TestUtils.renderIntoDocument(<Counter counter={1} {...actions} />);
  return {
    component: component,
    actions: actions,
    buttons: TestUtils.scryRenderedDOMComponentsWithTag(component, 'button').map(button => {
      return button.getDOMNode();
    }),
    p: TestUtils.findRenderedDOMComponentWithTag(component, 'p').getDOMNode()
  };
}

describe('Counter component', () => {
  jsdomReact();

  it('should display count', () => {
    const { p } = setup();
    expect(p.textContent).to.match(/^Clicked: 1 times/);
  });

  it('first button should call increment', () => {
    const { buttons, actions } = setup();
    TestUtils.Simulate.click(buttons[0]);
    assert.isTrue(actions.increment.called);
  });

  it('second button should call decrement', () => {
    const { buttons, actions } = setup();
    TestUtils.Simulate.click(buttons[1]);
    assert.isTrue(actions.decrement.called);
  });

  it('third button should call incrementIfOdd', () => {
    const { buttons, actions } = setup();
    TestUtils.Simulate.click(buttons[2]);
    assert.isTrue(actions.incrementIfOdd.called);
  });

  it('fourth button should call incrementAsync', () => {
    const { buttons, actions } = setup();
    TestUtils.Simulate.click(buttons[3]);
    assert.isTrue(actions.incrementAsync.called);
  });
});
