import React, { useState, useCallback } from "react";
import { QrReader } from "react-qr-reader";

const mockVerifyToken = (token) => {

  if (!token) {
    return {
      status: "INVALID",
      message: "No token found in QR.",
    };
  }

  if (token.startsWith("USED")) {
    return {
      status: "DUPLICATE",
      message: "This pass has already been used.",
      name: "Demo User",
      eventName: "College Fest",
    };
  }

  if (token.startsWith("INV")) {
    return {
      status: "INVALID",
      message: "This is not a valid ticket.",
    };
  }

  return {
    status: "ALLOWED",
    message: "Entry allowed.",
    name: "Demo User",
    eventName: "Tech Night 2025",
  };
};

const getStatusColor = (status) => {
  switch (status) {
    case "ALLOWED":
      return "#16a34a"; 
    case "DUPLICATE":
      return "#dc2626"; 
    case "INVALID":
      return "#b91c1c"; 
    default:
      return "#6b7280"; 
  }
};

function VolunteerScanner() {
  const [scanResult, setScanResult] = useState(null);
  const [lastToken, setLastToken] = useState("");
  const [isProcessing, setIsProcessing] = useState(false);

  const handleScan = useCallback(
    (result, error) => {
      if (!!result) {
        const text = result?.text || result;

        if (isProcessing || text === lastToken) return;

        setIsProcessing(true);
        setLastToken(text);

        const verification = mockVerifyToken(text);

        setScanResult({
          token: text,
          ...verification,
          scannedAt: new Date().toLocaleTimeString(),
        });

        setIsProcessing(false);
      }
    },
    [isProcessing, lastToken]
  );

  return (
    <div
      style={{
        minHeight: "100vh",
        background: "#020617",
        color: "white",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        padding: "16px",
        fontFamily: "system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
      }}
    >
      <h1 style={{ fontSize: "24px", marginBottom: "8px" }}>Volunteer Scanner</h1>
      <p style={{ marginBottom: "16px", opacity: 0.8, textAlign: "center" }}>
        Point the camera at the attendee&apos;s QR code to verify their pass.
      </p>

      {/* Scanner Box */}
      <div
        style={{
          width: "100%",
          maxWidth: "400px",
          borderRadius: "16px",
          overflow: "hidden",
          border: "2px solid #4b5563",
          marginBottom: "16px",
        }}
      >
        <QrReader
          constraints={{ facingMode: "environment" }} // use back camera on phones
          onResult={handleScan}
          containerStyle={{ width: "100%" }}
          videoContainerStyle={{ paddingTop: "0" }}
        />
      </div>

      {/* Status Card */}
      <div
        style={{
          width: "100%",
          maxWidth: "400px",
          borderRadius: "16px",
          padding: "16px",
          background: "#020617",
          border: "1px solid #4b5563",
          boxShadow: "0 10px 25px rgba(0,0,0,0.5)",
        }}
      >
        <h2 style={{ fontSize: "18px", marginBottom: "8px" }}>Scan Result</h2>

        {scanResult ? (
          <>
            <div
              style={{
                padding: "10px 14px",
                borderRadius: "999px",
                display: "inline-flex",
                alignItems: "center",
                gap: "8px",
                marginBottom: "12px",
                background: getStatusColor(scanResult.status) + "33",
                color: getStatusColor(scanResult.status),
                fontWeight: 600,
              }}
            >
              <span
                style={{
                  width: "10px",
                  height: "10px",
                  borderRadius: "999px",
                  background: getStatusColor(scanResult.status),
                }}
              />
              <span>{scanResult.status}</span>
            </div>

            <p style={{ marginBottom: "4px" }}>{scanResult.message}</p>

            {scanResult.name && (
              <p style={{ marginBottom: "2px", opacity: 0.9 }}>
                <strong>Name:</strong> {scanResult.name}
              </p>
            )}
            {scanResult.eventName && (
              <p style={{ marginBottom: "2px", opacity: 0.9 }}>
                <strong>Event:</strong> {scanResult.eventName}
              </p>
            )}
            <p style={{ marginTop: "8px", fontSize: "12px", opacity: 0.7 }}>
              Token: <code>{scanResult.token}</code>
            </p>
            <p style={{ fontSize: "12px", opacity: 0.7 }}>
              Scanned at: {scanResult.scannedAt}
            </p>
          </>
        ) : (
          <p style={{ opacity: 0.7 }}>
            No QR scanned yet. Point the camera at a QR code to see the result here.
          </p>
        )}
      </div>
    </div>
  );
}

export default VolunteerScanner;
