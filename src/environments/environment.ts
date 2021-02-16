// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  client_id: 'C63212258fc88c2ecf1f4aa4e27c1917c16a55d1347c5291d73e48731d076b71d',
  client_secret: '9b89b7fbded81dd4fb4d04981636a16af909b0f8351d6a346f83c88dea35d7e4',
  redirect_uri: 'http://localhost:4200/rooms',
  scope: 'spark:all spark:kms'
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
