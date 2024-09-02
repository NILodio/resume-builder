// src/types.ts

// Define an interface for social media items
export interface SocialMediaItem {
    socialMedia: string;
    link: string;
  }

  export interface EducationItem {
    school: string;
    degree: string;
    startYear: string;
    endYear: string;
  }
  
  // Update ResumeData interface to include socialMedia as an array of SocialMediaItem
  export interface ResumeData {
    name: string;
    position: string;
    contactInformation: string;
    email: string;
    address: string;
    socialMedia: SocialMediaItem[];  // Updated to use SocialMediaItem array
    summary: string;
    education: EducationItem[];
  }
  
  // Update ResumeContextType to use the updated ResumeData
  export interface ResumeContextType {
    resumeData: ResumeData;
    setResumeData: React.Dispatch<React.SetStateAction<ResumeData>>;
    handleChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
  }
  