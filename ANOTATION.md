Module nestjs: Arquivo que une vários outros em um só

graphql:

query = quando quer buscar dado
mutation = criar, alterar, deletar um dado

schema first 

code first


Kafka:
É um message broker
Tem a responsabilidade de manter um ponto central
Ex: 
- Quando tiver uma compra de um produto em purchases, liberar acesso a algum curso dentro de classroom.
Opções:
	- HTTP - Fazer uma chamda http para dentro de classroom:
		- Gera acoplamento pois pode ser que o serviço esteja fora do ar.
		- Possui alta latência.
		- Cria dependência entre serviços.
	- gRPC - Google Remote Procedure Call:
		- Tecnologia que usa o protocólo HTTP/2 da google
	- Comunicação assíncrona:
		- Toda vez que ocorrer algo, envia uma mensagem (Kafka por exemplo) e o outro serviço busca as mensagens que estão lá dentro.
		- Pub/Sub (Publish/Subscribe)
		- Da pra configurar o tempo que a mensagem fica viva (1 dia, 1 mês, pra sempre...)
		- Suporta multiplos serviços ouvindo a mesma fila
		- Mensagem após ser consumida não é deletada (Kafka)
		- Particionamento 

Topics = como se fossem as tabelas do Kafka
Consumers = quais aplicações estão consumindo o Kafka

Não é possível enviar uma mensagem sem ter o tópico criado. Então o recomendado é criar na mão o tópico antes

Apollo federation:

# Back-end:

Apollo Federation Gateway (http://localhost:3332/) PROXY

Purchases (http://localhost:3333/graphql) (http://purchases.rocketseat.com.br)
Classroom (http://localhost:3334/graphql) (http://classroom.rocketseat.com.br)

# Front-end
Precisaria saber todas as URL`s dos microserviços.

Apollo federation: Cria um gateway.

# Sem gateway
```
# http://localhost:3333/graphql
query {
	me {
		purchases {
			id
		}
	}
}
```
```
# http://localhost:3334/graphql
query {
	me {
		enrollments {
			id
		}
	}
}
```

# Com gateway

```
# http://localhost:3332/graphql
query {
	me {
		purchases {
			id
		}

		enrollments {
			id
		}
	}
}
```