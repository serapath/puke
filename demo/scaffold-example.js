module.exports = example

function example (name) {
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
