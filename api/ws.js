let ws = null;

export function connect({url, options, onOpen, onMessage, onClose}) {
   console.info('api:connect:', url, options, onOpen)
   ws = new WebSocket(url, options)
   ws.onopen = (e => onOpen(e))
   ws.onmessage = (e => onMessage(e))
   ws.onclose = (e => onClose(e))
}

export function send(message) {
   console.info('ws: ', ws, message)
   if(ws) {
      ws.send(message);
   }
}