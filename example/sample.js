var fs = require('fs');
var sftp = require('ftp-node');

var pem = fs.readFileSync('path/to/file.key');

var options = {
  host: '192.168.0.0',
  port: '22',
  username: user,
  password: password
};

ftp.upload(options, 'path/to/remote/file', 'path/to/local/file');
