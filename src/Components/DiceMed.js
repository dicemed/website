import React, { useState, useEffect } from "react";
import yourImage from "../Assets/ajo.jpg";
import { motion, AnimatePresence } from "framer-motion";
import athulImage from "../Assets/atul.png";
import pranavImage from "../Assets/WhatsApp Image 2025-03-24 at 16.14.57_2dad9595.jpg";
import annaImage from "../Assets/anna.jpg";
import drImage from "../Assets/dr.png";
import mituImage from "../Assets/mitu.jpg";
import deepanshuImage from "../Assets/my pic of google.jpeg";
import manuImage from "../Assets/manu.png";
import sadhvikImage from "../Assets/sadvik.jpg";
import abiyaImage from "../Assets/george.jpg";
import rejiImage from "../Assets/reji.jpg";
import newsImg1 from "../Assets/newsImg1.png";
import newsImg2 from "../Assets/newsImg2.png";
import newsImg3 from "../Assets/newsImg3.png";
import newsImg4 from "../Assets/newsImg4.png";
import newsImg5 from "../Assets/newsImg5.png";
import YohannImg from "../Assets/Yohann1.png";
import GadhaImg from "../Assets/Gadha.png";
import JoelImg from "../Assets/Joel.png";
import NehaImg from "../Assets/Neha.webp";
import NikhilImg from "../Assets/Nikhil.png"
import { SiGooglescholar } from "react-icons/si";
import miccai_first from "../Assets/miccai_first.jpg"
import miccai_third from "../Assets/miccai_third.jpg"
import rsnaLogo from "../Assets/rsna.png"
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import miccai from "../Assets/miccai.png"
import smart from "../Assets/smart.png"

//Localized Achievements Component
const AchievementsCarousel = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [currentCard, setCurrentCard] = useState(0);
  const [paused, setPaused] = useState(false);

  const cards = [
    // MICCAI 2025 CARD
    <motion.div
      whileHover={{ y: -6, scale: 1.01 }}
      transition={{ type: "spring", stiffness: 220, damping: 24 }}
      className="relative bg-white rounded-3xl shadow-md hover:shadow-xl ring-1 ring-gray-100 
                 transition-all duration-500 overflow-hidden max-w-5xl mx-auto p-0"
    >
      <div className="bg-gradient-to-r from-sky-100 via-indigo-50 to-cyan-100 text-gray-800 py-5 px-8 text-left border-b border-gray-200">
        <h3 className="text-xl md:text-2xl font-semibold text-gray-800">
          MICCAI 2025 — ODIN Challenge
        </h3>
        <p className="text-gray-600 text-sm md:text-base mt-1">
          Computational Dentistry • Daejeon, South Korea
        </p>
      </div>

      <div className="p-8 md:p-10 flex flex-col items-center text-center space-y-6 bg-gradient-to-br from-indigo-50 via-white to-sky-50">
        <p className="text-gray-700 text-lg text-justify leading-relaxed max-w-3xl">
          DiceMed’s AI-driven research projects achieved <strong>1st</strong> and 
          <strong> 3rd</strong> place at the <em>ODIN Challenge on Computational Dentistry</em> 
          during <strong>MICCAI 2025</strong>, held in Daejeon, South Korea.  
          The approved projects focused on <strong>Cone-Beam Computed Tomography (CBCT)</strong>–based 
          innovations, including <em>CBCT–Intra Oral Scanning Registration</em> and 
          <em> CBCT Teeth and Root Pulp Canal Segmentation</em>, highlighting our 
          advancements in <strong>computational dentistry</strong> and 
          <strong> 3D medical imaging AI</strong>.
        </p>

        {/* Certificates */}
        <div className="flex flex-wrap justify-center gap-10 mt-4">
          {[ 
            { src: miccai_first, alt: "1st Prize", label: "1st Place – ODIN Challenge" },
            { src: miccai_third, alt: "3rd Prize", label: "3rd Place – ODIN Challenge" },
          ].map((img, i) => (
            <motion.div
              key={i}
              whileHover={{ y: -4, scale: 1.03 }}
              transition={{ type: "spring", stiffness: 220, damping: 20 }}
              onClick={() => setSelectedImage(img.src)}
              className="relative cursor-pointer w-[300px] sm:w-[340px] aspect-[4/3] 
                         bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-lg 
                         border border-gray-100 hover:border-indigo-200 transition-all duration-500"
            >
              <div className="absolute top-3 left-3 bg-gradient-to-r from-indigo-500 to-sky-500 text-white 
                              text-xs font-semibold px-3 py-1 rounded-full shadow-md z-10">
                {img.label}
              </div>
              <img src={img.src} alt={img.alt} className="w-full h-full object-cover rounded-2xl transition-transform duration-700 hover:scale-105" />
            </motion.div>
          ))}
        </div>

        <div className="flex justify-center items-center gap-3 mt-6 text-indigo-600 font-medium text-sm">
          <i className="fas fa-award text-indigo-500"></i>
          International Recognition • Computational Dentistry • Deep Learning
        </div>
      </div>
    </motion.div>,

    // PATENT CARD — UK Design Patent
<motion.div
  whileHover={{ y: -6, scale: 1.01 }}
  transition={{ type: "spring", stiffness: 220, damping: 24 }}
  className="relative bg-white rounded-3xl shadow-md hover:shadow-xl ring-1 ring-gray-100 
             transition-all duration-500 overflow-hidden max-w-4xl mx-auto p-0"
>
  <div className="bg-gradient-to-r from-indigo-50 via-sky-100 to-cyan-100 text-gray-800 py-5 px-8 text-left border-b border-gray-200">
    <h3 className="text-xl md:text-xl font-semibold text-gray-800">
      UK Design Patent — Hybrid ML–CNN Diagnostic Console for Pulmonary Oncology
    </h3>
    <p style= {{ fontSize: '0.85rem', color:'#777', fontStyle: 'italic'}}>
      Protected under <strong>UK Registered Design No. 6460391</strong>, granted by the UK Intellectual Property Office.
    </p>
    <a href="https://drive.google.com/file/d/1dDC-kkGrmtJee7mN62VqGsdLYb3srSnX/view?usp=drive_link" target="_blank" rel="noopener noreferrer" 
    style={{ display: 'inline-block', marginTop: '0.5rem', fontSize: '0.9rem', color: '#0056b3', textDecoration: 'underline'}}>
      View UK Registered Design Certificate (PDF)</a>

  </div>

  <div className="p-8 md:p-10 bg-gradient-to-br from-white via-indigo-50 to-sky-50 text-center flex flex-col items-center space-y-5">
    <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 md:p-8 shadow-sm border border-gray-100 max-w-3xl">
      <p className="text-gray-700 text-lg text-justify leading-relaxed">
        The design patent titled <em>"Hybrid Machine Learning–CNN Based Diagnostic Console for Pulmonary Oncology"</em> represents
        a collaborative innovation integrating <strong>deep learning</strong> and <strong>medical imaging systems</strong> 
        to assist in early detection and risk stratification of pulmonary cancers.
        This multidisciplinary invention merges <strong>AI interpretability</strong>, <strong>clinical radiology</strong>, 
        and <strong>diagnostic console design</strong> for improved decision support.
      </p>
      <p className="mt-4 text-gray-600 text-sm">
        <strong>Inventors:</strong> Manoj Kumar Beuria, Deepak Patidar, Ashish Kumar Soni, Swathi Dayanand Mahindrakar, 
        Arun Kumar, Ajo Babu George, Kunal Agarwal, Ujjval Chandra Das, Niharika Singh, Shiwani Singhal, 
        Bharat Bhushan Verma, Amit Kumar Patil, Suprativ Saha, Mukta Makhija.
      </p>
    </div>
    <div className="flex items-center justify-center gap-3 mt-4 text-indigo-600 font-medium text-sm">
      <i className="fas fa-certificate text-indigo-500"></i>
      Granted Design Patent • AI in Oncology • Diagnostic Innovation
    </div>
  </div>
</motion.div>,

  ];

  //  Auto-slide effect 
  useEffect(() => {
    if (paused) return;
    const slideInterval = setInterval(() => {
      setCurrentCard((prev) => (prev + 1) % cards.length);
    }, 4000);
    return () => clearInterval(slideInterval);
  }, [paused, cards.length]);

  return (
    <div
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      className="max-w-6xl mx-auto text-center relative"
    >
      <motion.h2
        initial={{ y: 50, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="text-4xl font-semibold tracking-tight text-gray-900"
      >
        Achievements & Recognitions
      </motion.h2>

      <p className="mt-3 text-gray-600 max-w-2xl mx-auto leading-relaxed">
        Celebrating milestones that highlight our dedication to clinical AI, innovation, and impactful research.
      </p>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="mt-8 flex justify-center"
      >
      </motion.div>

      {/* Carousel */}
      <motion.div
        initial={{ y: 80, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="relative mt-16 overflow-hidden group"
      >
        {/* Arrows */}
        <button
          onClick={() => setCurrentCard((prev) => (prev === 0 ? cards.length - 1 : prev - 1))}
          className="absolute left-3 top-1/2 -translate-y-1/2 
             bg-indigo-50/90 hover:bg-indigo-100
             text-indigo-700
             rounded-full shadow-md p-3 z-10
             opacity-0 group-hover:opacity-100
             transition-all duration-300 ease-out
             hover:scale-105"
        >
          <i className="fas fa-chevron-left "></i>
        </button>

        <button
          onClick={() => setCurrentCard((prev) => (prev + 1) % cards.length)}
          className="absolute right-3 top-1/2 -translate-y-1/2 
             bg-indigo-50/90 hover:bg-indigo-100
             text-indigo-700
             rounded-full shadow-md p-3 z-10
             opacity-0 group-hover:opacity-100
             transition-all duration-300 ease-out
             hover:scale-105"
        >
          <i className="fas fa-chevron-right"></i>
        </button>

        <AnimatePresence mode="wait">
          <motion.div
            key={currentCard}
            initial={{ x: 100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: -100, opacity: 0 }}
            transition={{ duration: 0.7, ease: "easeInOut" }}
            className="flex justify-center"
          >
            {cards[currentCard]}
          </motion.div>
        </AnimatePresence>
      </motion.div>

      {/* Modal */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            className="fixed inset-0 bg-black/70 flex items-center justify-center z-50 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedImage(null)}
          >
            <motion.div
              className="relative bg-white p-4 rounded-xl shadow-2xl max-w-3xl w-[90%]"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ duration: 0.3 }}
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setSelectedImage(null)}
                className="absolute top-3 right-3 text-gray-500 hover:text-gray-700 text-lg font-semibold"
              >
                ✕
              </button>
              <img src={selectedImage} alt="Enlarged Certificate" className="w-full h-auto rounded-lg shadow-md" />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};


const DiceMed = () => {
  // dont ever remove below comment
  // "homepage": "https://ajogeorge29.github.io/dicemed",


  const [contactForm, setContactForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  {/*About Carousel */}
  const aboutSlides = [
    {
      id: "profile",
      type: "photo",
    },
    {
      id: "education",
      title: "Education",
      body: (
        <>
          <ul className="list-disc pl-5 marker:text-gray-400 text-gray-700 text-base md:text-lg leading-[1.75] text-justify space-y-2.5">
            <li>
              MBA in Healthcare and Hospital Management, Indira Gandhi National
              Open University (IGNOU) — focused on healthcare-specific management
              skills.
            </li>
            <li>
              Minor in Artificial Intelligence, Indian Institute of Technology
              (IIT) Ropar — emphasizing interdisciplinary learning.
            </li>
            <li>
              Master of Dental Surgery (MDS) with specialization in
              Dentomaxillofacial Radiology.
            </li>
            <li>
              Bachelor of Dental Surgery (BDS) — foundational degree in
              dentistry.
            </li>
          </ul>
        </>
      ),
    },
    {
      id: "experience",
      title: "Professional Experience",
      body: (
        <>
          <ul className="list-disc list-inside text-gray-700 text-lg leading-relaxed text-justify space-y-2">
            <li>
              Extensive experience spanning both clinical practice and medical
              innovation.
            </li>
            <li>
              Focused on <strong>medical device innovation</strong>, collaborating
              with engineers and designers to develop novel healthcare solutions.
            </li>
            <li>
              Selected for the <strong>CLiMB (Clinical Innovation in Medicine and
              Biodesign)</strong> Fellowship at <strong>ICMR–IIT Kharagpur</strong>.
            </li>
            <li>
              Served as a <strong>Senior Resident</strong> at <strong>SCB Medical
              College Hospital</strong>, gaining hands-on clinical expertise in a
              high-pressure environment.
            </li>
          </ul>
        </>
      ),
    },
    {
      id: "skills",
      title: "Skills & Interests",
      body: (
        <>
          <ul className="list-disc list-inside text-gray-700 text-lg leading-relaxed text-justify space-y-2">
            <li>
              Combines strong <strong>clinical expertise</strong> with advanced{" "}
              <strong>technological acumen</strong>.
            </li>
            <li>
              Proficient in multiple <strong>programming languages</strong> and{" "}
              <strong>machine learning frameworks</strong>, demonstrated through
              his GitHub projects.
            </li>
            <li>
              Applies technical knowledge to enhance{" "}
              <strong>AI-driven medical imaging</strong> and{" "}
              <strong>healthcare innovation</strong>.
            </li>
            <li>
              Exemplifies the <strong>integration of medicine, technology, and
              management</strong> in modern healthcare practice.
            </li>
            <li>
              Recognized as a valuable contributor to the{" "}
              <strong>future of precision diagnostics</strong> and digital
              healthcare transformation.
            </li>
          </ul>
        </>
      ),
    },
  ];

  const [aboutIndex, setAboutIndex] = useState(0);
  const aboutLen = aboutSlides.length;
  const aboutNext = () => setAboutIndex((i) => (i + 1) % aboutLen);
  const aboutPrev = () => setAboutIndex((i) => (i - 1 + aboutLen) % aboutLen);

  const handleContactChange = (e) => {
    const { name, value } = e.target;
    setContactForm((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSendMessage = (e) => {
    e.preventDefault();

    const { name, email, message } = contactForm;

    // Validation for Name
    if (!name.trim()) {
      alert("Please enter your name.");
      return;
    }

    // Validation for Email
    const emailRegex =
      /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!emailRegex.test(email)) {
      alert("Please enter a valid email address.");
      return;
    }

    // Validation for Message
    if (!message.trim()) {
      alert("Please enter your message.");
      return;
    }

    if (message.length < 10) {
      alert("Message should be at least 10 characters long.");
      return;
    }

    const emailBody = `Dear Dr. Ajo Babu George,

    I want to contact you regarding your work at DiceMed.
    
    Details:
    Name: ${name}
    Email: ${email}
    Message: ${message}

    Best regards,
    ${name}`;

    openMailClient({
      to: "drajo_george@DiceMed.in",
      subject: `Contact Request from ${name}`,
      body: emailBody,
    });
  };

  const openMailClient = ({ to, subject, body }) => {
    const mailtoLink = `mailto:${to}?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(body)}`;
    window.location.href = mailtoLink;
  };

  return (
    <div className="font-sans text-gray-800">
      {/* Dr. Ajo Babu George */}
      <section id="dr.-ajo" className="py-20 px-5 bg-gray-50 text-gray-700">
        <div className="max-w-6xl mx-auto relative">
          {/*About Dr Ajo Babu George (carousel)*/}

          <div className="overflow-hidden rounded-2xl">
            <motion.div
              className="flex"
              animate={{ x: `-${aboutIndex * 100}%` }}
              transition={{ type: "spring", stiffness: 220, damping: 26 }}
              drag="x"
              dragConstraints={{ left: 0, right: 0 }}
              onDragEnd={(_, info) => {
                if (info.offset.x < -80) aboutNext();
                if (info.offset.x > 80) aboutPrev();
              }}
            >
              {aboutSlides.map((s) => (
                <div
                  key={s.id}
                  className="w-full flex-shrink-0 p-6 md:p-10"
                >
                  {s.type === "photo" ? (
                    // Slide 1: photo + text + links
                    <div className="bg-white rounded-2xl shadow px-5 py-8 md:p-10 h-full min-h-[540px] md:min-h-[420px] flex flex-col justify-between">
                      <div className="flex flex-col md:flex-row items-center md:items-start md:justify-center gap-6 md:gap-10 text-justify">
                        <div className="w-44 sm:w-52 md:w-72 aspect-[353/372] rounded-full overflow-hidden shadow-lg mx-auto md:mx-0">
                          <img
                            src={yourImage}
                            alt="Dr. Ajo Babu George"
                            className="w-[789px] h-auto object-contain"
                          />
                        </div>
                        <div className="text-justify md:text-justify md:text-left max-w-xl space-y-3 leading-[1.75] space-y-3 leading-relaxed">
                          <h3 className="text-3xl font-semibold">
                            Dr. Ajo Babu George
                          </h3>
                          <hr className="xl:mb-3 mb-2 mt-2 xl:w-3/6" />
                          <p className="text-lg leading-relaxed text-gray-700 text-justify mb-4">
                            Dr. Ajo Babu George blends deep medical expertise
                            with a relentless drive for technological innovation.
                            As the visionary behind{" "}
                            <strong>DiceMed</strong>, he champions the fusion of{" "}
                            <em>technology</em> and <em>healthcare</em> to
                            redefine diagnostic precision and clinical
                            decision-making. His pioneering work in{" "}
                            <strong>AI-powered medical imaging </strong>
                            reflects a bold commitment to advancing accessible,
                            intelligent, and patient-centric healthcare.
                          </p>
                           {/* <p className="text-lg leading-relaxed text-gray-700 mb-4">
          ORCID ID: <a href="https://orcid.org/0009-0005-3026-0959" target="_blank" rel="noopener noreferrer" className="text-blue-600 underline">0009-0005-3026-0959</a>
        </p> */}
                          <div className="flex items-center gap-6 mt-4 text-2xl">
                            <a
                              href="https://www.linkedin.com/in/dr-ajo-babu-george"
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-blue-600 hover:text-blue-800 transition"
                              aria-label="LinkedIn"
                            >
                              <i className="fab fa-linkedin" />
                            </a>
                            <a
                              href="https://scholar.google.com/citations?user=2c0XSHsAAAAJ&hl=en"
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-blue-700 hover:text-blue-900 transition"
                              aria-label="Google Scholar"
                            >
                              <SiGooglescholar size={20} />
                            </a>
                            <a
                              href="mailto:drajo_george@DiceMed.in"
                              className="text-red-600 hover:text-red-800 transition"
                              aria-label="Email"
                            >
                              <i className="fas fa-envelope" />
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  ) : (
                    
                    <div className="bg-white rounded-2xl shadow px-5 py-8 md:p-10 h-full min-h-[540px] md:min-h-[420px] flex flex-col">
                      <div className="max-w-4xl mx-auto text-center md:text-left">
                        <h3 className="text-2xl font-semibold">
                          {s.title}
                        </h3>
                        <hr className="xl:mb-3 mb-2 mt-1 xl:w-1/6 w-2/6 mx-auto md:mx-0" />
                        <div className="text-lg leading-relaxed text-gray-700">
                          {s.body}
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </motion.div>
          </div>

          {/* Arrows */}
          <button
            aria-label="Previous"
            onClick={aboutPrev}
            className="flex md:flex absolute
             bottom-3 left-3            {/* mobile: bottom corner */}
             md:bottom-auto md:left-4   {/* md+: reset to centered sides */}
             md:top-1/2 md:-translate-y-1/2
             w-10 h-10 md:w-12 md:h-12  /* smaller on mobile */
             bg-white/95 backdrop-blur text-blue-600 shadow-lg
             rounded-full items-center justify-center
             border-2 border-blue-500
             hover:bg-blue-600 hover:text-white transition-all duration-300
             hover:scale-110 z-10"
          >  ‹
          </button>

          <button
            aria-label="Next"
            onClick={aboutNext}
            className="flex md:flex absolute
             bottom-3 right-3           {/* mobile: bottom corner */}
             md:bottom-auto md:right-4  {/* md+: reset to centered sides */}
             md:top-1/2 md:-translate-y-1/2
             w-10 h-10 md:w-12 md:h-12
             bg-white/95 backdrop-blur text-blue-600 shadow-lg
             rounded-full items-center justify-center
             border-2 border-blue-500
             hover:bg-blue-600 hover:text-white transition-all duration-300
             hover:scale-110 z-10"
          >
            ›
          </button>

          {/* Dots */}
          <div className="mt-6 flex items-center justify-center gap-2">
            {aboutSlides.map((_, i) => (
              <button
                key={i}
                aria-label={`Go to slide ${i + 1}`}
                onClick={() => setAboutIndex(i)}
                className={`h-2.5 rounded-full transition-all ${
                  aboutIndex === i ? "w-8 bg-blue-600" : "w-2.5 bg-gray-300"
                }`}
              />
            ))}
          </div>
        </div>
      </section>

      <section id="publications" className="py-20 px-5 bg-white">
        <div className="max-w-6xl mx-auto">
          {/* header */}
          <div className="text-center">
            <h2 className="text-4xl font-semibold tracking-tight text-gray-900">
              Publications
            </h2>
            <div className="relative w-24 h-1 mx-auto mt-3 mb-6">
              <span className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-600 via-sky-500 to-cyan-400 opacity-80" />
            </div>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Selected research in AI and healthcare technologies.
            </p>
          </div>

          {/* eslint-disable-next-line */}{/* Add more publications as needed */}
          {(() => {
            const publications = [
              {
                title:
                  "nnU-Net-Based Automated Nasopalatine Nerve Segmentation for Maxillofacial Surgery",
                year: 2025,
                venue: "—",
                authors: "",
                type: "Manuscript",
                status: "Ongoing",
                doi: "",
                pdf: "",
                note: "Computer Vision • Medical Imaging",
              },
              {
                title:
                  "FedDPI-SH: A Quality- and Similarity-Aware Federated Learning Framework for Medical Image Analysis",
                year: 2025,
                venue: "—",
                authors: "",
                type: "Manuscript",
                status: "Ongoing",
                doi: "",
                pdf: "",
                note: "Federated Learning • Privacy",
              },
              {
                title:
                  "Multi-Source Clinical Case Data for Enhanced Rare Disease Analytics: A Framework for Predictive Modeling and Policy-Oriented Insights",
                year: 2025,
                venue: "—",
                authors: "",
                type: "Manuscript",
                status: "Ongoing",
                doi: "",
                pdf: "",
                note: "Clinical Data • Policy",
              },
              {
                title:
                  "Deep Learning for Oral Health: Benchmarking ViT, DeiT, BEiT, ConvNeXt, and Swin Transformer",
                year: 2025,
                venue: "arXiv",
                authors: "A. B. George, S. Bathini, S.R Niranjana",
                type: "Preprint",
                status: "Published",
                doi: "https://arxiv.org/abs/2509.23100",
                pdf: "https://arxiv.org/pdf/2509.23100",
                note: "Deep Learning • Oral Health • Vision Transformers",
              },
              {
                title:
                  "Multi-Modal Oral Cancer Detection Using Weighted Ensemble Convolutional Neural Networks",
                year: 2025,
                venue: "arXiv",
                authors: "A. B. George, J. R. Sreehari",
                type: "Preprint",
                status: "Published",
                doi: "https://arxiv.org/abs/2510.03878",
                pdf: "https://arxiv.org/pdf/2510.03878",
                note: "Computer Vision • Oral Cancer • Pattern Recognition",
              },
              {
                title:"Grad-CAM & Grad-CAM++ for Explainable Oral Squamous Cell Carcinoma Detection using Deep Learning on Orthopantomograms",
                year: 2025,
                venue: "IEEE SENNET 2025",
                authors: "A. B. George, S. Bathini, G. Arun",
                type: "Conference Paper",
                status: "Published",
                doi: "https://ieeexplore.ieee.org/document/11136014",
                pdf: "https://ieeexplore.ieee.org/document/11136014", // if you have a PDF link you can fill it
                note: "Explainable AI • Oral Cancer "
              }              
            ];

            const statusColors = {
              Published:
                "bg-green-50 text-green-700 ring-1 ring-inset ring-green-200",
              "In Review":
                "bg-amber-50 text-amber-700 ring-1 ring-inset ring-amber-200",
              Preprint:
                "bg-indigo-50 text-indigo-700 ring-1 ring-inset ring-indigo-200",
              Ongoing:
                "bg-blue-50 text-blue-700 ring-1 ring-inset ring-blue-200",
            };

            const TypeIcon = ({ type }) => {
              const base = "h-4 w-4";
              if (type === "Manuscript") {
                return (
                  <svg
                    className={base}
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                  >
                    <path
                      strokeWidth="1.5"
                      d="M8 3h8a2 2 0 0 1 2 2v14l-4-3-4 3V5a2 2 0 0 1 2-2z"
                    />
                  </svg>
                );
              }
              if (type === "Preprint") {
                return (
                  <svg
                    className={base}
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                  >
                    <path
                      strokeWidth="1.5"
                      d="M4 5a2 2 0 0 1 2-2h9l5 5v11a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V5z"
                    />
                    <path strokeWidth="1.5" d="M14 3v4a1 1 0 0 0 1 1h4" />
                  </svg>
                );
              }
              return (
                <svg
                  className={base}
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                >
                  <circle cx="12" cy="12" r="9" strokeWidth="1.5" />
                </svg>
              );
            };

            return (
              <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {publications.map((p, i) => {
                  const tags = (p.note || "")
                    .split("•")
                    .map((t) => t.trim())
                    .filter(Boolean);

                  return (
                    <article
                      key={i}
                      className="group relative rounded-2xl border border-gray-200 bg-white shadow-sm hover:shadow-lg transition-shadow duration-300 flex flex-col"
                    >
                      {/* main content */}
                      <div className="p-5 flex flex-col flex-1">
                        {/* badges */}
                        <div className="flex items-center justify-between gap-2 mb-3">
                          <div className="flex items-center gap-2">
                            <span className="inline-flex items-center gap-1.5 rounded-full bg-gray-50 px-2.5 py-1 text-xs font-medium text-gray-700 ring-1 ring-gray-200">
                              <svg
                                className="h-3.5 w-3.5"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                              >
                                <path
                                  strokeWidth="1.5"
                                  d="M7 3v4M17 3v4M3 9h18M5 21h14a2 2 0 0 0 2-2V7H3v12a2 2 0 0 0 2 2z"
                                />
                              </svg>
                              {p.year}
                            </span>
                            {/* Type Badge */}
                            {p.type === "Design Registered (UK IPO)" ? (
                              <span className="inline-flex items-center gap-1.5 rounded-full bg-amber-50 text-amber-700 ring-1 ring-amber-200 px-2.5 py-1 text-xs font-medium relative group cursor-help"
                              title="Registered under the UK Intellectual Property Office (UK IPO)">
                              <i className="fas fa-certificate text-[11px]" />
                              {p.type}
                              <span className="absolute bottom-full mb-2 left-1/2 -translate-x-1/2 whitespace-nowrap text-[11px] bg-gray-800 text-white px-2 py-1 rounded-md opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none shadow-md">
                                Registered under UK Intellectual Property Office
                              </span>
                            </span>
                            ) : (
                            <span className="inline-flex items-center gap-1.5 rounded-full bg-gray-50 px-2.5 py-1 text-xs font-medium text-gray-700 ring-1 ring-gray-200">
                            <TypeIcon type={p.type} />
                              {p.type}
                            </span>
                          )}
                          </div>

                          <span
                            className={`inline-flex items-center gap-1.5 rounded-full px-2.5 py-1 text-xs font-semibold ${
                              statusColors[p.status] ||
                              "bg-gray-50 text-gray-700 ring-1 ring-inset ring-gray-200"
                            }`}
                          >
                            <span className="h-1.5 w-1.5 rounded-full bg-current opacity-80" />
                            {p.status}
                          </span>
                        </div>

                        {/* title */}
                        <h3 className="text-base sm:text-lg font-semibold leading-snug text-gray-900">
                          {p.title}
                        </h3>

                        {/* authors */}
                        {p.authors && (
                          <p className="mt-2 text-sm text-gray-700">
                            {p.authors}
                          </p>
                        )}
 
                        {/* tags */}
                        {tags.length > 0 && (
                          <div className="mt-3 flex flex-wrap gap-2">
                            {tags.map((t, idx) => (
                              <span
                                key={idx}
                                className="inline-flex items-center rounded-full border border-gray-200 bg-gray-50 px-2.5 py-1 text-[11px] font-medium text-gray-700"
                              >
                                {t}
                              </span>
                            ))}
                          </div>
                        )}

                        {/* actions */}
                        <div className="mt-5 flex items-center gap-3 pt-4 border-t border-gray-100">
                          {p.pdf ? (
                            <a
                              href={p.pdf}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="inline-flex items-center gap-1.5 rounded-md border border-blue-200 bg-blue-50 px-3 py-1.5 text-sm font-medium text-blue-700 hover:bg-blue-100 hover:border-blue-300 transition"
                            >
                              <svg
                                className="h-4 w-4"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                              >
                                <path
                                  strokeWidth="1.5"
                                  d="M12 5v14M5 12h14"
                                />
                              </svg>
                              PDF
                            </a>
                          ) : (
                            <span className="text-sm text-gray-400">
                              PDF soon
                            </span>
                          )}

                          <span className="text-gray-300">•</span>

                          {p.doi ? (
                            <a
                              href={p.doi}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="inline-flex items-center gap-1.5 rounded-md border border-gray-200 bg-white px-3 py-1.5 text-sm font-medium text-gray-700 hover:text-gray-900 hover:border-gray-300 transition"
                            >
                              <svg
                                className="h-4 w-4"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                              >
                                <path
                                  strokeWidth="1.5"
                                  d="M7 17L17 7M7 7h10v10"
                                />
                              </svg>
                              DOI
                            </a>
                          ) : (
                            <span className="text-sm text-gray-400">
                              DOI pending
                            </span>
                          )}
                        </div>
                      </div>
                          
                      {/* bottom hover accent */}
                      <div className="h-1 bg-gradient-to-r from-blue-600/80 to-blue-400/80 rounded-b-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    </article>
                  );
                })}
              </div>
            );
          })()}
        </div>
      </section>

      {/* Research Group */}
      <section id="research-group" className="relative py-24 px-5">
     
        <div
          aria-hidden="true"
          className="absolute inset-0 -z-10"
          style={{
            background:
              "linear-gradient(180deg, #f8fafc 0%, #ffffff 55%, #f8fafc 100%)",
          }}
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 -z-10 opacity-50"
          style={{
            backgroundImage:
              "radial-gradient(32rem 32rem at 15% 10%, rgba(99,102,241,.08) 0, transparent 60%), radial-gradient(28rem 28rem at 85% 25%, rgba(56,189,248,.08) 0, transparent 60%)",
          }}
        />

        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-14">
            <h2 className="text-4xl font-semibold tracking-tight text-gray-900">
              Our Team
            </h2>
            <p className="mt-3 text-gray-600 max-w-2xl mx-auto">
              A cross-functional crew blending clinical expertise, AI, and
              product craft.
            </p>
            <div className="mt-8 flex justify-center">
              <span className="h-1 w-28 rounded-full bg-gradient-to-r from-indigo-500 via-sky-400 to-cyan-400" />
            </div>
          </div>

          {/* Helpers */}
          {(() => {
            const roleTone = (role) => {
              // Return a palette for a role label
              
              if (/Radiolog|Clinical/i.test(role))
                return {
                  grad: "from-sky-50 to-white",
                  ring: "ring-sky-200",
                  badge: "bg-sky-100 text-sky-800 ring-sky-200",
                  chip: "bg-sky-50 text-sky-700 ring-sky-100",
                };
              if (/Robotics/i.test(role))
                return {
                  grad: "from-emerald-50 to-white",
                  ring: "ring-emerald-200",
                  badge: "bg-emerald-100 text-emerald-800 ring-emerald-200",
                  chip: "bg-emerald-50 text-emerald-700 ring-emerald-100",
                };
              if (/Neural|AI|ML|Engineer|Developer/i.test(role))
                return {
                  grad: "from-indigo-50 to-white",
                  ring: "ring-indigo-200",
                  badge: "bg-indigo-100 text-indigo-800 ring-indigo-200",
                  chip: "bg-indigo-50 text-indigo-700 ring-indigo-100",
                };

              if (/CEO|Leadership|Strategy/i.test(role))
                return {
                  grad: "from-teal-50 to-white",
                  ring: "ring-teal-200",
                  badge: "bg-teal-100 text-teal-800 ring-teal-200",
                  chip: "bg-teal-50 text-teal-700 ring-teal-100",
                };

              if (/Vision|Diagnostics|Healthcare|Medical Imaging/i.test(role))
                return {
                  grad: "from-violet-50 to-white",
                  ring: "ring-violet-200",
                  badge: "bg-violet-100 text-violet-800 ring-violet-200",
                  chip: "bg-violet-50 text-violet-700 ring-violet-100",
                };

              if (/Research|Development|R&D/i.test(role))
                return {
                  grad: "from-purple-50 to-white",
                  ring: "ring-purple-200",
                  badge: "bg-purple-100 text-purple-800 ring-purple-200",
                  chip: "bg-purple-50 text-purple-700 ring-purple-100",
                };

              if (/Mechanical|Hardware|Trainee/i.test(role))
                return {
                  grad: "from-teal-50 to-white",
                  ring: "ring-teal-200",
                  badge: "bg-teal-100 text-teal-800 ring-teal-200",
                  chip: "bg-teal-50 text-teal-700 ring-teal-100",
                };

              // Default fallback
                return {
                  grad: "from-slate-50 to-white",
                  ring: "ring-slate-200",
                  badge: "bg-slate-100 text-slate-800 ring-slate-200",
                  chip: "bg-slate-50 text-slate-700 ring-slate-100",
                };
            };

            const TeamCard = ({ person, idx }) => {
            const tone = roleTone(person.role || "");
            return (
              <motion.article
                  initial={{ y: 14, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  viewport={{ once: true, amount: 0.25 }}
                  transition={{
                    duration: 0.35,
                    delay: (idx || 0) * 0.05,
                  }}
                  className={[
                  "group relative overflow-hidden rounded-2xl border border-white",
                  "bg-gradient-to-br",tone.grad,"shadow-sm hover:shadow-md ring-1",
                  tone.ring,"transition-all duration-300 flex flex-col items-center text-center",].join(" ")}
                  style={{
                  backgroundImage: `linear-gradient(to bottom right, transparent, transparent),
                  radial-gradient(40rem 40rem at 120% -10%, rgba(0,0,0,.02), transparent 60%)`,
                  backgroundBlendMode: "overlay",
                  }}>
                {/* Image Section */}
                <div className="relative mt-5">
                  <div className="overflow-hidden rounded-2xl w-24 h-24 sm:w-28 sm:h-28 ring-4 ring-white shadow-md bg-white">
                      <img
                        src={person.image} alt={person.name}
                        className="w-full h-full object-cover object-center transform group-hover:scale-105 transition-transform duration-500"
                      />
                </div>
                {/* Active dot */}
                <span className="absolute bottom-1 right-1 w-4 h-4 rounded-full bg-white ring-2 ring-white grid place-items-center">
                  <span className="w-2.5 h-2.5 rounded-full bg-emerald-500" />
                </span>
                
      </div>

      {/* Text Content */}
      <div className="p-4 sm:p-5 flex flex-col items-center">
        <h4 className="text-base font-semibold text-gray-900 leading-tight mt-3">
          {person.name}
        </h4>
        <div className="mt-1">
          <span
            className={[
              "px-2 py-0.5 text-[12px] font-medium rounded-full ring-1",
              tone.badge,
            ].join(" ")}
          >
            {person.role}
          </span>
        </div>

        {/* Tags */}
        {person.tags?.length ? (
        <div className="mt-2 flex flex-wrap justify-center gap-1">
          {person.tags
            .filter(
            (t) => !person.role.toLowerCase().includes(t.toLowerCase())
            )
            .map((t) => (
                <span key={t}
                className={["text-[10px] px-2 py-0.5 rounded-full ring-1",
                tone.chip,].join(" ")}>
                  {t}
                </span>
            ))}
          </div>
        ) : null}


        {/* Footer */}
        <div className="mt-3 flex items-center justify-between w-full text-xs text-gray-500 gap-6 sm:gap-8">
          <span>DiceMed • Team</span>
          {person.linkedin && person.linkedin !== "#" ? (
            <a
              href={person.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`${person.name} on LinkedIn`}
              className="inline-flex items-center gap-1.5 font-medium text-gray-700 hover:text-gray-900"
            >
              <i className="fab fa-linkedin" />
              <span className="hidden sm:inline">Connect</span>
            </a>
          ) : (
            <span className="text-gray-400">—</span>
          )}
        </div>
      </div>
    </motion.article>
  );
};


            {/* Clinical Team */}
            {/* <h3 className="text-3xl font-semibold">Clinical Team</h3>
    <hr className='xl:mb-3 mb-4 mt-1 xl:w-1/6 w-2/6 mx-auto'></hr>
    <div className="flex flex-col md:flex-row justify-center gap-10 mb-16">
      {[

{ name: 'Dr. Kunal Agarwal', role: 'Maxillofacial Radiologist', image: drImage, linkedin: 'https://www.linkedin.in/in/dr-kunal-agarwal-a50812211' },
{ name: 'Dr. Mitu Singhal', role: 'Clinical Advisor', image: mituImage, linkedin: '#' }


      ].map((member) => (
        <div key={member.name} className="bg-gray-50 rounded-lg shadow-md p-6 w-64 mx-auto">
          <div className="w-28 h-28 mx-auto bg-gray-200 rounded-full mb-4 flex items-center justify-center text-gray-500">
            <img src={member.image} alt='' className="w-full h-full object-cover rounded-full" />
          </div>
          <h3 className="text-xl font-semibold">
            <a href={member.linkedin} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
              {member.name}
            </a>
          </h3>
          <p className="text-gray-600">{member.role}</p>
        </div>
      ))}
    </div> */}

            {/* Core Team */}
            const core = [
              {
                name: "Dr. Kunal Agarwal",
                role: "Maxillofacial Radiologist",
                image: drImage,
                linkedin:
                  "https://www.linkedin.com/in/dr-kunal-agarwal-a50812211",
                tags: ["Clinical", "Imaging"],
              },
              {
                name: "Dr. Mitu Singhal",
                role: "Clinical Advisor",
                image: mituImage,
                linkedin: "#",
                tags: ["Advisor"],
              },
              {
                name: "Deepanshu Arya",
                role: "Software Developer",
                image: deepanshuImage,
                linkedin:
                  "https://www.linkedin.com/in/deepanshuarya2024",
                tags: ["Full-stack", "DevOps"],
              },
              {
                name: "Manu Govind",
                role: "Robotics Expert Advisor",
                image: manuImage,
                linkedin:
                  "https://www.linkedin.com/in/manu-govind-v",
                tags: ["Robotics"],
              },
              {
                name: "Sadhvik Bathini",
                role: "Neural Network Advisor",
                image: sadhvikImage,
                linkedin:
                  "https://www.linkedin.com/in/sadhvikbathini",
                tags: ["Deep Learning"],
              },
              {
                name: "Anna Mariam John",
                role: "ML Research Engineer-II",
                image: annaImage,
                linkedin:
                  "https://www.linkedin.com/in/anna-mariam-john",
                tags: ["AI/ML"],
              },
              {
                name: "Yohann Chandy",
                role: "CEO Intern",
                image: YohannImg,
                linkedin:
                  "https://www.linkedin.com/in/yohannchandy",
                tags: ["Leadership", "Strategy", "Innovation"],
              },
              {
                name: "Gadha Lekshmi P",
                role: "Computer Vision Expert",
                image: GadhaImg,
                linkedin:
                  "https://www.linkedin.com/in/gadha-lekshmi-p-848741268/",
                tags: ["Deep Learning", "Medical Imaging", "AI Diagnostics"],
              },
              {
                name: "Neha Ann Binoy",
                role: "Jr. Software Developer",
                image: NehaImg,
                linkedin:
                  "https://www.linkedin.com/in/neha-ann-binoy-nab/",
                tags: ["Full-Stack", "AI Integration"],
              },
              
            ];

            {/* Research Team */}
            const research = [
              {
                name: "Dr. Abiya Mariam George",
                role: "Clinical Advisor",
                image: abiyaImage,
                linkedin: "",
                tags: ["Clinical"],
              },
              {
                name: "Dr. Roshan Reji",
                role: "Clinical Advisor",
                image: rejiImage,
                linkedin: "",
                tags: ["Clinical"],
              },
              {
                name: "Athul",
                role: "ML Intern",
                image: athulImage,
                linkedin:
                  "https://www.linkedin.com/in/athul-anoop-a85068281/",
                tags: ["Intern"],
              },
              {
                name: "Nikhil K",
                role: "Mechanical Engineering Trainee",
                image: NikhilImg,
                linkedin:
                  "https://www.linkedin.com/in/nikhil-k-a09377235/",
                tags: [""],
              },
              {
                name: "Pranav",
                role: "ML Intern",
                image: pranavImage,
                linkedin: "http://www.linkedin.com/in/s-pranav-s",
                tags: ["Intern"],
              },
              {
                name: "Joel Varghese Oommen",
                role: "Research and Development Intern",
                image: JoelImg,
                linkedin:
                  "https://www.linkedin.com/in/joel-oommen-63bb89271/",
                tags: ["Cognitive Healthcare","AI Innovation"],
              },
            ];

            return (
              <>
                {/* CORE */}
                <div className="mb-16">
                  <div className="flex items-center justify-between mb-6">
                    <h3 className="text-2xl font-semibold text-gray-900">
                      Core Team
                    </h3>
                    <span className="text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Leadership • Delivery
                    </span>
                  </div>

                  <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {core.map((p, i) => (
                      <TeamCard key={p.name} person={p} idx={i} />
                    ))}
                  </div>
                </div>

                {/* RESEARCH */}
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <h3 className="text-2xl font-semibold text-gray-900">
                      Research Team
                    </h3>
                    <span className="text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Research • Innovation
                    </span>
                  </div>

                  <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {research.map((p, i) => (
                      <TeamCard key={p.name} person={p} idx={i} />
                    ))}
                  </div>
                </div>
              </>
            );
          })()}
        </div>
      </section>

      {/*ACHIEVEMENTS SECTION */}
      <section
        id="achievements"
        className="py-24 px-5 bg-gradient-to-b from-white via-gray-50 to-white relative overflow-hidden"
      >
        <AchievementsCarousel />
      </section>

      {/* NEWS & HIGHLIGHTS */}

      <section id="news" className="py-20 px-5 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-semibold">News &amp; Highlights</h2>
            <p className="mt-3 text-gray-600 max-w-2xl mx-auto">
              Conferences, awards, releases, and media mentions from the DiceMed team.
            </p>
          </div>

          {(() => {
            const news = [
            {
              id: "oral-cancer-ai-ida2025",
              title:"Showcasing AI-Powered Oral Cancer Detection at IDA Global Conclave 2025",
              date: "2025-04-12",
              location: "New Delhi, India",
              summary: "Thrilled to have showcased our AI-powered detection system for oral cancer and soft tissue lesions using image analysis at the Global Conclave on Oral Health Innovation and Research 2025, organized by the Indian Dental Association (IDA). The platform fostered rich discussions around MedTech, AI-integrated dental tools, and sustainable healthcare. Backed by an AI minor from IIT Ropar and a MedTech Fellowship at IIT Kharagpur, our mission remains clear—building smart, scalable diagnostic tools made for Bharat, by Bharat.",
              image: newsImg4,
              tags: [
              "Conference",
              "IDA India",
              "Oral Health Innovation",
              "Smart Diagnostics",
              ],
              ctaLabel: "View LinkedIn Post",
              ctaHref: "https://www.linkedin.com/feed/update/urn:li:activity:7315020468577624064/",
            },
            {
              id: "ai-cancer-screening-poc",
              title: "AI-Based Proof-of-Concept Cancer Screening Showcased at IDA Conclave",
              date: "2025-02-13",
              location: "New Delhi, India",
              summary: "Honoured to present our AI-based proof-of-concept cancer screening technology at the Global Conclave on Oral Health Innovation & Research, hosted by the Indian Dental Association. The system leverages user-guided image classification for disease detection, bridging AI and clinical expertise. Grateful to Dr. Kunal Agarwal for mentorship and our collaborators Govind Arun and Deepanshu Arya (IIT KGP – Pre-Doctoral Fellows) for their contributions.",
              image: newsImg5,
              tags: [
                "Innovation Showcase",
                "Oral Cancer AI",
                "Proof of Concept",
                "IDA 2025",
              ],
              ctaLabel: "View Event Recap",
              ctaHref: "https://www.linkedin.com/feed/update/urn:li:activity:7298570236201443329/",
            },
            {
              id: "conf-iadr-2025",
              title: "Grad-CAM/Grad-CAM++ for Explainable Oral Cancer Detection Published (IEEE SENNET 2025)",
              date: "2025-09-20",
              location: "Vellore, India",
              summary: "Our paper, “Grad-CAM & Grad-CAM++ for Explainable Oral Squamous Cell Carcinoma Detection using Deep Learning on Orthopantomograms,” presents an explainable AI framework that highlights diagnostically relevant regions, improving transparency and clinical trust in deep learning models for radiology.",
              image: newsImg1,
              tags: [
                "Publication",
                "IEEE",
                "SENNET 2025",
                "Explainable AI",
                "Grad-CAM",
                "Medical Imaging",
              ],
              ctaLabel: "Read on IEEE Xplore",
              ctaHref: "https://ieeexplore.ieee.org/document/11136014",
            },
            {
              id: "iadr-asia-2025-recognition",
              title: "Featured in IADR Asia Pacific 2025 Keynote on Evidence-Based AI in Healthcare",
              date: "2025-09-15",
              location: "New Delhi, India",
              summary: "We sincerely appreciate Dr. Betsy Joseph, PhD, for including DiceMed in her keynote presentation at the IADR Asia Pacific Conference 2025. Her talk, focused on Evidence-Based Research (EBR) for clinicians and innovators, highlighted our shared commitment to ensuring that clinical AI is reliable, transparent, and grounded in peer-reviewed science.",
              image: newsImg2,
              tags: [
                "Conference",
                "IADR 2025",
                "Evidence-Based AI",
                "Clinical Research",
                "Recognition",
              ],
              ctaLabel: "View Conference Post",
              ctaHref: "https://www.linkedin.com/feed/update/urn:li:activity:7376099452698275840/",
            },
            {
              id: "miccai-odin-2025",
              title: "Presenting at MICCAI 2025: ODIN Challenge on Computational Dentistry",
              date: "2025-09-27",
              location: "Daejeon, South Korea",
              summary: "Thrilled to announce that Dr. Ajo Babu George will present our work at ODIN 2025 — the Oral and Dental Image aNalysis Challenge, held at MICCAI 2025. He will deliver two consecutive talks: (1) nnU-Net for Tooth and Pulp Root Canal Segmentation in CBCT, and (2) Rigid Registration of CBCT-STL Pairs Using PointNetLK. We’re excited to share our advancements in computational dentistry and grateful to the ODIN 2025 organizers for their support.",
              image: newsImg3,
              tags: [
                "Conference",
                "MICCAI 2025",
                "ODIN Challenge",
                "Computational Dentistry",
                "CBCT",
              ],
              ctaLabel: "View Workshop Schedule",
              ctaHref: "https://odin-workshops.org/2025/schedule.html",
            },
          ];

        news.sort((a, b) => new Date(b.date) - new Date(a.date));

        const NewsCard = ({ item }) => {
        const [expanded, setExpanded] = React.useState(false);
        return (
          <motion.article
            initial={{ y: 12, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.35 }}
            className="rounded-2xl overflow-hidden border border-gray-200 bg-white/80 backdrop-blur shadow-sm hover:shadow-md transition-shadow"
          >
            {/* Image */}
            <div className="relative aspect-[16/9] bg-gray-100 overflow-hidden">
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover hover:scale-[1.02] transition-transform"
                loading="lazy"
              />
              <div className="absolute top-3 left-3 px-2.5 py-1 rounded-md text-xs font-semibold bg-white/90 text-gray-700 shadow">
                {new Date(item.date).toLocaleDateString(undefined, {
                  year: "numeric",
                  month: "short",
                  day: "numeric",
                })}
              </div>
            </div>

            {/* Content */}
            <div className="p-5 flex flex-col">
              <div className="flex flex-wrap gap-2 mb-3">
                {item.tags?.map((t) => (
                  <span
                    key={t}
                    className="text-xs px-2 py-1 rounded-full bg-gray-50 border border-gray-200 text-gray-700"
                  >
                    {t}
                  </span>
                ))}
              </div>

              <h3 className="text-lg font-semibold text-gray-900 leading-snug">
                {item.title}
              </h3>

              <p
                className={`mt-2 text-sm text-gray-600 transition-all duration-300 ${
                  expanded ? "" : "line-clamp-3"
                }`}
              >
                {item.summary}
              </p>

              <button
                type="button"
                onClick={() => setExpanded((v) => !v)}
                className="mt-2 self-start text-sm font-medium text-blue-700 hover:text-blue-900 focus:outline-none"
              >
                {expanded ? "Read less" : "Read more"}
              </button>

              <div className="mt-5 flex items-center justify-between">
                <div className="text-xs text-gray-400">
                  Updated {new Date(item.date).toLocaleDateString()}
                </div>
                {item.ctaHref && (
                  <a
                    href={item.ctaHref}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-sm font-medium text-blue-700 hover:text-blue-900"
                  >
                    {item.ctaLabel}
                    <i className="fas fa-arrow-right" />
                  </a>
                )}
              </div>
            </div>
          </motion.article>
        );
      };

      return (
        <Swiper
          modules={[Navigation, Pagination]}
          spaceBetween={24}
          slidesPerView={1}
          navigation
          pagination={{ clickable: true }}
          breakpoints={{
            640: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          className="news-carousel"
        >
          {news.map((item) => (
            <SwiperSlide key={item.id}>
              <NewsCard item={item} />
            </SwiperSlide>
          ))}
        </Swiper>
      );
    })()}
  </div>
</section>


      <section  id="competitions" className="py-20 bg-gradient-to-b from-white via-indigo-50 to-sky-50 relative">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <motion.h2
      initial={{ y: 30, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="text-3xl md:text-4xl font-semibold text-gray-900"
    >
      Global Competitions
    </motion.h2>
    <p className="mt-3 text-gray-600 max-w-2xl mx-auto leading-relaxed mb-5">
      Advancing healthcare innovation through participation in global AI
      competitions, fostering collaboration between research and industry.
    </p>

    <div className="grid md:grid-cols-2 gap-8 justify-center mt-10">
      {/* ODIN Challenge Card */}
    <motion.div
      initial={{ y: 20, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="bg-white rounded-2xl shadow-sm hover:shadow-md ring-1 ring-gray-100 transition-all duration-300 p-6 flex flex-col items-center text-center max-w-md mx-auto"
    >
      <div className="w-24 h-24 rounded-full overflow-hidden ring-2 ring-indigo-200 shadow-md bg-white mb-4 flex items-center justify-center">
        <img
          src={miccai} // You can replace this with a MICCAI or ODIN logo if you have one
          alt="MICCAI ODIN Challenge"
          className="w-full h-full object-cover"
        />
      </div>

      <h3 className="text-lg font-semibold text-gray-800">
        MICCAI 2025 — ODIN Challenge
      </h3>

      <p className="text-sm text-gray-600 mt-1">
        Daejeon, South Korea • Computational Dentistry
      </p>

      <div className="mt-4 space-y-1 text-gray-700 text-sm">
        <p>
          <strong>Rank:</strong> 1<sup>st</sup> &amp; 3<sup>rd</sup> Place
        </p>
        <p>
          <strong>Focus:</strong> CBCT Segmentation
        </p>
      </div>

      <a
        href="https://odin-workshops.org/2025/schedule.html"
        target="_blank"
        rel="noopener noreferrer"
        className="mt-5 inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-gradient-to-r from-blue-600 to-sky-500 text-white text-sm font-medium hover:from-blue-700 hover:to-sky-600 transition"
      >
        View Workshop <i className="fas fa-arrow-right"></i>
      </a>
    </motion.div>
    {/* Smart India Hackathon Card */}
      <motion.div
        initial={{ y: 20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="bg-white rounded-2xl shadow-sm hover:shadow-md ring-1 ring-gray-100 transition-all duration-300 p-6 flex flex-col items-center text-center max-w-lg mx-auto min-h-[380px]"
      >
        <div className="w-24 h-24 rounded-full overflow-hidden ring-2 ring-amber-200 shadow-md bg-white mb-4 flex items-center justify-center">
          <img
            src={smart}
            alt="Smart India Hackathon Logo"
            className="w-full h-full object-contain p-2"
          />
        </div>

        <h3 className="text-lg font-semibold text-gray-800">
          Smart India Hackathon (SIH)
        </h3>

        <p className="text-sm text-gray-600 mt-1">
          National Innovation Challenge • India
        </p>

        <div className="mt-4 space-y-1 text-gray-700 text-sm">
          <p>
            <strong>Status:</strong> Participated
          </p>
          <p>
            <strong>Year:</strong> 2025
          </p>
        </div>

        <a
          href="https://www.sih.gov.in/"
          target="_blank"
          rel="noopener noreferrer"
          className="mt-5 inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-gradient-to-r from-amber-500 to-orange-400 text-white text-sm font-medium hover:from-amber-600 hover:to-orange-500 transition"
        >
          Visit Official Site <i className="fas fa-arrow-right"></i>
        </a>
      </motion.div>
    </div>
  </div>
</section>


      {/* Contact */}
      <section id="contact" className="py-20 px-5 bg-transparent">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-semibold">Contact Us</h2>
            <p className="mt-3 text-gray-600 max-w-2xl mx-auto">
              Collaborations, pilots, or questions — we’d love to hear from you.
            </p>
          </div>

          <div className="grid lg:grid-cols-[1fr_2fr] gap-8">
            {/* Info panel */}
            <motion.div
              initial={{ x: -16, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.4 }}
              className="relative rounded-2xl overflow-hidden border border-gray-200 bg-gradient-to-br from-blue-600 to-blue-800 text-white"
            >
              <div
                className="absolute inset-0 opacity-20"
                style={{
                  backgroundImage:
                    "radial-gradient(circle at 20% 20%, #fff, transparent 30%), radial-gradient(circle at 80% 40%, #93c5fd, transparent 30%)",
                  width: "60%",
                }}
              />
              <div className="relative p-8 md:p-10">
                <h3 className="text-2xl font-semibold">
                  Let’s build the future of diagnostics
                </h3>
                <p className="mt-3 text-blue-100">
                  Tell us briefly about your use case — clinical, research, or
                  product partnership.
                </p>

                <div className="mt-8 space-y-4">
                  <div className="flex items-start gap-3">
                    <div className="w-10 h-10 rounded-full bg-white/15 flex items-center justify-center">
                      <i className="fas fa-envelope" />
                    </div>
                    <div>
                      <div className="text-sm opacity-80">
                        Email
                      </div>
                      <a
                        href="mailto:drajo_george@DiceMed.in"
                        className="font-medium hover:underline text-white"
                      >
                        drajo_george@DiceMed.in
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="w-10 h-10 rounded-full bg-white/15 flex items-center justify-center">
                      <i className="fab fa-linkedin-in" />
                    </div>
                    <div>
                      <div className="text-sm opacity-80">
                        LinkedIn
                      </div>
                      <a
                        href="https://www.linkedin.com/in/dr-ajo-babu-george"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="font-medium hover:underline text-white"
                      >
                        Dr. Ajo Babu George
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="w-10 h-10 rounded-full bg-white/15 flex items-center justify-center">
                      <i className="fas fa-clock" />
                    </div>
                    <div>
                      <div className="text-sm opacity-80">
                        Office Hours
                      </div>
                      <div className="font-medium">
                        Mon–Fri, 9:30–17:30 IST
                      </div>
                    </div>
                  </div>
                </div>

                {/* Tiny badge row */}
                <div className="mt-8 flex flex-wrap gap-2">
                  {[
                    "Clinical AI",
                    "Medical Imaging",
                    "Federated Learning",
                    "Device Innovation",
                  ].map((tag) => (
                    <span
                      key={tag}
                      className="text-xs px-2.5 py-1 rounded-full bg-white/15 border border-white/20"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Form panel */}
            <motion.form
              onSubmit={handleSendMessage}
              initial={{ x: 16, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.4 }}
              className="w-[90%] mx-auto rounded-2xl  border border-gray-200 bg-white/80 backdrop-blur shadow-lg p-6 md:p-8"
            >
              <div className="grid gap-5">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Name
                  </label>
                  <input
                    id="name"
                    type="text"
                    name="name"
                    value={contactForm.name}
                    onChange={handleContactChange}
                    placeholder="Your full name"
                    required
                    className="mt-2 w-full rounded-lg border border-gray-300 px-4 py-3 outline-none focus:ring-2 focus:ring-blue-600"
                  />
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Email
                  </label>
                  <input
                    id="email"
                    type="email"
                    name="email"
                    value={contactForm.email}
                    onChange={handleContactChange}
                    placeholder="you@company.com"
                    required
                    className="mt-2 w-full rounded-lg border border-gray-300 px-4 py-3 outline-none focus:ring-2 focus:ring-blue-600"
                  />
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    rows={5}
                    name="message"
                    value={contactForm.message}
                    onChange={handleContactChange}
                    placeholder="Share a bit about your need, timeline, and desired outcome…"
                    required
                    className="mt-2 w-full rounded-lg border border-gray-300 px-4 py-3 outline-none focus:ring-2 focus:ring-blue-600"
                  />
                  <p className="mt-1.5 text-xs text-gray-500">
                    Tip: At least 10 characters (we’ll route it faster if you
                    include specifics).
                  </p>
                </div>

                <div className="flex items-center justify-between gap-4">
                  <div className="text-xs text-gray-500">
                    By sending, you agree to our responsible use & privacy
                    guidelines.
                  </div>
                  <button
                    type="submit"
                    className="inline-flex items-center justify-center px-5 py-3 rounded-lg bg-blue-700 text-white font-semibold hover:bg-blue-800 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-blue-600 transition"
                  >
                    <i className="fas fa-paper-plane mr-2" />
                    Send Message
                  </button>
                </div>
              </div>
            </motion.form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer id="site-footer" className="relative text-slate-100">
        {/* Top wave divider */}
        <div className="absolute -top-8 left-0 w-full overflow-hidden leading-none">
          <svg
            className="block w-full h-8"
            viewBox="0 0 1440 80"
            preserveAspectRatio="none"
            aria-hidden="true"
          >
            <path
              d="M0,64 C240,16 480,16 720,48 C960,80 1200,80 1440,48 L1440,80 L0,80 Z"
              fill="currentColor"
              className="text-blue-900/90"
            />
          </svg>
        </div>

        {/* Main footer area */}
        <div className="relative bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900">
          <div className="max-w-7xl mx-auto px-6 py-14">
            <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
              {/* Brand */}
              <div>
                <h3 className="text-xl font-semibold">DiceMed</h3>
                <p className="mt-3 text-sm text-slate-300">
                  AI-powered medical imaging & clinical innovation. Building the
                  future of precision diagnostics.
                </p>

                <div className="mt-5 flex items-center gap-3">
                  <a
                    href="https://www.linkedin.com/company/dicemed/"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="DiceMed on LinkedIn"
                    className="inline-flex w-9 h-9 items-center justify-center rounded-full bg-white/10 hover:bg-white/20 transition"
                    title="LinkedIn"
                  >
                    <i className="fab fa-linkedin" />
                  </a>
                  <a
                    href="https://github.com/Ajogeorge29"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="DiceMed on GitHub"
                    className="inline-flex w-9 h-9 items-center justify-center rounded-full bg-white/10 hover:bg-white/20 transition"
                    title="GitHub"
                  >
                    <i className="fab fa-github" />
                  </a>
                  <a
                    href="mailto:drajo_george@DiceMed.in"
                    aria-label="Email DiceMed"
                    className="inline-flex w-9 h-9 items-center justify-center rounded-full bg-white/10 hover:bg-white/20 transition"
                    title="Email"
                  >
                    <i className="fas fa-envelope" />
                  </a>
                </div>
              </div>

              {/* Quick links */}
              <div>
                <h4 className="text-sm font-semibold uppercase tracking-wide text-slate-300">
                  Quick Links
                </h4>
                <ul className="mt-4 space-y-3 text-sm">
                  <li>
                    <a href="/" className="hover:text-white transition">
                      Home
                    </a>
                  </li>
                  <li>
                    <a
                      href="/imagescanrequisition"
                      className="hover:text-white transition"
                    >
                      Image Scan Requisition
                    </a>
                  </li>
                  <li>
                    <a
                      href="/prescriptiongenerator"
                      className="hover:text-white transition"
                    >
                      Prescription Generator
                    </a>
                  </li>
                  <li>
                    <a
                      href="#publications"
                      className="hover:text-white transition"
                    >
                      Publications
                    </a>
                  </li>
                  <li>
                    <a
                      href="#research-group"
                      className="hover:text-white transition"
                    >
                      Our Team
                    </a>
                  </li>
                </ul>
              </div>

              {/* Contact */}
              <div>
                <h4 className="text-sm font-semibold uppercase tracking-wide text-slate-300">
                  Contact
                </h4>
                <ul className="mt-4 space-y-3 text-sm">
                  <li className="flex items-start gap-3">
                    <i className="fas fa-envelope mt-0.5 text-slate-400" />
                    <a
                      href="mailto:drajo_george@DiceMed.in"
                      className="hover:text-white transition"
                    >
                      drajo_george@DiceMed.in
                    </a>
                  </li>
                  <li className="flex items-start gap-3">
                    <i className="fas fa-location-dot mt-0.5 text-slate-400" />
                    <span>India • Remote collaborations worldwide</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <i className="fas fa-clock mt-0.5 text-slate-400" />
                    <span>Mon–Fri, 09:30–17:30 IST</span>
                  </li>
                </ul>
              </div>

              {/* Call to action / Newsletter */}
              <div>
                <h4 className="text-sm font-semibold uppercase tracking-wide text-slate-300">
                  Stay in the loop
                </h4>
                <p className="mt-4 text-sm text-slate-300">
                  Get updates on clinical AI, imaging tools, and research.
                </p>

                {/* Simple email capture UI (non-nested button, accessible) */}
                <form
                  onSubmit={(e) => {
                    e.preventDefault();
                    window.location.href =
                      "mailto:drajo_george@DiceMed.in?subject=Subscribe%20to%20updates&body=Hi%20DiceMed%2C%20please%20subscribe%20me%20to%20updates.";
                  }}
                  className="mt-4 flex items-center gap-2"
                >
                  <label htmlFor="footer-email" className="sr-only">
                    Email
                  </label>
                  <input
                    id="footer-email"
                    type="email"
                    required
                    placeholder="you@company.com"
                    className="w-full rounded-lg bg-white/10 text-white placeholder:text-slate-300 border border-white/15 focus:outline-none focus:ring-2 focus:ring-sky-400 px-3 py-2"
                  />
                  <button
                    type="submit"
                    className="inline-flex items-center gap-2 rounded-lg bg-sky-400 text-slate-900 font-semibold px-4 py-2 hover:bg-sky-300 transition"
                  >
                    <i className="fas fa-paper-plane" />
                    Subscribe
                  </button>
                </form>

                {/* Small tags */}
                <div className="mt-4 flex flex-wrap gap-2">
                  {[
                    "Clinical AI",
                    "Imaging",
                    "Federated Learning",
                    "MedTech",
                  ].map((t) => (
                    <span
                      key={t}
                      className="text-xs px-2 py-1 rounded-full bg-white/10 border border-white/10"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Bottom bar */}
            <div className="pt-6 mt-6 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-3 text-xs text-slate-300">
              <div>
                © {new Date().getFullYear()} DiceMed. All rights reserved.
              </div>
              <div className="flex items-center gap-4">
                <a href="#" className="hover:text-white transition">
                  Privacy
                </a>
                <span className="opacity-40">•</span>
                <a href="#" className="hover:text-white transition">
                  Terms
                </a>
                <span className="opacity-40">•</span>
                <a href="#contact" className="hover:text-white transition">
                  Contact
                </a>
              </div>
            </div>
          </div>
        </div>
        {/* <p className="mt-2">
          ORCID ID: <a href="https://orcid.org/0009-0005-3026-0959" target="_blank" rel="noopener noreferrer" className="underline">0009-0005-3026-0959</a>
        </p> */}
      </footer>
    </div>
  );
};

export default DiceMed;
