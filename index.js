//this file exists so the webpack build process will succeed

'use strict';
MyCVApp.xAsync = require('async');
MyCVApp.xComputerVisionClient = require('@azure/cognitiveservices-computervision').ComputerVisionClient;
MyCVApp.xApiKeyCredentials = require('@azure/ms-rest-js').ApiKeyCredentials;
/**
 * AUTHENTICATE
 * This single client is used for all examples.
 */
MyCVApp.xKey = 'YOUR_KEY';
MyCVApp.xEndpoint = 'YOUR_ENDPOINT';