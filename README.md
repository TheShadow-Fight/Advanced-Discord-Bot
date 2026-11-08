# Discord Bot

A simple Discord bot built with **Node.js** and **discord.js v14**.

## Requirements

- [Node.js](https://nodejs.org/)
- A Discord account
- A Discord Bot Token

## Installation

1. Download or clone this repository as a ZIP file.
2. Open the downloaded ZIP file.
3. Click **Extract All**.
4. Open the extracted folder.
5. If you see another folder inside, open it and check that it contains the project files.
6. Delete the first (outer) folder if the inner folder contains all the project files.
7. Open **Visual Studio Code**.
8. Click **File → Open Folder**.
9. Select the second (inner) project folder.
10. Open the VS Code terminal (`CTRL + ~`).
11. Install dependencies:

```bash
npm install
```

## Configuration

1. Open `index.js`.
2. Find:

```js
const TOKEN = 'YOUR_BOT_TOKEN';
```

3. Replace `YOUR_BOT_TOKEN` with your bot token.

**Never share your bot token with anyone!**

## Starting the Bot

Run:

```bash
node index.js
```

If everything works, you should see:

```text
YourBot#0000 is online!
```

## Commands

| Command  | Description        |
| -------- | ------------------ |
| `!myusername`  | Replies with your Name! |
| `!ban` | HE IS GONNA BAN YOU!   |
| `!question` | Replies with a quaestion! |

## Technologies

- Node.js
- discord.js v14

## License

Copyright (c) 2026 TheDeveloperOfShadows.

All rights reserved.

Unauthorized copying, modification, distribution, or reuse of this project's source code is prohibited without the author's permission.
