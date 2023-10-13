const Modal = ({ show, onClose, title, children }) => {
  return (
    show && (
      <>
        <div className="modal-backdrop" onClick={onClose}></div>
        <div className={`modal-wrapper ${show ? "active" : ""}`}>
          <h3 className="modal-header">
            <div className="modal-title">{title}</div>
            <span className="modal-close" onClick={onClose}>
              X
            </span>
          </h3>
          <div className="modal-body">{children}</div>
        </div>
      </>
    )
  );
};

export default Modal;
