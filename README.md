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
