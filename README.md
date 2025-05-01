# Code Template Hub - Default Templates

This repository contains a collection of default templates for use with the [Code Template Hub](https://marketplace.visualstudio.com/items?itemName=johnnyp.codetemplatehub) VS Code extension.

## About Code Template Hub

Code Template Hub is a powerful VS Code extension that allows you to create files from templates stored in git repositories. Using the dot.js templating engine, you can create sophisticated templates with dynamic content based on user input and predefined variables.

Features:
- Store templates in git repositories for version control
- Use dot.js for powerful template rendering
- Configure custom parameters for templates
- Include author information automatically
- Organize templates by category

## Available Templates

This repository contains templates for:

- **C**: Modules with implementation and header files
- **C++**: Classes with implementation and header files
- **Python**: Scripts, modules, and package structures
- **C#**: Classes and interfaces
- **Web**: HTML pages, React components, and CSS modules
- **Documentation**: README and Markdown files
- **Configuration**: JSON and YAML configuration files

## Installation

1. Install the [Code Template Hub](https://marketplace.visualstudio.com/items?itemName=johnnyp.codetemplatehub) extension from the VS Code marketplace
2. Add this repository to your extension settings:

```json
"codeTemplateHub.repositories": [
  {
    "url": "https://github.com/yourusername/code-template-hub-templates.git",
    "name": "Default"
  }
]
```

## Usage

1. Open the Command Palette (Ctrl+Shift+P / Cmd+Shift+P)
2. Run "Code Template Hub: Create Files from Template"
3. Select a template from the list
4. Fill in the required parameters
5. Files will be created based on your settings

Alternatively, use the Code Template Hub sidebar view to browse and select templates.

## Template Structure

Templates are defined in the `templates.json` file and organized by category. Each template specifies:

- Name and description
- Category and icon
- Files to create
- Parameters to collect from the user

## Creating Your Own Templates

You can use these templates as a starting point for creating your own. Learn more about creating templates in the [Code Template Hub documentation](https://marketplace.visualstudio.com/items?itemName=johnnyp.codetemplatehub).

## Contributing

Contributions to this template repository are welcome! If you have useful templates to add:

1. Fork this repository
2. Add your templates
3. Submit a pull request

## License

This project is licensed under the MIT License - see the LICENSE file for details.
