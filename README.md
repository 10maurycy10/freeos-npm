# freeos-npm

A npm package to print a message to people using non free and open source operating systems.

## features

- Message customized depending on whether the user is on MacOS or Windows.

- Message will only be printed one, so you dont have to worry about spamming the users console.

## usage

```js
let freeos = require('freeos')
freeos()
```

## results

```
C:\Users\MZ\testprog > npm start
This program runs optimally on a free and open source operating system, such as GNU/Linux.

Consider switching for better performance, privacy, and security
See https://www.fsf.org/windows/ and https://www.gnu.org/proprietary/malware-microsoft.html for more reasons

Linux Mint (https://linuxmint.com/) is generally recommend for beginners in Linux, because of its sane by default configuration and easy installation.
```
