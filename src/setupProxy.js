// const { createProxyMiddleware } = require("http-proxy-middleware");

// module.exports = function (app) {
//   app.use(
//     "/api",
//     createProxyMiddleware({
//       target: "http://localhost:8080",
//       changeOrigin: true,
//     })
//   );
// };

// 넘어가는 주소 앞에 /api 붙여도 안되고... 저거를 /signin으로 바꿔도 안됩니다..ㅠ.....엉엉
//axios 부분에 http://localhost:8080를 지워도 안됩니다..어ㅜ엉어으엉
