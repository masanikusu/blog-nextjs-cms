import { createClient } from 'microcms-js-sdk'

export const client = createClient({
  serviceDomain: 'energy-passion',
  apiKey: process.env.API_KEY,
});