import { StaticImageData } from 'next/image';
import hackathonPlaceholder from '../assets/hackathons/placeholder.svg';

export interface HackathonWin {
  id: string;
  title: string;
  event: string;
  position: string;
  date: string;
  location: string;
  organizers: string[];
  projectName: string;
  projectDescription: string;
  projectUrl?: string;
  tags: string[];
  teamMembers: string[];
  achievements: string[];
    description: string;
    fullDescription: string;
    img: StaticImageData;
}

export const hackathonWins: HackathonWin[] = [
  {
    id: "hackmivo-2025",
    title: "HackMIvo 2025",
    event: "HackMIvo 2025",
    position: "1st Place",
    date: "2025",
    location: "Admivo, Indore",
    organizers: ["Admivo", "RentPrompts - We're RARE Team", "Ankur Gurjar", "Harshwardhan Singh", "Vishal P", "AYUSHI GURJAR", "RAHUL TOMAR"],
    projectName: "GhostWriter AI",
    projectDescription: "A personalized content generation platform that creates posts, stories, and speeches tailored to your unique writing style.",
    projectUrl: "https://ghostwriter-intmain.vercel.app/",
    tags: ["AI/ML", "Next.js", "OpenAI GPT-4", "ElevenLabs", "MongoDB", "JWT Authentication"],
    teamMembers: ["Ansh Kumar Rana", "Yuvraj Singh", "Agni Pratap Singh Chouhan"],
    achievements: [
      "Won 1st place in the hackathon",
      "Received internship offer at RentPrompts - We're RARE",
      "Built a fully functional AI content generation platform",
      "Integrated advanced personality analysis and writing style matching"
    ],
    img: hackathonPlaceholder,
    description: "Won 1st place at HackMIvo 2025 with GhostWriter AI - a personalized content generation platform.",
    fullDescription: `At HackMIvo 2025, our team built GhostWriter AI - a revolutionary personalized content generation platform that goes beyond traditional AI writers. 

Our platform begins by analyzing how users write through a comprehensive writing test, then pairs that analysis with a personality quiz to understand not just what they write, but why they write the way they do. This unique approach allows GhostWriter AI to create content that truly matches each user's individual voice and style.

The platform features:
- **Personalized Writing Analysis**: Advanced algorithms that learn from your writing patterns
- **Multi-format Content Generation**: Create blogs, stories, and speeches
- **Voice Synthesis Integration**: ElevenLabs text-to-speech for lifelike audio content
- **Tone Matching**: AI adapts to unique voice and style preferences
- **Real-time Collaboration**: Smart automation and secure operations

What made this project special wasn't just the technical implementation, but the recognition that everyone wants to sound original, thoughtful, and eloquent - but who really has the time to write like that consistently? GhostWriter AI solves this problem by becoming your personal ghostwriter that actually understands you.

The win was made even more rewarding with an unexpected internship offer from RentPrompts - We're RARE right after the announcement. The experience of caffeine-fueled creativity, intense collaboration, and bringing an innovative idea to life with my amazing teammates made this victory truly special.`
  },
  {
    id: "moonhack25",
    title: "Moonhacks 2025",
    event: "Moonhacks Hackathon",
    position: "1st Place",
    date: "2025",
    location: "Medicaps University, Indore",
    organizers: ["Dr. Latika Jindal", "Ansh Kumar Rana", "Shanti Infosoft LLP - A CMMI Level 5 Company"],
    projectName: "int main",
    projectDescription: "A comprehensive technical solution built during the intense hackathon environment.",
    tags: ["Full-Stack Development", "Problem Solving", "Team Collaboration"],
    teamMembers: ["Kushagra Rai", "Akash Patel", "Tanay Nagde"],
    achievements: [
      "Won 1st place in Moonhacks Hackathon",
      "Represented Abhyudaya Coding Club",
      "Demonstrated exceptional teamwork and technical skills",
      "Built and deployed a complete solution under time pressure"
    ],
    img: hackathonPlaceholder,
    description: "Secured 1st place at Moonhacks 2025 representing Abhyudaya Coding Club with team int main.",
    fullDescription: `Team int main achieved first place victory at the Moonhacks Hackathon held at Medicaps University, Indore. This intense competition brought together the best student developers to build innovative solutions under pressure.

Our team demonstrated exceptional collaboration, technical expertise, and problem-solving abilities throughout the event. The hackathon was characterized by pure chaos, debugging sessions, and caffeine-fueled coding marathons - but our team's synergy and technical skills led us to victory.

Key highlights of our participation:
- **Team Excellence**: Perfect collaboration between team members with complementary skills
- **Technical Innovation**: Built a comprehensive solution addressing real-world problems
- **Time Management**: Successfully delivered a complete, functional project within the hackathon timeline
- **Community Representation**: Proudly represented Abhyudaya Coding Club and left our footprints

The event was expertly organized by Dr. Latika Jindal ma'am and Ansh Kumar Rana, providing an intense yet fantastic environment for innovation. The partnership with Shanti Infosoft LLP - A CMMI Level 5 Company provided excellent opportunities for developers like us to showcase our skills.

This victory was particularly meaningful as we represented the Abhyudaya Coding Club community, carrying forward the legacy of technical excellence with fellow club members and OGs who have paved the way for future innovators.

"int main without parentheses or parameters" - our team name itself reflected our approach to coding and problem-solving, diving straight into solutions with confidence and creativity.`
  }
];

export const getHackathonById = (id: string): HackathonWin | undefined => {
  return hackathonWins.find(hackathon => hackathon.id === id);
};
