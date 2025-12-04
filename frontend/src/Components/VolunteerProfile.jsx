import React from "react";

function VolunteerProfile({ volunteer, onOpenScanner, onBackToDashboard }) {
  return (
    <div
      style={{
        minHeight: "100vh",
        background: "#020617",
        color: "white",
        padding: "20px",
        fontFamily:
          "system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
        display: "flex",
        justifyContent: "center",
      }}
    >
      <div
        style={{
          width: "100%",
          maxWidth: "600px",
          background: "#020617",
          borderRadius: "16px",
          border: "1px solid #374151",
          padding: "20px",
        }}
      >
        <h1 style={{ fontSize: "24px", marginBottom: "8px" }}>
          Volunteer Profile
        </h1>
        <p style={{ opacity: 0.7, marginBottom: "20px" }}>
          Quick overview of your assigned events and activity.
        </p>

        {/* Basic Info */}
        <div
          style={{
            background: "#0f172a",
            padding: "16px",
            borderRadius: "12px",
            border: "1px solid #1e293b",
            marginBottom: "20px",
          }}
        >
          <h2 style={{ fontSize: "18px", marginBottom: "6px" }}>
            {volunteer.name}
          </h2>
          <p style={{ fontSize: "14px", opacity: 0.8 }}>
            Email: {volunteer.email}
            <br />
            Phone: {volunteer.phone}
          </p>
        </div>

        {/* Stats */}
        <div
          style={{
            background: "#0f172a",
            padding: "16px",
            borderRadius: "12px",
            border: "1px solid #1e293b",
            marginBottom: "20px",
          }}
        >
          <h3 style={{ fontSize: "16px", marginBottom: "10px" }}>Your Stats</h3>

          <p style={{ fontSize: "14px", marginBottom: "4px" }}>
            <strong>Total Scans:</strong> {volunteer.totalScans}
          </p>

          <p style={{ fontSize: "14px", opacity: 0.8 }}>
            <strong>Last Scan:</strong>{" "}
            {volunteer.lastScan
              ? volunteer.lastScan
              : "No scans recorded yet"}
          </p>
        </div>

        {/* Assigned Events */}
        <div
          style={{
            background: "#0f172a",
            padding: "16px",
            borderRadius: "12px",
            border: "1px solid #1e293b",
            marginBottom: "20px",
          }}
        >
          <h3 style={{ fontSize: "16px", marginBottom: "10px" }}>
            Assigned Events
          </h3>

          {volunteer.events.length === 0 ? (
            <p style={{ opacity: 0.7 }}>No assigned events.</p>
          ) : (
            <ul style={{ paddingLeft: "18px" }}>
              {volunteer.events.map((ev) => (
                <li key={ev} style={{ marginBottom: "4px" }}>
                  {ev}
                </li>
              ))}
            </ul>
          )}
        </div>

        {/* Actions */}
        <div style={{ display: "flex", gap: "10px" }}>
          <button
            onClick={onOpenScanner}
            style={{
              flex: 1,
              padding: "10px",
              borderRadius: "999px",
              border: "none",
              background:
                "linear-gradient(135deg, #22c55e, #16a34a, #15803d)",
              color: "white",
              fontWeight: 600,
              cursor: "pointer",
            }}
          >
            Open Scanner
          </button>

          <button
            onClick={onBackToDashboard}
            style={{
              flex: 1,
              padding: "10px",
              borderRadius: "999px",
              border: "1px solid #475569",
              background: "#0f172a",
              color: "white",
              fontWeight: 600,
              cursor: "pointer",
            }}
          >
            Dashboard
          </button>
        </div>
      </div>
    </div>
  );
}

export default VolunteerProfile;
