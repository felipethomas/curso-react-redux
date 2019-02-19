# curso-react-redux
Curso sobre React e Redux com Leonardo Leitão pela Udemy

Ferramentas utilzadas no curso
- MongoDB
- Node
- VS Code

Instalação do MongoDB
- baixar pacote tgz e descompactar onde preferir
- sudo nano /etc/environment
- acrescentar ao final do PATH :#caminho-do-bin# (ex:/opt/mongodb/bin)
- source /etc/environment
- sudo mkdir /data
- sudo mkdir /data/db
- sudo chown 01308900490:01308900490 -R /data
- mongod

Instalação do Node
- baixar pacote tgz LTS e descompactar onde preferir
- sudo nano /etc/environment
- acrescentar ao final do PATH :#caminho-do-bin# (ex:/opt/node/bin)
- source /etc/environment
- node -v

Instalação do VS Code
- instalar com pacote .deb
- plugins:
  - Atom One Dark Theme (akamud.vscode-theme-onedark)
  - Debugger for Chrome (msjsdiag.debugger-for-chrome)
  - Path Intellisense (christian-kohler.path-intellisense)
- User Settings:
  - {
     "editor.formatOnSave": true,
     "editor.minimap.enabled": false,
     "editor.fontSize": 15,
     "workbench.editor.enablePreview": false,
     "workbench.colorTheme": "Atom One Dark",
     "workbench.colorCustomizations": {
          "editor.background": "#1E1E1E",
          "tab.activeBackground": "#1E1E1E"
     },
     "editor.fontFamily": "'Noto Mono', 'Courier New', monospace"
    }

Configuração do projeto "exercicios_webpack"
- cd exercicios_webpack
- npm i --save-dev webpack@1.14.0 webpack-dev-server@1.16.2 babel-core@6.22.1 babel-loader@6.2.10 babel-preset-es2015@6.22.0 babel-plugin-transform-object-rest-spread@6.22.0 react@15.4.2 babel-preset-react@6.22.0 extract-text-webpack-plugin@1.0.1 style-loader@0.13.1 css-loader@0.26.1
- ./node_modules/.bin/webpack
- npm run dev
- http://localhost:8080

Configuração do projeto "exercicios_react"
- cd exercicios_react
- npm i --save-dev react@15.4.2 react-dom@15.4.2 babel-core@6.22.1 babel-loader@6.2.10 babel-preset-es2015@6.22.0 babel-preset-react@6.22.0 webpack@1.14.0 webpack-dev-server@1.16.2 babel-plugin-transform-object-rest-spread@6.22.0
- npm run dev
- http://localhost:8080

Configuração do projeto "todo-app" parte "backend"
- cd backend
- npm i --save -E body-parser@1.18.3 express@4.16.4 mongoose@5.4.13 node-restful@0.2.5 pm2@3.3.0 nodemon@1.18.10
- npm i --save-dev -E nodemon@1.18.10
- mongod
- npm run production
- ./node_modules/.bin/pm2 monit

Configuração do projeto "todo-app" parte "frontend"
- cd frontend
- npm i --save-dev webpack@1.14.0 webpack-dev-server@1.16.2 babel-core@6.22.1 babel-loader@6.2.10 babel-plugin-react-html-attrs@2.0.0 babel-plugin-transform-object-rest-spread@6.22.0 babel-preset-es2015@6.22.0 babel-preset-react@6.22.0 extract-text-webpack-plugin@1.0.1 css-loader@0.26.1 style-loader@0.13.1 file-loader@0.9.0 bootstrap@3.4.0 font-awesome@4.7.0 react@15.4.2 react-dom@15.4.2 react-router@3.0.2 axios@0.15.3
- npm run dev
- http://localhost:8080

Configuração do projeto "exercicios_react_redux"
- cd exercicios_react_redux
- npm i
- npm run dev
- http://localhost:8080

Configuração do projeto "todo-app-redux"
- cd frontend
- npm i --save-dev redux@3.6.0 react-redux@5.0.2 redux-promise@0.5.3 redux-multi@0.1.12 redux-thunk@2.2.0
- npm run dev
- http://localhost:8080
