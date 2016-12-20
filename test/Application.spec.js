import React from "react";

import { shallow, mount, render } from "enzyme";
import { assert, expect } from "chai";

import Application from "../lib/components/Application";
import SearchInput from "../lib/components/SearchInput";
import Sort from "../lib/components/Sort";
import MessageField from "../lib/components/MessageField";
import Users from "../lib/components/Users";
import MessageInput from "../lib/components/MessageInput";
import CharCounter from "../lib/components/CharCounter";
import Buttons from "../lib/components/Buttons";
import SignIn from "../lib/components/SignIn";

describe("Application", () => {

  it("Application renders as a <div>", () => {
    const wrapper = shallow(<Application />);
    assert.equal(wrapper.type(), "div");
  });
});

describe("SignIn", () => {
  const wrapper = shallow(<SignIn />);

  it(" renders as a <div>", () => {
    assert.equal(wrapper.type(), "div");
  });

  it(" has props", () => {
    const wrapper = mount(<SignIn user={"bob"}/>);
    expect(wrapper.prop("user")).to.equal("bob");
  })
});

describe("SearchInput", () => {
  const wrapper = shallow(<SearchInput />);

  it(" renders as a <div>", () => {
    assert.equal(wrapper.type(), "div");
  });

  it("should have an input", () => {
    expect(wrapper.find("input")).to.have.length(1);
  });

  it("should have a search-input class", () => {
    expect(wrapper.find(".search-input")).to.have.length(1);
  });

  it("should have props", () => {
    const wrapper = mount(<SearchInput searchMessages={"test"} />);
    expect(wrapper.prop("searchMessages")).to.equal("test");
  })
});

describe("Sort", () => {
  const wrapper = shallow(<Sort />);

  it(" renders as a <div>", () => {
    assert.equal(wrapper.type(), "div");
  });

  it("should have a sort-buttons class", () => {
    expect(wrapper.find(".sort-buttons")).to.have.length(1);
  });

  it("should have 2 buttons", () => {
    expect(wrapper.find("button")).to.have.length(2);
  });
  it("should have a prop", () => {
    const wrapper = mount(<Sort sort={"test"}/>);
    expect(wrapper.prop("sort")).to.equal("test");
  })
});

describe("MessageField", () => {
  const wrapper = shallow(<MessageField />);

  it(" renders as a <div>", () => {
    expect(wrapper.type()).to.equal("div");
  });

  it("should have props", () => {
    const wrapper = mount(
      <MessageField
        messages={[{user: {displayName: "bob"}}]}
        filteredMessages={[{key: "1", createdAt: "1", user: {displayName: "bob"}, content: "test"}]}
      />);
    expect(wrapper.prop("messages")[0].user.displayName).to.equal("bob");
    expect(wrapper.prop("messages")).to.be.length(1);
    expect(wrapper.prop("filteredMessages")[0].key).to.equal("1");
    expect(wrapper.prop("filteredMessages")[0].createdAt).to.equal("1");
    expect(wrapper.prop("filteredMessages")[0].user.displayName).to.equal("bob");
    expect(wrapper.prop("filteredMessages")[0].content).to.equal("test");
    expect(wrapper.prop("filteredMessages")).to.be.length(1);
  });
});

describe("Users", () => {
  const wrapper = shallow(<Users />);

  it(" renders as a <aside>", () => {
    assert.equal(wrapper.type(), "aside");
  });

  it("has a user-list class", () => {
    expect(wrapper.find(".user-list")).to.be.length(1);
  });

  it("users have a button with class name of user-btn", () => {
    const wrapper = mount(<Users messages={[{user: {displayName: "bob"}}]}/>)
    expect(wrapper.find("button")).to.be.length(1);
  });

  it(" should have props", () => {
    const wrapper = mount(
      <Users filteredMessages={[{key: "1", createdAt: "1", user:   {displayName: "bob"}, content: "test"}]}
              messages={[{user: {displayName: "bob"}}]}
              filterByUser={[{key: "1", createdAt: "1", user:   {displayName: "bob"}, content: "test"}]}/>);
    expect(wrapper.prop("messages")[0].user.displayName).to.equal("bob");
    expect(wrapper.prop("messages")).to.be.length(1);
    expect(wrapper.prop("filteredMessages")[0].key).to.equal("1");
    expect(wrapper.prop("filteredMessages")[0].createdAt).to.equal("1");
    expect(wrapper.prop("filteredMessages")[0].user.displayName).to.equal("bob");
    expect(wrapper.prop("filteredMessages")[0].content).to.equal("test");
    expect(wrapper.prop("filteredMessages")).to.be.length(1);
    expect(wrapper.prop("filterByUser")[0].key).to.equal("1");
    expect(wrapper.prop("filterByUser")[0].createdAt).to.equal("1");
    expect(wrapper.prop("filterByUser")[0].user.displayName).to.equal("bob");
    expect(wrapper.prop("filterByUser")[0].content).to.equal("test");
    expect(wrapper.prop("filterByUser")).to.be.length(1);
  })
});

describe("MessageInput", () => {
  const wrapper = shallow(<MessageInput />);

  it(" renders as a <div>", () => {
    assert.equal(wrapper.type(), "div");
  });

  it("has input with class named message-input", () => {
    expect(wrapper.find(".message-input")).to.be.length(1);
  });

  it(" has props", () => {
    const wrapper = mount(<MessageInput handleChange={"test"}
                                        draftMessage={"test2"}/>);
    expect(wrapper.prop("handleChange")).to.equal("test");
    expect(wrapper.prop("draftMessage")).to.equal("test2");
  });
});

describe("CharCounter", () => {
  const wrapper = shallow(<CharCounter/>);

  it(" renders as a <span>", () => {
    assert.equal(wrapper.type(), "span");
  });

  it("counter starts at 140", () => {
    expect(wrapper.find("span").children().nodes[1]).to.equal(140);
  });

  it(" has props", () => {
    const wrapper = mount(<CharCounter draftMessage={"test"}/>);
    expect(wrapper.prop("draftMessage")).to.equal("test");
  });
});

describe("Buttons", () => {
  const wrapper = shallow(<Buttons />);

  it(" renders as a <div>", () => {
    assert.equal(wrapper.type(), "div");
  });

  it(" has class name buttons", () => {
    expect(wrapper.find(".buttons")).to.be.length(1);
  });

  it(" has 2 buttons", () => {
    expect(wrapper.find("button")).to.be.length(2);
  });

  it(" has a submit button", () => {
    expect(wrapper.props().children[0].props.className).to.equal("submit-button");
  });

  it(" submit button starts as diabled", () => {
    expect(wrapper.props().children[0].props.disabled).to.equal(true);
  });

  it(" submit button is labeled 'Add New Message'", () => {
    expect(wrapper.props().children[0].props.children).to.equal("Add New Message");
  });

  it(" submit button has an onClick function", () => {
    expect(wrapper.props().children[0].props.onClick).to.be.length(1);
  });

  it(" has a clear button", () => {
    expect(wrapper.props().children[1].props.className).to.equal("clear-button");
  });

  it(" clear button starts as diabled", () => {
    expect(wrapper.props().children[1].props.disabled).to.equal(true);
  });

  it(" clear button is labeled 'Add New Message'", () => {
    expect(wrapper.props().children[1].props.children).to.equal("Clear");
  });

  it(" clear button has an onClick function", () => {
    expect(wrapper.props().children[1].props.onClick).to.be.length(1);
  });

  it(" has props", () => {
    const wrapper = mount(<Buttons draftMessage={"test"}
                                   addMessage={"test2"}
                                   deleteMessage={"test3"}/>);
    expect(wrapper.prop("draftMessage")).to.equal("test");
    expect(wrapper.prop("addMessage")).to.equal("test2");
    expect(wrapper.prop("deleteMessage")).to.equal("test3");
  })
});
