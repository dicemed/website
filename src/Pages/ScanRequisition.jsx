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

  const [showPreview, setShowPreview] = useState(false);
  const printRef = useRef();

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
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleCheckboxChange = (category, value) => {
    setFormData((prev) => ({
      ...prev,
      [category]: prev[category].includes(value)
        ? prev[category].filter((item) => item !== value)
        : [...prev[category], value],
    }));
  };

  const handleImageUpload = (e, imageType) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (event) => {
        setFormData((prev) => ({
          ...prev,
          [imageType]: event.target.result,
        }));
      };
      reader.readAsDataURL(file);
    }
  };

  const handleDownloadPDF = () => {
    window.print();
  };

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
            <span className="font-semibold text-gray-700">
              Patient's Name:{" "}
            </span>
            <span className="text-gray-600">
              {formData.patientName || "_________________"}
            </span>
          </div>
          <div>
            <span className="font-semibold text-gray-700">
              Referring Doctor:{" "}
            </span>
            <span className="text-gray-600">
              {formData.referringDoctor || "_________________"}
            </span>
          </div>
          <div>
            <span className="font-semibold text-gray-700">Address: </span>
            <span className="text-gray-600">
              {formData.address || "_________________"}
            </span>
          </div>
        </div>
        <div className="space-y-4">
          <div>
            <span className="font-semibold text-gray-700">Age: </span>
            <span className="text-gray-600">{formData.age || "____"}</span>
          </div>
          <div>
            <span className="font-semibold text-gray-700">Gender: </span>
            <span className="text-gray-600">{formData.gender || "____"}</span>
          </div>
          <div>
            <span className="font-semibold text-gray-700">Mobile: </span>
            <span className="text-gray-600">
              {formData.mobile || "_________________"}
            </span>
          </div>
          <div>
            <span className="font-semibold text-gray-700">E-mail: </span>
            <span className="text-gray-600">
              {formData.email || "_________________"}
            </span>
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
            {formData.toothArea || "CBCT"}
          </div>
        </div>

        <div className="mb-4">
          <h3 className="font-semibold text-gray-700 mb-2">
            REGION OF INTEREST
          </h3>
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

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-6xl mx-auto px-4">
        <h1 className="text-3xl font-bold text-gray-800 text-center mb-8">
          Image Requisition Form
        </h1>

        <div className="flex gap-8">
          {/* Form Section */}
          <div className="flex-1 bg-white rounded-lg shadow-lg p-6">
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
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="Enter patient name"
                  />
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
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="Enter doctor name"
                  />
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
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Enter patient address"
                />
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
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="Age"
                  />
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
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  >
                    <option value="">Select Gender</option>
                    <option value="Male">Male</option>
                    <option value="Female">Female</option>
                    <option value="Other">Other</option>
                  </select>
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
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="Mobile number"
                  />
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
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="Email address"
                  />
                </div>
              </div>

              {/* Clinical Information */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Please kindly mention the tooth/area of interest & purpose of
                  scan
                </label>
                <textarea
                  name="toothArea"
                  value={formData.toothArea}
                  onChange={handleInputChange}
                  rows={3}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="CBCT"
                />
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
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Specify region of interest"
                />
              </div>

              {/* Scan Type */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-3">
                  Scan Type
                </label>
                <div className="grid grid-cols-2 gap-2">
                  {scanTypeOptions.map((option) => (
                    <label key={option} className="flex items-center space-x-2">
                      <input
                        type="checkbox"
                        checked={formData.scanType.includes(option)}
                        onChange={() =>
                          handleCheckboxChange("scanType", option)
                        }
                        className="rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                      />
                      <span className="text-sm text-gray-700">{option}</span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Medical History */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-3">
                  Medical History
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
              </div>

              {/* 2D Options */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-3">
                  2D
                </label>
                <div className="grid grid-cols-2 gap-2">
                  {twoDOptions.map((option) => (
                    <label key={option} className="flex items-center space-x-2">
                      <input
                        type="checkbox"
                        checked={formData.twoDOptions.includes(option)}
                        onChange={() =>
                          handleCheckboxChange("twoDOptions", option)
                        }
                        className="rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                      />
                      <span className="text-sm text-gray-700">{option}</span>
                    </label>
                  ))}
                </div>
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
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Any special remarks or instructions"
                />
              </div>

              {/* Doctor Signature Section */}
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
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                      placeholder="Enter doctor's name"
                    />
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
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                      placeholder="Enter designation"
                    />
                  </div>

                  {/* Signature Upload */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Doctor's Signature
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

                  {/* Seal Upload */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Doctor's Seal
                    </label>
                    <div className="flex items-center gap-4">
                      <input
                        type="file"
                        accept="image/*"
                        onChange={(e) =>
                          handleImageUpload(e, "doctorSealImage")
                        }
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
                onClick={() => setShowPreview(!showPreview)}
                className="flex items-center gap-2 px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
              >
                <Eye className="w-4 h-4" />
                {showPreview ? "Hide Preview" : "Show Preview"}
              </button>
              <button
                onClick={handleDownloadPDF}
                className="flex items-center gap-2 px-6 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors"
              >
                <Download className="w-4 h-4" />
                Download PDF
              </button>
            </div>
          </div>
        </div>
      </div>
      {/* Preview Section */}
      {showPreview && (
        <div className="flex-1">
          <h2 className="pt-4 text-xl text-center font-semibold text-gray-800 mb-4">
            Preview
          </h2>
          <PreviewComponent />
        </div>
      )}
      {/* Hidden print version */}
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
