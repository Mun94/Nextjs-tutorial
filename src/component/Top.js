import { Header } from "semantic-ui-react";
import Gnb from "./Gnb";

export default function Top() {
  return (
    <div>
      <img src="/img/캡처.PNG" alt="logo" />
      <Header as="h1">문성우</Header> {/*semantic 헤더 */}
      <Gnb />
    </div>
  );
}
