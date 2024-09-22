// See documentation: https://github.com/chihab/dotenv-run

// Define the type of the environment variables.
declare interface Env {
  readonly NODE_ENV: string;
  readonly NG_APP_RECAPTCHA_SITE_KEY: string;
  readonly NG_APP_FIREBASE_API_KEY: string;
  readonly NG_APP_FIREBASE_AUTH_DOMAIN: string;
  readonly NG_APP_FIREBASE_PROJECT_ID: string;
  readonly NG_APP_FIREBASE_STORAGE_BUCKET: string;
  readonly NG_APP_FIREBASE_MESSAGING_SENDER_ID: string;
  readonly NG_APP_FIREBASE_APP_ID: string;
}

// Use import.meta.env.YOUR_ENV_VAR in your code.
declare interface ImportMeta {
  readonly env: Env;
}
