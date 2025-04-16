import type { FeaturesPageTranslation } from '@/ui/feature/translation/FeaturesPageTranslation.ts';

export const enUsTranslation: FeaturesPageTranslation = {
  bannerSection: {
    title: 'WHAT’S OUR STRENGTH?',
    image: '/images/features/faces-collage.jpg'
  },
  productHighlightsSection: {
    title: 'Product Highlights',
    highlights: [
      {
        icon: '/images/features/icon-live.png',
        title: 'Separation of Design & Broadcasting',
        description:
          'Separating broadcast design from execution allows inexperienced users to easily create and publish broadcast content'
      },
      {
        icon: '/images/features/icon-resource.png',
        title: 'Remote Production',
        description:
          'Supports remote operation and multi-source signal switching from different locations'
      },
      {
        icon: '/images/features/Web3去中心化-icon.png',
        title: 'Web3 Decentralization',
        description:
          'Utilizes Web3 concepts, leveraging decentralization and edge computing to reduce latency and enhance broadcast quality'
      },
      {
        icon: '/images/features/learning_curve-icon.png',
        title: 'No Learning Curve',
        description:
          'Participants don’t need to install software or learn programming, lowering the barrier to entry'
      },
      {
        icon: '/images/features/catless-icon.png',
        title: 'No Game Type Restrictions',
        description:
          'Broad applicability—allows non-esports games to be easily streamed with interactive multi-user participation, replacing traditional OB functions'
      },
      {
        icon: '/images/features/reinforce_cat-icon.png',
        title: 'Enhancing Venue Capabilities',
        description:
          'Empowers community members and venue owners, turning physical venues into local community hubs'
      }
    ]
  },
  coreFeatureSection: {
    title: 'Core Features',
    multiLocationSection: {
      title: 'Multi-Location Interactive Broadcasting Module',
      image: '/images/features/broadcasting_interface.png',
      items: [
        {
          image: '/images/features/start_animate.png',
          title: 'Online Title Cards / Intro Animations',
          description:
            'Creators can edit title cards in real time, with unified designs set by event designers to perfectly match broadcast requirements'
        },
        {
          image: '/images/features/low_latency.png"',
          title: 'Low-Latency Multi-Source Interaction Across Locations',
          description:
            'All signals have a latency of less than 0.5 seconds, supporting up to 18 sources at 60 FPS'
        },
        {
          image: '/images/features/flow.png',
          title: 'Event Workflow Management',
          description:
            'Organizers and event designers use pre-set broadcast workflows and scenes to manage all operational actions, minimizing human errors'
        },
        {
          image: '/images/features/signals.png',
          title: 'Signal Sources from Various Locations',
          description:
            'Supports signal input from desktops, mobile devices, cameras, and more, from various locations. Users can simply scan a QR code or open a link in their browser to provide a signal source'
        }
      ]
    },
    sportsBehaviorSection: {
      title: 'Sports Behavior Detection & Recording',
      items: [
        {
          image: '/images/features/v_understands.png',
          title: 'Video Understanding',
          description:
            'Understanding video content through models, enabling application in various business scenarios and transforming it into functionalities'
        },
        {
          image: '/images/features/video-processing-app.jpg',
          title: 'Content Analysis',
          description:
            'AI can read information from the game screen, such as health points, dungeons, monster status, damage values, and more'
        }
      ]
    },
    articleSection: {
      articles: [
        {
          title: 'Multi-Location Remote Production',
          image: '/images/features/Multi-Location-Remote-Production.png',
          description:
            'Supports 8–16 different signal sources from various locations, including game screens, webcams, smartphone front/rear cameras, and professional cameras. Utilizing unique low-latency transmission technology, it enables seamless remote production and real-time broadcasting'
        },
        {
          title: 'No Learning Curve',
          image: '/images/features/working.png',
          description:
            'Participants don’t need to install OBS, vMix, or learn signal transmission—just open a link in a browser to join'
        },
        {
          title: 'No Game Type Restrictions',
          image: '/images/features/category_less.png',
          description:
            'Esports games can support various types of content, while non-esports games don’t need custom OB development and can still be turned into engaging live-streamed marketing content'
        },
        {
          title: 'Decentralized Design',
          image: '/images/features/Decentralized-Design.png',
          description:
            'Every venue becomes a broadcasting production center, and every community can generate and distribute game content. The decentralized design reduces cross-region video signal latency from 3–10 seconds to under 1 second'
        }
      ]
    },
    canHelpSection: {
      title: 'All of these can help...',
      tabs: [
        {
          name: 'Game Company',
          items: [
            {
              title: 'Multi-Location Remote Production',
              description: 'More Community-Generated Competitive Content'
            },
            {
              title: 'No Learning Curve',
              description:
                'More Cross-Community Competitions & Lower Online Show Production Costs'
            },
            {
              title: 'No Game Type Restrictions',
              description:
                'Save OB Development Costs and Start Building Competitive Communities Earlier'
            },
            {
              title: 'Decentralized Design',
              description:
                'Increase Community Content Flexibility, Strengthen Self-Promotion, and Reduce Advertising Pressure'
            }
          ]
        },
        {
          name: 'Creator',
          items: [
            {
              title: 'Multi-Location Remote Production',
              description:
                'Reduce Community Tournament Production Costs and Lower Equipment & Workforce Logistics Costs'
            },
            {
              title: 'No Learning Curve',
              description:
                'Lower Online Show Production Difficulty, Increased Content Flexibility, and Reduced Communication Costs'
            },
            {
              title: 'No Game Type Restrictions',
              description:
                'Expand Business Scope—Previously Challenging SLG National War Broadcasts Can Now Be Easily Produced'
            },
            {
              title: 'Decentralized Design',
              description:
                'Improve Production Flexibility & Reduce Logistics Costs'
            }
          ]
        },
        {
          name: 'Venue',
          items: [
            {
              title: 'Multi-Location Remote Production',
              description:
                'Independently Produce In-Store Matches & Broadcasts, Internet Café Tournaments, Cross-Region Corporate Cups, etc.'
            },
            {
              title: 'No Learning Curve',
              description:
                'Easily Capture All Required Footage Inside and Outside the Venue'
            },
            {
              title: 'No Game Type Restrictions',
              description:
                'Gain In-House Content Production Capability with Flexible Applications'
            },
            {
              title: 'Decentralized Design',
              description:
                'Upgrade from Simple Venue Management to a Content Production Hub, Creating Opportunities to Train Production Talent'
            }
          ]
        }
      ]
    }
  }
};
