# Search User README

## Foreword
This is an example of a README. While I had misread and assumed that the written test is to be submitted the same day as the coding test. The application submitted as part of the test is meant to get some data from a site called [randomuser.me] [RandomUser]

## Tech Used

The Search User Application uses these technology below:

- [Twitter Bootstrap] - Great UI boilerplate for modern web apps
- [node.js] - Evented I/O for the backend
- [npm] - Package Manager

## Installation

The app requires [Node.js](https://nodejs.org/) >= 14.0.0 and [npm](npm) >= 5.6.0 to run React properly.

Once the pre-requisites have been fulfilled. Proceed by installing the dependencies and start the server.

```sh
cd search-user
npm i
npm start
```
A browser should open up with the application

## Plugins

The Search User app does not necessarily require a plugin to be manually (or automatically through npm) to be installed. However this section is to let the user know that such libraries are used.

| Other Libraries | README |
| ------ | ------ |
| Bootstrap | [Twitter Bootstrap] |

## Gist of the Application

The application will fetch user data that it got from [randomuser.me] [RandomUser]. It then saves it onto a local variable so data persist. The user can then search for keyword (username, name, email, and registered date) and will project the result onto the table if it finds the query.
It can also search users based on provided gender. For the sake of brevity, the search will be limited to Male and Female.

## License

MIT

**Free Software, Hell Yeah!**

[//]: # (These are reference links used in the body of this note and get stripped out when the markdown processor does its job. There is no need to format nicely because it shouldn't be seen.)

   [node.js]: <http://nodejs.org>
   [Twitter Bootstrap]: <http://twitter.github.com/bootstrap/>
   [RandomUser]: https://randomuser.me/
   [npm]: https://www.npmjs.com/
