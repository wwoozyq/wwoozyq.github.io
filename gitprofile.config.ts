// gitprofile.config.ts

const CONFIG = {
  github: {
    username: 'wwoozyq', // Your GitHub org/user name. (This is the only required config)
  },
  /**
   * If you are deploying to https://<USERNAME>.github.io/, for example your repository is at https://github.com/arifszn/arifszn.github.io, set base to '/'.
   * If you are deploying to https://<USERNAME>.github.io/<REPO_NAME>/,
   * for example your repository is at https://github.com/arifszn/portfolio, then set base to '/portfolio/'.
   */
  base: '/',
projects: {
  github: {
    display: true,
    header: 'GitHub Projects',
    mode: 'manual',
    automatic: {
      sortBy: 'updated',
      limit: 6,
      exclude: {
        forks: true,
        projects: [],
      },
    },
    manual: {
      projects: [],
      // 以后你有自己的仓库后，可以改成：
      // projects: ['wwoozyq/repo1', 'wwoozyq/repo2']
    },
  },
  external: {
    header: 'Selected Projects',
    projects: [
      {
        title: 'Deep Learning for Cardiac MRI Analysis',
        description:
          'Research project on cardiac MRI analysis in a medical imaging research group. Built robust preprocessing and normalization pipelines, validated annotation quality, and developed PyTorch-based segmentation models for cardiac structure analysis.',
        imageUrl:
          'https://img.freepik.com/free-vector/medical-background-design_23-2148502257.jpg',
        link: 'https://github.com/wwoozyq',
      },
      {
        title: 'Time-Series Data Science for Wearable Biosensors',
        description:
          'National innovation project on intelligent analysis of high-noise time-series signals from CRISPR-based wearable respiratory virus sensors. Designed Python pipelines for denoising, baseline correction, normalization, and kinetic feature extraction.',
        imageUrl:
          'https://img.freepik.com/free-vector/gradient-big-data-illustration_23-2149363592.jpg',
        link: 'https://github.com/wwoozyq',
      },
      {
        title: 'Facial Emotion Recognition System',
        description:
          'AI course project for multi-class facial emotion recognition. Built and optimized ResNet50 and VGG16 models with PyTorch, evaluated performance using ROC-AUC and F1-score, and implemented a real-time inference interface for camera and batch image input.',
        imageUrl:
          'https://img.freepik.com/free-vector/hand-drawn-flat-design-api-illustration_23-2149383348.jpg',
        link: 'https://github.com/wwoozyq',
      },
      {
        title: 'Savior of P People',
        description:
          'A collaborative task scheduling and productivity application with intelligent task parsing, OCR-assisted input, and adaptive rescheduling workflows. Displayed here as an engineering-oriented project experience.',
        imageUrl:
          'https://opengraph.githubassets.com/1/Valkqs/Savior_of_P_people',
        link: 'https://github.com/Valkqs/Savior_of_P_people',
      },
    ],
  },
},
  seo: {
  title: 'Liming Wang | Zhejiang University | Biomedical Engineering & AI',
  description: 'Personal website of Liming Wang, an undergraduate student at Zhejiang University interested in AI, medical imaging, and data science.',
  imageURL: '',
},
  social: {
    
    website: '',
    phone: '+86 19883218782',
    email: '3230104774@zju.edu.cn',
  },
  resume: {
  fileUrl: '',
},
  skills: [
  'Python',
  'PyTorch',
  'Deep Learning',
  'Machine Learning',
  'Signal Processing',
  'Data Analysis',
  'MATLAB',
  'C',
  'Git',
  'LaTeX',
],
  experiences: [
    {
    
  
  ],
  certifications: [
 
  ],
 educations: [
  {
    institution: 'Zhejiang University',
    degree: 'B.Eng. in Biomedical Engineering, Minor in Artificial Intelligence',
    from: '2023',
    to: '2027',
  },
],
  publications: [
    
  ],
  // Display articles from your medium or dev account. (Optional)
  blog: {
    source: 'dev', // medium | dev
    username: 'arifszn', // to hide blog section, keep it empty
    limit: 2, // How many articles to display. Max is 10.
  },
  googleAnalytics: {
    id: '', // GA3 tracking id/GA4 tag id UA-XXXXXXXXX-X | G-XXXXXXXXXX
  },
  // Track visitor interaction and behavior. https://www.hotjar.com
  hotjar: { id: '', snippetVersion: 6 },
  themeConfig: {
    defaultTheme: 'lofi',

    // Hides the switch in the navbar
    // Useful if you want to support a single color mode
    disableSwitch: false,

    // Should use the prefers-color-scheme media-query,
    // using user system preferences, instead of the hardcoded defaultTheme
    respectPrefersColorScheme: false,

    // Display the ring in Profile picture
    displayAvatarRing: true,

    // Available themes. To remove any theme, exclude from here.
    themes: [
      'light',
      'dark',
      'cupcake',
   
 
    ],
  },

  // Optional Footer. Supports plain text or HTML.
  footer: `Made with <a 
      class="text-primary" href="https://github.com/arifszn/gitprofile"
      target="_blank"
      rel="noreferrer"
    >GitProfile</a> and ❤️`,

  enablePWA: true,
};

export default CONFIG;
