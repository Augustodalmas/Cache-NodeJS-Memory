# Projeto para entendimento de cache em APIs

Durante o desenvolvimento do projeto, consegui compreender algo que me foi importante, aplicar cache na aplicação nem sempre será sobre reduzir a velocidade de busca, mas sim, evitar do banco ter muitas requisições.
Tentei aplicar cache sem paginação, trazendo aproximados 110k de dados por vez, a minha consulta de 40s foi para 22s aplicando cache. Em minha cabeça deveria voltar os dados instantaneamente, mas na verdade o cache resolve um problema de requisições de querys no meu banco.
De 1000 requisições que seriam feitas no meu banco eu teria 1000 queries no banco com 110k de dados e aplicando o cache eu consegui fazer 1000 requisições que na verdade foi apenas 1 requisição no meu banco e 999 respostas de cache. Assim diminuindo o fluxo do banco Mongo nesse caso.
