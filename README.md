

# Aplicação angelusBear study Adonis.js

1. Linha de comando para ajudá-lo a instalar o AdonisJs

```js
adonis install --global @adonisjs/cli
```

2. Ajuda

```js
adonis --help
```

3. criando novo projeto

```js
adonis new <name-project>
```

4. Executando em dev 

```js
adonis serve --dev
```

5. Criando um controller 

```js
adonis make:controller PageControler
```

6. Funcionamento das rotas

```js
Route.get('/', ({ request }) => {
    return `
    <html>
      <head>
        <link rel="stylesheet" href="/style.css" />
      </head>
      <body>
        <section>
          <div class="logo"></div>
          <div class="title"></div>
          <div class="subtitle">
            <p>AdonisJs é ...</p>
          </div>
        </section>
      </body>
    </html>
    `
})

Route.get("/register", () => {
    return "...formulário para clientes fazerem novos perfis"
})
```

Obs.: Embora essa abordagem funcione - para casos simples - ela não é bem dimensionada. Podemos querer usar parte ou todo o HTML para responder a outras rotas. Podemos querer compor respostas a partir de muitos arquivos de modelo ou isolar um comportamento de apresentação específico.


7. Criar um arquivo de modelo separado e usá-lo para exibir uma nova página inicial.

```js
adonis make:view page/home
```

- {root}/resources/views/page/home.edge
- Registrar a View Provider (É preciso adicionar o ViewProvider ao aplicativo antes de podermos acessar diretamente a rederização de nossas view o em nossas rotas.) Em /start > app.js
```js
const providers = [
  "@adonisjs/framework/providers/AppProvider",
  "@adonisjs/framework/providers/ViewProvider",
]
```

- Em geral o ViewProvider adiciona uma nova chave ao objeto que cada rota obtém.  Podemos usar essa nova chave de exibição para renderizar arquivos de exibição de dentro dos manipuladores de rota.


```js
Route.get('/', ({ view  }) => {
    return view.render('page/home')
})

```

