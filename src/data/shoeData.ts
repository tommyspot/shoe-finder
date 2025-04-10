import { ShoeData } from '../types';

export const shoeData: ShoeData = {
  brands: {
    nike: {
      name: 'Nike',

      sizeChart: {
        US: [6, 6.5, 7, 7.5, 8, 8.5, 9, 9.5, 10, 10.5, 11, 11.5, 12, 12.5, 13],
        EU: [38.5, 39, 40, 40.5, 41, 42, 42.5, 43, 44, 44.5, 45, 45.5, 46, 47, 47.5]
      },
      models: [
        {
          name: 'Air Force 1',
          description: 'Classic basketball shoe turned streetwear icon',
          category: 'Lifestyle',
          price: 100,
          releaseYear: 1982
        },
        {
          name: 'Air Max 90',
          description: 'Iconic running shoe with visible Air cushioning',
          category: 'Running',
          price: 120,
          releaseYear: 1990
        },
        {
          name: 'Zoom Pegasus',
          description: 'Versatile running shoe with responsive cushioning',
          category: 'Running',
          price: 120,
          releaseYear: 2023
        }
      ]
    },
    adidas: {
      name: 'Adidas',

      sizeChart: {
        US: [6, 6.5, 7, 7.5, 8, 8.5, 9, 9.5, 10, 10.5, 11, 11.5, 12, 12.5, 13],
        EU: [38.7, 39.3, 40, 40.7, 41.3, 42, 42.7, 43.3, 44, 44.7, 45.3, 46, 46.7, 47.3, 48]
      },
      models: [
        {
          name: 'Ultra Boost',
          description: 'Premium running shoe with responsive Boost cushioning',
          category: 'Running',
          price: 180,
          releaseYear: 2015
        },
        {
          name: 'Samba',
          description: 'Classic indoor soccer shoe turned lifestyle staple',
          category: 'Lifestyle',
          price: 100,
          releaseYear: 1950
        },
        {
          name: 'Superstar',
          description: 'Iconic shell-toe basketball shoe',
          category: 'Lifestyle',
          price: 90,
          releaseYear: 1969
        }
      ]
    },
    puma: {
      name: 'Puma',

      sizeChart: {
        US: [6, 6.5, 7, 7.5, 8, 8.5, 9, 9.5, 10, 10.5, 11, 11.5, 12, 12.5, 13],
        EU: [38, 38.5, 39, 40, 40.5, 41, 42, 42.5, 43, 44, 44.5, 45, 46, 46.5, 47]
      },
      models: [
        {
          name: 'Suede Classic',
          description: 'Timeless lifestyle sneaker with suede upper',
          category: 'Lifestyle',
          price: 70,
          releaseYear: 1968
        },
        {
          name: 'RS-X',
          description: 'Chunky lifestyle shoe with bold design',
          category: 'Lifestyle',
          price: 110,
          releaseYear: 2018
        },
        {
          name: 'Speedcat',
          description: 'Iconic motorsport-inspired shoe',
          category: 'Motorsport',
          price: 90,
          releaseYear: 1998
        }
      ]
    },
    newBalance: {
      name: 'New Balance',

      sizeChart: {
        US: [6, 6.5, 7, 7.5, 8, 8.5, 9, 9.5, 10, 10.5, 11, 11.5, 12, 12.5, 13],
        EU: [39, 39.5, 40, 40.5, 41.5, 42, 42.5, 43, 44, 44.5, 45, 45.5, 46.5, 47, 47.5]
      },
      models: [
        {
          name: '990',
          description: 'Premium running shoe made in USA',
          category: 'Running',
          price: 185,
          releaseYear: 1982
        },
        {
          name: '574',
          description: 'Classic lifestyle sneaker with retro design',
          category: 'Lifestyle',
          price: 80,
          releaseYear: 1988
        },
        {
          name: '327',
          description: 'Modern lifestyle shoe with vintage inspiration',
          category: 'Lifestyle',
          price: 100,
          releaseYear: 2020
        }
      ]
    }
  }
};