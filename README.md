# Administrador de clientes con Tailwing
- Instalar Tailwond:
~~~
npm i autoprefixer postcss tailwindcss
~~~
- Crear el archivo:
~~~
npx tailwindcss init -p
~~~
- Agregar al archivo tailwind.config.js la linea:
~~~
purge: ["index.html", "./src/**/*.jsx"],
~~~
- En el index.css principal:
~~~
@tailwind base;
@tailwind components;
@tailwind utilities;
~~~