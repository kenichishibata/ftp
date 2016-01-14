
# ftp
A semi-nonsense ftp client module for nodejs
# Why?
Because i already made sftp-node and I'm too lazy typing code and ftp by mscdex(brian white) is amazing!

# functions
## upload(credentials,remoteFilePath,localFilePath)
Uploads the file
```
var ftp = require('ftp-node');


var options = {
  host: 192.168.0.0,
  port: 22,
  username: user,
  password: pass
};

ftp.upload(options, 'path/to/remote/file', 'path/to/local/file');

```
That's it! 3 lines of code then it uploads your file!

No defaults! defaults sucks and makes it hard to debug

Now go and tell your boss that you are awesome!

##TODO
add other functions
add async?
