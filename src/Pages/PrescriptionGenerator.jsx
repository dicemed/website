import React, { useState, useRef } from "react";
import { Plus, Trash2, Download, Eye, Upload } from "lucide-react";

const PrescriptionGenerator = () => {
  const [formData, setFormData] = useState({
    patientName: "",
    referringDoctor: "",
    address: "",
    age: "",
    gender: "",
    mobile: "",
    email: "",
    chiefComplaints: "",
    vitals: {
      bp: "",
      spo2: "",
      pulse: "",
      height: "",
      weight: "",
    },
    clinicalFindings: "",
    medicalHistory: "",
    professionalDiagnosis: "",
    investigationsAdvised: "",
    specialRemarks: "",
    finalDiagnosis: "",
    medicines: [{ name: "", dosage: "", frequency: "", timing: "" }],
    doctorSignature: null,
    doctorSeal: null,
    doctorName: "",
    doctorDesignation: "",
  });

  const [showPreview, setShowPreview] = useState(false);
  const signatureRef = useRef();
  const sealRef = useRef();

  // Predefined medicines list
  const predefinedMedicines = [
    "Paracetamol 500mg",
    "Ibuprofen 400mg",
    "Amoxicillin 500mg",
    "Azithromycin 250mg",
    "Omeprazole 20mg",
    "Metformin 500mg",
    "Amlodipine 5mg",
    "Atorvastatin 10mg",
    "Aspirin 75mg",
    "Cetirizine 10mg",
  ];

  const handleInputChange = (field, value) => {
    if (field.includes(".")) {
      const [parent, child] = field.split(".");
      setFormData((prev) => ({
        ...prev,
        [parent]: {
          ...prev[parent],
          [child]: value,
        },
      }));
    } else {
      setFormData((prev) => ({ ...prev, [field]: value }));
    }
  };

  const handleMedicineChange = (index, field, value) => {
    const updatedMedicines = [...formData.medicines];
    updatedMedicines[index][field] = value;
    setFormData((prev) => ({ ...prev, medicines: updatedMedicines }));
  };

  const addMedicine = () => {
    setFormData((prev) => ({
      ...prev,
      medicines: [
        ...prev.medicines,
        { name: "", dosage: "", frequency: "", timing: "" },
      ],
    }));
  };

  const removeMedicine = (index) => {
    if (formData.medicines.length > 1) {
      const updatedMedicines = formData.medicines.filter((_, i) => i !== index);
      setFormData((prev) => ({ ...prev, medicines: updatedMedicines }));
    }
  };

  const handleImageUpload = (type, event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        setFormData((prev) => ({ ...prev, [type]: e.target.result }));
      };
      reader.readAsDataURL(file);
    }
  };

  const getCurrentDate = () => {
    return new Date().toLocaleDateString("en-IN", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

  const downloadPDF = () => {
    window.print();
  };

  const PrescriptionPreview = () => (
    <div className="bg-white p-8 max-w-4xl mx-auto" id="prescription-preview">
      {/* Header */}
      <div className="border-b-2 border-gray-300 pb-4 mb-6">
        <div className="flex justify-between items-start">
          <div>
            <h1 className="text-2xl font-bold text-blue-600">DICEMED</h1>
            <p className="text-sm font-semibold mt-1">
              Online Prescription Generator
            </p>
          </div>
          <div className="text-right text-sm">
            <p>https://dicemed.in/</p>

            <p className="mt-2 font-semibold">Date: {getCurrentDate()}</p>
          </div>
        </div>
      </div>

      {/* Patient Details */}
      <div className="grid grid-cols-2 gap-4 mb-6 text-sm border-b-2 border-gray-300 pb-4 ">
        <div>
          <p>
            <span className="font-semibold">Patient's Name:</span>{" "}
            {formData.patientName}
          </p>
          <p>
            <span className="font-semibold">Address:</span> {formData.address}
          </p>
          <p>
            <span className="font-semibold">Mobile:</span> {formData.mobile}
          </p>
        </div>
        <div>
          <p>
            <span className="font-semibold">Referring Doctor:</span>{" "}
            {formData.referringDoctor}
          </p>
          <p>
            <span className="font-semibold">Age:</span> {formData.age}{" "}
            <span className="font-semibold">Gender:</span> {formData.gender}
          </p>
          <p>
            <span className="font-semibold">E-mail:</span> {formData.email}
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="grid grid-cols-2 gap-6 text-sm">
        {/* Left Section */}
        <div className="space-y-4">
          <div>
            <h3 className="font-semibold mb-2">Chief Complaints:</h3>
            <p className="border p-2 min-h-16 whitespace-pre-wrap">
              {formData.chiefComplaints}
            </p>
          </div>

          <div>
            <h3 className="font-semibold mb-2">Vitals:</h3>
            <div className="grid grid-cols-2 gap-2">
              <p>BP: {formData.vitals.bp}</p>
              <p>SpO2: {formData.vitals.spo2}</p>
              <p>Pulse: {formData.vitals.pulse}</p>
              <p>Height: {formData.vitals.height}</p>
              <p>Weight: {formData.vitals.weight}</p>
            </div>
          </div>

          <div>
            <h3 className="font-semibold mb-2">Clinical Findings:</h3>
            <p className="border p-2 min-h-16 whitespace-pre-wrap">
              {formData.clinicalFindings}
            </p>
          </div>

          <div>
            <h3 className="font-semibold mb-2">Medical History:</h3>
            <p className="border p-2 min-h-16 whitespace-pre-wrap">
              {formData.medicalHistory}
            </p>
          </div>

          <div>
            <h3 className="font-semibold mb-2">Professional Diagnosis:</h3>
            <p className="border p-2 min-h-16 whitespace-pre-wrap">
              {formData.professionalDiagnosis}
            </p>
          </div>

          <div>
            <h3 className="font-semibold mb-2">Investigations Advised:</h3>
            <p className="border p-2 min-h-16 whitespace-pre-wrap">
              {formData.investigationsAdvised}
            </p>
          </div>

          <div>
            <h3 className="font-semibold mb-2">Special Remarks:</h3>
            <p className="border p-2 min-h-16 whitespace-pre-wrap">
              {formData.specialRemarks}
            </p>
          </div>
        </div>

        {/* Right Section */}
        <div className="space-y-4">
          <div>
            <h3 className="font-semibold mb-2">Final Diagnosis:</h3>
            <p className="border p-2 min-h-16 whitespace-pre-wrap">
              {formData.finalDiagnosis}
            </p>
          </div>

          <div>
            <h3 className="font-semibold mb-2">Treatment Plan:</h3>
            <div className="space-y-3">
              {formData.medicines.map((medicine, index) => (
                <div key={index} className="border p-3 rounded">
                  <p>
                    <span className="font-medium">Medicine:</span>{" "}
                    {medicine.name}
                  </p>
                  <p>
                    <span className="font-medium">Dosage:</span>{" "}
                    {medicine.dosage}
                  </p>
                  <p>
                    <span className="font-medium">Frequency:</span>{" "}
                    {medicine.frequency} times per day
                  </p>
                  <p>
                    <span className="font-medium">Timing:</span>{" "}
                    {medicine.timing}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Doctor Section */}
      <div className="mt-8 flex justify-end">
        <div className="text-center">
          <div className="flex items-center space-x-4">
            {formData.doctorSignature && (
              <div>
                <img
                  src={formData.doctorSignature}
                  alt="Signature"
                  className="h-16 w-auto"
                />
                <p className="text-xs">Signature</p>
              </div>
            )}
            {formData.doctorSeal && (
              <div>
                <img
                  src={formData.doctorSeal}
                  alt="Seal"
                  className="h-16 w-auto"
                />
                <p className="text-xs">Seal</p>
              </div>
            )}
          </div>
          <p className="font-semibold mt-2">{formData.doctorName}</p>
          <p className="text-sm">{formData.doctorDesignation}</p>
        </div>
      </div>
    </div>
  );

  if (showPreview) {
    return (
      <div className="min-h-screen bg-gray-50">
        <div className="container mx-auto p-4">
          <div className="flex justify-between items-center mb-4">
            <button
              onClick={() => setShowPreview(false)}
              className="bg-gray-500 text-white px-4 py-2 rounded hover:bg-gray-600"
            >
              ← Back to Form
            </button>
            <button
              onClick={downloadPDF}
              className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 flex items-center space-x-2"
            >
              <Download size={16} />
              <span>Download PDF</span>
            </button>
          </div>
          <PrescriptionPreview />
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 p-4">
      <div className="container mx-auto max-w-6xl">
        <div className="bg-white rounded-lg shadow-lg p-6">
          <h1 className="text-3xl font-bold text-center text-blue-600 mb-8">
            Prescription Generator
          </h1>

          {/* Patient Details Section */}
          <div className="mb-8">
            <h2 className="text-xl font-semibold mb-4 text-gray-700">
              Patient Information
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              <input
                type="text"
                placeholder="Patient's Name"
                value={formData.patientName}
                onChange={(e) =>
                  handleInputChange("patientName", e.target.value)
                }
                className="border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <input
                type="text"
                placeholder="Referring Doctor"
                value={formData.referringDoctor}
                onChange={(e) =>
                  handleInputChange("referringDoctor", e.target.value)
                }
                className="border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <input
                type="text"
                placeholder="Address"
                value={formData.address}
                onChange={(e) => handleInputChange("address", e.target.value)}
                className="border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <input
                type="number"
                placeholder="Age"
                value={formData.age}
                onChange={(e) => handleInputChange("age", e.target.value)}
                className="border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <select
                value={formData.gender}
                onChange={(e) => handleInputChange("gender", e.target.value)}
                className="border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <option value="">Select Gender</option>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
                <option value="Other">Other</option>
              </select>
              <input
                type="tel"
                placeholder="Mobile"
                value={formData.mobile}
                onChange={(e) => handleInputChange("mobile", e.target.value)}
                className="border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <input
                type="email"
                placeholder="E-mail"
                value={formData.email}
                onChange={(e) => handleInputChange("email", e.target.value)}
                className="border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 md:col-span-2 lg:col-span-1"
              />
            </div>
          </div>

          {/* Main Content Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Left Section */}
            <div className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Chief Complaints
                </label>
                <textarea
                  value={formData.chiefComplaints}
                  onChange={(e) =>
                    handleInputChange("chiefComplaints", e.target.value)
                  }
                  className="w-full border border-gray-300 rounded px-3 py-2 h-24 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Enter chief complaints..."
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Vitals
                </label>
                <div className="grid grid-cols-2 gap-2">
                  <input
                    type="text"
                    placeholder="BP"
                    value={formData.vitals.bp}
                    onChange={(e) =>
                      handleInputChange("vitals.bp", e.target.value)
                    }
                    className="border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                  <input
                    type="text"
                    placeholder="SpO2"
                    value={formData.vitals.spo2}
                    onChange={(e) =>
                      handleInputChange("vitals.spo2", e.target.value)
                    }
                    className="border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                  <input
                    type="text"
                    placeholder="Pulse"
                    value={formData.vitals.pulse}
                    onChange={(e) =>
                      handleInputChange("vitals.pulse", e.target.value)
                    }
                    className="border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                  <input
                    type="text"
                    placeholder="Height"
                    value={formData.vitals.height}
                    onChange={(e) =>
                      handleInputChange("vitals.height", e.target.value)
                    }
                    className="border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                  <input
                    type="text"
                    placeholder="Weight"
                    value={formData.vitals.weight}
                    onChange={(e) =>
                      handleInputChange("vitals.weight", e.target.value)
                    }
                    className="border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 col-span-2"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Clinical Findings
                </label>
                <textarea
                  value={formData.clinicalFindings}
                  onChange={(e) =>
                    handleInputChange("clinicalFindings", e.target.value)
                  }
                  className="w-full border border-gray-300 rounded px-3 py-2 h-24 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Enter clinical findings..."
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Medical History
                </label>
                <textarea
                  value={formData.medicalHistory}
                  onChange={(e) =>
                    handleInputChange("medicalHistory", e.target.value)
                  }
                  className="w-full border border-gray-300 rounded px-3 py-2 h-24 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Enter medical history..."
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Professional Diagnosis
                </label>
                <textarea
                  value={formData.professionalDiagnosis}
                  onChange={(e) =>
                    handleInputChange("professionalDiagnosis", e.target.value)
                  }
                  className="w-full border border-gray-300 rounded px-3 py-2 h-24 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Enter professional diagnosis..."
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Investigations Advised
                </label>
                <textarea
                  value={formData.investigationsAdvised}
                  onChange={(e) =>
                    handleInputChange("investigationsAdvised", e.target.value)
                  }
                  className="w-full border border-gray-300 rounded px-3 py-2 h-24 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Enter investigations advised..."
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Special Remarks
                </label>
                <textarea
                  value={formData.specialRemarks}
                  onChange={(e) =>
                    handleInputChange("specialRemarks", e.target.value)
                  }
                  className="w-full border border-gray-300 rounded px-3 py-2 h-24 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Enter special remarks..."
                />
              </div>
            </div>

            {/* Right Section */}
            <div className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Final Diagnosis
                </label>
                <textarea
                  value={formData.finalDiagnosis}
                  onChange={(e) =>
                    handleInputChange("finalDiagnosis", e.target.value)
                  }
                  className="w-full border border-gray-300 rounded px-3 py-2 h-32 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Enter final diagnosis..."
                />
              </div>

              <div>
                <div className="flex justify-between items-center mb-2">
                  <label className="block text-sm font-medium text-gray-700">
                    Treatment Plan (Medicines)
                  </label>
                  <button
                    onClick={addMedicine}
                    className="bg-blue-500 text-white px-3 py-1 rounded text-sm hover:bg-blue-600 flex items-center space-x-1"
                  >
                    <Plus size={14} />
                    <span>Add Medicine</span>
                  </button>
                </div>

                <div className="space-y-4">
                  {formData.medicines.map((medicine, index) => (
                    <div
                      key={index}
                      className="border border-gray-200 rounded p-4 bg-gray-50"
                    >
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-sm font-medium text-gray-700">
                          Medicine {index + 1}
                        </span>
                        {formData.medicines.length > 1 && (
                          <button
                            onClick={() => removeMedicine(index)}
                            className="text-red-500 hover:text-red-700"
                          >
                            <Trash2 size={16} />
                          </button>
                        )}
                      </div>

                      <div className="space-y-2">
                        <div>
                          <input
                            type="text"
                            placeholder="Search or type medicine name"
                            value={medicine.name}
                            onChange={(e) =>
                              handleMedicineChange(
                                index,
                                "name",
                                e.target.value
                              )
                            }
                            className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                            list={`medicines-${index}`}
                          />
                          <datalist id={`medicines-${index}`}>
                            {predefinedMedicines.map((med, i) => (
                              <option key={i} value={med} />
                            ))}
                          </datalist>
                        </div>

                        <input
                          type="text"
                          placeholder="Dosage (e.g., 1 tablet, 5ml)"
                          value={medicine.dosage}
                          onChange={(e) =>
                            handleMedicineChange(
                              index,
                              "dosage",
                              e.target.value
                            )
                          }
                          className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />

                        <select
                          value={medicine.frequency}
                          onChange={(e) =>
                            handleMedicineChange(
                              index,
                              "frequency",
                              e.target.value
                            )
                          }
                          className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        >
                          <option value="">Frequency per day</option>
                          <option value="1">Once a day</option>
                          <option value="2">Twice a day</option>
                          <option value="3">Three times a day</option>
                          <option value="4">Four times a day</option>
                        </select>

                        <select
                          value={medicine.timing}
                          onChange={(e) =>
                            handleMedicineChange(
                              index,
                              "timing",
                              e.target.value
                            )
                          }
                          className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        >
                          <option value="">When to take</option>
                          <option value="Before meals">Before meals</option>
                          <option value="After meals">After meals</option>
                          <option value="With meals">With meals</option>
                          <option value="Empty stomach">Empty stomach</option>
                          <option value="At bedtime">At bedtime</option>
                          <option value="As needed">As needed</option>
                        </select>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Doctor Section */}
          <div className="mt-8 border-t pt-6">
            <h2 className="text-xl font-semibold mb-4 text-gray-700">
              Doctor Information
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
              <input
                type="text"
                placeholder="Doctor Name"
                value={formData.doctorName}
                onChange={(e) =>
                  handleInputChange("doctorName", e.target.value)
                }
                className="border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <input
                type="text"
                placeholder="Doctor Designation"
                value={formData.doctorDesignation}
                onChange={(e) =>
                  handleInputChange("doctorDesignation", e.target.value)
                }
                className="border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Doctor Signature
                </label>
                <div className="flex items-center space-x-2">
                  <input
                    type="file"
                    accept="image/*"
                    onChange={(e) => handleImageUpload("doctorSignature", e)}
                    className="hidden"
                    ref={signatureRef}
                  />
                  <button
                    onClick={() => signatureRef.current?.click()}
                    className="bg-gray-500 text-white px-3 py-2 rounded hover:bg-gray-600 flex items-center space-x-2"
                  >
                    <Upload size={16} />
                    <span>Upload Signature</span>
                  </button>
                  {formData.doctorSignature && (
                    <img
                      src={formData.doctorSignature}
                      alt="Signature"
                      className="h-8 w-auto"
                    />
                  )}
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Doctor Seal
                </label>
                <div className="flex items-center space-x-2">
                  <input
                    type="file"
                    accept="image/*"
                    onChange={(e) => handleImageUpload("doctorSeal", e)}
                    className="hidden"
                    ref={sealRef}
                  />
                  <button
                    onClick={() => sealRef.current?.click()}
                    className="bg-gray-500 text-white px-3 py-2 rounded hover:bg-gray-600 flex items-center space-x-2"
                  >
                    <Upload size={16} />
                    <span>Upload Seal</span>
                  </button>
                  {formData.doctorSeal && (
                    <img
                      src={formData.doctorSeal}
                      alt="Seal"
                      className="h-8 w-auto"
                    />
                  )}
                </div>
              </div>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex justify-center space-x-4 mt-8">
            <button
              onClick={() => setShowPreview(true)}
              className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 flex items-center space-x-2"
            >
              <Eye size={20} />
              <span>Preview Prescription</span>
            </button>
          </div>
        </div>
      </div>

      <style jsx>{`
        @media print {
          body * {
            visibility: hidden;
          }
          #prescription-preview,
          #prescription-preview * {
            visibility: visible;
          }
          #prescription-preview {
            position: absolute;
            left: 0;
            top: 0;
            width: 100% !important;
          }
        }
      `}</style>
    </div>
  );
};

export default PrescriptionGenerator;
