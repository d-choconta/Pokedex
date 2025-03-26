# Proyecto Pokédex en React

¡Bienvenido a la Pokédex! 📖🔍  

Esta aplicación te permite explorar información detallada sobre los Pokémon, incluyendo:  

✅ Movimientos  
✅ Formas alternativas  
✅ Especie  
✅ Ubicaciones  
✅ Evoluciones  

Desarrollada con React, TypeScript y Vite para una experiencia rápida y responsiva.  

---

## 🚀 Tecnologías utilizadas  

| Tecnología       | Descripción                              |
|-----------------|------------------------------------------|
| ⚛ React + Vite | Framework para la interfaz              |
| 🟦 TypeScript   | Tipado estático para mayor seguridad    |
| 🎨 CSS Puro | Estilos modernos y responsivos        |
| 🔗 PokeAPI| API para obtener datos de los Pokémon |
|  ⚛GraphQl| Lenguaje de consulta para APis,obtiene los datos necesarios |
---

## 📦 Instalación y ejecución  

Sigue estos pasos para ejecutar la Pokédex en tu máquina:  
### 🔹 Requisitos previos
- Como prerequisito asegurate de tener instalado Node.js.
### 🛠 *Pasos de instalación

1. Descargar el repositorio:  
```sh
git clone https://github.com/d-choconta/Pokedex
2. Ingresar a la ubicacion de la carpeta del proyecto.
3. Corre el comando **cd pokedex-app ** en la terminal de Visual Studio Code.
4. Instala las dependencias *npm install*. 
5. Instala Apollo Client y GraphQL *npm install @apollo/client graphql*
6. Inicia el servidor de desarrollo *npm run dev*
7. Al ejecutar el proyecto,apareceran 2 links en la terminal:
🔹 Localhost: Para acceder desde el ordenador.
🔹 Red: Para acceder desde un dispositivo móvil (contiene la IP de tu red).

⚠ Nota: Para acceder desde tu celular, asegúrate de que tanto el computador como el dispositivo estén conectados a la misma red WiFi.

# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type-aware lint rules:

js
export default tseslint.config({
  extends: [
    // Remove ...tseslint.configs.recommended and replace with this
    ...tseslint.configs.recommendedTypeChecked,
    // Alternatively, use this for stricter rules
    ...tseslint.configs.strictTypeChecked,
    // Optionally, add this for stylistic rules
    ...tseslint.configs.stylisticTypeChecked,
  ],
  languageOptions: {
    // other options...
    parserOptions: {
      project: ['./tsconfig.node.json', './tsconfig.app.json'],
      tsconfigRootDir: import.meta.dirname,
    },
  },
})


You can also install [eslint-plugin-react-x](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-x) and [eslint-plugin-react-dom](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-dom) for React-specific lint rules:

js
// eslint.config.js
import reactX from 'eslint-plugin-react-x'
import reactDom from 'eslint-plugin-react-dom'

export default tseslint.config({
  plugins: {
    // Add the react-x and react-dom plugins
    'react-x': reactX,
    'react-dom': reactDom,
  },
  rules: {
    // other rules...
    // Enable its recommended typescript rules
    ...reactX.configs['recommended-typescript'].rules,
    ...reactDom.configs.recommended.rules,
  },
})

