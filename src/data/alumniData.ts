// Comprehensive alumni data for KIIT
export interface Alumni {
  id: number;
  name: string;
  graduationYear: string;
  degree: string;
  company: string;
  position: string;
  location: string;
  email: string;
  linkedin: string;
  bio: string;
  skills: string[];
}

export const allAlumni: Alumni[] = [
  // 2025 Graduates
  {
    id: 1,
    name: "Aadhya Sharma",
    graduationYear: "2025",
    degree: "Computer Science & Engineering",
    company: "Microsoft India",
    position: "Software Engineer",
    location: "Bangalore, India",
    email: "aadhya.sharma@microsoft.com",
    linkedin: "linkedin.com/in/aadhyasharma",
    bio: "Fresh graduate passionate about cloud computing and AI. Recently joined Microsoft's Azure team working on scalable cloud solutions.",
    skills: ["Azure", "Python", "React", "Machine Learning"]
  },
  {
    id: 2,
    name: "Arjun Patel",
    graduationYear: "2025",
    degree: "Information Technology",
    company: "Infosys",
    position: "Systems Engineer",
    location: "Pune, India",
    email: "arjun.patel@infosys.com",
    linkedin: "linkedin.com/in/arjunpatel",
    bio: "Specializing in full-stack development and database management. Working on digital transformation projects for banking sector.",
    skills: ["Java", "Spring Boot", "Angular", "Oracle"]
  },
  {
    id: 3,
    name: "Kavya Reddy",
    graduationYear: "2025",
    degree: "Electronics & Telecommunications",
    company: "Qualcomm India",
    position: "Hardware Engineer",
    location: "Hyderabad, India",
    email: "kavya.reddy@qualcomm.com",
    linkedin: "linkedin.com/in/kavyareddy",
    bio: "Working on 5G technology and wireless communication systems. Passionate about IoT and embedded systems development.",
    skills: ["5G", "IoT", "Embedded Systems", "MATLAB"]
  },
  {
    id: 4,
    name: "Rohan Kumar",
    graduationYear: "2025",
    degree: "Mechanical Engineering",
    company: "Tata Motors",
    position: "Design Engineer",
    location: "Pune, India",
    email: "rohan.kumar@tatamotors.com",
    linkedin: "linkedin.com/in/rohankumar",
    bio: "Automotive design engineer working on electric vehicle development. Focus on sustainable transportation solutions.",
    skills: ["CAD", "Electric Vehicles", "Manufacturing", "SolidWorks"]
  },

  // 2024 Graduates
  {
    id: 5,
    name: "Priya Gupta",
    graduationYear: "2024",
    degree: "Computer Science & Engineering",
    company: "Google India",
    position: "Software Developer",
    location: "Bangalore, India",
    email: "priya.gupta@google.com",
    linkedin: "linkedin.com/in/priyagupta",
    bio: "Working on Google Search algorithms and machine learning models. One year experience in large-scale distributed systems.",
    skills: ["Python", "TensorFlow", "Java", "Distributed Systems"]
  },
  {
    id: 6,
    name: "Vikash Singh",
    graduationYear: "2024",
    degree: "Information Technology",
    company: "Amazon India",
    position: "SDE I",
    location: "Bangalore, India",
    email: "vikash.singh@amazon.com",
    linkedin: "linkedin.com/in/vikashsingh",
    bio: "Developing e-commerce solutions and working on AWS services. Experience in microservices architecture and cloud computing.",
    skills: ["AWS", "Java", "Microservices", "Docker"]
  },
  {
    id: 7,
    name: "Sneha Patel",
    graduationYear: "2024",
    degree: "Biotechnology",
    company: "Biocon Limited",
    position: "Research Associate",
    location: "Bangalore, India",
    email: "sneha.patel@biocon.com",
    linkedin: "linkedin.com/in/snehapatel",
    bio: "Working on biopharmaceutical research and drug development. Focus on protein engineering and therapeutic applications.",
    skills: ["Biotechnology", "Research", "Protein Engineering", "Drug Development"]
  },
  {
    id: 8,
    name: "Amit Jhunjhunwala",
    graduationYear: "2024",
    degree: "Civil Engineering",
    company: "L&T Construction",
    position: "Junior Engineer",
    location: "Mumbai, India",
    email: "amit.jhunjhunwala@lntecc.com",
    linkedin: "linkedin.com/in/amitjhunjhunwala",
    bio: "Infrastructure development engineer working on metro rail projects. Passionate about sustainable construction practices.",
    skills: ["Project Management", "AutoCAD", "Construction", "Sustainability"]
  },

  // 2023 Graduates
  {
    id: 9,
    name: "Rahul Agarwal",
    graduationYear: "2023",
    degree: "Computer Science & Engineering",
    company: "Flipkart",
    position: "Software Engineer II",
    location: "Bangalore, India",
    email: "rahul.agarwal@flipkart.com",
    linkedin: "linkedin.com/in/rahulagarwal",
    bio: "E-commerce platform development with focus on scalability and performance optimization. Two years experience in product development.",
    skills: ["Scala", "React", "Kafka", "Redis"]
  },
  {
    id: 10,
    name: "Ananya Mishra",
    graduationYear: "2023",
    degree: "Electronics & Instrumentation",
    company: "Honeywell Technology Solutions",
    position: "Software Engineer",
    location: "Bangalore, India",
    email: "ananya.mishra@honeywell.com",
    linkedin: "linkedin.com/in/ananyamishra",
    bio: "Industrial automation and control systems developer. Working on IoT solutions for smart manufacturing.",
    skills: ["IoT", "Industrial Automation", "Python", "MATLAB"]
  },
  {
    id: 11,
    name: "Karan Sharma",
    graduationYear: "2023",
    degree: "Mechanical Engineering",
    company: "Mahindra Group",
    position: "Assistant Manager - R&D",
    location: "Chennai, India",
    email: "karan.sharma@mahindra.com",
    linkedin: "linkedin.com/in/karansharma",
    bio: "Research and development in automotive engineering. Working on electric vehicle battery technology and thermal management.",
    skills: ["R&D", "Electric Vehicles", "Thermal Management", "Testing"]
  },
  {
    id: 12,
    name: "Deepika Roy",
    graduationYear: "2023",
    degree: "Chemical Engineering",
    company: "Reliance Industries",
    position: "Process Engineer",
    location: "Jamnagar, India",
    email: "deepika.roy@ril.com",
    linkedin: "linkedin.com/in/deepikaroy",
    bio: "Petrochemical process optimization and plant operations. Focus on sustainable chemical manufacturing processes.",
    skills: ["Process Engineering", "Chemical Manufacturing", "Sustainability", "ASPEN HYSYS"]
  },

  // 2022 Graduates
  {
    id: 13,
    name: "Suresh Patnaik",
    graduationYear: "2022",
    degree: "Computer Science & Engineering",
    company: "Oracle India",
    position: "Senior Software Engineer",
    location: "Bangalore, India",
    email: "suresh.patnaik@oracle.com",
    linkedin: "linkedin.com/in/sureshpatnaik",
    bio: "Database systems and cloud infrastructure specialist. Three years experience in enterprise software development.",
    skills: ["Oracle DB", "Cloud Computing", "Java", "SQL"]
  },
  {
    id: 14,
    name: "Ritu Sahoo",
    graduationYear: "2022",
    degree: "Information Technology",
    company: "Wipro Limited",
    position: "Technical Lead",
    location: "Hyderabad, India",
    email: "ritu.sahoo@wipro.com",
    linkedin: "linkedin.com/in/ritusahoo",
    bio: "Leading digital transformation projects for healthcare sector. Expertise in system integration and project management.",
    skills: ["System Integration", "Healthcare IT", "Project Management", "Agile"]
  },
  {
    id: 15,
    name: "Manoj Tripathi",
    graduationYear: "2022",
    degree: "Electrical Engineering",
    company: "Siemens India",
    position: "Power Systems Engineer",
    location: "Mumbai, India",
    email: "manoj.tripathi@siemens.com",
    linkedin: "linkedin.com/in/manojtripathi",
    bio: "Power grid automation and renewable energy systems. Working on smart grid solutions and energy management.",
    skills: ["Power Systems", "Smart Grid", "Renewable Energy", "SCADA"]
  },
  {
    id: 16,
    name: "Neha Jain",
    graduationYear: "2022",
    degree: "Biotechnology",
    company: "Dr. Reddy's Laboratories",
    position: "Senior Research Associate",
    location: "Hyderabad, India",
    email: "neha.jain@drreddys.com",
    linkedin: "linkedin.com/in/nehajain",
    bio: "Pharmaceutical research and development. Specializing in drug formulation and clinical research protocols.",
    skills: ["Pharmaceutical Research", "Clinical Trials", "Drug Formulation", "Regulatory Affairs"]
  },

  // 2021 Graduates
  {
    id: 17,
    name: "Abhishek Nayak",
    graduationYear: "2021",
    degree: "Computer Science & Engineering",
    company: "Adobe India",
    position: "Senior Software Developer",
    location: "Bangalore, India",
    email: "abhishek.nayak@adobe.com",
    linkedin: "linkedin.com/in/abhisheknayak",
    bio: "Creative software development and user experience optimization. Four years experience in multimedia and design software.",
    skills: ["JavaScript", "React", "UI/UX", "Creative Software"]
  },
  {
    id: 18,
    name: "Shreya Mohanty",
    graduationYear: "2021",
    degree: "Electronics & Telecommunications",
    company: "Samsung R&D India",
    position: "Senior Engineer",
    location: "Bangalore, India",
    email: "shreya.mohanty@samsung.com",
    linkedin: "linkedin.com/in/shreyamohanty",
    bio: "Mobile technology and semiconductor research. Working on next-generation smartphone processors and 5G technology.",
    skills: ["Semiconductor", "5G", "Mobile Technology", "Research"]
  },
  {
    id: 19,
    name: "Rajesh Panda",
    graduationYear: "2021",
    degree: "Civil Engineering",
    company: "Godrej Properties",
    position: "Project Manager",
    location: "Mumbai, India",
    email: "rajesh.panda@godrejproperties.com",
    linkedin: "linkedin.com/in/rajeshpanda",
    bio: "Real estate development and construction project management. Leading sustainable residential and commercial projects.",
    skills: ["Real Estate", "Construction Management", "Green Building", "Project Planning"]
  },
  {
    id: 20,
    name: "Pallavi Dash",
    graduationYear: "2021",
    degree: "Mechanical Engineering",
    company: "Bajaj Auto",
    position: "Design Engineer",
    location: "Pune, India",
    email: "pallavi.dash@bajajauto.com",
    linkedin: "linkedin.com/in/pallavidash",
    bio: "Automotive design and manufacturing engineering. Focus on two-wheeler design and fuel efficiency optimization.",
    skills: ["Automotive Design", "Manufacturing", "Fuel Efficiency", "Product Development"]
  },

  // 2020 Graduates
  {
    id: 21,
    name: "Saurabh Jena",
    graduationYear: "2020",
    degree: "Computer Science & Engineering",
    company: "Paytm",
    position: "Principal Software Engineer",
    location: "Noida, India",
    email: "saurabh.jena@paytm.com",
    linkedin: "linkedin.com/in/saurabhjena",
    bio: "Fintech and digital payments platform development. Five years experience in payment systems and financial technology.",
    skills: ["Fintech", "Payment Systems", "Node.js", "MongoDB"]
  },
  {
    id: 22,
    name: "Priyanka Swain",
    graduationYear: "2020",
    degree: "Information Technology",
    company: "HCL Technologies",
    position: "Technical Architect",
    location: "Noida, India",
    email: "priyanka.swain@hcl.com",
    linkedin: "linkedin.com/in/priyankaswain",
    bio: "Enterprise software architecture and cloud migration specialist. Leading digital transformation initiatives for Fortune 500 clients.",
    skills: ["Enterprise Architecture", "Cloud Migration", "DevOps", "Kubernetes"]
  },
  {
    id: 23,
    name: "Ajay Behera",
    graduationYear: "2020",
    degree: "Aerospace Engineering",
    company: "Indian Space Research Organisation",
    position: "Scientist/Engineer",
    location: "Bangalore, India",
    email: "ajay.behera@isro.gov.in",
    linkedin: "linkedin.com/in/ajaybehera",
    bio: "Satellite technology and space systems engineering. Contributing to India's space missions and satellite development programs.",
    skills: ["Satellite Technology", "Space Systems", "MATLAB", "Mission Planning"]
  },
  {
    id: 24,
    name: "Smita Parida",
    graduationYear: "2020",
    degree: "Biotechnology",
    company: "Glenmark Pharmaceuticals",
    position: "Senior Scientist",
    location: "Mumbai, India",
    email: "smita.parida@glenmarkpharma.com",
    linkedin: "linkedin.com/in/smitaparida",
    bio: "Drug discovery and development specialist. Leading research on novel therapeutic compounds for oncology applications.",
    skills: ["Drug Discovery", "Oncology Research", "Molecular Biology", "Clinical Development"]
  },

  // 2019 Graduates
  {
    id: 25,
    name: "Niraj Kumar",
    graduationYear: "2019",
    degree: "Computer Science & Engineering",
    company: "Zomato",
    position: "Senior Product Manager",
    location: "Gurgaon, India",
    email: "niraj.kumar@zomato.com",
    linkedin: "linkedin.com/in/nirajkumar",
    bio: "Product management in food-tech industry. Six years experience in product strategy, user experience, and market expansion.",
    skills: ["Product Management", "Strategy", "Analytics", "Growth"]
  },
  {
    id: 26,
    name: "Anita Pradhan",
    graduationYear: "2019",
    degree: "Electronics & Instrumentation",
    company: "Schneider Electric India",
    position: "Solutions Architect",
    location: "Bangalore, India",
    email: "anita.pradhan@se.com",
    linkedin: "linkedin.com/in/anitapradhan",
    bio: "Industrial automation and energy management solutions. Expertise in smart building technologies and IoT integration.",
    skills: ["Industrial Automation", "Energy Management", "IoT", "Smart Buildings"]
  },
  {
    id: 27,
    name: "Ravi Shankar",
    graduationYear: "2019",
    degree: "Civil Engineering",
    company: "DLF Limited",
    position: "Assistant Vice President",
    location: "Gurgaon, India",
    email: "ravi.shankar@dlf.in",
    linkedin: "linkedin.com/in/ravishankar",
    bio: "Real estate development and urban planning. Leading large-scale residential and commercial development projects.",
    skills: ["Real Estate Development", "Urban Planning", "Project Management", "Sustainability"]
  },
  {
    id: 28,
    name: "Swati Mahapatra",
    graduationYear: "2019",
    degree: "Chemical Engineering",
    company: "Indian Oil Corporation",
    position: "Deputy General Manager",
    location: "Mumbai, India",
    email: "swati.mahapatra@iocl.co.in",
    linkedin: "linkedin.com/in/swatimahapatra",
    bio: "Petroleum refining and petrochemical operations. Leading process optimization and environmental compliance initiatives.",
    skills: ["Petroleum Refining", "Process Optimization", "Environmental Compliance", "Operations"]
  },

  // 2018 Graduates
  {
    id: 29,
    name: "Vikram Singh",
    graduationYear: "2018",
    degree: "Mechanical Engineering",
    company: "Mahindra Group",
    position: "Assistant General Manager",
    location: "Chennai, India",
    email: "vikram.singh@mahindra.com",
    linkedin: "linkedin.com/in/vikramsingh",
    bio: "Automotive design specialist focusing on electric vehicle development. Contributing to India's sustainable transportation future with seven years experience.",
    skills: ["CAD Design", "Electric Vehicles", "Manufacturing", "Innovation"]
  },
  {
    id: 30,
    name: "Pooja Agarwal",
    graduationYear: "2018",
    degree: "Information Technology",
    company: "Capgemini India",
    position: "Delivery Manager",
    location: "Mumbai, India",
    email: "pooja.agarwal@capgemini.com",
    linkedin: "linkedin.com/in/poojaagarwal",
    bio: "IT consulting and digital transformation leader. Managing large-scale enterprise transformation projects across multiple industries.",
    skills: ["IT Consulting", "Digital Transformation", "Team Leadership", "Agile"]
  },
  {
    id: 31,
    name: "Subhash Rout",
    graduationYear: "2018",
    degree: "Electrical Engineering",
    company: "Power Grid Corporation of India",
    position: "Deputy Manager",
    location: "New Delhi, India",
    email: "subhash.rout@powergridindia.com",
    linkedin: "linkedin.com/in/subhashrout",
    bio: "Power transmission and grid management specialist. Working on national power grid expansion and smart grid implementation.",
    skills: ["Power Transmission", "Grid Management", "High Voltage", "Power Systems"]
  },
  {
    id: 32,
    name: "Kavitha Reddy",
    graduationYear: "2018",
    degree: "Biotechnology",
    company: "Bharat Biotech",
    position: "Principal Scientist",
    location: "Hyderabad, India",
    email: "kavitha.reddy@bharatbiotech.com",
    linkedin: "linkedin.com/in/kavithareddy",
    bio: "Vaccine development and immunology research. Contributed to COVID-19 vaccine development and infectious disease research.",
    skills: ["Vaccine Development", "Immunology", "Research", "Clinical Trials"]
  },

  // 2017 Graduates
  {
    id: 33,
    name: "Rohit Samal",
    graduationYear: "2017",
    degree: "Computer Science & Engineering",
    company: "Uber India",
    position: "Senior Engineering Manager",
    location: "Bangalore, India",
    email: "rohit.samal@uber.com",
    linkedin: "linkedin.com/in/rohitsamal",
    bio: "Mobility technology and platform engineering. Eight years experience leading engineering teams in ride-sharing and logistics platforms.",
    skills: ["Platform Engineering", "Team Leadership", "Scalability", "Mobile Technology"]
  },
  {
    id: 34,
    name: "Sunita Das",
    graduationYear: "2017",
    degree: "Electronics & Telecommunications",
    company: "Ericsson India",
    position: "Principal Engineer",
    location: "Gurgaon, India",
    email: "sunita.das@ericsson.com",
    linkedin: "linkedin.com/in/sunitadas",
    bio: "Telecommunications and 5G network architecture. Leading the development of next-generation mobile network solutions.",
    skills: ["5G Networks", "Telecommunications", "Network Architecture", "Wireless Technology"]
  },
  {
    id: 35,
    name: "Ashish Patra",
    graduationYear: "2017",
    degree: "Civil Engineering",
    company: "Shapoorji Pallonji",
    position: "Project Director",
    location: "Mumbai, India",
    email: "ashish.patra@shapoorji.com",
    linkedin: "linkedin.com/in/ashishpatra",
    bio: "Infrastructure development and mega project management. Leading construction of airports, metro systems, and commercial complexes.",
    skills: ["Infrastructure Development", "Mega Projects", "Construction", "Leadership"]
  },
  {
    id: 36,
    name: "Meera Biswal",
    graduationYear: "2017",
    degree: "Chemical Engineering",
    company: "Hindustan Petroleum Corporation",
    position: "General Manager",
    location: "Mumbai, India",
    email: "meera.biswal@hpcl.co.in",
    linkedin: "linkedin.com/in/meerabiswal",
    bio: "Petroleum refining operations and strategic planning. Leading refinery modernization and environmental sustainability initiatives.",
    skills: ["Refinery Operations", "Strategic Planning", "Environmental Management", "Leadership"]
  },

  // 2016 Graduates  
  {
    id: 37,
    name: "Sneha Reddy",
    graduationYear: "2016",
    degree: "Civil Engineering",
    company: "L&T Construction",
    position: "Deputy General Manager",
    location: "Hyderabad, India",
    email: "sneha.reddy@lntecc.com",
    linkedin: "linkedin.com/in/snehareddy",
    bio: "Infrastructure development expert managing large-scale construction projects. Nine years experience in sustainable urban development and smart cities.",
    skills: ["Project Management", "Infrastructure", "Smart Cities", "Sustainability"]
  },
  {
    id: 38,
    name: "Kiran Mohanty",
    graduationYear: "2016",
    degree: "Information Technology",
    company: "Accenture India",
    position: "Associate Director",
    location: "Bangalore, India",
    email: "kiran.mohanty@accenture.com",
    linkedin: "linkedin.com/in/kiranmohanty",
    bio: "Management consulting and technology strategy. Leading digital transformation initiatives for global Fortune 500 clients.",
    skills: ["Management Consulting", "Digital Strategy", "Cloud Computing", "Leadership"]
  },
  {
    id: 39,
    name: "Ramesh Pradhan",
    graduationYear: "2016",
    degree: "Mechanical Engineering",
    company: "Larsen & Toubro",
    position: "Deputy General Manager",
    location: "Mumbai, India",
    email: "ramesh.pradhan@lnt.co.in",
    linkedin: "linkedin.com/in/rameshpradhan",
    bio: "Heavy engineering and manufacturing operations. Specialist in power plant equipment and industrial machinery design.",
    skills: ["Heavy Engineering", "Power Plants", "Manufacturing", "Industrial Design"]
  },
  {
    id: 40,
    name: "Nandini Sahoo",
    graduationYear: "2016",
    degree: "Biotechnology",
    company: "Serum Institute of India",
    position: "Associate Director - R&D",
    location: "Pune, India",
    email: "nandini.sahoo@seruminstitute.com",
    linkedin: "linkedin.com/in/nandinisahoo",
    bio: "Vaccine research and biomanufacturing. Leading development of vaccines for global health initiatives and pandemic preparedness.",
    skills: ["Vaccine Research", "Biomanufacturing", "Global Health", "R&D Leadership"]
  },

  // 2015 Graduates
  {
    id: 41,
    name: "Priya Sharma",
    graduationYear: "2015",
    degree: "Computer Science & Engineering",
    company: "Google India",
    position: "Staff Software Engineer",
    location: "Bangalore, India",
    email: "priya.sharma@google.com",
    linkedin: "linkedin.com/in/priyasharma",
    bio: "Leading AI initiatives in search algorithms. Ten years experience promoting women in engineering at KIIT and mentoring students in tech careers.",
    skills: ["Machine Learning", "Python", "React", "Node.js"]
  },
  {
    id: 42,
    name: "Arjun Kumar",
    graduationYear: "2015",
    degree: "Information Technology",
    company: "Flipkart",
    position: "Director of Engineering",
    location: "Bangalore, India",
    email: "arjun.kumar@flipkart.com",
    linkedin: "linkedin.com/in/arjunkumar",
    bio: "E-commerce platform architect with ten years expertise in scalable systems. Building technology that connects millions of Indian consumers with products.",
    skills: ["System Design", "Microservices", "Scala", "Big Data"]
  },
  {
    id: 43,
    name: "Deepak Jena",
    graduationYear: "2015",
    degree: "Electronics & Telecommunications",
    company: "Intel India",
    position: "Principal Engineer",
    location: "Bangalore, India",
    email: "deepak.jena@intel.com",
    linkedin: "linkedin.com/in/deepakjena",
    bio: "Semiconductor design and processor architecture. Leading development of next-generation computing platforms and AI accelerators.",
    skills: ["Semiconductor Design", "Processor Architecture", "AI Hardware", "VLSI"]
  },
  {
    id: 44,
    name: "Rashmi Patel",
    graduationYear: "2015",
    degree: "Chemical Engineering",
    company: "Reliance Industries",
    position: "Vice President - Operations",
    location: "Jamnagar, India",
    email: "rashmi.patel@ril.com",
    linkedin: "linkedin.com/in/rashmipatel",
    bio: "Petrochemical operations and refinery management. Leading one of the world's largest refining complexes with focus on sustainability.",
    skills: ["Refinery Operations", "Petrochemicals", "Operations Management", "Sustainability"]
  }
];

// Export filtered data by graduation year
export const getAlumniByYear = (years: string[]): Alumni[] => {
  if (years.length === 0) return allAlumni;
  return allAlumni.filter(alumni => years.includes(alumni.graduationYear));
};

// Export filtered data by department
export const getAlumniByDepartment = (departments: string[]): Alumni[] => {
  if (departments.length === 0) return allAlumni;
  return allAlumni.filter(alumni => departments.includes(alumni.degree));
};

// Export search functionality
export const searchAlumni = (query: string): Alumni[] => {
  if (!query.trim()) return allAlumni;
  
  const searchTerm = query.toLowerCase();
  return allAlumni.filter(alumni => 
    alumni.name.toLowerCase().includes(searchTerm) ||
    alumni.company.toLowerCase().includes(searchTerm) ||
    alumni.position.toLowerCase().includes(searchTerm) ||
    alumni.location.toLowerCase().includes(searchTerm) ||
    alumni.degree.toLowerCase().includes(searchTerm) ||
    alumni.skills.some(skill => skill.toLowerCase().includes(searchTerm))
  );
};