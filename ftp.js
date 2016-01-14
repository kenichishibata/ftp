module.exports = function ftpUpload(credentials,pathToRemoteFile,pathToLocalFile){
  var Client = require('ftp');
  var options = {
      host: credentials.host,
      port: credentials.port,
      username: credentials.username,
      password: credentials.password
    };
  var c = new Client();

  c.on('ready', function() {
    c.mkdir(remoteDirectory, true, function(err) {
    if (err) throw err;
    else{
      c.put(localDirectory+localFile,remoteDirectory+remoteFile, function(err) {
        if (err){throw err;}
        console.log('uploaded file to:'+pathToRemoteFile);
        c.end();
      });
    }
  });
});
c.on('error',function(err){
  console.log(err);
});
c.connect(connectionProperties);

};
