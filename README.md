# experiments
Javascript experiments using ES6 in modern browsers

# ServiceWorker
Basic ServiceWorker implementation and a framework for merging multiple handlers

Browsers only allow one ServiceWorker per scope but a PWA will generally need multiple ServiceWorkers to handle different types of actions.
So we add support to merge multiple handlers into a single ServiceWorker

Note that ServiceWorkers by default are scoped to where they load from and below and will require a SERVICE-WORKER-ALLOWED response header to be scoped at a higher level, don't bother it's too much trouble, just always load from root of the app, this framework then allows the handlers to be loaded from anywhere.
