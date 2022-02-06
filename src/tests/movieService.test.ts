import '@testing-library/jest-dom';
import moviesService from '../services/movies';

describe('Tests the API call', () => {
  test('Gets correct response for valid Search', async () => {
    const response = await moviesService('The shawshank redemption');

    expect(response?.[0].Title).toBe('The Shawshank Redemption');
    expect(response?.[0].imdbID).toBe('tt0111161');
  });

  test('Return undefined it no match is found', async () => {
    const response = await moviesService('there is no movie by this title');
    expect(response).toBe(undefined);
  });
});
