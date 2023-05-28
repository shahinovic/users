import { useSelector } from "react-redux";
import Loader from "./Loader";
import MyToast from "./MyToast";
import { useEffect, useState } from "react";

const UserDetails = () => {
  const selectedUser = useSelector((state) => state.selectedUser);
  const [showToast, setShowToast] = useState(false);
  const [copyText, setCopyText] = useState("");

  useEffect(() => {
    if (showToast) {
      const timer = setTimeout(() => {
        setShowToast(false);
      }, 3000);

      return () => clearTimeout(timer);
    }
  }, [showToast]);

  const handleCopyText = (text, cat) => {
    setCopyText(cat);
    navigator.clipboard
      .writeText(text)
      .then(() => {
        console.log("Text copied to clipboard:", text);
      })
      .catch((error) => {
        console.error("Failed to copy text:", error);
      });

    setShowToast(true);
  };

  if (!selectedUser) {
    return <Loader />;
  }

  return (
    <div className="user-details  p-3 ">
      <div className="user h-100 w-100 d-flex flex-column align-items-center border p-3 ">
        <h1>USER DETAILS</h1>
        <div className="user-img-container rounded-circle overflow-hidden mb-1">
          <img
            className="w-100 h-100"
            src={selectedUser.avatar}
            alt={selectedUser.profile.firstName}
          />
        </div>
        <div className="user-name mb-3">@{selectedUser.profile.username}</div>
        <div className="user-bio mb-3 w-100  mx-auto text-center  p-2 p-md-4 fs-6">
          {selectedUser.Bio}
        </div>

        <div
          onClick={() =>
            handleCopyText(
              `${selectedUser.profile.firstName} ${selectedUser.profile.lastName}`,
              "Full Name"
            )
          }
          className="user-full-name w-100  mb-3 d-flex flex-column align-items-center p-2"
        >
          <span>Full Name</span>
          <span>
            {selectedUser.profile.firstName +
              " " +
              selectedUser.profile.lastName}
          </span>
        </div>
        <div
          onClick={() => {
            handleCopyText(selectedUser.jobTitle, "Job Title");
          }}
          className="user-jop-title w-100 mb-3 d-flex flex-column align-items-center p-2"
        >
          <span>Job Title</span>
          <span>{selectedUser.jobTitle}</span>
        </div>
        <div
          onClick={() => handleCopyText(selectedUser.profile.email, "Email")}
          className="user-email w-100 mb-3 d-flex flex-column align-items-center  p-2"
        >
          <span>Email</span>
          <span>{selectedUser.profile.email}</span>
        </div>
        <MyToast
          copyText={copyText}
          show={showToast}
          onClose={() => setShowToast(false)}
        />
      </div>
    </div>
  );
};

export default UserDetails;
