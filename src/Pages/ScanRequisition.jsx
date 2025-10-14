import React, { useState, useRef } from "react";
import {
  Download,
  Eye,
  User,
  FileText,
  Phone,
  Mail,
  Calendar,
  Users,
} from "lucide-react";

const ScanRequisition = () => {
  return (
    <div>
      <PrescriptionGenerator />
    </div>
  );
};

export default ScanRequisition;

const PrescriptionGenerator = () => {
  const [formData, setFormData] = useState({
    patientName: "",
    referringDoctor: "",
    address: "",
    age: "",
    gender: "",
    mobile: "",
    email: "",
    toothArea: "",
    regionOfInterest: "",
    scanType: [],
    medicalHistory: [],
    twoDOptions: [],
    specialRemarks: "",
    doctorSignatureImage: null,
    doctorSealImage: null,
    doctorName: "",
    doctorDesignation: "",
  });

  const [errors, setErrors] = useState({});
  const [showPreview, setShowPreview] = useState(false);
  const printRef = useRef();

  // ----- Options -----
  const scanTypeOptions = [
    "3D",
    "Quadrant",
    "Single Jaw (Maxilla)",
    "Single Jaw (Mandible)",
    "Full Mouth",
    "Maxillary Sinus",
    "TMJ (Patient Right)",
    "TMJ (Right & Left)",
    "TMJ (Patient Left)",
    "Airway Analysis",
    "Nerve Tracing",
  ];

  const medicalHistoryOptions = [
    "Pregnancy",
    "Heart Condition",
    "Diabetes",
    "Epilepsy or seizures",
    "Other",
  ];

  const twoDOptions = [
    "Panoramic X-Ray (OPG)",
    "TMJ (Open & Closed)",
    "Maxillary Sinus",
    "PNS",
  ];


  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    setErrors((prev) => {
      const copy = { ...prev };
      delete copy[name];
      return copy;
    });
  };

  const handleCheckboxChange = (category, value) => {
    setFormData((prev) => {
      const updated = prev[category].includes(value)
        ? prev[category].filter((item) => item !== value)
        : [...prev[category], value];
      return { ...prev, [category]: updated };
    });
    setErrors((prev) => {
      const copy = { ...prev };
      delete copy[category];
      return copy;
    });
  };

  const handleImageUpload = (e, imageType) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (event) => {
        setFormData((prev) => ({ ...prev, [imageType]: event.target.result }));
      };
      reader.readAsDataURL(file);
    }
  };

  const handleDownloadPDF = () => {
    window.print();
  };

  // Validation 
  const validate = () => {
    const err = {};

    // required text/number fields
    const required = [
      "patientName",
      "referringDoctor",
      "address",
      "age",
      "gender",
      "mobile",
      "email",
      "toothArea",
      "regionOfInterest",
      "specialRemarks",
      "doctorName",
      "doctorDesignation",
    ];
    required.forEach((f) => {
      if (!String(formData[f] || "").trim()) err[f] = "Required";
    });

    // basic formats
    if (formData.age && (+formData.age <= 0 || +formData.age > 120)) {
      err.age = "Enter a valid age (1–120)";
    }
    if (
      formData.email &&
      !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(String(formData.email).trim())
    ) {
      err.email = "Enter a valid email";
    }
    if (
      formData.mobile &&
      !/^[0-9+\-\s]{7,15}$/.test(String(formData.mobile).trim())
    ) {
      err.mobile = "Enter a valid phone number";
    }

    // groups: require at least one
    if (!formData.scanType.length) err.scanType = "Select at least one";
    if (!formData.medicalHistory.length) err.medicalHistory = "Select at least one";
    if (!formData.twoDOptions.length) err.twoDOptions = "Select at least one";

    setErrors(err);
    return Object.keys(err).length === 0;
  };

  // Small error component 
  const Error = ({ name }) =>
    errors[name] ? (
      <p className="text-red-600 text-xs mt-1" data-field={name}>
        {errors[name]}
      </p>
    ) : null;

  // Preview (Print) 
  const PreviewComponent = () => (
    <div
      className="bg-white p-8 shadow-lg rounded-lg max-w-4xl mx-auto"
      ref={printRef}
    >
      {/* Header Section */}
      <div className="text-center border-b-2 border-gray-300 pb-6 mb-6">
        <h1 className="text-2xl font-bold text-blue-800 mb-2">DICEMED</h1>
        <div className="flex justify-between items-start">
          <div className="text-left">
            <h2 className="text-lg font-semibold text-gray-700">
              Image Requisition Form
            </h2>
          </div>
          <div className="text-right text-sm text-gray-600">
            <p>https://dicemed.in/</p>
             {/* <p>Ambala City, Haryana - 134003</p>
            <p>Contact No.: 0171-2550100, 7082-3030-31</p> */}
          </div>
        </div>
      </div>

      {/* Patient Information */}
      <div className="grid grid-cols-2 gap-6 mb-6">
        <div className="space-y-4">
          <div>
            <span className="font-semibold text-gray-700">Patient's Name: </span>
            <span className="text-gray-600">{formData.patientName}</span>
          </div>
          <div>
            <span className="font-semibold text-gray-700">Referring Doctor: </span>
            <span className="text-gray-600">{formData.referringDoctor}</span>
          </div>
          <div>
            <span className="font-semibold text-gray-700">Address: </span>
            <span className="text-gray-600">{formData.address}</span>
          </div>
        </div>
        <div className="space-y-4">
          <div>
            <span className="font-semibold text-gray-700">Age: </span>
            <span className="text-gray-600">{formData.age}</span>
          </div>
          <div>
            <span className="font-semibold text-gray-700">Gender: </span>
            <span className="text-gray-600">{formData.gender}</span>
          </div>
          <div>
            <span className="font-semibold text-gray-700">Mobile: </span>
            <span className="text-gray-600">{formData.mobile}</span>
          </div>
          <div>
            <span className="font-semibold text-gray-700">E-mail: </span>
            <span className="text-gray-600">{formData.email}</span>
          </div>
        </div>
      </div>

      {/* Clinical Information */}
      <div className="mb-6">
        <div className="mb-4">
          <h3 className="font-semibold text-gray-700 mb-2">
            Please kindly mention the tooth/area of interest & purpose of scan
          </h3>
          <div className="border border-gray-300 p-3 min-h-16 bg-gray-50 rounded">
            {formData.toothArea}
          </div>
        </div>

        <div className="mb-4">
          <h3 className="font-semibold text-gray-700 mb-2">REGION OF INTEREST</h3>
          <div className="border border-gray-300 p-3 min-h-16 bg-gray-50 rounded">
            {formData.regionOfInterest}
          </div>
        </div>
      </div>

      {/* Scan Types */}
      <div className="mb-6">
        <h3 className="font-semibold text-gray-700 mb-3">Scan Type</h3>
        <div className="grid grid-cols-2 gap-2">
          {scanTypeOptions.map((option) => (
            <div key={option} className="flex items-center">
              <span className="text-sm">
                {formData.scanType.includes(option) ? "☑" : "☐"} {option}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Medical History */}
      <div className="mb-6">
        <h3 className="font-semibold text-gray-700 mb-3">Medical History</h3>
        <div className="grid grid-cols-2 gap-2">
          {medicalHistoryOptions.map((option) => (
            <div key={option} className="flex items-center">
              <span className="text-sm">
                {formData.medicalHistory.includes(option) ? "☑" : "☐"} {option}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* 2D Options */}
      <div className="mb-6">
        <h3 className="font-semibold text-gray-700 mb-3">2D</h3>
        <div className="grid grid-cols-2 gap-2">
          {twoDOptions.map((option) => (
            <div key={option} className="flex items-center">
              <span className="text-sm">
                {formData.twoDOptions.includes(option) ? "☑" : "☐"} {option}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Special Remarks */}
      <div className="mb-6">
        <h3 className="font-semibold text-gray-700 mb-2">Special Remarks</h3>
        <div className="border border-gray-300 p-3 min-h-20 bg-gray-50 rounded">
          {formData.specialRemarks}
        </div>
      </div>

      {/* Doctor Signature */}
      <div className="flex justify-end mt-8">
        <div className="text-center">
          <div className="flex items-center gap-8 mb-4">
            {/* Signature */}
            <div className="text-center">
              {formData.doctorSignatureImage ? (
                <img
                  src={formData.doctorSignatureImage}
                  alt="Doctor Signature"
                  className="max-w-32 max-h-16 object-contain border-b border-gray-400 pb-2"
                />
              ) : (
                <div className="border-b border-gray-400 pb-2 mb-2 min-w-32 h-16 flex items-end">
                  <span className="text-gray-400 text-sm">Signature</span>
                </div>
              )}
            </div>

            {/* Seal */}
            <div className="text-center">
              {formData.doctorSealImage ? (
                <img
                  src={formData.doctorSealImage}
                  alt="Doctor Seal"
                  className="max-w-20 max-h-20 object-contain"
                />
              ) : (
                <div className="w-20 h-20 border-2 border-dashed border-gray-300 flex items-center justify-center rounded-full">
                  <span className="text-gray-400 text-xs">Seal</span>
                </div>
              )}
            </div>
          </div>
          <div className="text-sm">
            <p className="font-semibold">{formData.doctorName}</p>
            <p>{formData.doctorDesignation}</p>
          </div>
        </div>
      </div>
    </div>
  );

  // Preview page
  if (showPreview) {
    return (
      <div className="min-h-screen bg-gray-50">
        <div className="max-w-6xl mx-auto p-4">
          <div className="flex justify-between items-center mb-4">
            <button
              onClick={() => setShowPreview(false)}
              className="bg-gray-500 text-white px-4 py-2 rounded hover:bg-gray-600"
            >
              ← Back to Form
            </button>
            <button
              onClick={handleDownloadPDF}
              className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 flex items-center gap-2"
            >
              <Download className="w-4 h-4" />
              Download PDF
            </button>
          </div>
          <PreviewComponent />
        </div>

        {/* Print-only mirror */}
        <div className="hidden print:block">
          <PreviewComponent />
        </div>
      </div>
    );
  }

  //  Form page 
  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) setShowPreview(true);
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-6xl mx-auto px-4">
        <h1 className="text-3xl font-bold text-gray-800 text-center mb-8">
          Image Requisition Form
        </h1>

        <div className="flex gap-8">
          {/* Form Section */}
          <form
            className="flex-1 bg-white rounded-lg shadow-lg p-6"
            onSubmit={handleSubmit}
            noValidate
          >
            <h2 className="text-xl font-semibold text-gray-800 mb-6 flex items-center gap-2">
              <FileText className="w-5 h-5" />
              Patient Information
            </h2>

            <div className="space-y-6">
              {/* Basic Patient Info */}
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    <User className="inline w-4 h-4 mr-1" />
                    Patient's Name
                  </label>
                  <input
                    type="text"
                    name="patientName"
                    value={formData.patientName}
                    onChange={handleInputChange}
                    required
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="Enter patient name"
                  />
                  <Error name="patientName" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Referring Doctor
                  </label>
                  <input
                    type="text"
                    name="referringDoctor"
                    value={formData.referringDoctor}
                    onChange={handleInputChange}
                    required
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="Enter doctor name"
                  />
                  <Error name="referringDoctor" />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Address
                </label>
                <textarea
                  name="address"
                  value={formData.address}
                  onChange={handleInputChange}
                  rows={3}
                  required
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Enter patient address"
                />
                <Error name="address" />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    <Calendar className="inline w-4 h-4 mr-1" />
                    Age
                  </label>
                  <input
                    type="number"
                    name="age"
                    value={formData.age}
                    onChange={handleInputChange}
                    required
                    min="1"
                    max="120"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="Age"
                  />
                  <Error name="age" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    <Users className="inline w-4 h-4 mr-1" />
                    Gender
                  </label>
                  <select
                    name="gender"
                    value={formData.gender}
                    onChange={handleInputChange}
                    required
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  >
                    <option value="">Select Gender</option>
                    <option value="Male">Male</option>
                    <option value="Female">Female</option>
                    <option value="Other">Other</option>
                  </select>
                  <Error name="gender" />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    <Phone className="inline w-4 h-4 mr-1" />
                    Mobile
                  </label>
                  <input
                    type="tel"
                    name="mobile"
                    value={formData.mobile}
                    onChange={handleInputChange}
                    required
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="Mobile number"
                  />
                  <Error name="mobile" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    <Mail className="inline w-4 h-4 mr-1" />
                    E-mail
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="Email address"
                  />
                  <Error name="email" />
                </div>
              </div>

              {/* Clinical Information */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Please kindly mention the tooth/area of interest & purpose of scan
                </label>
                <textarea
                  name="toothArea"
                  value={formData.toothArea}
                  onChange={handleInputChange}
                  rows={3}
                  required
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="CBCT"
                />
                <Error name="toothArea" />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  REGION OF INTEREST
                </label>
                <textarea
                  name="regionOfInterest"
                  value={formData.regionOfInterest}
                  onChange={handleInputChange}
                  rows={3}
                  required
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Specify region of interest"
                />
                <Error name="regionOfInterest" />
              </div>

              {/* Scan Type */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-3">
                  Scan Type <span className="text-red-600">*</span>
                </label>
                <div className="grid grid-cols-2 gap-2">
                  {scanTypeOptions.map((option) => (
                    <label key={option} className="flex items-center space-x-2">
                      <input
                        type="checkbox"
                        checked={formData.scanType.includes(option)}
                        onChange={() => handleCheckboxChange("scanType", option)}
                        className="rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                      />
                      <span className="text-sm text-gray-700">{option}</span>
                    </label>
                  ))}
                </div>
                <Error name="scanType" />
              </div>

              {/* Medical History */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-3">
                  Medical History <span className="text-red-600">*</span>
                </label>
                <div className="grid grid-cols-2 gap-2">
                  {medicalHistoryOptions.map((option) => (
                    <label key={option} className="flex items-center space-x-2">
                      <input
                        type="checkbox"
                        checked={formData.medicalHistory.includes(option)}
                        onChange={() =>
                          handleCheckboxChange("medicalHistory", option)
                        }
                        className="rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                      />
                      <span className="text-sm text-gray-700">{option}</span>
                    </label>
                  ))}
                </div>
                <Error name="medicalHistory" />
              </div>

              {/* 2D Options */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-3">
                  2D <span className="text-red-600">*</span>
                </label>
                <div className="grid grid-cols-2 gap-2">
                  {twoDOptions.map((option) => (
                    <label key={option} className="flex items-center space-x-2">
                      <input
                        type="checkbox"
                        checked={formData.twoDOptions.includes(option)}
                        onChange={() => handleCheckboxChange("twoDOptions", option)}
                        className="rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                      />
                      <span className="text-sm text-gray-700">{option}</span>
                    </label>
                  ))}
                </div>
                <Error name="twoDOptions" />
              </div>

              {/* Special Remarks */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Special Remarks
                </label>
                <textarea
                  name="specialRemarks"
                  value={formData.specialRemarks}
                  onChange={handleInputChange}
                  rows={4}
                  required
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Any special remarks or instructions"
                />
                <Error name="specialRemarks" />
              </div>

              {/* Doctor Info & Uploads */}
              <div className="border-t pt-6">
                <h3 className="text-lg font-semibold text-gray-800 mb-4">
                  Doctor's Information
                </h3>
                <div className="grid grid-cols-1 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Doctor's Name
                    </label>
                    <input
                      type="text"
                      name="doctorName"
                      value={formData.doctorName}
                      onChange={handleInputChange}
                      required
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                      placeholder="Enter doctor's name"
                    />
                    <Error name="doctorName" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Designation
                    </label>
                    <input
                      type="text"
                      name="doctorDesignation"
                      value={formData.doctorDesignation}
                      onChange={handleInputChange}
                      required
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                      placeholder="Enter designation"
                    />
                    <Error name="doctorDesignation" />
                  </div>

                  {/* Signature Upload (optional) */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Doctor's Signature (optional)
                    </label>
                    <div className="flex items-center gap-4">
                      <input
                        type="file"
                        accept="image/*"
                        onChange={(e) =>
                          handleImageUpload(e, "doctorSignatureImage")
                        }
                        className="block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-md file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100"
                      />
                      {formData.doctorSignatureImage && (
                        <button
                          type="button"
                          onClick={() =>
                            setFormData((prev) => ({
                              ...prev,
                              doctorSignatureImage: null,
                            }))
                          }
                          className="px-3 py-1 text-sm text-red-600 hover:text-red-800 border border-red-300 rounded-md hover:bg-red-50"
                        >
                          Remove
                        </button>
                      )}
                    </div>
                    {formData.doctorSignatureImage && (
                      <div className="mt-2">
                        <img
                          src={formData.doctorSignatureImage}
                          alt="Signature Preview"
                          className="max-w-40 max-h-20 object-contain border rounded-md p-2 bg-gray-50"
                        />
                      </div>
                    )}
                  </div>

                  {/* Seal Upload (optional) */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Doctor's Seal (optional)
                    </label>
                    <div className="flex items-center gap-4">
                      <input
                        type="file"
                        accept="image/*"
                        onChange={(e) => handleImageUpload(e, "doctorSealImage")}
                        className="block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-md file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100"
                      />
                      {formData.doctorSealImage && (
                        <button
                          type="button"
                          onClick={() =>
                            setFormData((prev) => ({
                              ...prev,
                              doctorSealImage: null,
                            }))
                          }
                          className="px-3 py-1 text-sm text-red-600 hover:text-red-800 border border-red-300 rounded-md hover:bg-red-50"
                        >
                          Remove
                        </button>
                      )}
                    </div>
                    {formData.doctorSealImage && (
                      <div className="mt-2">
                        <img
                          src={formData.doctorSealImage}
                          alt="Seal Preview"
                          className="max-w-24 max-h-24 object-contain border rounded-md p-2 bg-gray-50"
                        />
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex gap-4 mt-8">
              <button
                type="submit"
                className="flex items-center gap-2 px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
              >
                <Eye className="w-4 h-4" />
                Preview
              </button>
              
            </div>
          </form>
        </div>
      </div>

      {/* Hidden print version for direct print */}
      <div className="hidden print:block">
        <PreviewComponent />
      </div>

      <style jsx>{`
        @media print {
          body * {
            visibility: hidden;
          }
          .print\\:block,
          .print\\:block * {
            visibility: visible;
          }
          .print\\:block {
            position: absolute;
            left: 0;
            top: 0;
          }
        }
      `}</style>
    </div>
  );
};
