import SanityClient from '@sanity/client';

export default SanityClient({
  projectId: '57644kxy',
  dataset: 'production',
  useCdn: process.env.NODE_ENV === 'production' ? true : false
});
