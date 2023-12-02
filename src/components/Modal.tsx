// 모달 컴포넌트 사용법 : 모달 props만 숙지하면 됨.
// display : 모달 띄울지 말지 여부. true일 경우 화면 렌더링 때 모달 팝업됨.
// closable : 닫기 버튼 또는 배경 클릭으로 닫을 수 있는지 여부. true면 닫을 수 있고 false면 닫을 수 없음.

import { ReactElement, useState } from "react";
import style from "../styles/components/Modal.module.scss";
import { ReactComponent as CloseIcon } from "../assets/svg/close-icon.svg";

export default function Modal(props: any): ReactElement {
  const [isOpen, setIsOpen] = useState<Boolean>(props.display);

  const toggleModal = () => {
    setIsOpen(!isOpen);
  };
  // 모달 박스 클릭 시 모달 닫힘 방지
  const modalBoxClickHandler = (e: any) => {
    e.stopPropagation();
  };

  if (isOpen === true) {
    return (
      <div className={style["modal-container"]}>
        <div className={style["modal-backdrop"]} onClick={props.closable ? toggleModal : () => {}}>
          <div className={style["modal-box"]} onClick={modalBoxClickHandler}>
            {props.closable && (
              <button className={style["modal-close-btn"]} onClick={toggleModal}>
                <CloseIcon width={16} height={16} stroke="#509bf8" />
              </button>
            )}
            {props.children}
          </div>
        </div>
      </div>
    );
  } else {
    return <></>;
  }
}
