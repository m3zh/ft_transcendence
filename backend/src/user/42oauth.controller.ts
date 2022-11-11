// export class get42Url = (from: string) => {
//   const rootUrl = 'https://api.intra.42.fr/oauth2/'; 
  
//   const options = {
//     redirect_uri: process.env.REDIRECT_URI as string,
//     client_id: process.env.CLIENT_ID as string,
//     access_type: 'offline',
//     response_type: 'code',
//     prompt: 'consent',
//     scope: [
//       'https://api.intra.42.fr/oauth2/v2/me',
//     ].join(' '),
//     state: from,
//   };

//   const qs = new URLSearchParams(options);

//   return `${rootUrl}?${qs.toString()}`;
// };










