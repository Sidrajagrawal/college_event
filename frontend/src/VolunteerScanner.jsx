import React from "react";

function VolunteerScanner({ onBack }) {
  return (
    <div>
      <h1>Volunteer Scanner</h1>
      <button onClick={onBack}>Back to Dashboard</button>
    </div>
  );
}

export default VolunteerScanner;
