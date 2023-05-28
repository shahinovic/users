import Toast from "react-bootstrap/Toast";

function MyToast({ show, onClose, copyText }) {
  return (
    <Toast
      style={{
        position: "absolute",
        bottom: "10px",
        right: "10px",
      }}
      show={show}
      onClose={onClose}
    >
      <Toast.Header>
        <strong className="me-auto">Copy</strong>
        <small>Just now</small>
      </Toast.Header>
      <Toast.Body>You have copied {copyText}</Toast.Body>
    </Toast>
  );
}

export default MyToast;
