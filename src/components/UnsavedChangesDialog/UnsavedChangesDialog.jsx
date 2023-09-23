import React from "react";

const UnsavedChangesDialog = ({ onCancel, onConfirm }) => {
  return (
    <div className="unsaved-changes-dialog">
      <p>You have unsaved changes. Do you really want to leave?</p>
      <button onClick={onCancel}>Cancel</button>
      <button onClick={onConfirm}>Leave</button>
    </div>
  );
};

export default UnsavedChangesDialog;
