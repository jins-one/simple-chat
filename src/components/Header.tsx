import { ReactElement } from "react";
import st from "../styles/components/Header.module.scss";
import { ReactComponent as Menu } from "../assets/svg/menu-icon.svg";
import { ReactComponent as Translate } from "../assets/svg/translate-icon.svg";

export default function Header(props: any): ReactElement {
  return (
    <div className={st.container}>
      <div className={st["top-bar-container"]}>
        <button className={st.left} onClick={props.toggleMenu}>
          <Menu width="1.75rem" height="1.75rem" stroke="#509bf8" />
        </button>
        <button className={st.center}>
          <p>도도한 너구리</p>
        </button>
        <button className={st.right}>
          <Translate width="1.75rem" height="1.75rem" />
        </button>
      </div>
    </div>
  );
}
