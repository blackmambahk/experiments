/**
 * Class for notify actions
 * note: 'self' refers to the global service worker and 'clients' the currently connected clients
 * @implements {ActionHandler}
 */
class NotifyAction {
    /**
     * Receives a MessageAction from a tab and broadcasts it to other tabs
     * @param {MessageAction} data the action sent with a MessageEvent
     * @param {WindowClient} client the client (tab) that sent the MessageAction
     * @returns void
     */
    handleAction(data, client){
        var clientID = client.id;
        clients.matchAll().then(clients => {
            clients.forEach(client => {
                // No need to notify the tab that sent the data
                console.log('checking client '+ client.id)
                if (client.id !== clientID) {
                    console.log('posting to client ', data)
                    //simple relay of the MessageAction to all attached clients except the one that sent the event
                    client.postMessage(data);
                }
            })
        });
    }
}
self.registerActionHandler('notify', new NotifyAction());
