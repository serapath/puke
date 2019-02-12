const fs = require('fs')
const path = require('path')
const mkdirp = require('mkdirp')

module.exports = puke

function puke (name, structure = {}) {
  if (!name || typeof name !== 'string') throw new Error('`name` is not a string')
  const root = path.join(process.cwd(), name)
  mkdirp(root, err => {
    if (err) console.error(err)
    else fs.readdir(root, (err, files) => {
      if (err) throw err
      else if (files.length) console.error(`already exists:\n${root}`)
      else build(root, structure, () => {})
    })
  })
}

function build (root, structure, done) {
  const items = Object.keys(structure)
    .map(name => [path.join(root, name), structure[name]])
  const loop = err => err ? done(err) : items.length && step(items.pop(), loop)
  loop()
}

function step ([path, content], next) {
  if (typeof content === 'string') {
    fs.writeFile(path, content, next)
  } else {
    mkdirp(path, err => err ? next(err) : build(path, content, next))
  }
}
