import React from "react";
import Lab from 'lab';
import { expect } from 'code';
import { shallow } from "enzyme";

import HomePage from "../../client/containers/HomePage";

const lab = exports.lab = Lab.script();
const { experiment, test } = lab;

const wrapper = shallow(<HomePage />);

experiment('<HomePage />', () => {
  test('renders as a <div> element', done => {
    expect(wrapper.type()).to.equal('div');
    done();
  });
});
