# 📦 Projeto: Entendimento de Cache em APIs

Este projeto foi desenvolvido com o objetivo de entender, na prática, o
impacto do uso de cache em APIs --- especialmente em cenários com grande
volume de dados.

## 🧠 Aprendizados

Durante o desenvolvimento, ficou claro que o uso de cache **não é apenas
sobre reduzir o tempo de resposta**, mas principalmente sobre:

-   Reduzir a carga no banco de dados\
-   Evitar múltiplas queries desnecessárias\
-   Melhorar a escalabilidade da aplicação

### 🔍 Experimento realizado

-   Consulta sem paginação retornando \~110k registros
-   Tempo sem cache: **\~40 segundos**
-   Tempo com cache: **\~22 segundos**

Inicialmente, a expectativa era que o cache tornasse a resposta
praticamente instantânea.\
No entanto, o principal ganho observado foi outro:

> O cache reduziu drasticamente a quantidade de queries feitas no banco.

### 📊 Cenário comparativo

  Situação    Requisições API   Queries no banco
  ----------- ----------------- ------------------
  Sem cache   1000              1000
  Com cache   1000              1

Ou seja:

-   1 requisição ao banco\
-   999 respostas vindas do cache

Isso reduz significativamente a sobrecarga no MongoDB e melhora a
eficiência do sistema.

------------------------------------------------------------------------

## ⚙️ Pré-requisitos

-   MongoDB instalado (ex: MongoDB Compass)

------------------------------------------------------------------------

## 🗄️ Configuração do Banco

``` env
MONGO_URL_STRING=mongodb://localhost:27017/
MONGO_DB_NAME=CACHE
```

Criar collection:

    Products

------------------------------------------------------------------------

## 📁 Importação de Dados

Arquivo disponível no repositório:

    products_100k.json

Importe para a collection `Products`.

------------------------------------------------------------------------

## 🚀 Como executar

``` env
PORT=3000
```

### Instalar dependências

``` bash
npm install
```

### Iniciar API

``` bash
npm start
```

------------------------------------------------------------------------

## 💡 Melhorias futuras

-   Paginação
-   Invalidação de cache
-   Uso de Redis
-   Métricas de performance
