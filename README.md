# experiments
Javascript experiments using ES6 in modern browsers

# ServiceWorker
Basic ServiceWorker implementation and a framework for merging multiple handlers

Browsers only allow one ServiceWorker per scope but a PWA will generally need multiple ServiceWorkers to handle different types of actions.
So we add support to merge multiple handlers into a single ServiceWorker

Note that ServiceWorkers by default are scoped to where they load from and below and will require a SERVICE-WORKER-ALLOWED response header to be scoped at a higher level, don't bother it's too much trouble, just always load from root of the app, this framework then allows the handlers to be loaded from anywhere.

# ServerSentEvents
whenever you send two new line characters the message is sent automatically

#### Message Construction

**ID**: If the field value does not contain U+0000 NULL, then set the last event ID buffer to the field value. Otherwise, ignore the field.

**Data**: Append the field value to the data buffer, then append a single U+000A LINE FEED (LF) character to the data buffer.

**Event**: Set the event type buffer to the field value. This leads to event.type getting your custom event name.

**Retry**: If the field value consists of only ASCII digits, then interpret the field value as an integer in base ten, and set the event stream’s reconnection time to that integer. Otherwise, ignore the field.

You can send multiple messages separated by a new line as long as you provide different IDs.