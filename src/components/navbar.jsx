import React, { memo, useState } from "react";
// import Modal from "react-modal";

const Navbar = memo(props => {
  // useState를 사용하여 open상태를 변경한다. (open일때 true로 만들어 열리는 방식)
  // const [modalOpen, setModalOpen] = useState(false);

  // const openModal = () => {
  //   setModalOpen(true);
  // };
  // const closeModal = () => {
  //   setModalOpen(false);
  // };

  return (
    <>
      <a className="logo">
        <strong>Connect</strong>
        <span>React 코딩테스트</span>
      </a>

      <nav>
        <span>로그인해주세요</span>

        {/* <React.Fragment>
          <button onClick={openModal}>모달팝업</button>
          //header 부분에 텍스트를 입력한다.
          <Modal open={modalOpen} close={closeModal} header="Modal heading">
            // Modal.js <main> {props.children} </main>에 내용이 입력된다.
            리액트 함수형 모달 팝업창입니다. 쉽게 만들 수 있어요. 같이
            만들어봐요!
          </Modal>
        </React.Fragment> */}
        {/* <a href="#">menu</a> */}
      </nav>
    </>
  );
});

export default Navbar;
