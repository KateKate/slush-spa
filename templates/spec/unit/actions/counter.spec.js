import * as actions from 'scripts/actions/counter';

describe('actions', () => {
  it('increment should create increment action', () => {
    expect(actions.increment()).to.eql({ type: actions.INCREMENT_COUNTER });
  });

  it('decrement should create decrement action', () => {
    expect(actions.decrement()).to.eql({ type: actions.DECREMENT_COUNTER });
  });

  it('incrementIfOdd should create increment action', () => {
    const fn = actions.incrementIfOdd();
    expect(fn).to.be.a('function');
    const dispatch = sinon.spy();
    const getState = () => ({ counter: 1 });
    fn(dispatch, getState);
    assert(dispatch.calledWith({ type: actions.INCREMENT_COUNTER }));
  });

  it('incrementIfOdd shouldnt create increment action if counter is even', () => {
    const fn = actions.incrementIfOdd();
    const dispatch = sinon.spy();
    const getState = () => ({ counter: 2 });
    fn(dispatch, getState);
    expect(dispatch.callCount).to.equal(0);
  });
});
