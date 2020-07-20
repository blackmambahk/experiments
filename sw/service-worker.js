/**
 * The window proxy
 * @typedef {Object} WindowClient
 * @property {string} id
 * @property {string} type 'window'
 * @property {string} url
 * @property {boolean} focused
 * @property {string} frameType 'top-level'
 * @property {string} visibilityState 'visible'
 */
/**
 * structure of the data passed with a MessageEvent
 * @typedef {Object} MessageAction
 * @property {string} type name of action handler
 * @property {string} id action id
 * @property {Array|Object|number|string|boolean} data
 * @property {boolean} wmj always true (for compatibility with Connection.data)
 */
/**
 * Interface for classes that represent a MessageAction handler.
 * @interface ActionHandler
 */

/**
 * Handle a MessageAction
 *
 * @function
 * @name ActionHandler#handleAction
 * @param {MessageAction} data
 * @param {WindowClient} client
 * @returns void
 */

/**
 * This only gets loaded by 'modern' browsers so we can use full ES6 syntax
 */

/**
 * Bump the service worker version in this comment to make sure changes to imported scripts are reflected.
 * SERVICE-WORKER-VERSION = 1
 */

/**
 * @property {Object.<string, ActionHandler>} handlers The dictionary of ActionHandlers.
 */
self.handlers = {};
/**
 * registers an ActionHandler for a given type of MessageAction
 * @param {string} name
 * @param {ActionHandler} handler
 */
self.registerActionHandler = function(name, handler){
    self.handlers[name] = handler;
}

importScripts('core/notify.js');

// The install handler takes care of precaching the resources we always need.
self.addEventListener('install', event => {
    console.log("Install event")
    // The promise that skipWaiting() returns can be safely ignored.
    self.skipWaiting();
});

// The activate handler takes care of cleaning up old caches.
self.addEventListener('activate', event => {
  console.log("Activate event")
});

self.addEventListener('fetch', event => {
    console.log("Fetch event")
});

/**
 * The MessageEvent data property is a MessageAction structure
 */
self.addEventListener('message', function(e){
    /**@type ActionHandler*/
    var handler = self.handlers[e.data.type]
    if(handler){
          handler.handleAction(e.data, e.source);
    }
});