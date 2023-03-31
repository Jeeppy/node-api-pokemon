# Pokémon API

## Requirements

  * NodeJS >= **18.7.0** with this packages :
    * [bcrypt](https://github.com/kelektiv/node.bcrypt.js)
    * [body-parser](https://github.com/expressjs/body-parser)
    * [express](https://expressjs.com/fr/)
    * [jsonwebtoken](https://github.com/auth0/node-jsonwebtoken)
    * [mariadb](https://github.com/mariadb-corporation/mariadb-connector-nodejs)
    * [sequelize](https://sequelize.org/)
    * [serve-favicon](https://expressjs.com/en/resources/middleware/serve-favicon.html)
    * [nodemon](https://nodemon.io/)
  * MariaDB >= **10.4**

## Endpoints

`[ GET ] /api/pokemons`

Get list of all pokemon.

Params :
  * limit to limit a number of result (default: 5)
  * name to filter pokemon by name

`[ POST ] /api/pokemons`

Create a new Pokemon

`[ GET ] /api/pokemons/id`

Get a specific pokemon

`[ PUT ] /api/pokemons/id`

Modify a pokemon

`[ DELETE ] /api/pokemons/id`

Delete a pokemon

`[ POST ] /api/login`

Login and get token

## Models
 * Pokemon - pokemon data
 * User - user informations

## Requests samples

### Create a pokemon

```
{
	"name" : "Pikachu",
	"hp": 24,
	"cp": 4,
	"picture": "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/010.png",
	"types": ["Insecte", "Poison"]
}
```
### Modify a Pokemon

```
{
	"name": "Chrysacier",
	"hp": 24,
	"cp": 4,
	"picture": "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/010.png",
	"types": ["Insecte","Poison"]
}
```

### Login

```
{
	"username": "pikachu",
	"password": "pikachu"
}
```

## Responses samples

### Get all pokemon

```
{
	"message": "La liste des pokémons a bien été récupérée.",
	"data": [
		{
			"types": [
				"Poison"
			],
			"id": 4,
			"name": "Abo",
			"hp": 16,
			"cp": 4,
			"picture": "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/023.png",
			"created": "2023-03-30T21:27:42.000Z"
		},
		{
			"types": [
				"Insecte",
				"Poison"
			],
			"id": 5,
			"name": "Aspicot",
			"hp": 16,
			"cp": 2,
			"picture": "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/013.png",
			"created": "2023-03-30T21:27:42.000Z"
		}
```

### Get a specific pokemons

```
{
	"message": "Un pokemon a bien été trouvé.",
	"data": {
		"types": [
			"Plante",
			"Poison"
		],
		"id": 1,
		"name": "Bulbizarre",
		"hp": 25,
		"cp": 5,
		"picture": "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/001.png",
		"created": "2023-03-30T21:30:06.000Z"
	}
}
```

### Delete a pokemon

```
{
	"message": "Le pokémon avec l'identifiant n°1 a bien été supprimé.",
	"data": {
		"types": [
			"Plante",
			"Poison"
		],
		"id": 1,
		"name": "Bulbizarre",
		"hp": 25,
		"cp": 5,
		"picture": "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/001.png",
		"created": "2023-03-30T21:34:19.000Z"
	}
}
```

### Update a pokemon

```
{
	"message": "Le pokémon Chrysacier a bien été modifié.",
	"data": {
		"types": [
			"Insecte",
			"Poison"
		],
		"id": 1,
		"name": "Chrysacier",
		"hp": 24,
		"cp": 4,
		"picture": "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/010.png",
		"created": "2023-03-30T21:32:57.000Z"
	}
}
```

### Create a pokemon

```
{
	"message": "Le pokemon Pikachu2 a bien été créé.",
	"data": {
		"types": [
			"Insecte",
			"Poison"
		],
		"id": 13,
		"name": "Pikachu2",
		"hp": 24,
		"cp": 4,
		"picture": "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/010.png",
		"created": "2023-03-30T21:32:18.030Z"
	}
}
```
### Route does exist

```
{
	"message": "Impossible de trouver la ressource demandée ! Vous pouvez essayer une autre URL."
}
```

### Login

```
{
	"message": "L'utilisateur a été connecté avec succès",
	"data": {
		"id": 1,
		"username": "pikachu",
		"password": "$2bW...MjO",
		"createdAt": "2023-03-30T21:27:42.000Z",
		"updatedAt": "2023-03-30T21:27:42.000Z"
	},
	"token": "eyJhb...5w7Co"
}
```

## Source

 * [Simon Dieny](https://www.youtube.com/watch?v=NRxzvpdduvQ)
