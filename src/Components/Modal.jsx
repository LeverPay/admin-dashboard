// import './style.scss';
import { Modal } from 'antd';
import { MdOutlineClose } from 'react-icons/md';

const AppModal = ({ handleCancel, children, visible, closable }) => {
  return (
    <Modal
      onCancel={handleCancel}
      footer={null}
      closable={closable}
      centered
      title={null}
      visible={visible}
      maskClosable={false}
      //   width={446}
      closeIcon={
        <span className="modal__close">
          <MdOutlineClose />
        </span>
      }
    >
      <div className="appmodal__container">{children}</div>
    </Modal>
  );
};

export default AppModal;
