// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false,
  timestampsInSnapshots: true,
  firebase: {
    apiKey: 'AIzaSyC4GyQFpcEXUiowpLz4wjacyd-jtexoWn0',
    authDomain: 'fitness-tracker-ng-7.firebaseapp.com',
    databaseURL: 'https://fitness-tracker-ng-7.firebaseio.com',
    projectId: 'fitness-tracker-ng-7',
    storageBucket: '',
    messagingSenderId: '171829595782'
  }
};
