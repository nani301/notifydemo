export interface Notification {
  id: string;
  title: string;
  organization: string;
  category: string;
  type: 'Urgent' | 'New' | 'Update' | 'General';
  description: string;
  postedDate: string;
  deadline: string;
  salary?: string;
  location?: string;
  details: {
    fullDescription: string;
    education: string;
    ageLimit: string;
    nationality: string;
    tier1ExamDate?: string;
    resultDate?: string;
  };
}

export const MOCK_NOTIFICATIONS: Notification[] = [
  {
    id: '1',
    title: 'SSC CGL 2024 - Combined Graduate Level Examination',
    organization: 'Staff Selection Commission',
    category: 'Government Jobs',
    type: 'Urgent',
    description: 'Notification Released. 15,000+ Vacancies announced for various departments.',
    postedDate: '2 hours ago',
    deadline: 'Oct 24, 2024',
    location: 'India Wide',
    details: {
      fullDescription: 'The Staff Selection Commission will hold the Combined Graduate Level Examination, 2024, for filling up various Group ‘B’ and Group ‘C’ posts in different Ministries/ Departments/ Organizations of Government of India.',
      education: 'Graduation in any discipline from a recognized University or equivalent.',
      ageLimit: '18 to 30 years (as on 01-08-2024). Age relaxation applicable as per government norms.',
      nationality: 'Citizen of India.',
      tier1ExamDate: 'Aug/Sep 2024',
      resultDate: 'To be Notified'
    }
  },
  {
    id: '2',
    title: 'IBPS Probationary Officers Recruitment 2024',
    organization: 'Institute of Banking Personnel Selection',
    category: 'Banking',
    type: 'New',
    description: 'Online applications are invited for the next Common Recruitment Process for selection of personnel for Probationary Officer/ Management Trainee posts.',
    postedDate: '5 hours ago',
    deadline: 'Nov 12, 2024',
    salary: '₹45,000 - ₹62,000 /mo',
    details: {
      fullDescription: 'Online applications are invited for the next Common Recruitment Process for selection of personnel for Probationary Officer/ Management Trainee posts in the Participating Banks.',
      education: 'A Degree (Graduation) in any discipline from a University recognised by the Govt. Of India.',
      ageLimit: '20 to 30 years.',
      nationality: 'Citizen of India.',
    }
  },
  {
    id: '3',
    title: 'Indian Air Force Agniveervayu 02/2025',
    organization: 'Indian Air Force',
    category: 'Defence',
    type: 'General',
    description: 'Indian Air Force invites online applications from unmarried Indian male and female candidates for selection test for AGNIVEERVAYU.',
    postedDate: 'Yesterday',
    deadline: 'Nov 05, 2024',
    details: {
      fullDescription: 'Indian Air Force invites online applications from unmarried Indian male and female candidates for selection test for AGNIVEERVAYU intake 02/2025.',
      education: 'Passed Intermediate/10+2/ Equivalent examination with Mathematics, Physics and English.',
      ageLimit: '17.5 to 21 years.',
      nationality: 'Citizen of India.',
    }
  },
  {
    id: '4',
    title: 'Civil Service Fast Stream 2025',
    organization: 'UPSC',
    category: 'Government Jobs',
    type: 'New',
    description: 'Applications are now open for the next intake of the Civil Service Fast Stream. Explore various career paths in government leadership and policy making.',
    postedDate: '3 days ago',
    deadline: 'Nov 30, 2024',
    details: {
      fullDescription: 'Applications are now open for the next intake of the Civil Service Fast Stream. Explore various career paths in government leadership and policy making.',
      education: 'Graduation in any discipline.',
      ageLimit: '21 to 32 years.',
      nationality: 'Citizen of India.',
    }
  },
  {
    id: '5',
    title: 'Green Home Grant Extension',
    organization: 'Ministry of Environment',
    category: 'Schemes',
    type: 'Update',
    description: 'The deadline for applying to the Green Home Grant has been extended. Find out if your property qualifies for energy efficiency upgrades.',
    postedDate: '4 days ago',
    deadline: 'Dec 31, 2024',
    details: {
      fullDescription: 'The deadline for applying to the Green Home Grant has been extended. Find out if your property qualifies for energy efficiency upgrades.',
      education: 'N/A',
      ageLimit: 'N/A',
      nationality: 'Citizen of India.',
    }
  },
  {
    id: '6',
    title: 'UPSC Civil Services 2024 - Prelims',
    organization: 'UPSC',
    category: 'Government Jobs',
    type: 'Update',
    description: 'Prelims exam schedule and admit cards have been released. Exam is scheduled for June 16, 2024.',
    postedDate: '1 week ago',
    deadline: 'N/A',
    details: {
      fullDescription: 'Learn about the phased rollout of the new secure digital identification system for accessing public services online.',
      education: 'Graduation in any discipline',
      ageLimit: '21 to 32 years',
      nationality: 'Citizen of India.',
    }
  }
];

export const CATEGORIES = [
  { id: 'gov_jobs', name: 'Government Jobs', subtitle: 'State & Central', icon: '🏛️', count: 244 },
  { id: 'banking', name: 'Banking', subtitle: 'IBPS, SBI, RBI', icon: '🏦', count: 89 },
  { id: 'defence', name: 'Defence', subtitle: 'Army, Navy, Air Force', icon: '🛡️', count: 12 },
  { id: 'teaching', name: 'Teaching', subtitle: 'TET, CTET, PRT', icon: '🎓', count: 156 },
  { id: 'railways', name: 'Railways', subtitle: 'RRB NTPC, Group D', icon: '🚆', count: 120 },
  { id: 'police', name: 'Police', subtitle: 'State Police Forces', icon: '👮', count: 56 },
  { id: 'scholarships', name: 'Scholarships', subtitle: 'Grants & Aids', icon: '💰', count: 78 },
  { id: 'schemes', name: 'Schemes', subtitle: 'Welfare Programs', icon: '🤝', count: 92 },
];
