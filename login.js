const axios = require('axios');
const http = require('http');

const REST_API_KEY = '7498f3c98f3527e975166e7eb3e56dd2';
const REDIRECT_URI = 'https://lively-plant-0a998e000.3.azurestaticapps.net';
const PORT = 8080;

const server = http.createServer((req, res) => {
  res.writeHead(302, {
    'Location': authorizeUrl
  });
  res.end();
});

// 로그인 요청
const authorizeUrl = `https://kauth.kakao.com/oauth/authorize?client_id=${REST_API_KEY}&redirect_uri=${REDIRECT_URI}&response_type=code`;

axios.get(authorizeUrl)
  .then(response => {
    console.log(response.data);
  })
  .catch(error => {
    console.error(error);
  });

server.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});
