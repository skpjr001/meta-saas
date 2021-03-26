// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
const urlMetadata = require('url-metadata');
const inspector = require('url-inspector');

export default (req, res) => {
  urlMetadata(url).then(
  function (metadata) { // success handler
    console.log(metadata)
    res.status(200).json({ Data: metadata})
  },
  function (error) { // failure handler
    console.log(error)
    res.status(200).json({ Error: error})
  })
  //res.status(200).json({ name: 'John Doe'})
}


