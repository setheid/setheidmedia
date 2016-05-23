'use strict';

const express = require('express');
const clientServer = express();

clientServer.use(express.static(`${__dirname}/build`));
clientServer.use('/images', express.static(`${__dirname}/app/images`));
clientServer.use('/views', express.static(`${__dirname}/app/views`));
clientServer.use('/vendor', express.static(`${__dirname}/app/vendor`));

clientServer.listen(3000, (err) => {
  if (err) return console.log(err);
  console.log('client-server up on 3000');
});
