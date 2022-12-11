## Getting started
```js
const ExzectBots = require("@exzect/api")
const api = new ExzectBots({ token: ""}) // create instance
```

## Example
```js
const ExzectBots = require("@exzect/api")

async function main() {
    const api = new ExzectBots({ token: "" })
    const me = await api.getMe() // Get my current profile
    console.log(me)
}
```

## Methods

#### Model "User"
__instance__.getMe() - get current account.

__instance__.getUser(__id__) - get user account from TopCord website.

__instance__.getUserBots(__id__) - get user bot list.

__instance__.getUserReports(__id__) - get list of user reports.

__instance__.getUserComments(__id__) - get list of comments which user with __id__ posted.

#### Model "Bot"

__instance__.getBot(__id__) - get bot from TopCord by ID.

__instance__.getBotOwner(__id__) - get owner of bot.

__instance__.getBotComments(__id__) - get all comments of bot.

__instance__.getBotReports(__id__) - get all reports of bot.


