import Phones1 from '@assets/Phones1.png';
import Phones2 from '@assets/Phones2.png';
import Phones3 from '@assets/Phones3.png';

export const PRODUCT_VERSION_CONFIG = {
  // Layout header size + Padding top of section
  get HEADER_TOP() {
    return this.SECTION_OFFSET + this.LAYOUT_HEADER_HEIGHT;
  },

  LAYOUT_HEADER_HEIGHT: 78,

  SECTION_OFFSET: 40,

  // VISIBLE PART OF CARD
  CARD_VISIBLE_HEIGHT: 14,

  // HEADER START STICKY
  HEADER_START_STICKY: 20,

  // GAP BETWEEN CARDS
  CARD_GAP: 20,
} as const;

export const MOCK_DATA = [
  {
    label: 'AI OF models',
    description: [
      'Transform social media using artificial intelligence, offering a new way to connect with famous influencers.',
      'Imagine how influencers can adapt to any preference, making every interaction unique and different using our game changing AI. We are changing the perception of how social media can be used by influencers, and how easy it can be to communicate with your audience without moving a muscle.',
    ],
    imgSrc: Phones1,
  },
  {
    label: 'AI IG influencers',
    description: [
      'We are redefining personal entertainment with AI-powered models for a unique and engaging private experience. ',
      'Dive into a world of unrivaled entertainment as our advanced algorithm adapts to the user’s preferences, while giving an opportunity to have a private chat with the OF model',
    ],
    imgSrc: Phones2,
  },
  {
    label: 'AI live dealer',
    description: [
      'AI Live Dealer elevates online gaming by blending live casino thrills with advanced artificial intelligence. ',
      'The players will enjoy personalised dealers, stunning live interactions and a real-time experience that will redefine your gaming user experience. ',
      'Welcome to the future, where gaming and artificial intelligence collide for an unmatched experience!',
    ],
    imgSrc: Phones3,
  },
  {
    label: 'AI live dealer 1',
    description: [
      'AI Live Dealer elevates online gaming by blending live casino thrills with advanced artificial intelligence. ',
      'The players will enjoy personalised dealers, stunning live interactions and a real-time experience that will redefine your gaming user experience. ',
      'Welcome to the future, where gaming and artificial intelligence collide for an unmatched experience!',
    ],
    imgSrc: Phones3,
  },
  {
    label: 'AI live dealer 2',
    description: [
      'AI Live Dealer elevates online gaming by blending live casino thrills with advanced artificial intelligence. ',
      'The players will enjoy personalised dealers, stunning live interactions and a real-time experience that will redefine your gaming user experience. ',
      'Welcome to the future, where gaming and artificial intelligence collide for an unmatched experience!',
    ],
    imgSrc: Phones3,
  },
  {
    label: 'AI live dealer 3',
    description: [
      'AI Live Dealer elevates online gaming by blending live casino thrills with advanced artificial intelligence. ',
      'The players will enjoy personalised dealers, stunning live interactions and a real-time experience that will redefine your gaming user experience. ',
      'Welcome to the future, where gaming and artificial intelligence collide for an unmatched experience!',
    ],
    imgSrc: Phones3,
  },
  {
    label: 'AI live dealer 4',
    description: [
      'AI Live Dealer elevates online gaming by blending live casino thrills with advanced artificial intelligence. ',
      'The players will enjoy personalised dealers, stunning live interactions and a real-time experience that will redefine your gaming user experience. ',
      'Welcome to the future, where gaming and artificial intelligence collide for an unmatched experience!',
    ],
    imgSrc: Phones3,
  },
];
