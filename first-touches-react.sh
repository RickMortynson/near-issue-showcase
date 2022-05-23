!#/bin/bash

yarn add --dev @types/node @typescript-eslint/eslint-plugin autoprefixer eslint eslint-config-prettier \
  eslint-plugin-import eslint-plugin-prettier eslint-plugin-react eslint-plugin-react-hooks \
  prettier-plugin-tailwind husky tailwindcss prettier postcss 

yarn add @heroicons/react

echo "@tailwind base;\n@tailwind utilities;\n@tailwind components;\n\n" | cat - ./src/index.css > temp && mv temp src/index.css
