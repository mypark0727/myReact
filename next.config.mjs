/** @type {import('next').NextConfig} */
const nextConfig = {

  // 개발 모드에서 StrictMode가 활성화되면, useEffect의 콜백이 두 번 실행됩니다.
  // 실제 배포 환경에서는 이 추가 호출이 발생하지 않으므로 걱정하지 않아도 됩니다.
  reactStrictMode: false, // 엄격모드 해제 (해제 안하면 브라우저콘솔 2번 호출됨)

  // 리다이렉트 사용시 설정
  // async redirects() {
  //   return [
  //     {
  //       source: "/",
  //       destination: "/menu/sub0",
  //       permanent: true,
  //     },
  //   ];
  // },
};

export default nextConfig;
