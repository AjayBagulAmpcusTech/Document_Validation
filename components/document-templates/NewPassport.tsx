import "./newPassport.css";

const NewPassport = (formData: any) => {
  let data = formData?.formData || "";
  let firstName = data?.fullName?.split(" ")[0] || "";
  let lastName = data?.fullName?.split(" ")[1] || "";
  return (
    <div className="passport-page">
      <div className="passport-container">
        {/* Header */}
        <div className="passport-header">
          <h1 className="country-title">भारत गणराज्य REPUBLIC OF INDIA</h1>
        </div>

        {/* Type and Passport Info */}

        {/* Main Content */}
        <div className="main-content">
          {/* Left Side - Photo and Signature */}
          <div className="left-section">
            <div className="photo-area">
              {
                <img
                  src="/aadhaarProfile.jpg"
                  alt="Passport Photo"
                  className="passport-photo"
                />
              }
            </div>
          </div>

          {/* Right Side - Personal Details */}
          <div className="right-section">
            <div className="details-section">
              <div className="passport-info">
                <div className="info-left">
                  <div className="type-section">
                    <span className="label">प्रकार/Type</span>
                    <div className="value">P</div>
                  </div>
                </div>
                <div className="info-center">
                  <div className="country-section">
                    <span className="label">राष्ट्र कोड/Country Code</span>
                    <div className="value">IND</div>
                  </div>
                </div>
                <div className="info-right">
                  <div className="passport-section">
                    <span className="label">पासपोर्ट सं./Passport No.</span>
                    <div className="value passport-no">P2251480</div>
                  </div>
                </div>
              </div>
              <div className="detail-field">
                <div className="field-label">
                  <span className="hindi">उपनाम</span>
                  <span className="english">Surname</span>
                </div>
                <div className="field-value">{lastName || "SHINDE"}</div>
                <div className="field-line"></div>
              </div>

              <div className="detail-field">
                <div className="field-label">
                  <span className="hindi">दिया गया नाम</span>
                  <span className="english">Given Name(s)</span>
                </div>
                <div className="field-value">
                  {firstName || "SANDESH RAMDAS"}
                </div>
                <div className="field-line"></div>
              </div>

              <div className="detail-row">
                <div className="detail-field nationality">
                  <div className="field-label">
                    <span className="hindi">राष्ट्रीयता</span>
                    <span className="english">Nationality</span>
                  </div>
                  <div className="field-value">भारतीय/INDIAN</div>
                  <div className="field-line"></div>
                </div>
                <div className="detail-field sex">
                  <div className="field-label">
                    <span className="hindi">लिंग</span>
                    <span className="english">Sex</span>
                  </div>
                  <div className="field-value">M</div>
                  <div className="field-line"></div>
                </div>
                <div className="detail-field dob">
                  <div className="field-label">
                    <span className="hindi">जन्म तिथि</span>
                    <span className="english">Date of Birth</span>
                  </div>
                  <div className="field-value">
                    {data?.dateOfExpiry || "03/06/1990"}
                  </div>
                  <div className="field-line"></div>
                </div>
              </div>
            </div>

            {/* Security Stamp */}
            <div className="security-stamp">
              <div className="stamp-circle">
                <div className="stamp-inner"></div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex gap-2">
          <div className="w-[300px]">
            <div className="signature-wrapper">
              <div className="signature-area">
                <div className="">
                  {" "}
                  <img src="/signature.png" />
                </div>
              </div>
            </div>
          </div>
          <div className="w-full">
            <div className="detail-field">
              <div className="field-label">
                <span className="hindi">जन्म स्थान</span>
                <span className="english">Place of Birth</span>
              </div>
              <div className="field-value">BORI KH, MAHARASHTRA</div>
              <div className="field-line"></div>
            </div>

            <div className="detail-field">
              <div className="field-label">
                <span className="hindi">जारी करने का स्थान</span>
                <span className="english">Place of Issue</span>
              </div>
              <div className="field-value">PUNE</div>
              <div className="field-line"></div>
            </div>

            <div className="detail-row dates">
              <div className="detail-field issue-date">
                <div className="field-label">
                  <span className="hindi">जारी करने की तिथि</span>
                  <span className="english">Date of Issue</span>
                </div>
                <div className="field-value">31/08/2016</div>
              </div>
              <div className="detail-field expiry-date">
                <div className="field-label">
                  <span className="hindi">समाप्ति की तिथि</span>
                  <span className="english">Date of Expiry</span>
                </div>
                <div className="field-value">30/08/2026</div>
              </div>
            </div>
          </div>
        </div>

        {/* Machine Readable Zone */}
        <div className="mrz-section">
          <div className="mrz-line">
            P&lt;INDSHINDE&lt;&lt;SANDESH&lt;RAMDAS&lt;&lt;&lt;&lt;&lt;&lt;&lt;&lt;&lt;&lt;&lt;&lt;&lt;&lt;&lt;&lt;&lt;
          </div>
          <div className="mrz-line">
            P2251480&lt;1IND9006038M2608307&lt;&lt;&lt;&lt;&lt;&lt;&lt;&lt;&lt;&lt;&lt;&lt;&lt;&lt;&lt;&lt;&lt;8
          </div>
        </div>

        {/* CamScanner Watermark */}
        {/* <div className="watermark">Scanned by CamScanner</div> */}
      </div>
    </div>
  );
};

export default NewPassport;
