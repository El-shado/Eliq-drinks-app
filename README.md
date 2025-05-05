<<<<<<< HEAD
# Eliq-drinks-app
Your home assignment is to write a simple drinks app. It has two main screens. The first screen should show the list of drinks with the image and name of the drink. You can fetch the data from: https://www.thecocktaildb.com/api/json/v1/1/filter.php?a=Alcoholic

The second screen is a ‘details’ page explaining the drink recipe. It includes: An image with name, ingredients and list of instructions in different languages which the API supports. You can fetch the data from: https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i={The-id-of-drink}

**Note**: Develop this project in WLA (White-Label App) approach. A WLA drinks app which could be branded and configured by a config .json file. Think of this config .json object as an instruction which tells the app what/where/how to populate the UI elements. Think like you are developing a WL app template.

# Design and Architecture
Please use Angular as your project framework. Also feel free to use your favorite open source libraries. Be creative with the design, you are free to decide how to create the UI and UX.

# Delivery
In this fork, delete this content from the current README.md and instead document your project and explain how UI elements can be managed/altered through the Json object - this is also a good way to share thoughts on your design decisions and trade-offs you made.

Additionally, deploy the final compiled version of the app to github pages and provide the URL to it.

Good luck!
=======
# Eliq Drinks App

Eliq Drinks App is a white-label Angular application designed to showcase a list of drinks and their details. The app is built with flexibility in mind, allowing it to be branded and configured through a JSON configuration file. This approach makes it easy to adapt the app for different clients or use cases.

## Managing UI Elements Through `config.json`

The `config.json` file serves as the central configuration point for customizing the app's behavior and appearance. This file allows you to dynamically manage UI elements without modifying the codebase. Below are the key properties and their purposes:

- **appTitle**: Sets the app's title dynamically, which is displayed in the header and browser tab.
- **themeColor**: Defines the primary theme color for the app, affecting the overall look and feel.
- **showLanguages**: Specifies the list of supported languages for displaying instructions.
- **apiBaseUrl**: Configures the base URL for API calls.

### Example `config.json`

```json
{
  "appTitle": "Eliq Drinks",
  "themeColor": "#ff6f61",
  "showLanguages": ["en", "es", "de", "fr", "it"],
  "apiBaseUrl": "https://api.example.com"
}
```

### How to Use `config.json`

1. Open the `assets/config/config.json` file.
2. Update the properties as needed to reflect your branding and requirements.
3. Save the file and refresh the app to see the changes.

### Design Decisions and Trade-offs

- **White-Label Architecture**: The app is designed to be easily customizable for different clients. This decision was made to reduce development time for new projects while maintaining a consistent codebase.
- **JSON Configuration**: Using a JSON file for configuration allows non-developers to make changes without touching the code, improving accessibility and reducing the risk of errors.
- **Trade-offs**: While the JSON configuration provides flexibility, it adds a layer of complexity in ensuring that all UI elements are dynamically updated based on the file. This requires thorough testing to avoid inconsistencies.

## Deployment

The final compiled version of the app has been deployed to GitHub Pages. You can access it at the following URL:

[https://your-github-username.github.io/eliq-drinks-app](https://your-github-username.github.io/eliq-drinks-app)

## How to Run Locally

1. Clone the repository:
   ```bash
   git clone https://github.com/GetEliq/Eliq-drinks-app-Chadi.git
   ```
2. Navigate to the project directory:
   ```bash
   cd eliq-drinks-app
   ```
3. Install dependencies:
   ```bash
   npm install
   ```
4. Start the development server:
   ```bash
   npm start
   ```
5. Open your browser and navigate to `http://localhost:4200`.

## Testing

To run the unit tests:

```bash
npm test
```


>>>>>>> ce8dfe8 (Initial commit)
