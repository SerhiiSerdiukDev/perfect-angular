// See documentation: https://github.com/chihab/dotenv-run

// Define the type of the environment variables.
declare interface Env {
  readonly NODE_ENV: string;
  // Replace the following with your own environment variables.
  readonly RECAPTCHA_SITE_KEY: string;
}

// Use import.meta.env.YOUR_ENV_VAR in your code.
declare interface ImportMeta {
  readonly env: Env;
}
