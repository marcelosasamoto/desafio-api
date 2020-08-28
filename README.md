# desafio-api
Desenvolver aplicação com serviços NODE.JS 10, que recupere informações sobre lojas e produtos cadastrados em back-end REST. 

##### Descrição da API de consumo: https://goanalytics.executeti.com.br/swagger-ui.html 

##### URL Base de consumo: https://goanalytics.executeti.com.br/api 

Caso de uso:
1. Serviço que busca uma listagem de lojas retornadas pelo REST.
    
Para listagem de lojas acesse:
    
    > http://localhost:3100/api/getstores
    
    
    
1. Serviço que busca os produtos de uma loja.
    
    > http://localhost:3100/api/productsInStoreId=Ta0kr2r0bsQYnUdKgP5q
    
    Onde o "Ta0kr2r0bsQYnUdKgP5q" é o identificador da loja.
    
    outro identificadores "nhoY7wclGbTsjUjIDoGN", "qWFXEuiuIECcfoMtwfID".
    
1. Serviço retorne um obj JSON contendo todos os esses dados obtidos internamente através de diferentes serviços: 

    * Numero total de usuários.
    * Numero total de lojas ativas.
    * Numero total de produtos ativos.

    > http://localhost:3100/api/getinfo

    

