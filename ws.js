const koa = require('koa'),
  route = require('koa-route'),
  websockify = require('koa-websocket');
 
const app = websockify(koa());
 
// Note it's app.ws.use and not app.use 
app.ws.use(route.all('/', function* (next) {
  // `this` is the regular koa context created from the `ws` onConnection `socket.upgradeReq` object. 
  // the websocket is added to the context on `this.websocket`. 
  var that = this;

  this.websocket.send('Hello!');
  this.websocket.on('message', function(message) {
    // do something with the message from client 
    console.log(message);
    that.websocket.send(JSON.stringify({message: message}));
  });
  // yielding `next` will pass the context (this) on to the next ws middleware 
  yield next;
}));
 
app.listen(3000);
 