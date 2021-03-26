// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
//const urlMetadata = require('url-metadata');

export default (req, res) => {
  // const url ="https://figma.com"
  // urlMetadata(url).then(
  // function (metadata) { // success handler
  //   console.log(metadata)
  //   res.status(200).json({ Data: metadata})
  // },
  // function (error) { // failure handler
  //   console.log(error)
  //   res.status(200).json({ Error: error})
  // })
  res.status(200).json({ name: 'John Doe'})
}


