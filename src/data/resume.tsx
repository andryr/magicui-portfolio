import { Icons } from "@/components/icons";
import { FileText, HomeIcon, NotebookIcon, Presentation } from "lucide-react";

export const DATA = {
  name: "Andry Rafaralahy",
  initials: "AR",
  url: "https://andryr.github.io",
  location: "New York, NY",
  locationLink: "https://www.google.com/maps/place/new+york",
  description:
    "Software engineer with 2 years of industry experience and a strong mathematical background, now focused on becoming an ML researcher.",
  summary:
    "I studied applied mathematics and started my career as a software engineer in big tech. After that, I briefly worked on mathematical optimization before moving into front-office finance. I’ve always been passionate about machine learning, competing in ML challenges and working on research-style projects alongside my work. I’m now focused on developing the skills to become an ML researcher.",
  avatarUrl: "/avatar.jpeg",

  skills: [
    "Python",
    "PyTorch",
    "C++",
    "Java",
    "Rust",
    "MATLAB",
    "Signal Processing",
    "Machine Learning",
    "Deep Learning",
    "Optimization",
    "Transformers",
  ],

  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
  ],

  contact: {
    // email: "andry.rafa2@gmail.com",
    // tel: "+1 (347) 649 5227",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/andryr",
        icon: Icons.github,
        navbar: true,
      },
      LinkedIn: {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/andry-rafaralahy/",
        icon: Icons.linkedin,
        navbar: true,
      },
      email: {
        name: "Send Email",
        url: "mailto:andryrdev@gmail.com",
        icon: Icons.email,
        navbar: false,
      },
    },
  },

  work: [
    {
      company: "Société Générale Corporate & Investment Banking",
      href: "https://www.societegenerale.com",
      badges: [],
      location: "New York, NY",
      title: "Front Office Developer",
      logoUrl: "/socgen.jpeg",
      start: "Mar 2025",
      end: "Present",
    },
    {
      company: "Hexaly",
      href: "https://www.hexaly.com",
      badges: [],
      location: "Paris, France",
      title: "Optimization Scientist",
      logoUrl: "/hexaly.png",
      start: "Aug 2024",
      end: "Nov 2024"
    },
    {
      company: "Amazon",
      href: "https://www.amazon.com",
      badges: [],
      location: "Dublin, Ireland",
      title: "Software Development Engineer",
      logoUrl: "/amazon.png",
      start: "May 2022",
      end: "Mar 2024"
    },
    {
      company: "Dassault Systèmes",
      href: "https://www.3ds.com",
      badges: [],
      location: "Paris, France",
      title: "Machine Learning Engineer Intern",
      logoUrl: "/3ds.png",
      start: "Jun 2021",
      end: "Dec 2021",
    },
    {
      company: "École Polytechnique",
      href: "https://www.polytechnique.edu",
      badges: [],
      location: "Palaiseau, France",
      title: "Research Intern",
      logoUrl: "/polytechnique.png",
      start: "May 2020",
      end: "Aug 2020",
    },
  ],

  education: [
    {
      school: "Université Paris-Saclay",
      href: "https://www.universite-paris-saclay.fr",
      degree: "MSc in Applied Mathematics",
      logoUrl: "/upsaclay.png",
      start: "2019",
      end: "2021",
    },
    {
      school: "Université de Lorraine",
      href: "https://www.univ-lorraine.fr",
      degree: "BSc in Mathematics",
      logoUrl: "/lorraine.png",
      start: "2015",
      end: "2019",
    },
  ],

  projects: [
    {
      title: "Network Simplex Algorithm (Rust)",
      href: "https://github.com/andryr/network-simplex",
      image: "/Optimal_transport_matrix.png",
      dates: "",
      active: true,
      description:
        "A Network Simplex solver for discrete optimal transport and other minimum-cost flow problems.",
      technologies: ["Rust", "Algorithms", "Optimization"],
      links: [
        {
          type: "Source",
          href: "https://github.com/andryr/network-simplex",
          icon: <Icons.github className="size-3" />,
        },
      ],
    },
    {
      title: "Audio Declipping Algorithm (MATLAB)",
      href: "https://github.com/andryr/audio-declipping",
      image: "/Clipping.png",
      dates: "",
      active: false,
      description:
        "An implementation of the S-SPADE and A-SPADE algorithms for reconstructing clipped audio signals.",
      technologies: ["MATLAB", "Signal Processing", "Convex Optimization"],
      links: [
        {
          type: "Source",
          href: "https://github.com/andryr/audio-declip",
          icon: <Icons.github className="size-3" />,
        },
      ],
    },
    {
      title: "Guitar Plate Eigenmode Solver",
      href: "https://github.com/andryr/guitar-soundboard-eigenmodes",
      image: "/modes.png",
      dates: "",
      active: false,
      description:
        "A finite element solver for computing vibrational modes of guitar soundboards. Combines a detailed hexahedral mesh (generated with FreeCAD and Gmsh) with FEniCS for PDE discretization and SLEPc for large-scale eigenvalue computation.",
      technologies: ["Python", "Numerical Methods", "PDEs"],
      links: [
        {
          type: "Source",
          href: "https://github.com/andryr/guitar-soundboard-eigenmodes",
          icon: <Icons.github className="size-3" />,
        },
        {
          type: "Thesis (FR)",
          href: "/M1_Thesis.pdf",
          icon: <FileText className="size-3" />,
        },
      ],
    },
    {
      title: "Stereo Visual Odometry",
      href: "https://github.com/andryr/stereo-visual-odometry",
      image: "/odometry.png",
      dates: "",
      active: false,
      description:
        "A stereo visual odometry pipeline for estimating camera pose from image sequences. Combines keypoint detection and optical flow computation to track 3D camera movement over time.",
      technologies: ["Python", "Computer Vision", "OpenCV"],
      links: [
        {
          type: "Source",
          href: "https://github.com/andryr/stereo-visual-odometry",
          icon: <Icons.github className="size-3" />,
        },
      ],
    },
    {
      title: "Puzzle Solvers with MIP",
      href: "https://github.com/andryr/hashiwokakero",
      image: "/hashiwokakero.png",
      dates: "",
      active: false,
      description:
        "Solvers for logic puzzles (Hashiwokakero and Shikaku) using Mixed Integer Programming and local search heuristics.",
      technologies: ["Python", "MIP", "Optimization"],
      links: [
        {
          type: "Source-1",
          href: "https://github.com/andryr/hashiwokakero",
          icon: <Icons.github className="size-3" />,
        },
        {
          type: "Source-2",
          href: "https://github.com/andryr/shikaku",
          icon: <Icons.github className="size-3" />,
        },
        {
          type: "Write-up (FR)",
          href: "/Proj_RO203.pdf",
          icon: <FileText className="size-3" />
        },
      ],
    },
    {
      title: "Music Recognition",
      href: "https://github.com/andryr/Music-Identification",
      image: "/shazam.png",
      dates: "",
      active: false,
      description:
        "A Shazam-like music identification algorithm implemented in MATLAB. Uses audio fingerprinting techniques to create robust signatures that enable song identification from short audio samples.",
      technologies: ["MATLAB", "Signal Processing", "Audio Fingerprinting"],
      links: [
        {
          type: "Source",
          href: "https://github.com/andryr/Music-Identification",
          icon: <Icons.github className="size-3" />,
        },
        {
          type: "Thesis (FR)",
          href: "/L3_Thesis.pdf",
          icon: <FileText className="size-3" />,
        },
      ],
    },
  ],

  hackathons: [
    {
      title: "NeurIPS 2025 - Weak Lensing Uncertainty Challenge",
      dates: "Dec 2025",
      location: "San Diego, CA",
      description:
        "Developed a deep learning pipeline combining a denoising U-Net, an ensemble of CNNs, and MCMC sampling for cosmological parameter estimation. Invited to give a presentation at the dedicated NeurIPS 2025 workshop.",
      image: "/neurips.png",
      links: [
        {
          title: "Slides",
          icon: <Presentation className="h-4 w-4" />,
          href: "/weak_lensing_challenge_slides_andry_rafaralahy.pdf",
        },
        {
          title: "Source Code",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/andryr/weak-lensing",
        },
      ],
    },
    {
      title: "IEEE BigData 2024 - Predicting Chess Puzzle Difficulty",
      dates: "Dec 2024",
      location: "Washington, DC",
      description:
        "Developed a model using Vision Transformers and Learning-to-Rank methods to predict puzzle difficulty. Invited to present at IEEE BigData 2024 in a dedicated session and published a conference paper.",
      image: "/ieee.png",
      links: [
        {
          title: "Paper",
          icon: <FileText className="h-4 w-4" />,
          href: "https://ieeexplore.ieee.org/document/10825356",
        },
        {
          title: "Slides",
          icon: <Presentation className="h-4 w-4" />,
          href: "/Chess_puzzle_presentation.pdf",
        },
        {
          title: "Source Code",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/andryr/chess-puzzle-difficulty",
        },
      ],
    },
  ],
} as const;
