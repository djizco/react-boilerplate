import React from 'react';
import Lab from 'lab';
import { expect } from 'code';
import { shallow } from 'enzyme';

import Home from '../../../client/components/Home';

const lab = exports.lab = Lab.script();
const { experiment, test } = lab;

const wrapper = shallow(<Home toTodo={c => c} toCounter={c => c} />);

experiment('<Home />', () => {
  test('renders as a <div> element', done => {
    expect(wrapper.type()).to.equal('div');
    done();
  });
});
