# Node, Express & MongoDB CRUD Website

## Informatie

Dit is een simpel CRUD project gemaakt mbv Node.js, de server wordt gebouwt mbv node en de express package wordt gebruikt om de server op te zetten binnen de node environment, axios zal gebruikt worden om HTTP requests te maken naar verschillende endpoints, mongoDB zal gebruikt worden voor het opslaan van persistent data. Ejs zal gebruikt worden voor het creeëren van HTML markup maar dan met js code.

## Stappenplan

1. Creeër een package.json file met npm init, voer de benodigde informatie in, voeg alle nodige node packages aan het project toe in de terminal.
2. In de package.json file switch node server.js naar nodemon server.js, dit is nodig om nodemon te gebruiken.
3. Creeër alle nodige folders in de base folder, ik ga werken volgens het MVC patroon dus de folders zullen ook op deze manier ingedeelt zijn.

## Node Packages

- Express (voor het opzetten van de server)
- morgan (voor het loggen van HTTP requests, dit is om te zien of elementen lang duren met laden en dergelijke)
- nodemon (voor het actief houden van de website na aanpassingen, zodat niet elke keer de server herstart moet worden wanneer er aanpassingen zijn)
- ejs (voor het renderen van html markup in js, dit is een enigszins geavanceerde libary dus check de docs goed)
- body-parser (DEPRECATED) (Express heeft vanaf 4.16 hun eigen parser die gebasseerd is op body-parser)
  was: app.use(bodyparser.json()); //utilizes the body-parser package
  nu: app.use(express.json()); //Used to parse JSON bodies

  was: app.use(bodyParser.urlencoded({extended: true}));
  nu: app.use(express.urlencoded()); //Parse URL-encoded bodies

- mongoose (voor het verbinden met mongoDB)
- axios (voor het maken van ajax calls om GET/PUT/POST/DELETE calls te maken)
