

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

5. Funcionamento das rotas
```js
Route.get("/", ({ request }) => {
    return "...page"
})

Route.get("/register", () => {
    return "...formulário para clientes fazerem novos perfis"
})
```

6. Criando um controller 

```js
adonis make:controller PageControler
```




