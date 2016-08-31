var express = require('express');
var router = express.Router();



router.post('/', function(req, res) {
  var sampleFile;

  // console.log(req.files)

  if(!req.files) {
    res.send('No files')
    return;
  }

  sampleFile = req.files.proofFile

  sampleFile.mv(sampleFile.name, function(err) {
    if(err) {
      res.status(500).send(err)
    } else {
      res.send('success')
    }
  })
})

router.get('/', function(req, res){
  res.send('get upload')
})

module.exports = router;
