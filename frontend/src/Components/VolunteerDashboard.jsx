import React, { useState } from "react";

const mockAssignedEvents = [
  {
    id: "evt1",
    name: "TechnoFest 2025",
    venue: "Main Auditorium",
    date: "2025-12-18",
    time: "10:00 AM - 5:00 PM",
    description: "Flagship technical fest with coding, robotics & workshops.",
  },
  {
    id: "evt2",
    name: "EDM Night",
    venue: "Open Air Theatre",
    date: "2025-12-19",
    time: "7:00 PM - 10:00 PM",
    description: "Pro-night event with live DJ, lights & high-energy performances.",
  },
  {
    id: "evt3",
    name: "Hackathon 24hr",
    venue: "Lab Block - 3rd Floor",
    date: "2025-12-20",
    time: "9:00 AM - Next Day 9:00 AM",
    description: "24-hour hackathon for developers & innovators.",
  },
];

function VolunteerDashboard() {
  const [events] = useState(mockAssignedEvents);
  const [selectedEventId, setSelectedEventId] = useState(events[0]?.id || "");
  const [formData, setFormData] = useState({
    name: "",
    college: "",
    email: "",
    phone: "",
  });
  const [registrations, setRegistrations] = useState([]);
  const [message, setMessage] = useState("");

  const selectedEvent = events.find((e) => e.id === selectedEventId);

  const handleEventChange = (e) => {
    setSelectedEventId(e.target.value);
    setMessage("");
    setRegistrations([]); // clear local list when switching events
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleRegister = (e) => {
    e.preventDefault();

    // Simple frontend validation
    if (!formData.name || !formData.email || !formData.phone) {
      setMessage("Please fill all required fields (*).");
      return;
    }

    // Here you would call your backend API instead.
    const newEntry = {
      ...formData,
      eventId: selectedEventId,
      id: Date.now().toString(),
    };

    setRegistrations((prev) => [newEntry, ...prev]);

    setMessage("✅ Participant registered (frontend mock).");
    setFormData({
      name: "",
      college: "",
      email: "",
      phone: "",
    });
  };

  const handleOpenScanner = () => {
    // Later: navigate to scanner page or open scanner modal
    alert("Scanner will be integrated here later (QR flow).");
  };

  return (
    <div
      style={{
        minHeight: "100vh",
        background: "#020617",
        color: "white",
        display: "flex",
        justifyContent: "center",
        padding: "24px 12px",
        fontFamily:
          "system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
      }}
    >
      <div
        style={{
          width: "100%",
          maxWidth: "960px",
          display: "grid",
          gridTemplateColumns: "1.2fr 1fr",
          gap: "20px",
        }}
      >
        {/* Left side: Event selection + registration form */}
        <div>
          <h1 style={{ fontSize: "26px", marginBottom: "8px" }}>
            Volunteer Panel
          </h1>
          <p style={{ opacity: 0.8, marginBottom: "16px" }}>
            Select the event you are assigned to and register participants.
          </p>

          {/* Event selector */}
          <div
            style={{
              background: "#020617",
              borderRadius: "16px",
              padding: "16px",
              border: "1px solid #374151",
              marginBottom: "16px",
            }}
          >
            <label
              htmlFor="event-select"
              style={{
                display: "block",
                marginBottom: "8px",
                fontWeight: 500,
              }}
            >
              Assigned Events
            </label>
            <select
              id="event-select"
              value={selectedEventId}
              onChange={handleEventChange}
              style={{
                width: "100%",
                padding: "10px 12px",
                borderRadius: "999px",
                border: "1px solid #4b5563",
                background: "#020617",
                color: "white",
                outline: "none",
              }}
            >
              {events.map((ev) => (
                <option key={ev.id} value={ev.id}>
                  {ev.name} — {ev.venue}
                </option>
              ))}
            </select>
          </div>

          {/* Registration form */}
          <div
            style={{
              background: "#020617",
              borderRadius: "16px",
              padding: "16px",
              border: "1px solid #374151",
              marginBottom: "16px",
            }}
          >
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                marginBottom: "8px",
              }}
            >
              <h2 style={{ fontSize: "18px" }}>Register Participant</h2>
              <button
                type="button"
                onClick={handleOpenScanner}
                style={{
                  padding: "8px 14px",
                  borderRadius: "999px",
                  border: "none",
                  background:
                    "linear-gradient(135deg, #22c55e, #16a34a, #15803d)",
                  color: "white",
                  fontWeight: 600,
                  cursor: "pointer",
                  fontSize: "13px",
                }}
              >
                Open Scanner
              </button>
            </div>
            <p style={{ fontSize: "12px", opacity: 0.7, marginBottom: "10px" }}>
              Use this form to manually register a participant for the selected
              event.
            </p>

            <form onSubmit={handleRegister}>
              <div style={{ marginBottom: "10px" }}>
                <label
                  style={{
                    display: "block",
                    marginBottom: "4px",
                    fontSize: "14px",
                  }}
                >
                  Name *
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  placeholder="Enter participant name"
                  style={{
                    width: "100%",
                    padding: "8px 10px",
                    borderRadius: "8px",
                    border: "1px solid #4b5563",
                    background: "#020617",
                    color: "white",
                    outline: "none",
                    fontSize: "14px",
                  }}
                />
              </div>

              <div style={{ marginBottom: "10px" }}>
                <label
                  style={{
                    display: "block",
                    marginBottom: "4px",
                    fontSize: "14px",
                  }}
                >
                  College
                </label>
                <input
                  type="text"
                  name="college"
                  value={formData.college}
                  onChange={handleInputChange}
                  placeholder="Enter college name"
                  style={{
                    width: "100%",
                    padding: "8px 10px",
                    borderRadius: "8px",
                    border: "1px solid #4b5563",
                    background: "#020617",
                    color: "white",
                    outline: "none",
                    fontSize: "14px",
                  }}
                />
              </div>

              <div style={{ marginBottom: "10px" }}>
                <label
                  style={{
                    display: "block",
                    marginBottom: "4px",
                    fontSize: "14px",
                  }}
                >
                  Email *
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  placeholder="Enter email"
                  style={{
                    width: "100%",
                    padding: "8px 10px",
                    borderRadius: "8px",
                    border: "1px solid #4b5563",
                    background: "#020617",
                    color: "white",
                    outline: "none",
                    fontSize: "14px",
                  }}
                />
              </div>

              <div style={{ marginBottom: "10px" }}>
                <label
                  style={{
                    display: "block",
                    marginBottom: "4px",
                    fontSize: "14px",
                  }}
                >
                  Phone *
                </label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  placeholder="Enter phone number"
                  style={{
                    width: "100%",
                    padding: "8px 10px",
                    borderRadius: "8px",
                    border: "1px solid #4b5563",
                    background: "#020617",
                    color: "white",
                    outline: "none",
                    fontSize: "14px",
                  }}
                />
              </div>

              {message && (
                <p
                  style={{
                    fontSize: "13px",
                    marginBottom: "8px",
                    color: message.startsWith("✅") ? "#22c55e" : "#f97316",
                  }}
                >
                  {message}
                </p>
              )}

              <button
                type="submit"
                style={{
                  marginTop: "4px",
                  width: "100%",
                  padding: "10px",
                  borderRadius: "999px",
                  border: "none",
                  background:
                    "linear-gradient(135deg, #3b82f6, #2563eb, #1d4ed8)",
                  color: "white",
                  fontWeight: 600,
                  cursor: "pointer",
                  fontSize: "14px",
                }}
              >
                Register Participant
              </button>
            </form>
          </div>
        </div>

        {/* Right side: Event details + latest registrations */}
        <div>
          {/* Event details */}
          <div
            style={{
              background: "#020617",
              borderRadius: "16px",
              padding: "16px",
              border: "1px solid #374151",
              marginBottom: "16px",
            }}
          >
            <h2 style={{ fontSize: "18px", marginBottom: "4px" }}>
              Event Details
            </h2>
            {selectedEvent ? (
              <>
                <p style={{ fontSize: "16px", fontWeight: 600 }}>
                  {selectedEvent.name}
                </p>
                <p style={{ fontSize: "13px", opacity: 0.8 }}>
                  {selectedEvent.description}
                </p>
                <p
                  style={{
                    fontSize: "13px",
                    marginTop: "8px",
                    opacity: 0.85,
                  }}
                >
                  <strong>Date:</strong> {selectedEvent.date}
                  <br />
                  <strong>Time:</strong> {selectedEvent.time}
                  <br />
                  <strong>Venue:</strong> {selectedEvent.venue}
                </p>
              </>
            ) : (
              <p style={{ fontSize: "13px", opacity: 0.7 }}>
                No event selected.
              </p>
            )}
          </div>

          {/* Recent registrations */}
          <div
            style={{
              background: "#020617",
              borderRadius: "16px",
              padding: "16px",
              border: "1px solid #374151",
            }}
          >
            <h2 style={{ fontSize: "18px", marginBottom: "8px" }}>
              Recent Registrations (local)
            </h2>
            {registrations.length === 0 ? (
              <p style={{ fontSize: "13px", opacity: 0.7 }}>
                No participants registered yet for this event (in this session).
              </p>
            ) : (
              <div
                style={{
                  maxHeight: "260px",
                  overflowY: "auto",
                  paddingRight: "4px",
                }}
              >
                {registrations.map((reg) => (
                  <div
                    key={reg.id}
                    style={{
                      padding: "8px 10px",
                      marginBottom: "8px",
                      borderRadius: "10px",
                      border: "1px solid #374151",
                    }}
                  >
                    <p
                      style={{
                        fontSize: "14px",
                        fontWeight: 600,
                        marginBottom: "2px",
                      }}
                    >
                      {reg.name}
                    </p>
                    <p style={{ fontSize: "12px", opacity: 0.8 }}>
                      {reg.college || "Unknown college"}
                      <br />
                      {reg.email} | {reg.phone}
                    </p>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default VolunteerDashboard;
