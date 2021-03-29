// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
const urlMetadata = require('url-metadata');

export default (req, res) => {
  //const url ="https://figma.com"
  //console.log("Inside API req: ",req.query.url);
  //if(req.query.url=="")res.status(404).json({Error:"Blank Url!!"}).end();
  urlMetadata(req.query.url).then(
  function (metadata) { // success handler
    //console.log("Data: ",metadata)
    res.status(200).json(metadata);
    return;
  },
  function (error) { // failure handler
    //console.log("Error: ",error.code);
    res.status(404).json(error);
    return;
  })
  //res.status(200).json({ name: 'John Doe'})
}


