import React from 'react';
import Lab from 'lab';
import { expect } from 'code';
import { shallow } from 'enzyme';

import Button from '../../../client/components/Button';

const lab = Lab.script();
const { experiment, test } = lab;

exports.lab = lab;

const wrapper = shallow(<Button />);

experiment('<Button />', () => {
  test('renders as a <button> element', done => {
    expect(wrapper.type()).to.equal('button');
    done();
  });
});
