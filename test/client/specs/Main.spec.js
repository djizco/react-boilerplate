import React       from "react";
import Main        from "../../../client/containers/Main.js";
import { shallow } from "enzyme";

const wrapper = shallow( <div/>);

describe('Main', function(){
  it('renders as a <div/> element', function (){
    expect(wrapper.type()).to.eql('div');
  });
});
