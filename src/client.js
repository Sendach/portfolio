import sanityClient from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url';

console.log('id:', process.env.REACT_APP_SANITY_PROJECT_ID)

export const client = sanityClient({
  projectId: 'rh1w6b7r',
  dataset: 'production',
  apiVersion: '2022-02-01',
  useCdn: true,
  token: process.env.REACT_APP_SANITY_TOKEN
});

const builder = imageUrlBuilder(client);

export const urlFor = (source) => builder.image(source);