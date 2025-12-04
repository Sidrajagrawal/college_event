import React, { useState } from "react";
import VolunteerDashboard from "./VolunteerDashboard";
import VolunteerScanner from "./VolunteerScanner";
import VolunteerProfile from "./VolunteerProfile";

function App() {
  const [view, setView] = useState("dashboard");

  const volunteerData = {
    name: "Rahul",
    email: "rahul@example.com",
    phone: "9876543210",
    totalScans: 12,
    lastScan: "10:42 AM",
    events: ["TechnoFest 2025", "EDM Night", "Hackathon 24hr"],
  };

  return (
    <>
      {view === "dashboard" && (
        <VolunteerDashboard
          onOpenScanner={() => setView("scanner")}
          onOpenProfile={() => setView("profile")}
        />
      )}

      {view === "scanner" && (
        <VolunteerScanner onBack={() => setView("dashboard")} />
      )}

      {view === "profile" && (
        <VolunteerProfile
          volunteer={volunteerData}
          onOpenScanner={() => setView("scanner")}
          onBackToDashboard={() => setView("dashboard")}
        />
      )}
    </>
  );
}

export default App;
