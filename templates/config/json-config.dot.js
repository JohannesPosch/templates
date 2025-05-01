{{? data.configType === 'package' }}
{
  "name": "{{=data.filename}}",
  "version": "0.1.0",
  "description": "",
  "main": "index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "keywords": [],
  "author": "{{=data.author.fullName}} <{{=data.author.email}}>",
  "license": "MIT",
  "dependencies": {
  },
  "devDependencies": {
  }
}
{{?? data.configType === 'tsconfig' }}
{
  "compilerOptions": {
    "target": "es2020",
    "module": "commonjs",
    "lib": ["es2020", "dom"],
    "declaration": true,
    "strict": true,
    "noImplicitAny": true,
    "strictNullChecks": true,
    "noImplicitThis": true,
    "alwaysStrict": true,
    "noUnusedLocals": true,
    "noUnusedParameters": true,
    "noImplicitReturns": true,
    "noFallthroughCasesInSwitch": true,
    "moduleResolution": "node",
    "baseUrl": "./",
    "paths": {
      "*": ["node_modules/*"]
    },
    "esModuleInterop": true,
    "experimentalDecorators": true,
    "emitDecoratorMetadata": true,
    "skipLibCheck": true,
    "forceConsistentCasingInFileNames": true,
    "outDir": "./dist"
  },
  "include": ["src/**/*"],
  "exclude": ["node_modules", "**/*.test.ts"]
}
{{?? data.configType === 'eslint' }}
{
  "env": {
    "browser": true,
    "es2021": true,
    "node": true
  },
  "extends": [
    "eslint:recommended"
  ],
  "parserOptions": {
    "ecmaVersion": 12,
    "sourceType": "module"
  },
  "rules": {
    "indent": ["error", 2],
    "linebreak-style": ["error", "unix"],
    "quotes": ["error", "single"],
    "semi": ["error", "always"],
    "no-unused-vars": ["warn"],
    "no-console": ["warn"]
  }
}
{{??}}
{
  // Custom configuration file
  // Created: {{=data.date.toISOString().split('T')[0]}}
  // Author: {{=data.author.fullName}}

  "name": "{{=data.filename}}",
  "version": "1.0.0",
  "description": "Custom configuration file",
  "settings": {
    "enabled": true,
    "logLevel": "info"
  },
  "features": {
    "feature1": true,
    "feature2": false
  }
}
{{?}}
