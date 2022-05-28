const BASE_URL = 'https://pixabay.com/api/';
const KEY = '6444317-c61155bd44e68957af67120b1';

export const fetchPixabay = (query, page, perPage) => {
  const url = `${BASE_URL}?q=${query}&page=${page}&key=${KEY}&image_type=photo&orientation=horizontal&per_page=${perPage}`;

  return fetch(url).then(res => {
    if (res.ok) {
      return res.json();
    }
    return Promise.reject(new Error(`${query}`));
  });
};
