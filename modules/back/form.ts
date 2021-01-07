const formidable = require('formidable')

interface IForm {
  fields: any,
  files: any
}

export default function (req): Promise<IForm> {
  return new Promise((resolve, reject) => {
    console.log('form parse start')
    const form = formidable({ multiples: true })
    const files = {}
    form.onPart = function(part) {
      if (!part.filename) {
        form.handlePart(part)
        return
      }
      const chunks = []
      part.on('data', function(data) {
        chunks.push(data)
      })
      part.on('end', function() {
        console.log('end read file', part.filename)
        files[part.filename] = Buffer.concat(chunks)
      })
      part.on('error', function(err) {
        console.log('read file err', err)
        reject(err)
      })
    }
    form.parse(req, function (err, fields) {
      console.log('form parse end err', err)
      if (err) return reject(err)
      resolve({ fields, files })
    })
  })
}
