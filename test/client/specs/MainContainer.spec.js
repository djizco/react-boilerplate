import React         from "react";
import { shallow }   from "enzyme";
import MainContainer from "../../../client/containers/MainContainer.js";

const wrapper = shallow( <div/>);

describe('MainContainer', function(){
  it('renders as a <div/> element', function (){
    expect(wrapper.type()).to.eql('div');
  });
});
