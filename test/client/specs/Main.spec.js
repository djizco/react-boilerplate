import React         from "react";
import { shallow }   from "enzyme";
import Main from "../../../client/containers/Main.js";

const wrapper = shallow( <div/>);

describe('Main', function(){
  it('renders as a <div/> element', function (){
    expect(wrapper.type()).to.eql('div');
  });
});
