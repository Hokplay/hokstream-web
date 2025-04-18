import type { CaseStudyTranslation } from '@/ui/caseStudy/translation/CaseStudyTranslation.ts';

export const enUsTranslation: CaseStudyTranslation = {
  bannerSection: {
    title: 'Industry Case Studies',
    image: '/images/caseStudy/CaseStudy_Hero_Image.webp'
  },
  productionStatsSection: {
    title: 'Explosive Growth in Community Production',
    subtitles: ['Better, Cheaper and Faster'],
    items: [
      {
        title: 'Lower production costs by',
        stat: '90%'
      },
      {
        title: 'Increased content volume',
        stat: '10x%'
      },
      {
        title: 'Source interaction latency',
        stat: '<1s'
      }
    ]
  },
  tournamentSection: {
    title: '2022 League of Legends Campus Esports Finals',
    subtitles: [
      'Using traditional local production method',
      'Requires a large number of professional personnel and equipment resources'
    ],
    article: {
      title: 'Vanung University on-site',
      subTitles: [
        'Only one operator is needed to control the online switcher',
        '(integrating switching, graphics, replays, streaming, etc.)'
      ],
      image: '/images/caseStudy/CaseStudy_萬能科技大學現場.webp'
    },
    carouselItems: [
      {
        title: 'Deployment costs',
        image: '/images/caseStudy/cost.webp',
        list: [
          '40 screens',
          '20 personnel',
          '10 computers',
          '5 control stations',
          '4 software suites'
        ]
      },
      {
        title: 'On-site personnel',
        image: '/images/caseStudy/man_power.webp',
        list: [
          'director',
          'audio engineer',
          'graphics operator',
          'OB observer',
          'scaffolding crew',
          'cameraman',
          'producer'
        ]
      },
      {
        title: 'Only requires',
        image: '/images/caseStudy/usage.webp',
        list: [
          '2 screens',
          '2 personnel',
          '1 computer',
          '1 edge server',
          '1 online switcher software'
        ]
      }
    ]
  },
  eventsGallerySection: {
    title: 'Taoyuan Esports Festival',
    paragraphs: [
      'Leveraging breakthroughs in decentralized network technology, this platform integrates production, broadcasting, and real-time communication. With just a web interface, even university students with no broadcasting experience or high school students new to esports events can easily create professional esports productions',
      'This event utilized this technology to complete all Arena of Valor online tournament broadcasts, totaling 183 high-quality online matches, all produced by students with no prior experience'
    ],
    images: [
      {
        title: 'Taoyuan Esports Festival',
        image: '/images/caseStudy/桃園電競節_1.webp'
      },
      {
        title: 'Taoyuan Esports Festival',
        image: '/images/caseStudy/桃園電競節_2.webp'
      },
      {
        title: 'Taoyuan Esports Festival',
        image: '/images/caseStudy/桃園電競節_3.webp'
      },
      {
        title: 'Taoyuan Esports Festival',
        image: '/images/caseStudy/桃園電競節_4.webp'
      }
    ]
  },
  partnersSection: {
    title: 'Partners',
    partners: [
      {
        name: '健行科大',
        logo: '/images/caseStudy/Schools_Logo/健行科大.webp'
      },
      {
        name: '樹德科大',
        logo: '/images/caseStudy/Schools_Logo/樹德科大.webp'
      },
      {
        name: '永平工商',
        logo: '/images/caseStudy/Schools_Logo/永平工商.webp'
      },
      {
        name: '萬能科大',
        logo: '/images/caseStudy/Schools_Logo/萬能科大.webp'
      },
      {
        name: '黎明科大',
        logo: '/images/caseStudy/Schools_Logo/黎明科大.webp'
      }
    ]
  },
  grassrootsSection: {
    title: 'Grassroots Community Sports',
    subtitles: ['Any event can be streamed from multiple angles'],
    thirdPersonPerspective: {
      title: 'Third-Person Perspective',
      image: '/images/caseStudy/thirdperson.webp'
    },
    secondPersonPerspective: {
      title: 'Second-Person Perspective',
      image: '/images/caseStudy/secondperson.webp'
    }
  }
};
