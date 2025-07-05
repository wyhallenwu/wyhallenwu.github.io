// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-about",
    title: "ABOUT",
    section: "Navigation",
    handler: () => {
      window.location.href = "/";
    },
  },{id: "nav-publications",
          title: "PUBLICATIONS",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/publications/";
          },
        },{id: "nav-projects",
          title: "PROJECTS",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/projects/";
          },
        },{id: "news-langcoop-is-accepted-by-cvpr-2nd-workshop-on-multi-agent-embodied-intelligent-systems-2025-thanks-xiangbo-and-all-collaborators-check-our-paper-and-code",
          title: 'Langcoop is accepted by CVPR 2nd Workshop on Multi-Agent Embodied Intelligent Systems 2025....',
          description: "",
          section: "News",},{id: "news-my-first-author-paper-how2compress-scalable-and-efficient-edge-video-analytics-via-adaptive-granular-video-compression-has-been-accepted-by-acm-mm2025",
          title: 'My first author paper “How2Compress: Scalable and Efficient Edge Video Analytics via Adaptive...',
          description: "",
          section: "News",},{id: "projects-how2compress",
          title: 'How2Compress',
          description: "MM, 2025",
          section: "Projects",handler: () => {
              window.location.href = "/projects/how2compress.html";
            },},{id: "projects-langcoop",
          title: 'Langcoop',
          description: "CVPR Workshop, 2025",
          section: "Projects",handler: () => {
              window.location.href = "/projects/langcoop.html";
            },},{id: "projects-octopinf",
          title: 'OCTOPINF',
          description: "Percom, 2024",
          section: "Projects",handler: () => {
              window.location.href = "/projects/octopinf.html";
            },},{
        id: 'social-email',
        title: 'email',
        section: 'Socials',
        handler: () => {
          window.open("mailto:%79%75%68%65%6E%67%77%75(%61%74)%6B%61%69%73%74.%61%63.%6B%72", "_blank");
        },
      },{
        id: 'social-rss',
        title: 'RSS Feed',
        section: 'Socials',
        handler: () => {
          window.open("/feed.xml", "_blank");
        },
      },{
        id: 'social-scholar',
        title: 'Google Scholar',
        section: 'Socials',
        handler: () => {
          window.open("https://scholar.google.com/citations?user=bAhIqYwAAAAJ", "_blank");
        },
      },];
