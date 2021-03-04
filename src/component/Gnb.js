import { Menu, Segment } from "semantic-ui-react";

export default function Gnb() {
  const activeItem = "home"; // activeItem이라는 변수가 필요함
  return (
    <Segment inverted>
      <Menu inverted secondary>
        <Menu.Item
          name="home"
          active={activeItem === "home"}
          // onClick={this.handleItemClick}
        />
        <Menu.Item
          name="messages"
          active={activeItem === "messages"}
          // onClick={this.handleItemClick}
        />
        <Menu.Item
          name="friends"
          active={activeItem === "friends"}
          //  onClick={this.handleItemClick}
        />
      </Menu>
    </Segment>
  );
}
