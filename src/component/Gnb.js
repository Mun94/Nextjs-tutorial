import { Menu, Segment } from "semantic-ui-react";
import { useRouter } from "next/router";

export default function Gnb() {
  let activeItem; // activeItem이라는 변수가 필요함
  const router = useRouter();

  if (router.pathname === "/") {
    activeItem = "home";
  } else if (router.pathname === "/about") {
    activeItem = "about";
  }

  function goLink(e, data) {
    if (data.name === "home") {
      router.push("/");
    } else if (data.name === "about") {
      router.push("/about");
    }
  }

  return (
    <Segment inverted>
      <Menu inverted secondary>
        <Menu.Item
          name="home"
          active={activeItem === "home"}
          onClick={goLink}
        />
        <Menu.Item
          name="about"
          active={activeItem === "about"}
          onClick={goLink}
        />
      </Menu>
    </Segment>
  );
}
