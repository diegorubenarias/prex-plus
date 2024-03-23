// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  SERVER_API: '/assets/mockData/movies.json',
  DEFAULT_LOGO: '/assets/images/logo.png',
  APP_LOGOS: [
    '/assets/images/logo.png',
    '/assets/images/logo2.jpg',
    '/assets/images/logo3.jpg',
    '/assets/images/logo4.jpg',
    '/assets/images/logo5.jpg'
 ]
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
