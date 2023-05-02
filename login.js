const axios = require('axios');
const http = require('http');

const REST_API_KEY = '7498f3c98f3527e975166e7eb3e56dd2';
const REDIRECT_URI = 'https://lively-plant-0a998e000.3.azurestaticapps.net';
const PORT = 8080;
let AUTHORIZE_CODE = null;

// 로그인 요청
const authorizeUrl = `https://kauth.kakao.com/oauth/authorize?client_id=${REST_API_KEY}&redirect_uri=${REDIRECT_URI}&response_type=code`;

const server = http.createServer((req, res) => {
  res.writeHead(302, {
    'Location': authorizeUrl
  });
  res.end();
});

server.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});

// 토큰 받아오기
axios.post('https://kauth.kakao.com/oauth/token', null, {
  params: {
    grant_type: 'authorization_code',
    client_id: REST_API_KEY,
    redirect_uri: REDIRECT_URI,
    code: AUTHORIZE_CODE,
  },
  headers: {
    'Content-Type': 'application/x-www-form-urlencoded',
  },
}).then((response) => {
  console.log(response.data);
}).catch((error) => {
  console.error(error);
});
