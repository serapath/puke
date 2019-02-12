# puke
scaffolds a folder structure from a jsonish description

# example
`npm install puke`
```js
const puke = require('puke')

const name = 'module-foobar'
// in current directory (=== process.cwd())
const foldername = name

puke(foldername, scaffold(name))
// => creates in ./<foldername>/* the directory structure
//    specified in the `scaffold` function below

function scaffold (name) {
  return {
    "node_modules": {
      "level-callerid": {
        "index.js": `

        `,
        "package.json": `

        `
      }
    },
    [`source-${name}`]: {
      "node_modules": {
        "d": {
          "d.js": `

          `,
          "package.json": `

          `
        },
        "e": {
          "node_modules": {
            "d": {
              "d.js": `

              `,
              "package.json": `

              `
            }
          },
          "e.js": `

          `,
          "f.js": `

          `,
          "package.json": `

          `
        }
      },
      "index.js": `

      `
    },
    "a.js": `
    `,
    "b.js": `

    `,
    "c.js": `

    `,
    "package.json": `

    `
  }
}
```
