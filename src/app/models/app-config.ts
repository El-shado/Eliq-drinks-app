
/**
 * Interface representing the application configuration.
 * This configuration is typically loaded from an external JSON file.
 */
export interface AppConfig {
  /**
   * The title of the application, displayed in the UI.
   */
  appTitle: string;

  /**
   * The primary theme color of the application.
   */
  themeColor: string;

  /**
   * A list of languages supported by the application.
   */
  showLanguages: string[];

  /**
   * The base URL for the application's API.
   */
  apiUrl: string;
}
