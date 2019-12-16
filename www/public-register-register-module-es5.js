(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["public-register-register-module"],{

/***/ "./node_modules/@firebase/analytics/dist/index.esm.js":
/*!************************************************************!*\
  !*** ./node_modules/@firebase/analytics/dist/index.esm.js ***!
  \************************************************************/
/*! exports provided: factory, registerAnalytics, resetGlobalVars, settings */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "factory", function() { return factory; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "registerAnalytics", function() { return registerAnalytics; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "resetGlobalVars", function() { return resetGlobalVars; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "settings", function() { return settings; });
/* harmony import */ var _firebase_app__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @firebase/app */ "./node_modules/@firebase/app/dist/index.cjs.js");
/* harmony import */ var _firebase_app__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_firebase_app__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _firebase_installations__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @firebase/installations */ "./node_modules/@firebase/installations/dist/index.esm.js");
/* harmony import */ var _firebase_util__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @firebase/util */ "./node_modules/@firebase/util/dist/index.cjs.js");
/* harmony import */ var _firebase_util__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_firebase_util__WEBPACK_IMPORTED_MODULE_3__);





/**
 * @license
 * Copyright 2019 Google Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var ANALYTICS_ID_FIELD = 'measurementId';
// Key to attach FID to in gtag params.
var GA_FID_KEY = 'firebase_id';
var ORIGIN_KEY = 'origin';
var GtagCommand;
(function (GtagCommand) {
    GtagCommand["EVENT"] = "event";
    GtagCommand["SET"] = "set";
    GtagCommand["CONFIG"] = "config";
})(GtagCommand || (GtagCommand = {}));
/*
 * Officially recommended event names for gtag.js
 * Any other string is also allowed.
 */
var EventName;
(function (EventName) {
    EventName["ADD_PAYMENT_INFO"] = "add_payment_info";
    EventName["ADD_TO_CART"] = "add_to_cart";
    EventName["ADD_TO_WISHLIST"] = "add_to_wishlist";
    EventName["BEGIN_CHECKOUT"] = "begin_checkout";
    EventName["CHECKOUT_PROGRESS"] = "checkout_progress";
    EventName["EXCEPTION"] = "exception";
    EventName["GENERATE_LEAD"] = "generate_lead";
    EventName["LOGIN"] = "login";
    EventName["PAGE_VIEW"] = "page_view";
    EventName["PURCHASE"] = "purchase";
    EventName["REFUND"] = "refund";
    EventName["REMOVE_FROM_CART"] = "remove_from_cart";
    EventName["SCREEN_VIEW"] = "screen_view";
    EventName["SEARCH"] = "search";
    EventName["SELECT_CONTENT"] = "select_content";
    EventName["SET_CHECKOUT_OPTION"] = "set_checkout_option";
    EventName["SHARE"] = "share";
    EventName["SIGN_UP"] = "sign_up";
    EventName["TIMING_COMPLETE"] = "timing_complete";
    EventName["VIEW_ITEM"] = "view_item";
    EventName["VIEW_ITEM_LIST"] = "view_item_list";
    EventName["VIEW_PROMOTION"] = "view_promotion";
    EventName["VIEW_SEARCH_RESULTS"] = "view_search_results";
})(EventName || (EventName = {}));

/**
 * @license
 * Copyright 2019 Google Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * Logs an analytics event through the Firebase SDK.
 *
 * @param gtagFunction Wrapped gtag function that waits for fid to be set before sending an event
 * @param eventName Google Analytics event name, choose from standard list or use a custom string.
 * @param eventParams Analytics event parameters.
 */
function logEvent(gtagFunction, analyticsId, eventName, eventParams, options) {
    var params = eventParams || {};
    if (!options || !options.global) {
        params = Object(tslib__WEBPACK_IMPORTED_MODULE_1__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_1__["__assign"])({}, eventParams), { 'send_to': analyticsId });
    }
    // Workaround for http://b/141370449 - third argument cannot be undefined.
    gtagFunction(GtagCommand.EVENT, eventName, params || {});
}
// TODO: Brad is going to add `screen_name` to GA Gold config parameter schema
/**
 * Set screen_name parameter for this Google Analytics ID.
 *
 * @param gtagFunction Wrapped gtag function that waits for fid to be set before sending an event
 * @param screenName Screen name string to set.
 */
function setCurrentScreen(gtagFunction, analyticsId, screenName, options) {
    if (options && options.global) {
        gtagFunction(GtagCommand.SET, { 'screen_name': screenName });
    }
    else {
        gtagFunction(GtagCommand.CONFIG, analyticsId, {
            update: true,
            'screen_name': screenName
        });
    }
}
/**
 * Set user_id parameter for this Google Analytics ID.
 *
 * @param gtagFunction Wrapped gtag function that waits for fid to be set before sending an event
 * @param id User ID string to set
 */
function setUserId(gtagFunction, analyticsId, id, options) {
    if (options && options.global) {
        gtagFunction(GtagCommand.SET, { 'user_id': id });
    }
    else {
        gtagFunction(GtagCommand.CONFIG, analyticsId, {
            update: true,
            'user_id': id
        });
    }
}
/**
 * Set all other user properties other than user_id and screen_name.
 *
 * @param gtagFunction Wrapped gtag function that waits for fid to be set before sending an event
 * @param properties Map of user properties to set
 */
function setUserProperties(gtagFunction, analyticsId, properties, options) {
    if (options && options.global) {
        var flatProperties = {};
        for (var _i = 0, _a = Object.keys(properties); _i < _a.length; _i++) {
            var key = _a[_i];
            // use dot notation for merge behavior in gtag.js
            flatProperties["user_properties." + key] = properties[key];
        }
        gtagFunction(GtagCommand.SET, flatProperties);
    }
    else {
        gtagFunction(GtagCommand.CONFIG, analyticsId, {
            update: true,
            'user_properties': properties
        });
    }
}
/**
 * Set whether collection is enabled for this ID.
 *
 * @param enabled If true, collection is enabled for this ID.
 */
function setAnalyticsCollectionEnabled(analyticsId, enabled) {
    window["ga-disable-" + analyticsId] = !enabled;
}

/**
 * @license
 * Copyright 2019 Google Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * Initialize the analytics instance in gtag.js by calling config command with fid.
 *
 * NOTE: We combine analytics initialization and setting fid together because we want fid to be
 * part of the `page_view` event that's sent during the initialization
 * @param app Firebase app
 * @param gtagCore The gtag function that's not wrapped.
 */
function initializeGAId(app, gtagCore) {
    return Object(tslib__WEBPACK_IMPORTED_MODULE_1__["__awaiter"])(this, void 0, void 0, function () {
        var fid;
        var _a;
        return Object(tslib__WEBPACK_IMPORTED_MODULE_1__["__generator"])(this, function (_b) {
            switch (_b.label) {
                case 0: return [4 /*yield*/, app.installations().getId()];
                case 1:
                    fid = _b.sent();
                    // This command initializes gtag.js and only needs to be called once for the entire web app,
                    // but since it is idempotent, we can call it multiple times.
                    // We keep it together with other initialization logic for better code structure.
                    // eslint-disable-next-line @typescript-eslint/no-explicit-any
                    gtagCore('js', new Date());
                    // It should be the first config command called on this GA-ID
                    // Initialize this GA-ID and set FID on it using the gtag config API.
                    gtagCore(GtagCommand.CONFIG, app.options[ANALYTICS_ID_FIELD], (_a = {},
                        _a[GA_FID_KEY] = fid,
                        // guard against developers accidentally setting properties with prefix `firebase_`
                        _a[ORIGIN_KEY] = 'firebase',
                        _a.update = true,
                        _a));
                    return [2 /*return*/];
            }
        });
    });
}
function hasDataLayer(dataLayerName) {
    return Array.isArray(window[dataLayerName]);
}
function insertScriptTag(dataLayerName) {
    var script = document.createElement('script');
    // We are not providing an analyticsId in the URL because it would trigger a `page_view`
    // without fid. We will initialize ga-id using gtag (config) command together with fid.
    script.src = "https://www.googletagmanager.com/gtag/js?l=" + dataLayerName;
    script.async = true;
    document.head.appendChild(script);
}
/** Get reference to, or create, global datalayer.
 * @param dataLayerName Name of datalayer (most often the default, "_dataLayer")
 */
function getOrCreateDataLayer(dataLayerName) {
    // Check for existing dataLayer and create if needed.
    var dataLayer = [];
    if (hasDataLayer(dataLayerName)) {
        dataLayer = window[dataLayerName];
    }
    else {
        dataLayer = window[dataLayerName] = [];
    }
    return dataLayer;
}
/**
 * Wraps a standard gtag function with extra code to wait for completion of
 * relevant initialization promises before sending requests.
 *
 * @param gtagCore Basic gtag function that just appends to dataLayer
 * @param initializedIdPromisesMap Map of gaIds to their initialization promises
 */
function wrapGtag(gtagCore, initializedIdPromisesMap) {
    return function (command, idOrNameOrParams, gtagParams) {
        // If event, check that relevant initialization promises have completed.
        if (command === GtagCommand.EVENT) {
            var initializationPromisesToWaitFor = [];
            // If there's a 'send_to' param, check if any ID specified matches
            // a FID we have begun a fetch on.
            if (gtagParams && gtagParams['send_to']) {
                var gaSendToList = gtagParams['send_to'];
                // Make it an array if is isn't, so it can be dealt with the same way.
                if (!Array.isArray(gaSendToList)) {
                    gaSendToList = [gaSendToList];
                }
                for (var _i = 0, gaSendToList_1 = gaSendToList; _i < gaSendToList_1.length; _i++) {
                    var sendToId = gaSendToList_1[_i];
                    var initializationPromise = initializedIdPromisesMap[sendToId];
                    // Groups will not be in the map.
                    if (initializationPromise) {
                        initializationPromisesToWaitFor.push(initializationPromise);
                    }
                    else {
                        // There is an item in 'send_to' that is not associated
                        // directly with an FID, possibly a group.  Empty this array
                        // and let it get populated below.
                        initializationPromisesToWaitFor = [];
                        break;
                    }
                }
            }
            // This will be unpopulated if there was no 'send_to' field , or
            // if not all entries in the 'send_to' field could be mapped to
            // a FID. In these cases, wait on all pending initialization promises.
            if (initializationPromisesToWaitFor.length === 0) {
                for (var _a = 0, _b = Object.values(initializedIdPromisesMap); _a < _b.length; _a++) {
                    var idPromise = _b[_a];
                    initializationPromisesToWaitFor.push(idPromise);
                }
            }
            // Run core gtag function with args after all relevant initialization
            // promises have been resolved.
            Promise.all(initializationPromisesToWaitFor)
                // Workaround for http://b/141370449 - third argument cannot be undefined.
                .then(function () {
                return gtagCore(GtagCommand.EVENT, idOrNameOrParams, gtagParams || {});
            })
                .catch(function (e) { return console.error(e); });
        }
        else if (command === GtagCommand.CONFIG) {
            var initializationPromiseToWait = initializedIdPromisesMap[idOrNameOrParams] ||
                Promise.resolve();
            initializationPromiseToWait
                .then(function () {
                gtagCore(GtagCommand.CONFIG, idOrNameOrParams, gtagParams);
            })
                .catch(function (e) { return console.error(e); });
        }
        else {
            // SET command.
            // Splitting calls for CONFIG and SET to make it clear which signature
            // Typescript is checking.
            gtagCore(GtagCommand.SET, idOrNameOrParams);
        }
    };
}
/**
 * Creates global gtag function or wraps existing one if found.
 * This wrapped function attaches Firebase instance ID (FID) to gtag 'config' and
 * 'event' calls that belong to the GAID associated with this Firebase instance.
 *
 * @param initializedIdPromisesMap Map of gaId to initialization promises.
 * @param dataLayerName Name of global GA datalayer array.
 * @param gtagFunctionName Name of global gtag function ("gtag" if not user-specified)
 */
function wrapOrCreateGtag(initializedIdPromisesMap, dataLayerName, gtagFunctionName) {
    // Create a basic core gtag function
    var gtagCore = function () {
        var _args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            _args[_i] = arguments[_i];
        }
        // Must push IArguments object, not an array.
        window[dataLayerName].push(arguments);
    };
    // Replace it with existing one if found
    if (window[gtagFunctionName] &&
        typeof window[gtagFunctionName] === 'function') {
        // @ts-ignore
        gtagCore = window[gtagFunctionName];
    }
    window[gtagFunctionName] = wrapGtag(gtagCore, initializedIdPromisesMap);
    return {
        gtagCore: gtagCore,
        wrappedGtag: window[gtagFunctionName]
    };
}

/**
 * @license
 * Copyright 2019 Google Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var _a;
var ERRORS = (_a = {},
    _a["no-ga-id" /* NO_GA_ID */] = "\"" + ANALYTICS_ID_FIELD + "\" field is empty in " +
        'Firebase config. Firebase Analytics ' +
        'requires this field to contain a valid measurement ID.',
    _a["already-exists" /* ALREADY_EXISTS */] = 'A Firebase Analytics instance with the measurement ID ${id} ' +
        ' already exists. ' +
        'Only one Firebase Analytics instance can be created for each measurement ID.',
    _a["already-initialized" /* ALREADY_INITIALIZED */] = 'Firebase Analytics has already been initialized.' +
        'settings() must be called before initializing any Analytics instance' +
        'or it will have no effect.',
    _a);
var ERROR_FACTORY = new _firebase_util__WEBPACK_IMPORTED_MODULE_3__["ErrorFactory"]('analytics', 'Analytics', ERRORS);

/**
 * @license
 * Copyright 2019 Google Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * Maps gaId to FID fetch promises.
 */
var initializedIdPromisesMap = {};
/**
 * Name for window global data layer array used by GA: defaults to 'dataLayer'.
 */
var dataLayerName = 'dataLayer';
/**
 * Name for window global gtag function used by GA: defaults to 'gtag'.
 */
var gtagName = 'gtag';
/**
 * Reproduction of standard gtag function or reference to existing
 * gtag function on window object.
 */
var gtagCoreFunction;
/**
 * Wrapper around gtag function that ensures FID is sent with all
 * relevant event and config calls.
 */
var wrappedGtagFunction;
/**
 * Flag to ensure page initialization steps (creation or wrapping of
 * dataLayer and gtag script) are only run once per page load.
 */
var globalInitDone = false;
/**
 * For testing
 */
function resetGlobalVars(newGlobalInitDone, newGaInitializedPromise) {
    if (newGlobalInitDone === void 0) { newGlobalInitDone = false; }
    if (newGaInitializedPromise === void 0) { newGaInitializedPromise = {}; }
    globalInitDone = newGlobalInitDone;
    initializedIdPromisesMap = newGaInitializedPromise;
    dataLayerName = 'dataLayer';
    gtagName = 'gtag';
}
/**
 * This must be run before calling firebase.analytics() or it won't
 * have any effect.
 * @param options Custom gtag and dataLayer names.
 */
function settings(options) {
    if (globalInitDone) {
        throw ERROR_FACTORY.create("already-initialized" /* ALREADY_INITIALIZED */);
    }
    if (options.dataLayerName) {
        dataLayerName = options.dataLayerName;
    }
    if (options.gtagName) {
        gtagName = options.gtagName;
    }
}
function factory(app, 
// eslint-disable-next-line @typescript-eslint/no-explicit-any
extendApp) {
    if (!app.options[ANALYTICS_ID_FIELD]) {
        throw ERROR_FACTORY.create("no-ga-id" /* NO_GA_ID */);
    }
    var analyticsId = app.options[ANALYTICS_ID_FIELD];
    if (initializedIdPromisesMap[analyticsId] != null) {
        throw ERROR_FACTORY.create("already-exists" /* ALREADY_EXISTS */, {
            id: analyticsId
        });
    }
    if (!globalInitDone) {
        // Steps here should only be done once per page: creation or wrapping
        // of dataLayer and global gtag function.
        // Presence of previously existing dataLayer used to detect if user has
        // already put the gtag snippet on this page.
        if (!hasDataLayer(dataLayerName)) {
            insertScriptTag(dataLayerName);
        }
        getOrCreateDataLayer(dataLayerName);
        var _a = wrapOrCreateGtag(initializedIdPromisesMap, dataLayerName, gtagName), wrappedGtag = _a.wrappedGtag, gtagCore = _a.gtagCore;
        wrappedGtagFunction = wrappedGtag;
        gtagCoreFunction = gtagCore;
        globalInitDone = true;
    }
    // Async but non-blocking.
    initializedIdPromisesMap[analyticsId] = initializeGAId(app, gtagCoreFunction);
    var analyticsInstance = {
        app: app,
        logEvent: function (eventName, eventParams, options) {
            return logEvent(wrappedGtagFunction, analyticsId, eventName, eventParams, options);
        },
        setCurrentScreen: function (screenName, options) {
            return setCurrentScreen(wrappedGtagFunction, analyticsId, screenName, options);
        },
        setUserId: function (id, options) {
            return setUserId(wrappedGtagFunction, analyticsId, id, options);
        },
        setUserProperties: function (properties, options) {
            return setUserProperties(wrappedGtagFunction, analyticsId, properties, options);
        },
        setAnalyticsCollectionEnabled: function (enabled) {
            return setAnalyticsCollectionEnabled(app.options[ANALYTICS_ID_FIELD], enabled);
        }
    };
    extendApp({
        INTERNAL: {
            analytics: {
                logEvent: analyticsInstance.logEvent
            }
        }
    });
    return analyticsInstance;
}

/**
 * @license
 * Copyright 2019 Google Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * Type constant for Firebase Analytics.
 */
var ANALYTICS_TYPE = 'analytics';
function registerAnalytics(instance) {
    instance.INTERNAL.registerService(ANALYTICS_TYPE, factory, {
        settings: settings,
        EventName: EventName
    }, 
    // We don't need to wait on any AppHooks.
    undefined, 
    // Allow multiple analytics instances per app.
    false);
}
registerAnalytics(_firebase_app__WEBPACK_IMPORTED_MODULE_0___default.a);


//# sourceMappingURL=index.esm.js.map


/***/ }),

/***/ "./node_modules/@firebase/functions/dist/index.cjs.js":
/*!************************************************************!*\
  !*** ./node_modules/@firebase/functions/dist/index.cjs.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, '__esModule', { value: true });

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var firebase = _interopDefault(__webpack_require__(/*! @firebase/app */ "./node_modules/@firebase/app/dist/index.cjs.js"));
var tslib = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");

/**
 * @license
 * Copyright 2017 Google Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * Standard error codes for different ways a request can fail, as defined by:
 * https://github.com/googleapis/googleapis/blob/master/google/rpc/code.proto
 *
 * This map is used primarily to convert from a backend error code string to
 * a client SDK error code string, and make sure it's in the supported set.
 */
var errorCodeMap = {
    OK: 'ok',
    CANCELLED: 'cancelled',
    UNKNOWN: 'unknown',
    INVALID_ARGUMENT: 'invalid-argument',
    DEADLINE_EXCEEDED: 'deadline-exceeded',
    NOT_FOUND: 'not-found',
    ALREADY_EXISTS: 'already-exists',
    PERMISSION_DENIED: 'permission-denied',
    UNAUTHENTICATED: 'unauthenticated',
    RESOURCE_EXHAUSTED: 'resource-exhausted',
    FAILED_PRECONDITION: 'failed-precondition',
    ABORTED: 'aborted',
    OUT_OF_RANGE: 'out-of-range',
    UNIMPLEMENTED: 'unimplemented',
    INTERNAL: 'internal',
    UNAVAILABLE: 'unavailable',
    DATA_LOSS: 'data-loss'
};
/**
 * An explicit error that can be thrown from a handler to send an error to the
 * client that called the function.
 */
var HttpsErrorImpl = /** @class */ (function (_super) {
    tslib.__extends(HttpsErrorImpl, _super);
    function HttpsErrorImpl(code, message, details) {
        var _this = _super.call(this, message) || this;
        // This is a workaround for a bug in TypeScript when extending Error:
        // tslint:disable-next-line
        // https://github.com/Microsoft/TypeScript-wiki/blob/master/Breaking-Changes.md#extending-built-ins-like-error-array-and-map-may-no-longer-work
        Object.setPrototypeOf(_this, HttpsErrorImpl.prototype);
        _this.code = code;
        _this.details = details;
        return _this;
    }
    return HttpsErrorImpl;
}(Error));
/**
 * Takes an HTTP status code and returns the corresponding ErrorCode.
 * This is the standard HTTP status code -> error mapping defined in:
 * https://github.com/googleapis/googleapis/blob/master/google/rpc/code.proto
 *
 * @param status An HTTP status code.
 * @return The corresponding ErrorCode, or ErrorCode.UNKNOWN if none.
 */
function codeForHTTPStatus(status) {
    // Make sure any successful status is OK.
    if (status >= 200 && status < 300) {
        return 'ok';
    }
    switch (status) {
        case 0:
            // This can happen if the server returns 500.
            return 'internal';
        case 400:
            return 'invalid-argument';
        case 401:
            return 'unauthenticated';
        case 403:
            return 'permission-denied';
        case 404:
            return 'not-found';
        case 409:
            return 'aborted';
        case 429:
            return 'resource-exhausted';
        case 499:
            return 'cancelled';
        case 500:
            return 'internal';
        case 501:
            return 'unimplemented';
        case 503:
            return 'unavailable';
        case 504:
            return 'deadline-exceeded';
        default: // ignore
    }
    return 'unknown';
}
/**
 * Takes an HTTP response and returns the corresponding Error, if any.
 */
function _errorForResponse(status, bodyJSON, serializer) {
    var code = codeForHTTPStatus(status);
    // Start with reasonable defaults from the status code.
    var description = code;
    var details = undefined;
    // Then look through the body for explicit details.
    try {
        var errorJSON = bodyJSON && bodyJSON.error;
        if (errorJSON) {
            var status_1 = errorJSON.status;
            if (typeof status_1 === 'string') {
                if (!errorCodeMap[status_1]) {
                    // They must've included an unknown error code in the body.
                    return new HttpsErrorImpl('internal', 'internal');
                }
                code = errorCodeMap[status_1];
                // TODO(klimt): Add better default descriptions for error enums.
                // The default description needs to be updated for the new code.
                description = status_1;
            }
            var message = errorJSON.message;
            if (typeof message === 'string') {
                description = message;
            }
            details = errorJSON.details;
            if (details !== undefined) {
                details = serializer.decode(details);
            }
        }
    }
    catch (e) {
        // If we couldn't parse explicit error data, that's fine.
    }
    if (code === 'ok') {
        // Technically, there's an edge case where a developer could explicitly
        // return an error code of OK, and we will treat it as success, but that
        // seems reasonable.
        return null;
    }
    return new HttpsErrorImpl(code, description, details);
}

/**
 * Helper class to get metadata that should be included with a function call.
 */
var ContextProvider = /** @class */ (function () {
    function ContextProvider(app) {
        this.app = app;
    }
    ContextProvider.prototype.getAuthToken = function () {
        return tslib.__awaiter(this, void 0, void 0, function () {
            var token, e_1;
            return tslib.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, this.app.INTERNAL.getToken()];
                    case 1:
                        token = _a.sent();
                        if (!token) {
                            return [2 /*return*/, undefined];
                        }
                        return [2 /*return*/, token.accessToken];
                    case 2:
                        e_1 = _a.sent();
                        // If there's any error when trying to get the auth token, leave it off.
                        return [2 /*return*/, undefined];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    ContextProvider.prototype.getInstanceIdToken = function () {
        return tslib.__awaiter(this, void 0, void 0, function () {
            var messaging, token, e_2;
            return tslib.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        // HACK: Until we have a separate instanceId package, this is a quick way
                        // to load in the messaging instance for this app.
                        // eslint-disable-next-line @typescript-eslint/no-explicit-any
                        if (!this.app.messaging) {
                            return [2 /*return*/, undefined];
                        }
                        messaging = this.app.messaging();
                        return [4 /*yield*/, messaging.getToken()];
                    case 1:
                        token = _a.sent();
                        if (!token) {
                            return [2 /*return*/, undefined];
                        }
                        return [2 /*return*/, token];
                    case 2:
                        e_2 = _a.sent();
                        // We don't warn on this, because it usually means messaging isn't set up.
                        // console.warn('Failed to retrieve instance id token.', e);
                        // If there's any error when trying to get the token, leave it off.
                        return [2 /*return*/, undefined];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    ContextProvider.prototype.getContext = function () {
        return tslib.__awaiter(this, void 0, void 0, function () {
            var authToken, instanceIdToken;
            return tslib.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.getAuthToken()];
                    case 1:
                        authToken = _a.sent();
                        return [4 /*yield*/, this.getInstanceIdToken()];
                    case 2:
                        instanceIdToken = _a.sent();
                        return [2 /*return*/, { authToken: authToken, instanceIdToken: instanceIdToken }];
                }
            });
        });
    };
    return ContextProvider;
}());

/**
 * @license
 * Copyright 2017 Google Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var LONG_TYPE = 'type.googleapis.com/google.protobuf.Int64Value';
var UNSIGNED_LONG_TYPE = 'type.googleapis.com/google.protobuf.UInt64Value';
function mapValues(
// { [k: string]: unknown } is no longer a wildcard assignment target after typescript 3.5
// eslint-disable-next-line @typescript-eslint/no-explicit-any
o, f) {
    var result = {};
    for (var key in o) {
        if (o.hasOwnProperty(key)) {
            result[key] = f(o[key]);
        }
    }
    return result;
}
var Serializer = /** @class */ (function () {
    function Serializer() {
    }
    // Takes data and encodes it in a JSON-friendly way, such that types such as
    // Date are preserved.
    Serializer.prototype.encode = function (data) {
        var _this = this;
        if (data == null) {
            return null;
        }
        if (data instanceof Number) {
            data = data.valueOf();
        }
        if (typeof data === 'number' && isFinite(data)) {
            // Any number in JS is safe to put directly in JSON and parse as a double
            // without any loss of precision.
            return data;
        }
        if (data === true || data === false) {
            return data;
        }
        if (Object.prototype.toString.call(data) === '[object String]') {
            return data;
        }
        if (Array.isArray(data)) {
            return data.map(function (x) { return _this.encode(x); });
        }
        if (typeof data === 'function' || typeof data === 'object') {
            return mapValues(data, function (x) { return _this.encode(x); });
        }
        // If we got this far, the data is not encodable.
        throw new Error('Data cannot be encoded in JSON: ' + data);
    };
    // Takes data that's been encoded in a JSON-friendly form and returns a form
    // with richer datatypes, such as Dates, etc.
    Serializer.prototype.decode = function (json) {
        var _this = this;
        if (json == null) {
            return json;
        }
        if (json['@type']) {
            switch (json['@type']) {
                case LONG_TYPE:
                // Fall through and handle this the same as unsigned.
                case UNSIGNED_LONG_TYPE: {
                    // Technically, this could work return a valid number for malformed
                    // data if there was a number followed by garbage. But it's just not
                    // worth all the extra code to detect that case.
                    var value = Number(json['value']);
                    if (isNaN(value)) {
                        throw new Error('Data cannot be decoded from JSON: ' + json);
                    }
                    return value;
                }
                default: {
                    throw new Error('Data cannot be decoded from JSON: ' + json);
                }
            }
        }
        if (Array.isArray(json)) {
            return json.map(function (x) { return _this.decode(x); });
        }
        if (typeof json === 'function' || typeof json === 'object') {
            return mapValues(json, function (x) { return _this.decode(x); });
        }
        // Anything else is safe to return.
        return json;
    };
    return Serializer;
}());

/**
 * @license
 * Copyright 2017 Google Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * Returns a Promise that will be rejected after the given duration.
 * The error will be of type HttpsErrorImpl.
 *
 * @param millis Number of milliseconds to wait before rejecting.
 */
function failAfter(millis) {
    return new Promise(function (_, reject) {
        setTimeout(function () {
            reject(new HttpsErrorImpl('deadline-exceeded', 'deadline-exceeded'));
        }, millis);
    });
}
/**
 * The main class for the Firebase Functions SDK.
 */
var Service = /** @class */ (function () {
    /**
     * Creates a new Functions service for the given app and (optional) region.
     * @param app_ The FirebaseApp to use.
     * @param region_ The region to call functions in.
     */
    function Service(app_, region_) {
        var _this = this;
        if (region_ === void 0) { region_ = 'us-central1'; }
        this.app_ = app_;
        this.region_ = region_;
        this.serializer = new Serializer();
        this.emulatorOrigin = null;
        this.INTERNAL = {
            delete: function () {
                return _this.deleteService();
            }
        };
        this.contextProvider = new ContextProvider(app_);
        // Cancels all ongoing requests when resolved.
        this.cancelAllRequests = new Promise(function (resolve) {
            _this.deleteService = function () {
                return resolve();
            };
        });
    }
    Object.defineProperty(Service.prototype, "app", {
        get: function () {
            return this.app_;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * Returns the URL for a callable with the given name.
     * @param name The name of the callable.
     */
    Service.prototype._url = function (name) {
        var projectId = this.app_.options.projectId;
        var region = this.region_;
        if (this.emulatorOrigin !== null) {
            var origin_1 = this.emulatorOrigin;
            return origin_1 + "/" + projectId + "/" + region + "/" + name;
        }
        return "https://" + region + "-" + projectId + ".cloudfunctions.net/" + name;
    };
    /**
     * Changes this instance to point to a Cloud Functions emulator running
     * locally. See https://firebase.google.com/docs/functions/local-emulator
     *
     * @param origin The origin of the local emulator, such as
     * "http://localhost:5005".
     */
    Service.prototype.useFunctionsEmulator = function (origin) {
        this.emulatorOrigin = origin;
    };
    /**
     * Returns a reference to the callable https trigger with the given name.
     * @param name The name of the trigger.
     */
    Service.prototype.httpsCallable = function (name, options) {
        var _this = this;
        return function (data) {
            return _this.call(name, data, options || {});
        };
    };
    /**
     * Does an HTTP POST and returns the completed response.
     * @param url The url to post to.
     * @param body The JSON body of the post.
     * @param headers The HTTP headers to include in the request.
     * @return A Promise that will succeed when the request finishes.
     */
    Service.prototype.postJSON = function (url, body, headers) {
        return tslib.__awaiter(this, void 0, void 0, function () {
            var response, e_1, json, e_2;
            return tslib.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        headers.append('Content-Type', 'application/json');
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 3, , 4]);
                        return [4 /*yield*/, fetch(url, {
                                method: 'POST',
                                body: JSON.stringify(body),
                                headers: headers
                            })];
                    case 2:
                        response = _a.sent();
                        return [3 /*break*/, 4];
                    case 3:
                        e_1 = _a.sent();
                        // This could be an unhandled error on the backend, or it could be a
                        // network error. There's no way to know, since an unhandled error on the
                        // backend will fail to set the proper CORS header, and thus will be
                        // treated as a network error by fetch.
                        return [2 /*return*/, {
                                status: 0,
                                json: null
                            }];
                    case 4:
                        json = null;
                        _a.label = 5;
                    case 5:
                        _a.trys.push([5, 7, , 8]);
                        return [4 /*yield*/, response.json()];
                    case 6:
                        json = _a.sent();
                        return [3 /*break*/, 8];
                    case 7:
                        e_2 = _a.sent();
                        return [3 /*break*/, 8];
                    case 8: return [2 /*return*/, {
                            status: response.status,
                            json: json
                        }];
                }
            });
        });
    };
    /**
     * Calls a callable function asynchronously and returns the result.
     * @param name The name of the callable trigger.
     * @param data The data to pass as params to the function.s
     */
    Service.prototype.call = function (name, data, options) {
        return tslib.__awaiter(this, void 0, void 0, function () {
            var url, body, headers, context, timeout, response, error, responseData, decodedData;
            return tslib.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        url = this._url(name);
                        // Encode any special types, such as dates, in the input data.
                        data = this.serializer.encode(data);
                        body = { data: data };
                        headers = new Headers();
                        return [4 /*yield*/, this.contextProvider.getContext()];
                    case 1:
                        context = _a.sent();
                        if (context.authToken) {
                            headers.append('Authorization', 'Bearer ' + context.authToken);
                        }
                        if (context.instanceIdToken) {
                            headers.append('Firebase-Instance-ID-Token', context.instanceIdToken);
                        }
                        timeout = options.timeout || 70000;
                        return [4 /*yield*/, Promise.race([
                                this.postJSON(url, body, headers),
                                failAfter(timeout),
                                this.cancelAllRequests
                            ])];
                    case 2:
                        response = _a.sent();
                        // If service was deleted, interrupted response throws an error.
                        if (!response) {
                            throw new HttpsErrorImpl('cancelled', 'Firebase Functions instance was deleted.');
                        }
                        error = _errorForResponse(response.status, response.json, this.serializer);
                        if (error) {
                            throw error;
                        }
                        if (!response.json) {
                            throw new HttpsErrorImpl('internal', 'Response is not valid JSON object.');
                        }
                        responseData = response.json.data;
                        // TODO(klimt): For right now, allow "result" instead of "data", for
                        // backwards compatibility.
                        if (typeof responseData === 'undefined') {
                            responseData = response.json.result;
                        }
                        if (typeof responseData === 'undefined') {
                            // Consider the response malformed.
                            throw new HttpsErrorImpl('internal', 'Response is missing data field.');
                        }
                        decodedData = this.serializer.decode(responseData);
                        return [2 /*return*/, { data: decodedData }];
                }
            });
        });
    };
    return Service;
}());

/**
 * @license
 * Copyright 2017 Google Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * Type constant for Firebase Functions.
 */
var FUNCTIONS_TYPE = 'functions';
function factory(app, _unused, region) {
    return new Service(app, region);
}
function registerFunctions(instance) {
    var namespaceExports = {
        // no-inline
        Functions: Service
    };
    instance.INTERNAL.registerService(FUNCTIONS_TYPE, factory, namespaceExports, 
    // We don't need to wait on any AppHooks.
    undefined, 
    // Allow multiple functions instances per app.
    true);
}
registerFunctions(firebase);

exports.registerFunctions = registerFunctions;
//# sourceMappingURL=index.cjs.js.map


/***/ }),

/***/ "./node_modules/@firebase/installations/dist/index.esm.js":
/*!****************************************************************!*\
  !*** ./node_modules/@firebase/installations/dist/index.esm.js ***!
  \****************************************************************/
/*! exports provided: registerInstallations */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "registerInstallations", function() { return registerInstallations; });
/* harmony import */ var _firebase_app__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @firebase/app */ "./node_modules/@firebase/app/dist/index.cjs.js");
/* harmony import */ var _firebase_app__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_firebase_app__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _firebase_util__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @firebase/util */ "./node_modules/@firebase/util/dist/index.cjs.js");
/* harmony import */ var _firebase_util__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_firebase_util__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var idb__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! idb */ "./node_modules/idb/build/idb.js");
/* harmony import */ var idb__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(idb__WEBPACK_IMPORTED_MODULE_3__);





var version = "0.3.1";

/**
 * @license
 * Copyright 2019 Google Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var PENDING_TIMEOUT_MS = 10000;
var PACKAGE_VERSION = "w:" + version;
var INTERNAL_AUTH_VERSION = 'FIS_v2';
var INSTALLATIONS_API_URL = 'https://firebaseinstallations.googleapis.com/v1';
var TOKEN_EXPIRATION_BUFFER = 60 * 60 * 1000; // One hour
var SERVICE = 'installations';
var SERVICE_NAME = 'Installations';

/**
 * @license
 * Copyright 2019 Google Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var _a;
var ERROR_DESCRIPTION_MAP = (_a = {},
    _a["missing-app-config-values" /* MISSING_APP_CONFIG_VALUES */] = 'Missing App configuration values.',
    _a["create-installation-failed" /* CREATE_INSTALLATION_FAILED */] = 'Could not register Firebase Installation.',
    _a["generate-token-failed" /* GENERATE_TOKEN_FAILED */] = 'Could not generate Auth Token.',
    _a["not-registered" /* NOT_REGISTERED */] = 'Firebase Installation is not registered.',
    _a["installation-not-found" /* INSTALLATION_NOT_FOUND */] = 'Firebase Installation not found.',
    _a["request-failed" /* REQUEST_FAILED */] = '{$requestName} request failed with error "{$serverCode} {$serverStatus}: {$serverMessage}"',
    _a["app-offline" /* APP_OFFLINE */] = 'Could not process request. Application offline.',
    _a["delete-pending-registration" /* DELETE_PENDING_REGISTRATION */] = "Can't delete installation while there is a pending registration request.",
    _a);
var ERROR_FACTORY = new _firebase_util__WEBPACK_IMPORTED_MODULE_2__["ErrorFactory"](SERVICE, SERVICE_NAME, ERROR_DESCRIPTION_MAP);
/** Returns true if error is a FirebaseError that is based on an error from the server. */
function isServerError(error) {
    return (error instanceof _firebase_util__WEBPACK_IMPORTED_MODULE_2__["FirebaseError"] &&
        error.code.includes("request-failed" /* REQUEST_FAILED */));
}

/**
 * @license
 * Copyright 2019 Google Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function extractAppConfig(app) {
    if (!app || !app.options) {
        throw ERROR_FACTORY.create("missing-app-config-values" /* MISSING_APP_CONFIG_VALUES */);
    }
    var appName = app.name;
    var _a = app.options, projectId = _a.projectId, apiKey = _a.apiKey, appId = _a.appId;
    if (!appName || !projectId || !apiKey || !appId) {
        throw ERROR_FACTORY.create("missing-app-config-values" /* MISSING_APP_CONFIG_VALUES */);
    }
    return { appName: appName, projectId: projectId, apiKey: apiKey, appId: appId };
}

/**
 * @license
 * Copyright 2019 Google Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function getInstallationsEndpoint(_a) {
    var projectId = _a.projectId;
    return INSTALLATIONS_API_URL + "/projects/" + projectId + "/installations";
}
function extractAuthTokenInfoFromResponse(response) {
    return {
        token: response.token,
        requestStatus: 2 /* COMPLETED */,
        expiresIn: getExpiresInFromResponseExpiresIn(response.expiresIn),
        creationTime: Date.now()
    };
}
function getErrorFromResponse(requestName, response) {
    return Object(tslib__WEBPACK_IMPORTED_MODULE_1__["__awaiter"])(this, void 0, void 0, function () {
        var responseJson, errorData;
        return Object(tslib__WEBPACK_IMPORTED_MODULE_1__["__generator"])(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, response.json()];
                case 1:
                    responseJson = _a.sent();
                    errorData = responseJson.error;
                    return [2 /*return*/, ERROR_FACTORY.create("request-failed" /* REQUEST_FAILED */, {
                            requestName: requestName,
                            serverCode: errorData.code,
                            serverMessage: errorData.message,
                            serverStatus: errorData.status
                        })];
            }
        });
    });
}
function getHeaders(_a) {
    var apiKey = _a.apiKey;
    return new Headers({
        'Content-Type': 'application/json',
        Accept: 'application/json',
        'x-goog-api-key': apiKey
    });
}
function getHeadersWithAuth(appConfig, _a) {
    var refreshToken = _a.refreshToken;
    var headers = getHeaders(appConfig);
    headers.append('Authorization', getAuthorizationHeader(refreshToken));
    return headers;
}
/**
 * Calls the passed in fetch wrapper and returns the response.
 * If the returned response has a status of 5xx, re-runs the function once and
 * returns the response.
 */
function retryIfServerError(fn) {
    return Object(tslib__WEBPACK_IMPORTED_MODULE_1__["__awaiter"])(this, void 0, void 0, function () {
        var result;
        return Object(tslib__WEBPACK_IMPORTED_MODULE_1__["__generator"])(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, fn()];
                case 1:
                    result = _a.sent();
                    if (result.status >= 500 && result.status < 600) {
                        // Internal Server Error. Retry request.
                        return [2 /*return*/, fn()];
                    }
                    return [2 /*return*/, result];
            }
        });
    });
}
function getExpiresInFromResponseExpiresIn(responseExpiresIn) {
    // This works because the server will never respond with fractions of a second.
    return Number(responseExpiresIn.replace('s', '000'));
}
function getAuthorizationHeader(refreshToken) {
    return INTERNAL_AUTH_VERSION + " " + refreshToken;
}

/**
 * @license
 * Copyright 2019 Google Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function createInstallation(appConfig, _a) {
    var fid = _a.fid;
    return Object(tslib__WEBPACK_IMPORTED_MODULE_1__["__awaiter"])(this, void 0, void 0, function () {
        var endpoint, headers, body, request, response, responseValue, registeredInstallationEntry;
        return Object(tslib__WEBPACK_IMPORTED_MODULE_1__["__generator"])(this, function (_b) {
            switch (_b.label) {
                case 0:
                    endpoint = getInstallationsEndpoint(appConfig);
                    headers = getHeaders(appConfig);
                    body = {
                        fid: fid,
                        authVersion: INTERNAL_AUTH_VERSION,
                        appId: appConfig.appId,
                        sdkVersion: PACKAGE_VERSION
                    };
                    request = {
                        method: 'POST',
                        headers: headers,
                        body: JSON.stringify(body)
                    };
                    return [4 /*yield*/, retryIfServerError(function () { return fetch(endpoint, request); })];
                case 1:
                    response = _b.sent();
                    if (!response.ok) return [3 /*break*/, 3];
                    return [4 /*yield*/, response.json()];
                case 2:
                    responseValue = _b.sent();
                    registeredInstallationEntry = {
                        fid: responseValue.fid || fid,
                        registrationStatus: 2 /* COMPLETED */,
                        refreshToken: responseValue.refreshToken,
                        authToken: extractAuthTokenInfoFromResponse(responseValue.authToken)
                    };
                    return [2 /*return*/, registeredInstallationEntry];
                case 3: return [4 /*yield*/, getErrorFromResponse('Create Installation', response)];
                case 4: throw _b.sent();
            }
        });
    });
}

/**
 * @license
 * Copyright 2019 Google Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/** Returns a promise that resolves after given time passes. */
function sleep(ms) {
    return new Promise(function (resolve) {
        setTimeout(resolve, ms);
    });
}

/**
 * @license
 * Copyright 2019 Google Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function bufferToBase64UrlSafe(array) {
    var b64 = btoa(String.fromCharCode.apply(String, Object(tslib__WEBPACK_IMPORTED_MODULE_1__["__spread"])(array)));
    return b64.replace(/\+/g, '-').replace(/\//g, '_');
}

/**
 * @license
 * Copyright 2019 Google Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var VALID_FID_PATTERN = /^[cdef][\w-]{21}$/;
var INVALID_FID = '';
/**
 * Generates a new FID using random values from Web Crypto API.
 * Returns an empty string if FID generation fails for any reason.
 */
function generateFid() {
    try {
        // A valid FID has exactly 22 base64 characters, which is 132 bits, or 16.5
        // bytes. our implementation generates a 17 byte array instead.
        var fidByteArray = new Uint8Array(17);
        var crypto_1 = self.crypto || self.msCrypto;
        crypto_1.getRandomValues(fidByteArray);
        // Replace the first 4 random bits with the constant FID header of 0b0111.
        fidByteArray[0] = 112 + (fidByteArray[0] % 16);
        var fid = encode(fidByteArray);
        return VALID_FID_PATTERN.test(fid) ? fid : INVALID_FID;
    }
    catch (_a) {
        // FID generation errored
        return INVALID_FID;
    }
}
/** Converts a FID Uint8Array to a base64 string representation. */
function encode(fidByteArray) {
    var b64String = bufferToBase64UrlSafe(fidByteArray);
    // Remove the 23rd character that was added because of the extra 4 bits at the
    // end of our 17 byte array, and the '=' padding.
    return b64String.substr(0, 22);
}

/**
 * @license
 * Copyright 2019 Google Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var DATABASE_NAME = 'firebase-installations-database';
var DATABASE_VERSION = 1;
var OBJECT_STORE_NAME = 'firebase-installations-store';
var dbPromise = null;
function getDbPromise() {
    if (!dbPromise) {
        dbPromise = Object(idb__WEBPACK_IMPORTED_MODULE_3__["openDb"])(DATABASE_NAME, DATABASE_VERSION, function (upgradeDB) {
            // We don't use 'break' in this switch statement, the fall-through
            // behavior is what we want, because if there are multiple versions between
            // the old version and the current version, we want ALL the migrations
            // that correspond to those versions to run, not only the last one.
            // eslint-disable-next-line default-case
            switch (upgradeDB.oldVersion) {
                case 0:
                    upgradeDB.createObjectStore(OBJECT_STORE_NAME);
            }
        });
    }
    return dbPromise;
}
/** Assigns or overwrites the record for the given key with the given value. */
function set(appConfig, value) {
    return Object(tslib__WEBPACK_IMPORTED_MODULE_1__["__awaiter"])(this, void 0, void 0, function () {
        var key, db, tx;
        return Object(tslib__WEBPACK_IMPORTED_MODULE_1__["__generator"])(this, function (_a) {
            switch (_a.label) {
                case 0:
                    key = getKey(appConfig);
                    return [4 /*yield*/, getDbPromise()];
                case 1:
                    db = _a.sent();
                    tx = db.transaction(OBJECT_STORE_NAME, 'readwrite');
                    return [4 /*yield*/, tx.objectStore(OBJECT_STORE_NAME).put(value, key)];
                case 2:
                    _a.sent();
                    return [4 /*yield*/, tx.complete];
                case 3:
                    _a.sent();
                    return [2 /*return*/, value];
            }
        });
    });
}
/** Removes record(s) from the objectStore that match the given key. */
function remove(appConfig) {
    return Object(tslib__WEBPACK_IMPORTED_MODULE_1__["__awaiter"])(this, void 0, void 0, function () {
        var key, db, tx;
        return Object(tslib__WEBPACK_IMPORTED_MODULE_1__["__generator"])(this, function (_a) {
            switch (_a.label) {
                case 0:
                    key = getKey(appConfig);
                    return [4 /*yield*/, getDbPromise()];
                case 1:
                    db = _a.sent();
                    tx = db.transaction(OBJECT_STORE_NAME, 'readwrite');
                    return [4 /*yield*/, tx.objectStore(OBJECT_STORE_NAME).delete(key)];
                case 2:
                    _a.sent();
                    return [4 /*yield*/, tx.complete];
                case 3:
                    _a.sent();
                    return [2 /*return*/];
            }
        });
    });
}
/**
 * Atomically updates a record with the result of updateFn, which gets
 * called with the current value. If newValue is undefined, the record is
 * deleted instead.
 * @return Updated value
 */
function update(appConfig, updateFn) {
    return Object(tslib__WEBPACK_IMPORTED_MODULE_1__["__awaiter"])(this, void 0, void 0, function () {
        var key, db, tx, store, oldValue, newValue;
        return Object(tslib__WEBPACK_IMPORTED_MODULE_1__["__generator"])(this, function (_a) {
            switch (_a.label) {
                case 0:
                    key = getKey(appConfig);
                    return [4 /*yield*/, getDbPromise()];
                case 1:
                    db = _a.sent();
                    tx = db.transaction(OBJECT_STORE_NAME, 'readwrite');
                    store = tx.objectStore(OBJECT_STORE_NAME);
                    return [4 /*yield*/, store.get(key)];
                case 2:
                    oldValue = _a.sent();
                    newValue = updateFn(oldValue);
                    if (!(newValue === undefined)) return [3 /*break*/, 4];
                    return [4 /*yield*/, store.delete(key)];
                case 3:
                    _a.sent();
                    return [3 /*break*/, 6];
                case 4: return [4 /*yield*/, store.put(newValue, key)];
                case 5:
                    _a.sent();
                    _a.label = 6;
                case 6: return [4 /*yield*/, tx.complete];
                case 7:
                    _a.sent();
                    return [2 /*return*/, newValue];
            }
        });
    });
}
function getKey(appConfig) {
    return appConfig.appName + "!" + appConfig.appId;
}

/**
 * @license
 * Copyright 2019 Google Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * Updates and returns the InstallationEntry from the database.
 * Also triggers a registration request if it is necessary and possible.
 */
function getInstallationEntry(appConfig) {
    return Object(tslib__WEBPACK_IMPORTED_MODULE_1__["__awaiter"])(this, void 0, void 0, function () {
        var registrationPromise, installationEntry, _a;
        return Object(tslib__WEBPACK_IMPORTED_MODULE_1__["__generator"])(this, function (_b) {
            switch (_b.label) {
                case 0: return [4 /*yield*/, update(appConfig, function (oldEntry) {
                        var installationEntry = updateOrCreateInstallationEntry(oldEntry);
                        var entryWithPromise = triggerRegistrationIfNecessary(appConfig, installationEntry);
                        registrationPromise = entryWithPromise.registrationPromise;
                        return entryWithPromise.installationEntry;
                    })];
                case 1:
                    installationEntry = _b.sent();
                    if (!(installationEntry.fid === INVALID_FID)) return [3 /*break*/, 3];
                    _a = {};
                    return [4 /*yield*/, registrationPromise];
                case 2: 
                // FID generation failed. Waiting for the FID from the server.
                return [2 /*return*/, (_a.installationEntry = _b.sent(), _a)];
                case 3: return [2 /*return*/, {
                        installationEntry: installationEntry,
                        registrationPromise: registrationPromise
                    }];
            }
        });
    });
}
/**
 * Creates a new Installation Entry if one does not exist.
 * Also clears timed out pending requests.
 */
function updateOrCreateInstallationEntry(oldEntry) {
    var entry = oldEntry || {
        fid: generateFid(),
        registrationStatus: 0 /* NOT_STARTED */
    };
    return clearTimedOutRequest(entry);
}
/**
 * If the Firebase Installation is not registered yet, this will trigger the
 * registration and return an InProgressInstallationEntry.
 */
function triggerRegistrationIfNecessary(appConfig, installationEntry) {
    if (installationEntry.registrationStatus === 0 /* NOT_STARTED */) {
        if (!navigator.onLine) {
            // Registration required but app is offline.
            var registrationPromiseWithError = Promise.reject(ERROR_FACTORY.create("app-offline" /* APP_OFFLINE */));
            return {
                installationEntry: installationEntry,
                registrationPromise: registrationPromiseWithError
            };
        }
        // Try registering. Change status to IN_PROGRESS.
        var inProgressEntry = {
            fid: installationEntry.fid,
            registrationStatus: 1 /* IN_PROGRESS */,
            registrationTime: Date.now()
        };
        var registrationPromise = registerInstallation(appConfig, inProgressEntry);
        return { installationEntry: inProgressEntry, registrationPromise: registrationPromise };
    }
    else if (installationEntry.registrationStatus === 1 /* IN_PROGRESS */) {
        return {
            installationEntry: installationEntry,
            registrationPromise: waitUntilFidRegistration(appConfig)
        };
    }
    else {
        return { installationEntry: installationEntry };
    }
}
/** This will be executed only once for each new Firebase Installation. */
function registerInstallation(appConfig, installationEntry) {
    return Object(tslib__WEBPACK_IMPORTED_MODULE_1__["__awaiter"])(this, void 0, void 0, function () {
        var registeredInstallationEntry, e_1;
        return Object(tslib__WEBPACK_IMPORTED_MODULE_1__["__generator"])(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 2, , 7]);
                    return [4 /*yield*/, createInstallation(appConfig, installationEntry)];
                case 1:
                    registeredInstallationEntry = _a.sent();
                    return [2 /*return*/, set(appConfig, registeredInstallationEntry)];
                case 2:
                    e_1 = _a.sent();
                    if (!(isServerError(e_1) && e_1.serverCode === 409)) return [3 /*break*/, 4];
                    // Server returned a "FID can not be used" error.
                    // Generate a new ID next time.
                    return [4 /*yield*/, remove(appConfig)];
                case 3:
                    // Server returned a "FID can not be used" error.
                    // Generate a new ID next time.
                    _a.sent();
                    return [3 /*break*/, 6];
                case 4: 
                // Registration failed. Set FID as not registered.
                return [4 /*yield*/, set(appConfig, {
                        fid: installationEntry.fid,
                        registrationStatus: 0 /* NOT_STARTED */
                    })];
                case 5:
                    // Registration failed. Set FID as not registered.
                    _a.sent();
                    _a.label = 6;
                case 6: throw e_1;
                case 7: return [2 /*return*/];
            }
        });
    });
}
/** Call if FID registration is pending. */
function waitUntilFidRegistration(appConfig) {
    return Object(tslib__WEBPACK_IMPORTED_MODULE_1__["__awaiter"])(this, void 0, void 0, function () {
        var entry;
        return Object(tslib__WEBPACK_IMPORTED_MODULE_1__["__generator"])(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, updateInstallationRequest(appConfig)];
                case 1:
                    entry = _a.sent();
                    _a.label = 2;
                case 2:
                    if (!(entry.registrationStatus === 1 /* IN_PROGRESS */)) return [3 /*break*/, 5];
                    // createInstallation request still in progress.
                    return [4 /*yield*/, sleep(100)];
                case 3:
                    // createInstallation request still in progress.
                    _a.sent();
                    return [4 /*yield*/, updateInstallationRequest(appConfig)];
                case 4:
                    entry = _a.sent();
                    return [3 /*break*/, 2];
                case 5:
                    if (entry.registrationStatus === 0 /* NOT_STARTED */) {
                        throw ERROR_FACTORY.create("create-installation-failed" /* CREATE_INSTALLATION_FAILED */);
                    }
                    return [2 /*return*/, entry];
            }
        });
    });
}
/**
 * Called only if there is a CreateInstallation request in progress.
 *
 * Updates the InstallationEntry in the DB based on the status of the
 * CreateInstallation request.
 *
 * Returns the updated InstallationEntry.
 */
function updateInstallationRequest(appConfig) {
    return update(appConfig, function (oldEntry) {
        if (!oldEntry) {
            throw ERROR_FACTORY.create("installation-not-found" /* INSTALLATION_NOT_FOUND */);
        }
        return clearTimedOutRequest(oldEntry);
    });
}
function clearTimedOutRequest(entry) {
    if (hasInstallationRequestTimedOut(entry)) {
        return {
            fid: entry.fid,
            registrationStatus: 0 /* NOT_STARTED */
        };
    }
    return entry;
}
function hasInstallationRequestTimedOut(installationEntry) {
    return (installationEntry.registrationStatus === 1 /* IN_PROGRESS */ &&
        installationEntry.registrationTime + PENDING_TIMEOUT_MS < Date.now());
}

/**
 * @license
 * Copyright 2019 Google Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function generateAuthToken(appConfig, installationEntry) {
    return Object(tslib__WEBPACK_IMPORTED_MODULE_1__["__awaiter"])(this, void 0, void 0, function () {
        var endpoint, headers, body, request, response, responseValue, completedAuthToken;
        return Object(tslib__WEBPACK_IMPORTED_MODULE_1__["__generator"])(this, function (_a) {
            switch (_a.label) {
                case 0:
                    endpoint = getGenerateAuthTokenEndpoint(appConfig, installationEntry);
                    headers = getHeadersWithAuth(appConfig, installationEntry);
                    body = {
                        installation: {
                            sdkVersion: PACKAGE_VERSION
                        }
                    };
                    request = {
                        method: 'POST',
                        headers: headers,
                        body: JSON.stringify(body)
                    };
                    return [4 /*yield*/, retryIfServerError(function () { return fetch(endpoint, request); })];
                case 1:
                    response = _a.sent();
                    if (!response.ok) return [3 /*break*/, 3];
                    return [4 /*yield*/, response.json()];
                case 2:
                    responseValue = _a.sent();
                    completedAuthToken = extractAuthTokenInfoFromResponse(responseValue);
                    return [2 /*return*/, completedAuthToken];
                case 3: return [4 /*yield*/, getErrorFromResponse('Generate Auth Token', response)];
                case 4: throw _a.sent();
            }
        });
    });
}
function getGenerateAuthTokenEndpoint(appConfig, _a) {
    var fid = _a.fid;
    return getInstallationsEndpoint(appConfig) + "/" + fid + "/authTokens:generate";
}

/**
 * @license
 * Copyright 2019 Google Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * Returns a valid authentication token for the installation. Generates a new
 * token if one doesn't exist, is expired or about to expire.
 *
 * Should only be called if the Firebase Installation is registered.
 */
function refreshAuthToken(appConfig, forceRefresh) {
    if (forceRefresh === void 0) { forceRefresh = false; }
    return Object(tslib__WEBPACK_IMPORTED_MODULE_1__["__awaiter"])(this, void 0, void 0, function () {
        var tokenPromise, entry, authToken, _a;
        return Object(tslib__WEBPACK_IMPORTED_MODULE_1__["__generator"])(this, function (_b) {
            switch (_b.label) {
                case 0: return [4 /*yield*/, update(appConfig, function (oldEntry) {
                        if (!isEntryRegistered(oldEntry)) {
                            throw ERROR_FACTORY.create("not-registered" /* NOT_REGISTERED */);
                        }
                        var oldAuthToken = oldEntry.authToken;
                        if (!forceRefresh && isAuthTokenValid(oldAuthToken)) {
                            // There is a valid token in the DB.
                            return oldEntry;
                        }
                        else if (oldAuthToken.requestStatus === 1 /* IN_PROGRESS */) {
                            // There already is a token request in progress.
                            tokenPromise = waitUntilAuthTokenRequest(appConfig);
                            return oldEntry;
                        }
                        else {
                            // No token or token expired.
                            if (!navigator.onLine) {
                                throw ERROR_FACTORY.create("app-offline" /* APP_OFFLINE */);
                            }
                            var inProgressEntry = makeAuthTokenRequestInProgressEntry(oldEntry);
                            tokenPromise = fetchAuthTokenFromServer(appConfig, inProgressEntry);
                            return inProgressEntry;
                        }
                    })];
                case 1:
                    entry = _b.sent();
                    if (!tokenPromise) return [3 /*break*/, 3];
                    return [4 /*yield*/, tokenPromise];
                case 2:
                    _a = _b.sent();
                    return [3 /*break*/, 4];
                case 3:
                    _a = entry.authToken;
                    _b.label = 4;
                case 4:
                    authToken = _a;
                    return [2 /*return*/, authToken.token];
            }
        });
    });
}
/**
 * Call only if FID is registered and Auth Token request is in progress.
 */
function waitUntilAuthTokenRequest(appConfig) {
    return Object(tslib__WEBPACK_IMPORTED_MODULE_1__["__awaiter"])(this, void 0, void 0, function () {
        var entry, authToken;
        return Object(tslib__WEBPACK_IMPORTED_MODULE_1__["__generator"])(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, updateAuthTokenRequest(appConfig)];
                case 1:
                    entry = _a.sent();
                    _a.label = 2;
                case 2:
                    if (!(entry.authToken.requestStatus === 1 /* IN_PROGRESS */)) return [3 /*break*/, 5];
                    // generateAuthToken still in progress.
                    return [4 /*yield*/, sleep(100)];
                case 3:
                    // generateAuthToken still in progress.
                    _a.sent();
                    return [4 /*yield*/, updateAuthTokenRequest(appConfig)];
                case 4:
                    entry = _a.sent();
                    return [3 /*break*/, 2];
                case 5:
                    authToken = entry.authToken;
                    if (authToken.requestStatus === 0 /* NOT_STARTED */) {
                        throw ERROR_FACTORY.create("generate-token-failed" /* GENERATE_TOKEN_FAILED */);
                    }
                    else {
                        return [2 /*return*/, authToken];
                    }
                    return [2 /*return*/];
            }
        });
    });
}
/**
 * Called only if there is a GenerateAuthToken request in progress.
 *
 * Updates the InstallationEntry in the DB based on the status of the
 * GenerateAuthToken request.
 *
 * Returns the updated InstallationEntry.
 */
function updateAuthTokenRequest(appConfig) {
    return update(appConfig, function (oldEntry) {
        if (!isEntryRegistered(oldEntry)) {
            throw ERROR_FACTORY.create("not-registered" /* NOT_REGISTERED */);
        }
        var oldAuthToken = oldEntry.authToken;
        if (hasAuthTokenRequestTimedOut(oldAuthToken)) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_1__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_1__["__assign"])({}, oldEntry), { authToken: { requestStatus: 0 /* NOT_STARTED */ } });
        }
        return oldEntry;
    });
}
function fetchAuthTokenFromServer(appConfig, installationEntry) {
    return Object(tslib__WEBPACK_IMPORTED_MODULE_1__["__awaiter"])(this, void 0, void 0, function () {
        var authToken, updatedInstallationEntry, e_1, updatedInstallationEntry;
        return Object(tslib__WEBPACK_IMPORTED_MODULE_1__["__generator"])(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 3, , 8]);
                    return [4 /*yield*/, generateAuthToken(appConfig, installationEntry)];
                case 1:
                    authToken = _a.sent();
                    updatedInstallationEntry = Object(tslib__WEBPACK_IMPORTED_MODULE_1__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_1__["__assign"])({}, installationEntry), { authToken: authToken });
                    return [4 /*yield*/, set(appConfig, updatedInstallationEntry)];
                case 2:
                    _a.sent();
                    return [2 /*return*/, authToken];
                case 3:
                    e_1 = _a.sent();
                    if (!(isServerError(e_1) && (e_1.serverCode === 401 || e_1.serverCode === 404))) return [3 /*break*/, 5];
                    // Server returned a "FID not found" or a "Invalid authentication" error.
                    // Generate a new ID next time.
                    return [4 /*yield*/, remove(appConfig)];
                case 4:
                    // Server returned a "FID not found" or a "Invalid authentication" error.
                    // Generate a new ID next time.
                    _a.sent();
                    return [3 /*break*/, 7];
                case 5:
                    updatedInstallationEntry = Object(tslib__WEBPACK_IMPORTED_MODULE_1__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_1__["__assign"])({}, installationEntry), { authToken: { requestStatus: 0 /* NOT_STARTED */ } });
                    return [4 /*yield*/, set(appConfig, updatedInstallationEntry)];
                case 6:
                    _a.sent();
                    _a.label = 7;
                case 7: throw e_1;
                case 8: return [2 /*return*/];
            }
        });
    });
}
function isEntryRegistered(installationEntry) {
    return (installationEntry !== undefined &&
        installationEntry.registrationStatus === 2 /* COMPLETED */);
}
function isAuthTokenValid(authToken) {
    return (authToken.requestStatus === 2 /* COMPLETED */ &&
        !isAuthTokenExpired(authToken));
}
function isAuthTokenExpired(authToken) {
    var now = Date.now();
    return (now < authToken.creationTime ||
        authToken.creationTime + authToken.expiresIn < now + TOKEN_EXPIRATION_BUFFER);
}
/** Returns an updated InstallationEntry with an InProgressAuthToken. */
function makeAuthTokenRequestInProgressEntry(oldEntry) {
    var inProgressAuthToken = {
        requestStatus: 1 /* IN_PROGRESS */,
        requestTime: Date.now()
    };
    return Object(tslib__WEBPACK_IMPORTED_MODULE_1__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_1__["__assign"])({}, oldEntry), { authToken: inProgressAuthToken });
}
function hasAuthTokenRequestTimedOut(authToken) {
    return (authToken.requestStatus === 1 /* IN_PROGRESS */ &&
        authToken.requestTime + PENDING_TIMEOUT_MS < Date.now());
}

/**
 * @license
 * Copyright 2019 Google Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function getId(app) {
    return Object(tslib__WEBPACK_IMPORTED_MODULE_1__["__awaiter"])(this, void 0, void 0, function () {
        var appConfig, _a, installationEntry, registrationPromise;
        return Object(tslib__WEBPACK_IMPORTED_MODULE_1__["__generator"])(this, function (_b) {
            switch (_b.label) {
                case 0:
                    appConfig = extractAppConfig(app);
                    return [4 /*yield*/, getInstallationEntry(appConfig)];
                case 1:
                    _a = _b.sent(), installationEntry = _a.installationEntry, registrationPromise = _a.registrationPromise;
                    if (registrationPromise) {
                        // Suppress registration errors as they are not a problem for getId.
                        registrationPromise.catch(function () { });
                    }
                    if (installationEntry.registrationStatus === 2 /* COMPLETED */) {
                        // If the installation is already registered, update the authentication
                        // token if needed. Suppress errors as they are not relevant to getId.
                        refreshAuthToken(appConfig).catch(function () { });
                    }
                    return [2 /*return*/, installationEntry.fid];
            }
        });
    });
}

/**
 * @license
 * Copyright 2019 Google Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function getToken(app, forceRefresh) {
    if (forceRefresh === void 0) { forceRefresh = false; }
    return Object(tslib__WEBPACK_IMPORTED_MODULE_1__["__awaiter"])(this, void 0, void 0, function () {
        var appConfig;
        return Object(tslib__WEBPACK_IMPORTED_MODULE_1__["__generator"])(this, function (_a) {
            switch (_a.label) {
                case 0:
                    appConfig = extractAppConfig(app);
                    return [4 /*yield*/, completeInstallationRegistration(appConfig)];
                case 1:
                    _a.sent();
                    // At this point we either have a Registered Installation in the DB, or we've
                    // already thrown an error.
                    return [2 /*return*/, refreshAuthToken(appConfig, forceRefresh)];
            }
        });
    });
}
function completeInstallationRegistration(appConfig) {
    return Object(tslib__WEBPACK_IMPORTED_MODULE_1__["__awaiter"])(this, void 0, void 0, function () {
        var _a, installationEntry, registrationPromise;
        return Object(tslib__WEBPACK_IMPORTED_MODULE_1__["__generator"])(this, function (_b) {
            switch (_b.label) {
                case 0: return [4 /*yield*/, getInstallationEntry(appConfig)];
                case 1:
                    _a = _b.sent(), installationEntry = _a.installationEntry, registrationPromise = _a.registrationPromise;
                    if (!registrationPromise) return [3 /*break*/, 3];
                    // A createInstallation request is in progress. Wait until it finishes.
                    return [4 /*yield*/, registrationPromise];
                case 2:
                    // A createInstallation request is in progress. Wait until it finishes.
                    _b.sent();
                    return [3 /*break*/, 4];
                case 3:
                    if (installationEntry.registrationStatus !== 2 /* COMPLETED */) {
                        // Installation ID can't be registered.
                        throw ERROR_FACTORY.create("create-installation-failed" /* CREATE_INSTALLATION_FAILED */);
                    }
                    _b.label = 4;
                case 4: return [2 /*return*/];
            }
        });
    });
}

/**
 * @license
 * Copyright 2019 Google Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function deleteInstallation(appConfig, installationEntry) {
    return Object(tslib__WEBPACK_IMPORTED_MODULE_1__["__awaiter"])(this, void 0, void 0, function () {
        var endpoint, headers, request, response;
        return Object(tslib__WEBPACK_IMPORTED_MODULE_1__["__generator"])(this, function (_a) {
            switch (_a.label) {
                case 0:
                    endpoint = getDeleteEndpoint(appConfig, installationEntry);
                    headers = getHeadersWithAuth(appConfig, installationEntry);
                    request = {
                        method: 'DELETE',
                        headers: headers
                    };
                    return [4 /*yield*/, retryIfServerError(function () { return fetch(endpoint, request); })];
                case 1:
                    response = _a.sent();
                    if (!!response.ok) return [3 /*break*/, 3];
                    return [4 /*yield*/, getErrorFromResponse('Delete Installation', response)];
                case 2: throw _a.sent();
                case 3: return [2 /*return*/];
            }
        });
    });
}
function getDeleteEndpoint(appConfig, _a) {
    var fid = _a.fid;
    return getInstallationsEndpoint(appConfig) + "/" + fid;
}

/**
 * @license
 * Copyright 2019 Google Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function deleteInstallation$1(app) {
    return Object(tslib__WEBPACK_IMPORTED_MODULE_1__["__awaiter"])(this, void 0, void 0, function () {
        var appConfig, entry;
        return Object(tslib__WEBPACK_IMPORTED_MODULE_1__["__generator"])(this, function (_a) {
            switch (_a.label) {
                case 0:
                    appConfig = extractAppConfig(app);
                    return [4 /*yield*/, update(appConfig, function (oldEntry) {
                            if (oldEntry && oldEntry.registrationStatus === 0 /* NOT_STARTED */) {
                                // Delete the unregistered entry without sending a deleteInstallation request.
                                return undefined;
                            }
                            return oldEntry;
                        })];
                case 1:
                    entry = _a.sent();
                    if (!entry) return [3 /*break*/, 6];
                    if (!(entry.registrationStatus === 1 /* IN_PROGRESS */)) return [3 /*break*/, 2];
                    // Can't delete while trying to register.
                    throw ERROR_FACTORY.create("delete-pending-registration" /* DELETE_PENDING_REGISTRATION */);
                case 2:
                    if (!(entry.registrationStatus === 2 /* COMPLETED */)) return [3 /*break*/, 6];
                    if (!!navigator.onLine) return [3 /*break*/, 3];
                    throw ERROR_FACTORY.create("app-offline" /* APP_OFFLINE */);
                case 3: return [4 /*yield*/, deleteInstallation(appConfig, entry)];
                case 4:
                    _a.sent();
                    return [4 /*yield*/, remove(appConfig)];
                case 5:
                    _a.sent();
                    _a.label = 6;
                case 6: return [2 /*return*/];
            }
        });
    });
}

/**
 * @license
 * Copyright 2019 Google Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function registerInstallations(instance) {
    var installationsName = 'installations';
    var factoryMethod = function (app) {
        // Throws if app isn't configured properly.
        extractAppConfig(app);
        return {
            app: app,
            getId: function () { return getId(app); },
            getToken: function (forceRefresh) { return getToken(app, forceRefresh); },
            delete: function () { return deleteInstallation$1(app); }
        };
    };
    instance.INTERNAL.registerService(installationsName, factoryMethod);
}
registerInstallations(_firebase_app__WEBPACK_IMPORTED_MODULE_0___default.a);


//# sourceMappingURL=index.esm.js.map


/***/ }),

/***/ "./node_modules/@firebase/messaging/dist/index.esm.js":
/*!************************************************************!*\
  !*** ./node_modules/@firebase/messaging/dist/index.esm.js ***!
  \************************************************************/
/*! exports provided: isSupported, registerMessaging */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isSupported", function() { return isSupported; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "registerMessaging", function() { return registerMessaging; });
/* harmony import */ var _firebase_app__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @firebase/app */ "./node_modules/@firebase/app/dist/index.cjs.js");
/* harmony import */ var _firebase_app__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_firebase_app__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _firebase_util__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @firebase/util */ "./node_modules/@firebase/util/dist/index.cjs.js");
/* harmony import */ var _firebase_util__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_firebase_util__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _firebase_installations__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @firebase/installations */ "./node_modules/@firebase/installations/dist/index.esm.js");





/**
 * @license
 * Copyright 2017 Google Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var _a;
var ERROR_MAP = (_a = {},
    _a["only-available-in-window" /* AVAILABLE_IN_WINDOW */] = 'This method is available in a Window context.',
    _a["only-available-in-sw" /* AVAILABLE_IN_SW */] = 'This method is available in a service worker context.',
    _a["should-be-overriden" /* SHOULD_BE_INHERITED */] = 'This method should be overriden by extended classes.',
    _a["bad-sender-id" /* BAD_SENDER_ID */] = "Please ensure that 'messagingSenderId' is set " +
        'correctly in the options passed into firebase.initializeApp().',
    _a["permission-default" /* PERMISSION_DEFAULT */] = 'The required permissions were not granted and dismissed instead.',
    _a["permission-blocked" /* PERMISSION_BLOCKED */] = 'The required permissions were not granted and blocked instead.',
    _a["unsupported-browser" /* UNSUPPORTED_BROWSER */] = "This browser doesn't support the API's " +
        'required to use the firebase SDK.',
    _a["notifications-blocked" /* NOTIFICATIONS_BLOCKED */] = 'Notifications have been blocked.',
    _a["failed-serviceworker-registration" /* FAILED_DEFAULT_REGISTRATION */] = 'We are unable to register the ' +
        'default service worker. {$browserErrorMessage}',
    _a["sw-registration-expected" /* SW_REGISTRATION_EXPECTED */] = 'A service worker registration was the expected input.',
    _a["get-subscription-failed" /* GET_SUBSCRIPTION_FAILED */] = 'There was an error when trying to get ' +
        'any existing Push Subscriptions.',
    _a["invalid-saved-token" /* INVALID_SAVED_TOKEN */] = 'Unable to access details of the saved token.',
    _a["sw-reg-redundant" /* SW_REG_REDUNDANT */] = 'The service worker being used for push was made redundant.',
    _a["token-subscribe-failed" /* TOKEN_SUBSCRIBE_FAILED */] = 'A problem occured while subscribing the user to FCM: {$errorInfo}',
    _a["token-subscribe-no-token" /* TOKEN_SUBSCRIBE_NO_TOKEN */] = 'FCM returned no token when subscribing the user to push.',
    _a["token-unsubscribe-failed" /* TOKEN_UNSUBSCRIBE_FAILED */] = 'A problem occured while unsubscribing the ' +
        'user from FCM: {$errorInfo}',
    _a["token-update-failed" /* TOKEN_UPDATE_FAILED */] = 'A problem occured while updating the user from FCM: {$errorInfo}',
    _a["token-update-no-token" /* TOKEN_UPDATE_NO_TOKEN */] = 'FCM returned no token when updating the user to push.',
    _a["use-sw-before-get-token" /* USE_SW_BEFORE_GET_TOKEN */] = 'The useServiceWorker() method may only be called once and must be ' +
        'called before calling getToken() to ensure your service worker is used.',
    _a["invalid-delete-token" /* INVALID_DELETE_TOKEN */] = 'You must pass a valid token into ' +
        'deleteToken(), i.e. the token from getToken().',
    _a["delete-token-not-found" /* DELETE_TOKEN_NOT_FOUND */] = 'The deletion attempt for token could not ' +
        'be performed as the token was not found.',
    _a["delete-scope-not-found" /* DELETE_SCOPE_NOT_FOUND */] = 'The deletion attempt for service worker ' +
        'scope could not be performed as the scope was not found.',
    _a["bg-handler-function-expected" /* BG_HANDLER_FUNCTION_EXPECTED */] = 'The input to setBackgroundMessageHandler() must be a function.',
    _a["no-window-client-to-msg" /* NO_WINDOW_CLIENT_TO_MSG */] = 'An attempt was made to message a non-existant window client.',
    _a["unable-to-resubscribe" /* UNABLE_TO_RESUBSCRIBE */] = 'There was an error while re-subscribing ' +
        'the FCM token for push messaging. Will have to resubscribe the ' +
        'user on next visit. {$errorInfo}',
    _a["no-fcm-token-for-resubscribe" /* NO_FCM_TOKEN_FOR_RESUBSCRIBE */] = 'Could not find an FCM token ' +
        'and as a result, unable to resubscribe. Will have to resubscribe the ' +
        'user on next visit.',
    _a["failed-to-delete-token" /* FAILED_TO_DELETE_TOKEN */] = 'Unable to delete the currently saved token.',
    _a["no-sw-in-reg" /* NO_SW_IN_REG */] = 'Even though the service worker registration was ' +
        'successful, there was a problem accessing the service worker itself.',
    _a["bad-scope" /* BAD_SCOPE */] = 'The service worker scope must be a string with at ' +
        'least one character.',
    _a["bad-vapid-key" /* BAD_VAPID_KEY */] = 'The public VAPID key is not a Uint8Array with 65 bytes.',
    _a["bad-subscription" /* BAD_SUBSCRIPTION */] = 'The subscription must be a valid PushSubscription.',
    _a["bad-token" /* BAD_TOKEN */] = 'The FCM Token used for storage / lookup was not ' +
        'a valid token string.',
    _a["failed-delete-vapid-key" /* FAILED_DELETE_VAPID_KEY */] = 'The VAPID key could not be deleted.',
    _a["invalid-public-vapid-key" /* INVALID_PUBLIC_VAPID_KEY */] = 'The public VAPID key must be a string.',
    _a["use-public-key-before-get-token" /* USE_PUBLIC_KEY_BEFORE_GET_TOKEN */] = 'The usePublicVapidKey() method may only be called once and must be ' +
        'called before calling getToken() to ensure your VAPID key is used.',
    _a["public-vapid-key-decryption-failed" /* PUBLIC_KEY_DECRYPTION_FAILED */] = 'The public VAPID key did not equal 65 bytes when decrypted.',
    _a);
var errorFactory = new _firebase_util__WEBPACK_IMPORTED_MODULE_2__["ErrorFactory"]('messaging', 'Messaging', ERROR_MAP);

/**
 * @license
 * Copyright 2017 Google Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var DEFAULT_PUBLIC_VAPID_KEY = new Uint8Array([
    0x04,
    0x33,
    0x94,
    0xf7,
    0xdf,
    0xa1,
    0xeb,
    0xb1,
    0xdc,
    0x03,
    0xa2,
    0x5e,
    0x15,
    0x71,
    0xdb,
    0x48,
    0xd3,
    0x2e,
    0xed,
    0xed,
    0xb2,
    0x34,
    0xdb,
    0xb7,
    0x47,
    0x3a,
    0x0c,
    0x8f,
    0xc4,
    0xcc,
    0xe1,
    0x6f,
    0x3c,
    0x8c,
    0x84,
    0xdf,
    0xab,
    0xb6,
    0x66,
    0x3e,
    0xf2,
    0x0c,
    0xd4,
    0x8b,
    0xfe,
    0xe3,
    0xf9,
    0x76,
    0x2f,
    0x14,
    0x1c,
    0x63,
    0x08,
    0x6a,
    0x6f,
    0x2d,
    0xb1,
    0x1a,
    0x95,
    0xb0,
    0xce,
    0x37,
    0xc0,
    0x9c,
    0x6e
]);
var ENDPOINT = 'https://fcmregistrations.googleapis.com/v1';
var FN_CAMPAIGN_ID = 'google.c.a.c_id';
var FN_CAMPAIGN_NAME = 'google.c.a.c_l';
var FN_CAMPAIGN_TIME = 'google.c.a.ts';
/** Set to '1' if Analytics is enabled for the campaign */
var FN_CAMPAIGN_ANALYTICS_ENABLED = 'google.c.a.e';

/**
 * @license
 * Copyright 2017 Google Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var MessageType;
(function (MessageType) {
    MessageType["PUSH_MSG_RECEIVED"] = "push-msg-received";
    MessageType["NOTIFICATION_CLICKED"] = "notification-clicked";
})(MessageType || (MessageType = {}));

/**
 * @license
 * Copyright 2018 Google Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function isArrayBufferEqual(a, b) {
    if (a == null || b == null) {
        return false;
    }
    if (a === b) {
        return true;
    }
    if (a.byteLength !== b.byteLength) {
        return false;
    }
    var viewA = new DataView(a);
    var viewB = new DataView(b);
    for (var i = 0; i < a.byteLength; i++) {
        if (viewA.getUint8(i) !== viewB.getUint8(i)) {
            return false;
        }
    }
    return true;
}

/**
 * @license
 * Copyright 2017 Google Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function toBase64(arrayBuffer) {
    var uint8Version = new Uint8Array(arrayBuffer);
    return btoa(String.fromCharCode.apply(String, Object(tslib__WEBPACK_IMPORTED_MODULE_1__["__spread"])(uint8Version)));
}
function arrayBufferToBase64(arrayBuffer) {
    var base64String = toBase64(arrayBuffer);
    return base64String
        .replace(/=/g, '')
        .replace(/\+/g, '-')
        .replace(/\//g, '_');
}

/**
 * @license
 * Copyright 2017 Google Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var SubscriptionManager = /** @class */ (function () {
    function SubscriptionManager() {
    }
    SubscriptionManager.prototype.getToken = function (app, subscription, vapidKey) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_1__["__awaiter"])(this, void 0, void 0, function () {
            var headers, body, subscribeOptions, responseData, response, err_1, message;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_1__["__generator"])(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, getHeaders(app)];
                    case 1:
                        headers = _a.sent();
                        body = getBody(subscription, vapidKey);
                        subscribeOptions = {
                            method: 'POST',
                            headers: headers,
                            body: JSON.stringify(body)
                        };
                        _a.label = 2;
                    case 2:
                        _a.trys.push([2, 5, , 6]);
                        return [4 /*yield*/, fetch(getEndpoint(app), subscribeOptions)];
                    case 3:
                        response = _a.sent();
                        return [4 /*yield*/, response.json()];
                    case 4:
                        responseData = _a.sent();
                        return [3 /*break*/, 6];
                    case 5:
                        err_1 = _a.sent();
                        throw errorFactory.create("token-subscribe-failed" /* TOKEN_SUBSCRIBE_FAILED */, {
                            errorInfo: err_1
                        });
                    case 6:
                        if (responseData.error) {
                            message = responseData.error.message;
                            throw errorFactory.create("token-subscribe-failed" /* TOKEN_SUBSCRIBE_FAILED */, {
                                errorInfo: message
                            });
                        }
                        if (!responseData.token) {
                            throw errorFactory.create("token-subscribe-no-token" /* TOKEN_SUBSCRIBE_NO_TOKEN */);
                        }
                        return [2 /*return*/, responseData.token];
                }
            });
        });
    };
    /**
     * Update the underlying token details for fcmToken.
     */
    SubscriptionManager.prototype.updateToken = function (tokenDetails, app, subscription, vapidKey) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_1__["__awaiter"])(this, void 0, void 0, function () {
            var headers, body, updateOptions, responseData, response, err_2, message;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_1__["__generator"])(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, getHeaders(app)];
                    case 1:
                        headers = _a.sent();
                        body = getBody(subscription, vapidKey);
                        updateOptions = {
                            method: 'PATCH',
                            headers: headers,
                            body: JSON.stringify(body)
                        };
                        _a.label = 2;
                    case 2:
                        _a.trys.push([2, 5, , 6]);
                        return [4 /*yield*/, fetch(getEndpoint(app) + "/" + tokenDetails.fcmToken, updateOptions)];
                    case 3:
                        response = _a.sent();
                        return [4 /*yield*/, response.json()];
                    case 4:
                        responseData = _a.sent();
                        return [3 /*break*/, 6];
                    case 5:
                        err_2 = _a.sent();
                        throw errorFactory.create("token-update-failed" /* TOKEN_UPDATE_FAILED */, {
                            errorInfo: err_2
                        });
                    case 6:
                        if (responseData.error) {
                            message = responseData.error.message;
                            throw errorFactory.create("token-update-failed" /* TOKEN_UPDATE_FAILED */, {
                                errorInfo: message
                            });
                        }
                        if (!responseData.token) {
                            throw errorFactory.create("token-update-no-token" /* TOKEN_UPDATE_NO_TOKEN */);
                        }
                        return [2 /*return*/, responseData.token];
                }
            });
        });
    };
    SubscriptionManager.prototype.deleteToken = function (app, tokenDetails) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_1__["__awaiter"])(this, void 0, void 0, function () {
            var headers, unsubscribeOptions, response, responseData, message, err_3;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_1__["__generator"])(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, getHeaders(app)];
                    case 1:
                        headers = _a.sent();
                        unsubscribeOptions = {
                            method: 'DELETE',
                            headers: headers
                        };
                        _a.label = 2;
                    case 2:
                        _a.trys.push([2, 5, , 6]);
                        return [4 /*yield*/, fetch(getEndpoint(app) + "/" + tokenDetails.fcmToken, unsubscribeOptions)];
                    case 3:
                        response = _a.sent();
                        return [4 /*yield*/, response.json()];
                    case 4:
                        responseData = _a.sent();
                        if (responseData.error) {
                            message = responseData.error.message;
                            throw errorFactory.create("token-unsubscribe-failed" /* TOKEN_UNSUBSCRIBE_FAILED */, {
                                errorInfo: message
                            });
                        }
                        return [3 /*break*/, 6];
                    case 5:
                        err_3 = _a.sent();
                        throw errorFactory.create("token-unsubscribe-failed" /* TOKEN_UNSUBSCRIBE_FAILED */, {
                            errorInfo: err_3
                        });
                    case 6: return [2 /*return*/];
                }
            });
        });
    };
    return SubscriptionManager;
}());
function getEndpoint(app) {
    return ENDPOINT + "/projects/" + app.options.projectId + "/registrations";
}
function getHeaders(app) {
    return Object(tslib__WEBPACK_IMPORTED_MODULE_1__["__awaiter"])(this, void 0, void 0, function () {
        var installations, authToken;
        return Object(tslib__WEBPACK_IMPORTED_MODULE_1__["__generator"])(this, function (_a) {
            switch (_a.label) {
                case 0:
                    installations = app.installations();
                    return [4 /*yield*/, installations.getToken()];
                case 1:
                    authToken = _a.sent();
                    return [2 /*return*/, new Headers({
                            'Content-Type': 'application/json',
                            Accept: 'application/json',
                            'x-goog-api-key': app.options.apiKey,
                            'x-goog-firebase-installations-auth': "FIS " + authToken
                        })];
            }
        });
    });
}
function getBody(subscription, vapidKey) {
    var p256dh = arrayBufferToBase64(subscription.getKey('p256dh'));
    var auth = arrayBufferToBase64(subscription.getKey('auth'));
    var body = {
        web: {
            endpoint: subscription.endpoint,
            p256dh: p256dh,
            auth: auth
        }
    };
    if (!isArrayBufferEqual(vapidKey.buffer, DEFAULT_PUBLIC_VAPID_KEY.buffer)) {
        body.web.applicationPubKey = arrayBufferToBase64(vapidKey);
    }
    return body;
}

/**
 * @license
 * Copyright 2017 Google Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function base64ToArrayBuffer(base64String) {
    var padding = '='.repeat((4 - (base64String.length % 4)) % 4);
    var base64 = (base64String + padding)
        .replace(/\-/g, '+')
        .replace(/_/g, '/');
    var rawData = atob(base64);
    var outputArray = new Uint8Array(rawData.length);
    for (var i = 0; i < rawData.length; ++i) {
        outputArray[i] = rawData.charCodeAt(i);
    }
    return outputArray;
}

/**
 * @license
 * Copyright 2017 Google Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var OLD_DB_NAME = 'undefined';
var OLD_OBJECT_STORE_NAME = 'fcm_token_object_Store';
function handleDb(db, app) {
    if (!db.objectStoreNames.contains(OLD_OBJECT_STORE_NAME)) {
        // We found a database with the name 'undefined', but our expected object
        // store isn't defined.
        return;
    }
    var transaction = db.transaction(OLD_OBJECT_STORE_NAME);
    var objectStore = transaction.objectStore(OLD_OBJECT_STORE_NAME);
    var subscriptionManager = new SubscriptionManager();
    var openCursorRequest = objectStore.openCursor();
    openCursorRequest.onerror = function (event) {
        // NOOP - Nothing we can do.
        console.warn('Unable to cleanup old IDB.', event);
    };
    openCursorRequest.onsuccess = function () {
        var cursor = openCursorRequest.result;
        if (cursor) {
            // cursor.value contains the current record being iterated through
            // this is where you'd do something with the result
            var tokenDetails = cursor.value;
            // eslint-disable-next-line @typescript-eslint/no-floating-promises
            subscriptionManager.deleteToken(app, tokenDetails);
            cursor.continue();
        }
        else {
            db.close();
            indexedDB.deleteDatabase(OLD_DB_NAME);
        }
    };
}
function cleanV1(app) {
    var request = indexedDB.open(OLD_DB_NAME);
    request.onerror = function (_event) {
        // NOOP - Nothing we can do.
    };
    request.onsuccess = function (_event) {
        var db = request.result;
        handleDb(db, app);
    };
}

/**
 * @license
 * Copyright 2017 Google Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var DbInterface = /** @class */ (function () {
    function DbInterface() {
        this.dbPromise = null;
    }
    /** Gets record(s) from the objectStore that match the given key. */
    DbInterface.prototype.get = function (key) {
        return this.createTransaction(function (objectStore) { return objectStore.get(key); });
    };
    /** Gets record(s) from the objectStore that match the given index. */
    DbInterface.prototype.getIndex = function (index, key) {
        function runRequest(objectStore) {
            var idbIndex = objectStore.index(index);
            return idbIndex.get(key);
        }
        return this.createTransaction(runRequest);
    };
    /** Assigns or overwrites the record for the given value. */
    // IndexedDB values are of type "any"
    DbInterface.prototype.put = function (value) {
        return this.createTransaction(function (objectStore) { return objectStore.put(value); }, 'readwrite');
    };
    /** Deletes record(s) from the objectStore that match the given key. */
    DbInterface.prototype.delete = function (key) {
        return this.createTransaction(function (objectStore) { return objectStore.delete(key); }, 'readwrite');
    };
    /**
     * Close the currently open database.
     */
    DbInterface.prototype.closeDatabase = function () {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_1__["__awaiter"])(this, void 0, void 0, function () {
            var db;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_1__["__generator"])(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!this.dbPromise) return [3 /*break*/, 2];
                        return [4 /*yield*/, this.dbPromise];
                    case 1:
                        db = _a.sent();
                        db.close();
                        this.dbPromise = null;
                        _a.label = 2;
                    case 2: return [2 /*return*/];
                }
            });
        });
    };
    /**
     * Creates an IndexedDB Transaction and passes its objectStore to the
     * runRequest function, which runs the database request.
     *
     * @return Promise that resolves with the result of the runRequest function
     */
    DbInterface.prototype.createTransaction = function (runRequest, mode) {
        if (mode === void 0) { mode = 'readonly'; }
        return Object(tslib__WEBPACK_IMPORTED_MODULE_1__["__awaiter"])(this, void 0, void 0, function () {
            var db, transaction, request, result;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_1__["__generator"])(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.getDb()];
                    case 1:
                        db = _a.sent();
                        transaction = db.transaction(this.objectStoreName, mode);
                        request = transaction.objectStore(this.objectStoreName);
                        return [4 /*yield*/, promisify(runRequest(request))];
                    case 2:
                        result = _a.sent();
                        return [2 /*return*/, new Promise(function (resolve, reject) {
                                transaction.oncomplete = function () {
                                    resolve(result);
                                };
                                transaction.onerror = function () {
                                    reject(transaction.error);
                                };
                            })];
                }
            });
        });
    };
    /** Gets the cached db connection or opens a new one. */
    DbInterface.prototype.getDb = function () {
        var _this = this;
        if (!this.dbPromise) {
            this.dbPromise = new Promise(function (resolve, reject) {
                var request = indexedDB.open(_this.dbName, _this.dbVersion);
                request.onsuccess = function () {
                    resolve(request.result);
                };
                request.onerror = function () {
                    _this.dbPromise = null;
                    reject(request.error);
                };
                request.onupgradeneeded = function (event) { return _this.onDbUpgrade(request, event); };
            });
        }
        return this.dbPromise;
    };
    return DbInterface;
}());
/** Promisifies an IDBRequest. Resolves with the IDBRequest's result. */
function promisify(request) {
    return new Promise(function (resolve, reject) {
        request.onsuccess = function () {
            resolve(request.result);
        };
        request.onerror = function () {
            reject(request.error);
        };
    });
}

/**
 * @license
 * Copyright 2017 Google Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var TokenDetailsModel = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_1__["__extends"])(TokenDetailsModel, _super);
    function TokenDetailsModel(app) {
        var _this = _super.call(this) || this;
        _this.app = app;
        _this.dbName = 'fcm_token_details_db';
        _this.dbVersion = 4;
        _this.objectStoreName = 'fcm_token_object_Store';
        return _this;
    }
    TokenDetailsModel.prototype.onDbUpgrade = function (request, event) {
        var db = request.result;
        // Lack of 'break' statements is intentional.
        switch (event.oldVersion) {
            case 0: {
                // New IDB instance
                var objectStore = db.createObjectStore(this.objectStoreName, {
                    keyPath: 'swScope'
                });
                // Make sure the sender ID can be searched
                objectStore.createIndex('fcmSenderId', 'fcmSenderId', {
                    unique: false
                });
                objectStore.createIndex('fcmToken', 'fcmToken', { unique: true });
            }
            case 1: {
                // Prior to version 2, we were using either 'fcm_token_details_db'
                // or 'undefined' as the database name due to bug in the SDK
                // So remove the old tokens and databases.
                cleanV1(this.app);
            }
            case 2: {
                // Update from v2 to v4 directly in a single openCursor request.
                // We need to do this because for some reason, doing a subsequent update on the same data
                // in the same transaction drops the first update.
                var objectStore = request.transaction.objectStore(this.objectStoreName);
                var cursorRequest_1 = objectStore.openCursor();
                cursorRequest_1.onsuccess = function () {
                    var cursor = cursorRequest_1.result;
                    if (cursor) {
                        var value = cursor.value;
                        var newValue = Object(tslib__WEBPACK_IMPORTED_MODULE_1__["__assign"])({}, value);
                        if (!value.createTime) {
                            newValue.createTime = Date.now();
                        }
                        if (typeof value.vapidKey === 'string') {
                            newValue.vapidKey = base64ToArrayBuffer(value.vapidKey);
                        }
                        if (typeof value.auth === 'string') {
                            newValue.auth = base64ToArrayBuffer(value.auth).buffer;
                        }
                        if (typeof value.auth === 'string') {
                            newValue.p256dh = base64ToArrayBuffer(value.p256dh).buffer;
                        }
                        if (typeof value.fcmPushSet === 'string') {
                            delete newValue.fcmPushSet;
                        }
                        cursor.update(newValue);
                        cursor.continue();
                    }
                };
                // Break here as we've already updated to v4.
                break;
            }
            case 3: {
                // Update from V3 to V4.
                var objectStore = request.transaction.objectStore(this.objectStoreName);
                var cursorRequest_2 = objectStore.openCursor();
                cursorRequest_2.onsuccess = function () {
                    var cursor = cursorRequest_2.result;
                    if (cursor) {
                        var value = cursor.value;
                        var newValue = Object(tslib__WEBPACK_IMPORTED_MODULE_1__["__assign"])({}, value);
                        if (typeof value.fcmPushSet === 'string') {
                            delete newValue.fcmPushSet;
                        }
                        cursor.update(newValue);
                        cursor.continue();
                    }
                };
            }
            default: // ignore
        }
    };
    /**
     * Given a token, this method will look up the details in indexedDB.
     */
    TokenDetailsModel.prototype.getTokenDetailsFromToken = function (fcmToken) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_1__["__awaiter"])(this, void 0, void 0, function () {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_1__["__generator"])(this, function (_a) {
                if (!fcmToken) {
                    throw errorFactory.create("bad-token" /* BAD_TOKEN */);
                }
                validateInputs({ fcmToken: fcmToken });
                return [2 /*return*/, this.getIndex('fcmToken', fcmToken)];
            });
        });
    };
    /**
     * Given a service worker scope, this method will look up the details in
     * indexedDB.
     * @return The details associated with that token.
     */
    TokenDetailsModel.prototype.getTokenDetailsFromSWScope = function (swScope) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_1__["__awaiter"])(this, void 0, void 0, function () {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_1__["__generator"])(this, function (_a) {
                if (!swScope) {
                    throw errorFactory.create("bad-scope" /* BAD_SCOPE */);
                }
                validateInputs({ swScope: swScope });
                return [2 /*return*/, this.get(swScope)];
            });
        });
    };
    /**
     * Save the details for the fcm token for re-use at a later date.
     * @param input A plain js object containing args to save.
     */
    TokenDetailsModel.prototype.saveTokenDetails = function (tokenDetails) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_1__["__awaiter"])(this, void 0, void 0, function () {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_1__["__generator"])(this, function (_a) {
                if (!tokenDetails.swScope) {
                    throw errorFactory.create("bad-scope" /* BAD_SCOPE */);
                }
                if (!tokenDetails.vapidKey) {
                    throw errorFactory.create("bad-vapid-key" /* BAD_VAPID_KEY */);
                }
                if (!tokenDetails.endpoint || !tokenDetails.auth || !tokenDetails.p256dh) {
                    throw errorFactory.create("bad-subscription" /* BAD_SUBSCRIPTION */);
                }
                if (!tokenDetails.fcmSenderId) {
                    throw errorFactory.create("bad-sender-id" /* BAD_SENDER_ID */);
                }
                if (!tokenDetails.fcmToken) {
                    throw errorFactory.create("bad-token" /* BAD_TOKEN */);
                }
                validateInputs(tokenDetails);
                return [2 /*return*/, this.put(tokenDetails)];
            });
        });
    };
    /**
     * This method deletes details of the current FCM token.
     * It's returning a promise in case we need to move to an async
     * method for deleting at a later date.
     *
     * @return Resolves once the FCM token details have been deleted and returns
     * the deleted details.
     */
    TokenDetailsModel.prototype.deleteToken = function (token) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_1__["__awaiter"])(this, void 0, void 0, function () {
            var details;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_1__["__generator"])(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (typeof token !== 'string' || token.length === 0) {
                            return [2 /*return*/, Promise.reject(errorFactory.create("invalid-delete-token" /* INVALID_DELETE_TOKEN */))];
                        }
                        return [4 /*yield*/, this.getTokenDetailsFromToken(token)];
                    case 1:
                        details = _a.sent();
                        if (!details) {
                            throw errorFactory.create("delete-token-not-found" /* DELETE_TOKEN_NOT_FOUND */);
                        }
                        return [4 /*yield*/, this.delete(details.swScope)];
                    case 2:
                        _a.sent();
                        return [2 /*return*/, details];
                }
            });
        });
    };
    return TokenDetailsModel;
}(DbInterface));
/**
 * This method takes an object and will check for known arguments and
 * validate the input.
 * @return Promise that resolves if input is valid, rejects otherwise.
 */
function validateInputs(input) {
    if (input.fcmToken) {
        if (typeof input.fcmToken !== 'string' || input.fcmToken.length === 0) {
            throw errorFactory.create("bad-token" /* BAD_TOKEN */);
        }
    }
    if (input.swScope) {
        if (typeof input.swScope !== 'string' || input.swScope.length === 0) {
            throw errorFactory.create("bad-scope" /* BAD_SCOPE */);
        }
    }
    if (input.vapidKey) {
        if (!(input.vapidKey instanceof Uint8Array) ||
            input.vapidKey.length !== 65) {
            throw errorFactory.create("bad-vapid-key" /* BAD_VAPID_KEY */);
        }
    }
    if (input.endpoint) {
        if (typeof input.endpoint !== 'string' || input.endpoint.length === 0) {
            throw errorFactory.create("bad-subscription" /* BAD_SUBSCRIPTION */);
        }
    }
    if (input.auth) {
        if (!(input.auth instanceof ArrayBuffer)) {
            throw errorFactory.create("bad-subscription" /* BAD_SUBSCRIPTION */);
        }
    }
    if (input.p256dh) {
        if (!(input.p256dh instanceof ArrayBuffer)) {
            throw errorFactory.create("bad-subscription" /* BAD_SUBSCRIPTION */);
        }
    }
    if (input.fcmSenderId) {
        if (typeof input.fcmSenderId !== 'string' ||
            input.fcmSenderId.length === 0) {
            throw errorFactory.create("bad-sender-id" /* BAD_SENDER_ID */);
        }
    }
}

/**
 * @license
 * Copyright 2017 Google Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var UNCOMPRESSED_PUBLIC_KEY_SIZE = 65;
var VapidDetailsModel = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_1__["__extends"])(VapidDetailsModel, _super);
    function VapidDetailsModel() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.dbName = 'fcm_vapid_details_db';
        _this.dbVersion = 1;
        _this.objectStoreName = 'fcm_vapid_object_Store';
        return _this;
    }
    VapidDetailsModel.prototype.onDbUpgrade = function (request) {
        var db = request.result;
        db.createObjectStore(this.objectStoreName, { keyPath: 'swScope' });
    };
    /**
     * Given a service worker scope, this method will look up the vapid key
     * in indexedDB.
     */
    VapidDetailsModel.prototype.getVapidFromSWScope = function (swScope) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_1__["__awaiter"])(this, void 0, void 0, function () {
            var result;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_1__["__generator"])(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (typeof swScope !== 'string' || swScope.length === 0) {
                            throw errorFactory.create("bad-scope" /* BAD_SCOPE */);
                        }
                        return [4 /*yield*/, this.get(swScope)];
                    case 1:
                        result = _a.sent();
                        return [2 /*return*/, result ? result.vapidKey : undefined];
                }
            });
        });
    };
    /**
     * Save a vapid key against a swScope for later date.
     */
    VapidDetailsModel.prototype.saveVapidDetails = function (swScope, vapidKey) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_1__["__awaiter"])(this, void 0, void 0, function () {
            var details;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_1__["__generator"])(this, function (_a) {
                if (typeof swScope !== 'string' || swScope.length === 0) {
                    throw errorFactory.create("bad-scope" /* BAD_SCOPE */);
                }
                if (vapidKey === null || vapidKey.length !== UNCOMPRESSED_PUBLIC_KEY_SIZE) {
                    throw errorFactory.create("bad-vapid-key" /* BAD_VAPID_KEY */);
                }
                details = {
                    swScope: swScope,
                    vapidKey: vapidKey
                };
                return [2 /*return*/, this.put(details)];
            });
        });
    };
    /**
     * This method deletes details of the current FCM VAPID key for a SW scope.
     * Resolves once the scope/vapid details have been deleted and returns the
     * deleted vapid key.
     */
    VapidDetailsModel.prototype.deleteVapidDetails = function (swScope) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_1__["__awaiter"])(this, void 0, void 0, function () {
            var vapidKey;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_1__["__generator"])(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.getVapidFromSWScope(swScope)];
                    case 1:
                        vapidKey = _a.sent();
                        if (!vapidKey) {
                            throw errorFactory.create("delete-scope-not-found" /* DELETE_SCOPE_NOT_FOUND */);
                        }
                        return [4 /*yield*/, this.delete(swScope)];
                    case 2:
                        _a.sent();
                        return [2 /*return*/, vapidKey];
                }
            });
        });
    };
    return VapidDetailsModel;
}(DbInterface));

/**
 * @license
 * Copyright 2017 Google Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
// Token should be refreshed once a week.
var TOKEN_EXPIRATION_MILLIS = 7 * 24 * 60 * 60 * 1000; // 7 days
var BaseController = /** @class */ (function () {
    function BaseController(app) {
        var _this = this;
        this.app = app;
        this.vapidDetailsModel = new VapidDetailsModel();
        this.subscriptionManager = new SubscriptionManager();
        if (!app.options.messagingSenderId ||
            typeof app.options.messagingSenderId !== 'string') {
            throw errorFactory.create("bad-sender-id" /* BAD_SENDER_ID */);
        }
        this.INTERNAL = {
            delete: function () { return _this.delete(); }
        };
        this.tokenDetailsModel = new TokenDetailsModel(app);
    }
    BaseController.prototype.getToken = function () {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_1__["__awaiter"])(this, void 0, void 0, function () {
            var currentPermission, swReg, publicVapidKey, pushSubscription, tokenDetails;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_1__["__generator"])(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        currentPermission = this.getNotificationPermission_();
                        if (currentPermission === 'denied') {
                            throw errorFactory.create("notifications-blocked" /* NOTIFICATIONS_BLOCKED */);
                        }
                        else if (currentPermission !== 'granted') {
                            // We must wait for permission to be granted
                            return [2 /*return*/, null];
                        }
                        return [4 /*yield*/, this.getSWRegistration_()];
                    case 1:
                        swReg = _a.sent();
                        return [4 /*yield*/, this.getPublicVapidKey_()];
                    case 2:
                        publicVapidKey = _a.sent();
                        return [4 /*yield*/, this.getPushSubscription(swReg, publicVapidKey)];
                    case 3:
                        pushSubscription = _a.sent();
                        return [4 /*yield*/, this.tokenDetailsModel.getTokenDetailsFromSWScope(swReg.scope)];
                    case 4:
                        tokenDetails = _a.sent();
                        if (tokenDetails) {
                            return [2 /*return*/, this.manageExistingToken(swReg, pushSubscription, publicVapidKey, tokenDetails)];
                        }
                        return [2 /*return*/, this.getNewToken(swReg, pushSubscription, publicVapidKey)];
                }
            });
        });
    };
    /**
     * manageExistingToken is triggered if there's an existing FCM token in the
     * database and it can take 3 different actions:
     * 1) Retrieve the existing FCM token from the database.
     * 2) If VAPID details have changed: Delete the existing token and create a
     * new one with the new VAPID key.
     * 3) If the database cache is invalidated: Send a request to FCM to update
     * the token, and to check if the token is still valid on FCM-side.
     */
    BaseController.prototype.manageExistingToken = function (swReg, pushSubscription, publicVapidKey, tokenDetails) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_1__["__awaiter"])(this, void 0, void 0, function () {
            var isTokenValid, now;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_1__["__generator"])(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        isTokenValid = isTokenStillValid(pushSubscription, publicVapidKey, tokenDetails);
                        if (!isTokenValid) return [3 /*break*/, 1];
                        now = Date.now();
                        if (now < tokenDetails.createTime + TOKEN_EXPIRATION_MILLIS) {
                            return [2 /*return*/, tokenDetails.fcmToken];
                        }
                        else {
                            return [2 /*return*/, this.updateToken(swReg, pushSubscription, publicVapidKey, tokenDetails)];
                        }
                        return [3 /*break*/, 3];
                    case 1: 
                    // If the token is no longer valid (for example if the VAPID details
                    // have changed), delete the existing token from the FCM client and server
                    // database. No need to unsubscribe from the Service Worker as we have a
                    // good push subscription that we'd like to use in getNewToken.
                    return [4 /*yield*/, this.deleteTokenFromDB(tokenDetails.fcmToken)];
                    case 2:
                        // If the token is no longer valid (for example if the VAPID details
                        // have changed), delete the existing token from the FCM client and server
                        // database. No need to unsubscribe from the Service Worker as we have a
                        // good push subscription that we'd like to use in getNewToken.
                        _a.sent();
                        return [2 /*return*/, this.getNewToken(swReg, pushSubscription, publicVapidKey)];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    BaseController.prototype.updateToken = function (swReg, pushSubscription, publicVapidKey, tokenDetails) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_1__["__awaiter"])(this, void 0, void 0, function () {
            var updatedToken, allDetails, e_1;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_1__["__generator"])(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 4, , 6]);
                        return [4 /*yield*/, this.subscriptionManager.updateToken(tokenDetails, this.app, pushSubscription, publicVapidKey)];
                    case 1:
                        updatedToken = _a.sent();
                        allDetails = {
                            swScope: swReg.scope,
                            vapidKey: publicVapidKey,
                            fcmSenderId: this.app.options.messagingSenderId,
                            fcmToken: updatedToken,
                            createTime: Date.now(),
                            endpoint: pushSubscription.endpoint,
                            auth: pushSubscription.getKey('auth'),
                            p256dh: pushSubscription.getKey('p256dh')
                        };
                        return [4 /*yield*/, this.tokenDetailsModel.saveTokenDetails(allDetails)];
                    case 2:
                        _a.sent();
                        return [4 /*yield*/, this.vapidDetailsModel.saveVapidDetails(swReg.scope, publicVapidKey)];
                    case 3:
                        _a.sent();
                        return [2 /*return*/, updatedToken];
                    case 4:
                        e_1 = _a.sent();
                        return [4 /*yield*/, this.deleteToken(tokenDetails.fcmToken)];
                    case 5:
                        _a.sent();
                        throw e_1;
                    case 6: return [2 /*return*/];
                }
            });
        });
    };
    BaseController.prototype.getNewToken = function (swReg, pushSubscription, publicVapidKey) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_1__["__awaiter"])(this, void 0, void 0, function () {
            var newToken, allDetails;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_1__["__generator"])(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.subscriptionManager.getToken(this.app, pushSubscription, publicVapidKey)];
                    case 1:
                        newToken = _a.sent();
                        allDetails = {
                            swScope: swReg.scope,
                            vapidKey: publicVapidKey,
                            fcmSenderId: this.app.options.messagingSenderId,
                            fcmToken: newToken,
                            createTime: Date.now(),
                            endpoint: pushSubscription.endpoint,
                            auth: pushSubscription.getKey('auth'),
                            p256dh: pushSubscription.getKey('p256dh')
                        };
                        return [4 /*yield*/, this.tokenDetailsModel.saveTokenDetails(allDetails)];
                    case 2:
                        _a.sent();
                        return [4 /*yield*/, this.vapidDetailsModel.saveVapidDetails(swReg.scope, publicVapidKey)];
                    case 3:
                        _a.sent();
                        return [2 /*return*/, newToken];
                }
            });
        });
    };
    /**
     * This method deletes tokens that the token manager looks after,
     * unsubscribes the token from FCM  and then unregisters the push
     * subscription if it exists. It returns a promise that indicates
     * whether or not the unsubscribe request was processed successfully.
     */
    BaseController.prototype.deleteToken = function (token) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_1__["__awaiter"])(this, void 0, void 0, function () {
            var registration, pushSubscription;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_1__["__generator"])(this, function (_a) {
                switch (_a.label) {
                    case 0: 
                    // Delete the token details from the database.
                    return [4 /*yield*/, this.deleteTokenFromDB(token)];
                    case 1:
                        // Delete the token details from the database.
                        _a.sent();
                        return [4 /*yield*/, this.getSWRegistration_()];
                    case 2:
                        registration = _a.sent();
                        if (!registration) return [3 /*break*/, 4];
                        return [4 /*yield*/, registration.pushManager.getSubscription()];
                    case 3:
                        pushSubscription = _a.sent();
                        if (pushSubscription) {
                            return [2 /*return*/, pushSubscription.unsubscribe()];
                        }
                        _a.label = 4;
                    case 4: 
                    // If there's no SW, consider it a success.
                    return [2 /*return*/, true];
                }
            });
        });
    };
    /**
     * This method will delete the token from the client database, and make a
     * call to FCM to remove it from the server DB. Does not temper with the
     * push subscription.
     */
    BaseController.prototype.deleteTokenFromDB = function (token) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_1__["__awaiter"])(this, void 0, void 0, function () {
            var tokenDetails;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_1__["__generator"])(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.tokenDetailsModel.deleteToken(token)];
                    case 1:
                        tokenDetails = _a.sent();
                        return [4 /*yield*/, this.subscriptionManager.deleteToken(this.app, tokenDetails)];
                    case 2:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    /**
     * Gets a PushSubscription for the current user.
     */
    BaseController.prototype.getPushSubscription = function (swRegistration, publicVapidKey) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_1__["__awaiter"])(this, void 0, void 0, function () {
            var subscription;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_1__["__generator"])(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, swRegistration.pushManager.getSubscription()];
                    case 1:
                        subscription = _a.sent();
                        if (subscription) {
                            return [2 /*return*/, subscription];
                        }
                        return [2 /*return*/, swRegistration.pushManager.subscribe({
                                userVisibleOnly: true,
                                applicationServerKey: publicVapidKey
                            })];
                }
            });
        });
    };
    //
    // The following methods should only be available in the window.
    //
    /**
     * @deprecated Use Notification.requestPermission() instead.
     * https://developer.mozilla.org/en-US/docs/Web/API/Notification/requestPermission
     */
    BaseController.prototype.requestPermission = function () {
        throw errorFactory.create("only-available-in-window" /* AVAILABLE_IN_WINDOW */);
    };
    BaseController.prototype.useServiceWorker = function (_registration) {
        throw errorFactory.create("only-available-in-window" /* AVAILABLE_IN_WINDOW */);
    };
    BaseController.prototype.usePublicVapidKey = function (_b64PublicKey) {
        throw errorFactory.create("only-available-in-window" /* AVAILABLE_IN_WINDOW */);
    };
    BaseController.prototype.onMessage = function (_nextOrObserver, _error, _completed) {
        throw errorFactory.create("only-available-in-window" /* AVAILABLE_IN_WINDOW */);
    };
    BaseController.prototype.onTokenRefresh = function (_nextOrObserver, _error, _completed) {
        throw errorFactory.create("only-available-in-window" /* AVAILABLE_IN_WINDOW */);
    };
    //
    // The following methods are used by the service worker only.
    //
    BaseController.prototype.setBackgroundMessageHandler = function (_callback) {
        throw errorFactory.create("only-available-in-sw" /* AVAILABLE_IN_SW */);
    };
    //
    // The following methods are used by the service themselves and not exposed
    // publicly or not expected to be used by developers.
    //
    /**
     * This method is required to adhere to the Firebase interface.
     * It closes any currently open indexdb database connections.
     */
    BaseController.prototype.delete = function () {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_1__["__awaiter"])(this, void 0, void 0, function () {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_1__["__generator"])(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, Promise.all([
                            this.tokenDetailsModel.closeDatabase(),
                            this.vapidDetailsModel.closeDatabase()
                        ])];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    /**
     * Returns the current Notification Permission state.
     */
    BaseController.prototype.getNotificationPermission_ = function () {
        return Notification.permission;
    };
    BaseController.prototype.getTokenDetailsModel = function () {
        return this.tokenDetailsModel;
    };
    BaseController.prototype.getVapidDetailsModel = function () {
        return this.vapidDetailsModel;
    };
    // Visible for testing
    // TODO: make protected
    BaseController.prototype.getSubscriptionManager = function () {
        return this.subscriptionManager;
    };
    return BaseController;
}());
/**
 * Checks if the tokenDetails match the details provided in the clients.
 */
function isTokenStillValid(pushSubscription, publicVapidKey, tokenDetails) {
    if (!tokenDetails.vapidKey ||
        !isArrayBufferEqual(publicVapidKey.buffer, tokenDetails.vapidKey.buffer)) {
        return false;
    }
    var isEndpointEqual = pushSubscription.endpoint === tokenDetails.endpoint;
    var isAuthEqual = isArrayBufferEqual(pushSubscription.getKey('auth'), tokenDetails.auth);
    var isP256dhEqual = isArrayBufferEqual(pushSubscription.getKey('p256dh'), tokenDetails.p256dh);
    return isEndpointEqual && isAuthEqual && isP256dhEqual;
}

/**
 * @license
 * Copyright 2017 Google Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var FCM_MSG = 'FCM_MSG';
var SwController = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_1__["__extends"])(SwController, _super);
    function SwController(app) {
        var _this = _super.call(this, app) || this;
        _this.bgMessageHandler = null;
        self.addEventListener('push', function (e) {
            _this.onPush(e);
        });
        self.addEventListener('pushsubscriptionchange', function (e) {
            _this.onSubChange(e);
        });
        self.addEventListener('notificationclick', function (e) {
            _this.onNotificationClick(e);
        });
        return _this;
    }
    // Visible for testing
    // TODO: Make private
    SwController.prototype.onPush = function (event) {
        event.waitUntil(this.onPush_(event));
    };
    // Visible for testing
    // TODO: Make private
    SwController.prototype.onSubChange = function (event) {
        event.waitUntil(this.onSubChange_(event));
    };
    // Visible for testing
    // TODO: Make private
    SwController.prototype.onNotificationClick = function (event) {
        event.waitUntil(this.onNotificationClick_(event));
    };
    /**
     * A handler for push events that shows notifications based on the content of
     * the payload.
     *
     * The payload must be a JSON-encoded Object with a `notification` key. The
     * value of the `notification` property will be used as the NotificationOptions
     * object passed to showNotification. Additionally, the `title` property of the
     * notification object will be used as the title.
     *
     * If there is no notification data in the payload then no notification will be
     * shown.
     */
    SwController.prototype.onPush_ = function (event) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_1__["__awaiter"])(this, void 0, void 0, function () {
            var msgPayload, hasVisibleClients, notificationDetails, notificationTitle, reg, actions, maxActions;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_1__["__generator"])(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!event.data) {
                            return [2 /*return*/];
                        }
                        try {
                            msgPayload = event.data.json();
                        }
                        catch (err) {
                            // Not JSON so not an FCM message
                            return [2 /*return*/];
                        }
                        return [4 /*yield*/, this.hasVisibleClients_()];
                    case 1:
                        hasVisibleClients = _a.sent();
                        if (hasVisibleClients) {
                            // App in foreground. Send to page.
                            return [2 /*return*/, this.sendMessageToWindowClients_(msgPayload)];
                        }
                        notificationDetails = this.getNotificationData_(msgPayload);
                        if (!notificationDetails) return [3 /*break*/, 3];
                        notificationTitle = notificationDetails.title || '';
                        return [4 /*yield*/, this.getSWRegistration_()];
                    case 2:
                        reg = _a.sent();
                        actions = notificationDetails.actions;
                        maxActions = Notification.maxActions;
                        if (actions && maxActions && actions.length > maxActions) {
                            console.warn("This browser only supports " + maxActions + " actions." +
                                "The remaining actions will not be displayed.");
                        }
                        return [2 /*return*/, reg.showNotification(notificationTitle, notificationDetails)];
                    case 3:
                        if (!this.bgMessageHandler) return [3 /*break*/, 5];
                        return [4 /*yield*/, this.bgMessageHandler(msgPayload)];
                    case 4:
                        _a.sent();
                        return [2 /*return*/];
                    case 5: return [2 /*return*/];
                }
            });
        });
    };
    SwController.prototype.onSubChange_ = function (_event) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_1__["__awaiter"])(this, void 0, void 0, function () {
            var registration, err_1, err_2, tokenDetailsModel, tokenDetails;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_1__["__generator"])(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, this.getSWRegistration_()];
                    case 1:
                        registration = _a.sent();
                        return [3 /*break*/, 3];
                    case 2:
                        err_1 = _a.sent();
                        throw errorFactory.create("unable-to-resubscribe" /* UNABLE_TO_RESUBSCRIBE */, {
                            errorInfo: err_1
                        });
                    case 3:
                        _a.trys.push([3, 5, , 8]);
                        return [4 /*yield*/, registration.pushManager.getSubscription()];
                    case 4:
                        _a.sent();
                        return [3 /*break*/, 8];
                    case 5:
                        err_2 = _a.sent();
                        tokenDetailsModel = this.getTokenDetailsModel();
                        return [4 /*yield*/, tokenDetailsModel.getTokenDetailsFromSWScope(registration.scope)];
                    case 6:
                        tokenDetails = _a.sent();
                        if (!tokenDetails) {
                            // This should rarely occure, but could if indexedDB
                            // is corrupted or wiped
                            throw err_2;
                        }
                        // Attempt to delete the token if we know it's bad
                        return [4 /*yield*/, this.deleteToken(tokenDetails.fcmToken)];
                    case 7:
                        // Attempt to delete the token if we know it's bad
                        _a.sent();
                        throw err_2;
                    case 8: return [2 /*return*/];
                }
            });
        });
    };
    SwController.prototype.onNotificationClick_ = function (event) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_1__["__awaiter"])(this, void 0, void 0, function () {
            var msgPayload, link, windowClient, internalMsg;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_1__["__generator"])(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!event.notification ||
                            !event.notification.data ||
                            !event.notification.data[FCM_MSG]) {
                            // Not an FCM notification, do nothing.
                            return [2 /*return*/];
                        }
                        else if (event.action) {
                            // User clicked on an action button.
                            // This will allow devs to act on action button clicks by using a custom
                            // onNotificationClick listener that they define.
                            return [2 /*return*/];
                        }
                        // Prevent other listeners from receiving the event
                        event.stopImmediatePropagation();
                        event.notification.close();
                        msgPayload = event.notification.data[FCM_MSG];
                        if (!msgPayload.notification) {
                            // Nothing to do.
                            return [2 /*return*/];
                        }
                        link = (msgPayload.fcmOptions && msgPayload.fcmOptions.link) ||
                            msgPayload.notification.click_action;
                        if (!link) {
                            if (msgPayload.data && FN_CAMPAIGN_ID in msgPayload.data) {
                                link = self.location.origin;
                            }
                            else {
                                // Nothing to do.
                                return [2 /*return*/];
                            }
                        }
                        return [4 /*yield*/, this.getWindowClient_(link)];
                    case 1:
                        windowClient = _a.sent();
                        if (!!windowClient) return [3 /*break*/, 4];
                        return [4 /*yield*/, self.clients.openWindow(link)];
                    case 2:
                        // Unable to find window client so need to open one.
                        windowClient = _a.sent();
                        // Wait three seconds for the client to initialize and set up the message
                        // handler so that it can receive the message.
                        return [4 /*yield*/, sleep(3000)];
                    case 3:
                        // Wait three seconds for the client to initialize and set up the message
                        // handler so that it can receive the message.
                        _a.sent();
                        return [3 /*break*/, 6];
                    case 4: return [4 /*yield*/, windowClient.focus()];
                    case 5:
                        windowClient = _a.sent();
                        _a.label = 6;
                    case 6:
                        if (!windowClient) {
                            // Window Client will not be returned if it's for a third party origin.
                            return [2 /*return*/];
                        }
                        // Delete notification and fcmOptions data from payload before sending to
                        // the page.
                        delete msgPayload.notification;
                        delete msgPayload.fcmOptions;
                        internalMsg = createNewMsg(MessageType.NOTIFICATION_CLICKED, msgPayload);
                        // Attempt to send a message to the client to handle the data
                        // Is affected by: https://github.com/slightlyoff/ServiceWorker/issues/728
                        return [2 /*return*/, this.attemptToMessageClient_(windowClient, internalMsg)];
                }
            });
        });
    };
    // Visible for testing
    // TODO: Make private
    SwController.prototype.getNotificationData_ = function (msgPayload) {
        var _a;
        if (!msgPayload) {
            return;
        }
        if (typeof msgPayload.notification !== 'object') {
            return;
        }
        var notificationInformation = Object(tslib__WEBPACK_IMPORTED_MODULE_1__["__assign"])({}, msgPayload.notification);
        // Put the message payload under FCM_MSG name so we can identify the
        // notification as being an FCM notification vs a notification from
        // somewhere else (i.e. normal web push or developer generated
        // notification).
        notificationInformation.data = Object(tslib__WEBPACK_IMPORTED_MODULE_1__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_1__["__assign"])({}, msgPayload.notification.data), (_a = {}, _a[FCM_MSG] = msgPayload, _a));
        return notificationInformation;
    };
    /**
     * Calling setBackgroundMessageHandler will opt in to some specific
     * behaviours.
     * 1.) If a notification doesn't need to be shown due to a window already
     * being visible, then push messages will be sent to the page.
     * 2.) If a notification needs to be shown, and the message contains no
     * notification data this method will be called
     * and the promise it returns will be passed to event.waitUntil.
     * If you do not set this callback then all push messages will let and the
     * developer can handle them in a their own 'push' event callback
     *
     * @param callback The callback to be called when a push message is received
     * and a notification must be shown. The callback will be given the data from
     * the push message.
     */
    SwController.prototype.setBackgroundMessageHandler = function (callback) {
        if (!callback || typeof callback !== 'function') {
            throw errorFactory.create("bg-handler-function-expected" /* BG_HANDLER_FUNCTION_EXPECTED */);
        }
        this.bgMessageHandler = callback;
    };
    /**
     * @param url The URL to look for when focusing a client.
     * @return Returns an existing window client or a newly opened WindowClient.
     */
    // Visible for testing
    // TODO: Make private
    SwController.prototype.getWindowClient_ = function (url) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_1__["__awaiter"])(this, void 0, void 0, function () {
            var parsedURL, clientList, suitableClient, i, parsedClientUrl;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_1__["__generator"])(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        parsedURL = new URL(url, self.location.href).href;
                        return [4 /*yield*/, getClientList()];
                    case 1:
                        clientList = _a.sent();
                        suitableClient = null;
                        for (i = 0; i < clientList.length; i++) {
                            parsedClientUrl = new URL(clientList[i].url, self.location.href)
                                .href;
                            if (parsedClientUrl === parsedURL) {
                                suitableClient = clientList[i];
                                break;
                            }
                        }
                        return [2 /*return*/, suitableClient];
                }
            });
        });
    };
    /**
     * This message will attempt to send the message to a window client.
     * @param client The WindowClient to send the message to.
     * @param message The message to send to the client.
     * @returns Returns a promise that resolves after sending the message. This
     * does not guarantee that the message was successfully received.
     */
    // Visible for testing
    // TODO: Make private
    SwController.prototype.attemptToMessageClient_ = function (client, message) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_1__["__awaiter"])(this, void 0, void 0, function () {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_1__["__generator"])(this, function (_a) {
                // NOTE: This returns a promise in case this API is abstracted later on to
                // do additional work
                if (!client) {
                    throw errorFactory.create("no-window-client-to-msg" /* NO_WINDOW_CLIENT_TO_MSG */);
                }
                client.postMessage(message);
                return [2 /*return*/];
            });
        });
    };
    /**
     * @returns If there is currently a visible WindowClient, this method will
     * resolve to true, otherwise false.
     */
    // Visible for testing
    // TODO: Make private
    SwController.prototype.hasVisibleClients_ = function () {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_1__["__awaiter"])(this, void 0, void 0, function () {
            var clientList;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_1__["__generator"])(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, getClientList()];
                    case 1:
                        clientList = _a.sent();
                        return [2 /*return*/, clientList.some(function (client) {
                                return client.visibilityState === 'visible' &&
                                    // Ignore chrome-extension clients as that matches the background pages
                                    // of extensions, which are always considered visible.
                                    !client.url.startsWith('chrome-extension://');
                            })];
                }
            });
        });
    };
    /**
     * @param msgPayload The data from the push event that should be sent to all
     * available pages.
     * @returns Returns a promise that resolves once the message has been sent to
     * all WindowClients.
     */
    // Visible for testing
    // TODO: Make private
    SwController.prototype.sendMessageToWindowClients_ = function (msgPayload) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_1__["__awaiter"])(this, void 0, void 0, function () {
            var clientList, internalMsg;
            var _this = this;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_1__["__generator"])(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, getClientList()];
                    case 1:
                        clientList = _a.sent();
                        internalMsg = createNewMsg(MessageType.PUSH_MSG_RECEIVED, msgPayload);
                        return [4 /*yield*/, Promise.all(clientList.map(function (client) {
                                return _this.attemptToMessageClient_(client, internalMsg);
                            }))];
                    case 2:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    /**
     * This will register the default service worker and return the registration.
     * @return he service worker registration to be used for the push service.
     */
    SwController.prototype.getSWRegistration_ = function () {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_1__["__awaiter"])(this, void 0, void 0, function () {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_1__["__generator"])(this, function (_a) {
                return [2 /*return*/, self.registration];
            });
        });
    };
    /**
     * This will return the default VAPID key or the uint8array version of the
     * public VAPID key provided by the developer.
     */
    SwController.prototype.getPublicVapidKey_ = function () {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_1__["__awaiter"])(this, void 0, void 0, function () {
            var swReg, vapidKeyFromDatabase;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_1__["__generator"])(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.getSWRegistration_()];
                    case 1:
                        swReg = _a.sent();
                        if (!swReg) {
                            throw errorFactory.create("sw-registration-expected" /* SW_REGISTRATION_EXPECTED */);
                        }
                        return [4 /*yield*/, this.getVapidDetailsModel().getVapidFromSWScope(swReg.scope)];
                    case 2:
                        vapidKeyFromDatabase = _a.sent();
                        if (vapidKeyFromDatabase == null) {
                            return [2 /*return*/, DEFAULT_PUBLIC_VAPID_KEY];
                        }
                        return [2 /*return*/, vapidKeyFromDatabase];
                }
            });
        });
    };
    return SwController;
}(BaseController));
function getClientList() {
    return self.clients.matchAll({
        type: 'window',
        includeUncontrolled: true
        // TS doesn't know that "type: 'window'" means it'll return WindowClient[]
    });
}
function createNewMsg(msgType, msgData) {
    return {
        firebaseMessagingType: msgType,
        firebaseMessagingData: msgData
    };
}
function sleep(ms) {
    return new Promise(function (resolve) {
        setTimeout(resolve, ms);
    });
}

/**
 * @license
 * Copyright 2017 Google Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var DEFAULT_SW_PATH = '/firebase-messaging-sw.js';
var DEFAULT_SW_SCOPE = '/firebase-cloud-messaging-push-scope';

/**
 * @license
 * Copyright 2017 Google Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var WindowController = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_1__["__extends"])(WindowController, _super);
    /**
     * A service that provides a MessagingService instance.
     */
    function WindowController(app) {
        var _this = _super.call(this, app) || this;
        _this.registrationToUse = null;
        _this.publicVapidKeyToUse = null;
        _this.messageObserver = null;
        // @ts-ignore: Unused variable error, this is not implemented yet.
        _this.tokenRefreshObserver = null;
        _this.onMessageInternal = Object(_firebase_util__WEBPACK_IMPORTED_MODULE_2__["createSubscribe"])(function (observer) {
            _this.messageObserver = observer;
        });
        _this.onTokenRefreshInternal = Object(_firebase_util__WEBPACK_IMPORTED_MODULE_2__["createSubscribe"])(function (observer) {
            _this.tokenRefreshObserver = observer;
        });
        _this.setupSWMessageListener_();
        return _this;
    }
    /**
     * Request permission if it is not currently granted
     *
     * @return Resolves if the permission was granted, otherwise rejects
     *
     * @deprecated Use Notification.requestPermission() instead.
     * https://developer.mozilla.org/en-US/docs/Web/API/Notification/requestPermission
     */
    WindowController.prototype.requestPermission = function () {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_1__["__awaiter"])(this, void 0, void 0, function () {
            var permissionResult;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_1__["__generator"])(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (this.getNotificationPermission_() === 'granted') {
                            return [2 /*return*/];
                        }
                        return [4 /*yield*/, Notification.requestPermission()];
                    case 1:
                        permissionResult = _a.sent();
                        if (permissionResult === 'granted') {
                            return [2 /*return*/];
                        }
                        else if (permissionResult === 'denied') {
                            throw errorFactory.create("permission-blocked" /* PERMISSION_BLOCKED */);
                        }
                        else {
                            throw errorFactory.create("permission-default" /* PERMISSION_DEFAULT */);
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    /**
     * This method allows a developer to override the default service worker and
     * instead use a custom service worker.
     *
     * @param registration The service worker registration that should be used to
     * receive the push messages.
     */
    WindowController.prototype.useServiceWorker = function (registration) {
        if (!(registration instanceof ServiceWorkerRegistration)) {
            throw errorFactory.create("sw-registration-expected" /* SW_REGISTRATION_EXPECTED */);
        }
        if (this.registrationToUse != null) {
            throw errorFactory.create("use-sw-before-get-token" /* USE_SW_BEFORE_GET_TOKEN */);
        }
        this.registrationToUse = registration;
    };
    /**
     * This method allows a developer to override the default vapid key
     * and instead use a custom VAPID public key.
     *
     * @param publicKey A URL safe base64 encoded string.
     */
    WindowController.prototype.usePublicVapidKey = function (publicKey) {
        if (typeof publicKey !== 'string') {
            throw errorFactory.create("invalid-public-vapid-key" /* INVALID_PUBLIC_VAPID_KEY */);
        }
        if (this.publicVapidKeyToUse != null) {
            throw errorFactory.create("use-public-key-before-get-token" /* USE_PUBLIC_KEY_BEFORE_GET_TOKEN */);
        }
        var parsedKey = base64ToArrayBuffer(publicKey);
        if (parsedKey.length !== 65) {
            throw errorFactory.create("public-vapid-key-decryption-failed" /* PUBLIC_KEY_DECRYPTION_FAILED */);
        }
        this.publicVapidKeyToUse = parsedKey;
    };
    /**
     * @export
     * @param nextOrObserver An observer object or a function triggered on
     * message.
     * @param error A function triggered on message error.
     * @param completed function triggered when the observer is removed.
     * @return The unsubscribe function for the observer.
     */
    WindowController.prototype.onMessage = function (nextOrObserver, error, completed) {
        if (typeof nextOrObserver === 'function') {
            return this.onMessageInternal(nextOrObserver, error, completed);
        }
        else {
            return this.onMessageInternal(nextOrObserver);
        }
    };
    /**
     * @param nextOrObserver An observer object or a function triggered on token
     * refresh.
     * @param error A function triggered on token refresh error.
     * @param completed function triggered when the observer is removed.
     * @return The unsubscribe function for the observer.
     */
    WindowController.prototype.onTokenRefresh = function (nextOrObserver, error, completed) {
        if (typeof nextOrObserver === 'function') {
            return this.onTokenRefreshInternal(nextOrObserver, error, completed);
        }
        else {
            return this.onTokenRefreshInternal(nextOrObserver);
        }
    };
    /**
     * Given a registration, wait for the service worker it relates to
     * become activer
     * @param registration Registration to wait for service worker to become active
     * @return Wait for service worker registration to become active
     */
    // Visible for testing
    // TODO: Make private
    WindowController.prototype.waitForRegistrationToActivate_ = function (registration) {
        var serviceWorker = registration.installing || registration.waiting || registration.active;
        return new Promise(function (resolve, reject) {
            if (!serviceWorker) {
                // This is a rare scenario but has occured in firefox
                reject(errorFactory.create("no-sw-in-reg" /* NO_SW_IN_REG */));
                return;
            }
            // Because the Promise function is called on next tick there is a
            // small chance that the worker became active or redundant already.
            if (serviceWorker.state === 'activated') {
                resolve(registration);
                return;
            }
            if (serviceWorker.state === 'redundant') {
                reject(errorFactory.create("sw-reg-redundant" /* SW_REG_REDUNDANT */));
                return;
            }
            var stateChangeListener = function () {
                if (serviceWorker.state === 'activated') {
                    resolve(registration);
                }
                else if (serviceWorker.state === 'redundant') {
                    reject(errorFactory.create("sw-reg-redundant" /* SW_REG_REDUNDANT */));
                }
                else {
                    // Return early and wait to next state change
                    return;
                }
                serviceWorker.removeEventListener('statechange', stateChangeListener);
            };
            serviceWorker.addEventListener('statechange', stateChangeListener);
        });
    };
    /**
     * This will register the default service worker and return the registration
     * @return The service worker registration to be used for the push service.
     */
    WindowController.prototype.getSWRegistration_ = function () {
        var _this = this;
        if (this.registrationToUse) {
            return this.waitForRegistrationToActivate_(this.registrationToUse);
        }
        // Make the registration null so we know useServiceWorker will not
        // use a new service worker as registrationToUse is no longer undefined
        this.registrationToUse = null;
        return navigator.serviceWorker
            .register(DEFAULT_SW_PATH, {
            scope: DEFAULT_SW_SCOPE
        })
            .catch(function (err) {
            throw errorFactory.create("failed-serviceworker-registration" /* FAILED_DEFAULT_REGISTRATION */, {
                browserErrorMessage: err.message
            });
        })
            .then(function (registration) {
            return _this.waitForRegistrationToActivate_(registration).then(function () {
                _this.registrationToUse = registration;
                // We update after activation due to an issue with Firefox v49 where
                // a race condition occassionally causes the service worker to not
                // install
                // eslint-disable-next-line @typescript-eslint/no-floating-promises
                registration.update();
                return registration;
            });
        });
    };
    /**
     * This will return the default VAPID key or the uint8array version of the
     * public VAPID key provided by the developer.
     */
    WindowController.prototype.getPublicVapidKey_ = function () {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_1__["__awaiter"])(this, void 0, void 0, function () {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_1__["__generator"])(this, function (_a) {
                if (this.publicVapidKeyToUse) {
                    return [2 /*return*/, this.publicVapidKeyToUse];
                }
                return [2 /*return*/, DEFAULT_PUBLIC_VAPID_KEY];
            });
        });
    };
    /**
     * This method will set up a message listener to handle
     * events from the service worker that should trigger
     * events in the page.
     */
    // Visible for testing
    // TODO: Make private
    WindowController.prototype.setupSWMessageListener_ = function () {
        var _this = this;
        navigator.serviceWorker.addEventListener('message', function (event) {
            if (!event.data ||
                !event.data.firebaseMessagingType ||
                !event.data.firebaseMessagingData) {
                // Not a message from FCM
                return;
            }
            var _a = event.data, firebaseMessagingType = _a.firebaseMessagingType, firebaseMessagingData = _a.firebaseMessagingData;
            if (_this.messageObserver) {
                _this.messageObserver.next(firebaseMessagingData);
            }
            var data = firebaseMessagingData.data;
            if (data &&
                FN_CAMPAIGN_ID in data &&
                data[FN_CAMPAIGN_ANALYTICS_ENABLED] === '1') {
                // This message has a campaign id, meaning it was sent using the FN Console.
                // Analytics is enabled on this message, so we should log it.
                var eventType = getEventType(firebaseMessagingType);
                _this.app.INTERNAL.analytics.logEvent(eventType, 
                /* eslint-disable camelcase */
                {
                    message_name: data[FN_CAMPAIGN_NAME],
                    message_id: data[FN_CAMPAIGN_ID],
                    message_time: data[FN_CAMPAIGN_TIME],
                    message_device_time: Math.floor(Date.now() / 1000)
                }
                /* eslint-enable camelcase */
                );
            }
        }, false);
    };
    return WindowController;
}(BaseController));
function getEventType(messageType) {
    switch (messageType) {
        case MessageType.NOTIFICATION_CLICKED:
            return 'notification_open';
        case MessageType.PUSH_MSG_RECEIVED:
            return 'notification_foreground';
        default:
            throw new Error();
    }
}

/**
 * @license
 * Copyright 2017 Google Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function registerMessaging(instance) {
    var messagingName = 'messaging';
    var factoryMethod = function (app) {
        if (!isSupported()) {
            throw errorFactory.create("unsupported-browser" /* UNSUPPORTED_BROWSER */);
        }
        if (self && 'ServiceWorkerGlobalScope' in self) {
            // Running in ServiceWorker context
            return new SwController(app);
        }
        else {
            // Assume we are in the window context.
            return new WindowController(app);
        }
    };
    var namespaceExports = {
        isSupported: isSupported
    };
    instance.INTERNAL.registerService(messagingName, factoryMethod, namespaceExports);
}
registerMessaging(_firebase_app__WEBPACK_IMPORTED_MODULE_0___default.a);
function isSupported() {
    if (self && 'ServiceWorkerGlobalScope' in self) {
        // Running in ServiceWorker context
        return isSWControllerSupported();
    }
    else {
        // Assume we are in the window context.
        return isWindowControllerSupported();
    }
}
/**
 * Checks to see if the required APIs exist.
 */
function isWindowControllerSupported() {
    return (navigator.cookieEnabled &&
        'serviceWorker' in navigator &&
        'PushManager' in window &&
        'Notification' in window &&
        'fetch' in window &&
        ServiceWorkerRegistration.prototype.hasOwnProperty('showNotification') &&
        PushSubscription.prototype.hasOwnProperty('getKey'));
}
/**
 * Checks to see if the required APIs exist within SW Context.
 */
function isSWControllerSupported() {
    return ('PushManager' in self &&
        'Notification' in self &&
        ServiceWorkerRegistration.prototype.hasOwnProperty('showNotification') &&
        PushSubscription.prototype.hasOwnProperty('getKey'));
}


//# sourceMappingURL=index.esm.js.map


/***/ }),

/***/ "./node_modules/@firebase/performance/dist/index.cjs.js":
/*!**************************************************************!*\
  !*** ./node_modules/@firebase/performance/dist/index.cjs.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, '__esModule', { value: true });

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var firebase = _interopDefault(__webpack_require__(/*! @firebase/app */ "./node_modules/@firebase/app/dist/index.cjs.js"));
var tslib = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
var util = __webpack_require__(/*! @firebase/util */ "./node_modules/@firebase/util/dist/index.cjs.js");
__webpack_require__(/*! @firebase/installations */ "./node_modules/@firebase/installations/dist/index.esm.js");
var logger$1 = __webpack_require__(/*! @firebase/logger */ "./node_modules/@firebase/logger/dist/index.esm.js");

var version = "0.2.21";

/**
 * @license
 * Copyright 2017 Google Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var SDK_VERSION = version;
/** The prefix for start User Timing marks used for creating Traces. */
var TRACE_START_MARK_PREFIX = 'FB-PERF-TRACE-START';
/** The prefix for stop User Timing marks used for creating Traces. */
var TRACE_STOP_MARK_PREFIX = 'FB-PERF-TRACE-STOP';
/** The prefix for User Timing measure used for creating Traces. */
var TRACE_MEASURE_PREFIX = 'FB-PERF-TRACE-MEASURE';
/** The prefix for out of the box page load Trace name. */
var OOB_TRACE_PAGE_LOAD_PREFIX = '_wt_';
var FIRST_PAINT_COUNTER_NAME = '_fp';
var FIRST_CONTENTFUL_PAINT_COUNTER_NAME = '_fcp';
var FIRST_INPUT_DELAY_COUNTER_NAME = '_fid';
var CONFIG_LOCAL_STORAGE_KEY = '@firebase/performance/config';
var CONFIG_EXPIRY_LOCAL_STORAGE_KEY = '@firebase/performance/configexpire';
var SERVICE = 'performance';
var SERVICE_NAME = 'Performance';

/**
 * @license
 * Copyright 2019 Google Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var _a;
var ERROR_DESCRIPTION_MAP = (_a = {},
    _a["trace started" /* TRACE_STARTED_BEFORE */] = 'Trace {$traceName} was started before.',
    _a["trace stopped" /* TRACE_STOPPED_BEFORE */] = 'Trace {$traceName} is not running.',
    _a["no window" /* NO_WINDOW */] = 'Window is not available.',
    _a["no app id" /* NO_APP_ID */] = 'App id is not available.',
    _a["no project id" /* NO_PROJECT_ID */] = 'Project id is not available.',
    _a["no api key" /* NO_API_KEY */] = 'Api key is not available.',
    _a["invalid cc log" /* INVALID_CC_LOG */] = 'Attempted to queue invalid cc event',
    _a["FB not default" /* FB_NOT_DEFAULT */] = 'Performance can only start when Firebase app instance is the default one.',
    _a["RC response not ok" /* RC_NOT_OK */] = 'RC response is not ok',
    _a["invalid attribute name" /* INVALID_ATTRIBUTE_NAME */] = 'Attribute name {$attributeName} is invalid.',
    _a["invalid attribute value" /* INVALID_ATTRIBUTE_VALUE */] = 'Attribute value {$attributeValue} is invalid.',
    _a["invalide custom metric name" /* INVALID_CUSTOM_METRIC_NAME */] = 'Custom metric name {$customMetricName} is invalid',
    _a);
var ERROR_FACTORY = new util.ErrorFactory(SERVICE, SERVICE_NAME, ERROR_DESCRIPTION_MAP);

/**
 * @license
 * Copyright 2019 Google Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var apiInstance;
var windowInstance;
/**
 * This class holds a reference to various browser related objects injected by set methods.
 */
var Api = /** @class */ (function () {
    function Api(window) {
        if (!window) {
            throw ERROR_FACTORY.create("no window" /* NO_WINDOW */);
        }
        this.performance = window.performance;
        this.PerformanceObserver = window.PerformanceObserver;
        this.windowLocation = window.location;
        this.navigator = window.navigator;
        this.document = window.document;
        if (this.navigator && this.navigator.cookieEnabled) {
            // If user blocks cookies on the browser, accessing localStorage will throw an exception.
            this.localStorage = window.localStorage;
        }
        if (window.perfMetrics && window.perfMetrics.onFirstInputDelay) {
            this.onFirstInputDelay = window.perfMetrics.onFirstInputDelay;
        }
    }
    Api.prototype.getUrl = function () {
        // Do not capture the string query part of url.
        return this.windowLocation.href.split('?')[0];
    };
    Api.prototype.mark = function (name) {
        if (!this.performance || !this.performance.mark) {
            return;
        }
        this.performance.mark(name);
    };
    Api.prototype.measure = function (measureName, mark1, mark2) {
        if (!this.performance || !this.performance.measure) {
            return;
        }
        this.performance.measure(measureName, mark1, mark2);
    };
    Api.prototype.getEntriesByType = function (type) {
        if (!this.performance || !this.performance.getEntriesByType) {
            return [];
        }
        return this.performance.getEntriesByType(type);
    };
    Api.prototype.getEntriesByName = function (name) {
        if (!this.performance || !this.performance.getEntriesByName) {
            return [];
        }
        return this.performance.getEntriesByName(name);
    };
    Api.prototype.getTimeOrigin = function () {
        // Polyfill the time origin with performance.timing.navigationStart.
        return (this.performance &&
            (this.performance.timeOrigin || this.performance.timing.navigationStart));
    };
    Api.prototype.requiredApisAvailable = function () {
        if (fetch && Promise && this.navigator && this.navigator.cookieEnabled) {
            return true;
        }
        return false;
    };
    Api.prototype.setupObserver = function (entryType, callback) {
        if (!this.PerformanceObserver) {
            return;
        }
        var observer = new this.PerformanceObserver(function (list) {
            for (var _i = 0, _a = list.getEntries(); _i < _a.length; _i++) {
                var entry = _a[_i];
                // `entry` is a PerformanceEntry instance.
                callback(entry);
            }
        });
        // Start observing the entry types you care about.
        observer.observe({ entryTypes: [entryType] });
    };
    Api.getInstance = function () {
        if (apiInstance === undefined) {
            apiInstance = new Api(windowInstance);
        }
        return apiInstance;
    };
    return Api;
}());
function setupApi(window) {
    windowInstance = window;
}

/**
 * @license
 * Copyright 2019 Google Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var settingsServiceInstance;
var SettingsService = /** @class */ (function () {
    function SettingsService() {
        // The variable which controls logging of automatic traces and HTTP/S network monitoring.
        this.instrumentationEnabled = true;
        // The variable which controls logging of custom traces.
        this.dataCollectionEnabled = true;
        // Configuration flags set through remote config.
        this.loggingEnabled = false;
        // Sampling rate between 0 and 1.
        this.tracesSamplingRate = 1;
        this.networkRequestsSamplingRate = 1;
        // Address of logging service.
        this.logEndPointUrl = 'https://firebaselogging.googleapis.com/v0cc/log?format=json_proto';
        this.logSource = 462;
        // Flags which control per session logging of traces and network requests.
        this.logTraceAfterSampling = false;
        this.logNetworkAfterSampling = false;
        // TTL of config retrieved from remote config in hours.
        this.configTimeToLive = 12;
    }
    SettingsService.prototype.getAppId = function () {
        var appId = this.firebaseAppInstance &&
            this.firebaseAppInstance.options &&
            this.firebaseAppInstance.options.appId;
        if (!appId) {
            throw ERROR_FACTORY.create("no app id" /* NO_APP_ID */);
        }
        return appId;
    };
    SettingsService.prototype.getProjectId = function () {
        var projectId = this.firebaseAppInstance &&
            this.firebaseAppInstance.options &&
            this.firebaseAppInstance.options.projectId;
        if (!projectId) {
            throw ERROR_FACTORY.create("no project id" /* NO_PROJECT_ID */);
        }
        return projectId;
    };
    SettingsService.prototype.getApiKey = function () {
        var apiKey = this.firebaseAppInstance &&
            this.firebaseAppInstance.options &&
            this.firebaseAppInstance.options.apiKey;
        if (!apiKey) {
            throw ERROR_FACTORY.create("no api key" /* NO_API_KEY */);
        }
        return apiKey;
    };
    SettingsService.getInstance = function () {
        if (settingsServiceInstance === undefined) {
            settingsServiceInstance = new SettingsService();
        }
        return settingsServiceInstance;
    };
    return SettingsService;
}());

/**
 * @license
 * Copyright 2019 Google Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var iid;
function getIidPromise() {
    var iidPromise = SettingsService.getInstance()
        .firebaseAppInstance.installations()
        .getId();
    // eslint-disable-next-line @typescript-eslint/no-floating-promises
    iidPromise.then(function (iidVal) {
        iid = iidVal;
    });
    return iidPromise;
}
// This method should be used after the iid is retrieved by getIidPromise method.
function getIid() {
    return iid;
}
function getAuthTokenPromise() {
    var authTokenPromise = SettingsService.getInstance()
        .firebaseAppInstance.installations()
        .getToken();
    // eslint-disable-next-line @typescript-eslint/no-floating-promises
    authTokenPromise.then(function (authTokenVal) {
    });
    return authTokenPromise;
}

/**
 * @license
 * Copyright 2019 Google Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var VisibilityState;
(function (VisibilityState) {
    VisibilityState[VisibilityState["UNKNOWN"] = 0] = "UNKNOWN";
    VisibilityState[VisibilityState["VISIBLE"] = 1] = "VISIBLE";
    VisibilityState[VisibilityState["HIDDEN"] = 2] = "HIDDEN";
    VisibilityState[VisibilityState["PRERENDER"] = 3] = "PRERENDER";
    VisibilityState[VisibilityState["UNLOADED"] = 4] = "UNLOADED";
})(VisibilityState || (VisibilityState = {}));
var RESERVED_ATTRIBUTE_PREFIXES = ['firebase_', 'google_', 'ga_'];
var ATTRIBUTE_FORMAT_REGEX = new RegExp('^[a-zA-Z]\\w*$');
var MAX_ATTRIBUTE_NAME_LENGTH = 40;
var MAX_ATTRIBUTE_VALUE_LENGTH = 100;
function getServiceWorkerStatus() {
    var navigator = Api.getInstance().navigator;
    if ('serviceWorker' in navigator) {
        if (navigator.serviceWorker.controller) {
            return 2 /* CONTROLLED */;
        }
        else {
            return 3 /* UNCONTROLLED */;
        }
    }
    else {
        return 1 /* UNSUPPORTED */;
    }
}
function getVisibilityState() {
    var document = Api.getInstance().document;
    var visibilityState = document.visibilityState;
    switch (visibilityState) {
        case 'visible':
            return VisibilityState.VISIBLE;
        case 'hidden':
            return VisibilityState.HIDDEN;
        case 'prerender':
            return VisibilityState.PRERENDER;
        default:
            return VisibilityState.UNKNOWN;
    }
}
function getEffectiveConnectionType() {
    var navigator = Api.getInstance().navigator;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    var navigatorConnection = navigator.connection;
    var effectiveType = navigatorConnection && navigatorConnection.effectiveType;
    switch (effectiveType) {
        case 'slow-2g':
            return 1 /* CONNECTION_SLOW_2G */;
        case '2g':
            return 2 /* CONNECTION_2G */;
        case '3g':
            return 3 /* CONNECTION_3G */;
        case '4g':
            return 4 /* CONNECTION_4G */;
        default:
            return 0 /* UNKNOWN */;
    }
}
function isValidCustomAttributeName(name) {
    if (name.length === 0 || name.length > MAX_ATTRIBUTE_NAME_LENGTH) {
        return false;
    }
    var matchesReservedPrefix = RESERVED_ATTRIBUTE_PREFIXES.some(function (prefix) {
        return name.startsWith(prefix);
    });
    return !matchesReservedPrefix && !!name.match(ATTRIBUTE_FORMAT_REGEX);
}
function isValidCustomAttributeValue(value) {
    return value.length !== 0 && value.length <= MAX_ATTRIBUTE_VALUE_LENGTH;
}

/**
 * @license
 * Copyright 2019 Google Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var consoleLogger = new logger$1.Logger(SERVICE_NAME);
consoleLogger.logLevel = logger$1.LogLevel.INFO;

/**
 * @license
 * Copyright 2019 Google Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var REMOTE_CONFIG_SDK_VERSION = '0.0.1';
// These values will be used if the remote config object is successfully
// retrieved, but the template does not have these fields.
var SECONDARY_CONFIGS = {
    loggingEnabled: true
};
var FIS_AUTH_PREFIX = 'FIREBASE_INSTALLATIONS_AUTH';
function getConfig(iid) {
    var config = getStoredConfig();
    if (config) {
        processConfig(config);
        return Promise.resolve();
    }
    return getRemoteConfig(iid)
        .then(function (config) { return processConfig(config); })
        .then(function (config) { return storeConfig(config); }, 
    /** Do nothing for error, use defaults set in settings service. */ function () { });
}
function getStoredConfig() {
    var localStorage = Api.getInstance().localStorage;
    var expiryString = localStorage.getItem(CONFIG_EXPIRY_LOCAL_STORAGE_KEY);
    if (!expiryString || !configValid(expiryString)) {
        return;
    }
    var configStringified = localStorage.getItem(CONFIG_LOCAL_STORAGE_KEY);
    if (!configStringified) {
        return;
    }
    try {
        var configResponse = JSON.parse(configStringified);
        return configResponse;
    }
    catch (_a) {
        return;
    }
}
function storeConfig(config) {
    if (!config) {
        return;
    }
    var localStorage = Api.getInstance().localStorage;
    localStorage.setItem(CONFIG_LOCAL_STORAGE_KEY, JSON.stringify(config));
    localStorage.setItem(CONFIG_EXPIRY_LOCAL_STORAGE_KEY, String(Date.now() +
        SettingsService.getInstance().configTimeToLive * 60 * 60 * 1000));
}
var COULD_NOT_GET_CONFIG_MSG = 'Could not fetch config, will use default configs';
function getRemoteConfig(iid) {
    // Perf needs auth token only to retrieve remote config.
    return getAuthTokenPromise()
        .then(function (authToken) {
        var projectId = SettingsService.getInstance().getProjectId();
        var configEndPoint = "https://firebaseremoteconfig.googleapis.com/v1/projects/" + projectId + "/namespaces/fireperf:fetch?key=" + SettingsService.getInstance().getApiKey();
        var request = new Request(configEndPoint, {
            method: 'POST',
            headers: {
                Authorization: FIS_AUTH_PREFIX + " " + authToken
            },
            /* eslint-disable camelcase */
            body: JSON.stringify({
                app_instance_id: iid,
                app_instance_id_token: authToken,
                app_id: SettingsService.getInstance().getAppId(),
                app_version: SDK_VERSION,
                sdk_version: REMOTE_CONFIG_SDK_VERSION
            })
            /* eslint-enable camelcase */
        });
        return fetch(request).then(function (response) {
            if (response.ok) {
                return response.json();
            }
            // In case response is not ok. This will be caught by catch.
            throw ERROR_FACTORY.create("RC response not ok" /* RC_NOT_OK */);
        });
    })
        .catch(function () {
        consoleLogger.info(COULD_NOT_GET_CONFIG_MSG);
        return undefined;
    });
}
/**
 * Processes config coming either from calling RC or from local storage.
 * This method only runs if call is successful or config in storage
 * is valie.
 */
function processConfig(config) {
    if (!config) {
        return config;
    }
    var settingsServiceInstance = SettingsService.getInstance();
    var entries = config.entries || {};
    if (entries.fpr_enabled !== undefined) {
        // TODO: Change the assignment of loggingEnabled once the received type is known.
        settingsServiceInstance.loggingEnabled =
            String(entries.fpr_enabled) === 'true';
    }
    else {
        // Config retrieved successfully, but there is no fpr_enabled in template.
        // Use secondary configs value.
        settingsServiceInstance.loggingEnabled = SECONDARY_CONFIGS.loggingEnabled;
    }
    if (entries.fpr_log_source) {
        settingsServiceInstance.logSource = Number(entries.fpr_log_source);
    }
    if (entries.fpr_log_endpoint_url) {
        settingsServiceInstance.logEndPointUrl = entries.fpr_log_endpoint_url;
    }
    if (entries.fpr_vc_network_request_sampling_rate !== undefined) {
        settingsServiceInstance.networkRequestsSamplingRate = Number(entries.fpr_vc_network_request_sampling_rate);
    }
    if (entries.fpr_vc_trace_sampling_rate !== undefined) {
        settingsServiceInstance.tracesSamplingRate = Number(entries.fpr_vc_trace_sampling_rate);
    }
    // Set the per session trace and network logging flags.
    settingsServiceInstance.logTraceAfterSampling = shouldLogAfterSampling(settingsServiceInstance.tracesSamplingRate);
    settingsServiceInstance.logNetworkAfterSampling = shouldLogAfterSampling(settingsServiceInstance.networkRequestsSamplingRate);
    return config;
}
function configValid(expiry) {
    return Number(expiry) > Date.now();
}
function shouldLogAfterSampling(samplingRate) {
    return Math.random() <= samplingRate;
}

/**
 * @license
 * Copyright 2019 Google Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var initializationStatus = 1 /* notInitialized */;
var initializationPromise;
function getInitializationPromise() {
    initializationStatus = 2 /* initializationPending */;
    initializationPromise = initializationPromise || initializePerf();
    return initializationPromise;
}
function isPerfInitialized() {
    return initializationStatus === 3 /* initialized */;
}
function initializePerf() {
    return getDocumentReadyComplete()
        .then(function () { return getIidPromise(); })
        .then(function (iid) { return getConfig(iid); })
        .then(function () { return changeInitializationStatus(); }, function () { return changeInitializationStatus(); });
}
/**
 * Returns a promise which resolves whenever the document readystate is complete or
 * immediately if it is called after page load complete.
 */
function getDocumentReadyComplete() {
    var document = Api.getInstance().document;
    return new Promise(function (resolve) {
        if (document && document.readyState !== 'complete') {
            var handler_1 = function () {
                if (document.readyState === 'complete') {
                    document.removeEventListener('readystatechange', handler_1);
                    resolve();
                }
            };
            document.addEventListener('readystatechange', handler_1);
        }
        else {
            resolve();
        }
    });
}
function changeInitializationStatus() {
    initializationStatus = 3 /* initialized */;
}

/**
 * @license
 * Copyright 2019 Google Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var DEFAULT_SEND_INTERVAL_MS = 10 * 1000;
var INITIAL_SEND_TIME_DELAY_MS = 5.5 * 1000;
// If end point does not work, the call will be tried for these many times.
var DEFAULT_REMAINING_TRIES = 3;
var remainingTries = DEFAULT_REMAINING_TRIES;
/* eslint-enable camelcase */
var queue = [];
function processQueue(timeOffset) {
    setTimeout(function () {
        // If there is no remainingTries left, stop retrying.
        if (remainingTries === 0) {
            return;
        }
        // If there are no events to process, wait for DEFAULT_SEND_INTERVAL_MS and try again.
        if (!queue.length) {
            return processQueue(DEFAULT_SEND_INTERVAL_MS);
        }
        // Capture a snapshot of the queue and empty the "official queue".
        var staged = tslib.__spreadArrays(queue);
        queue = [];
        /* eslint-disable camelcase */
        // We will pass the JSON serialized event to the backend.
        var log_event = staged.map(function (evt) { return ({
            source_extension_json: evt.message,
            event_time_ms: String(evt.eventTime)
        }); });
        var data = {
            request_time_ms: String(Date.now()),
            client_info: {
                client_type: 1,
                js_client_info: {}
            },
            log_source: SettingsService.getInstance().logSource,
            log_event: log_event
        };
        /* eslint-enable camelcase */
        fetch(SettingsService.getInstance().logEndPointUrl, {
            method: 'POST',
            body: JSON.stringify(data)
        })
            .then(function (res) {
            if (!res.ok) {
                consoleLogger.info('Call to Firebase backend failed.');
            }
            return res.json();
        })
            .then(function (res) {
            var wait = Number(res.next_request_wait_millis);
            // Find the next call wait time from the response.
            var requestOffset = isNaN(wait)
                ? DEFAULT_SEND_INTERVAL_MS
                : Math.max(DEFAULT_SEND_INTERVAL_MS, wait);
            remainingTries = DEFAULT_REMAINING_TRIES;
            // Schedule the next process.
            processQueue(requestOffset);
        })
            .catch(function () {
            /**
             * If the request fails for some reason, add the events that were attempted
             * back to the primary queue to retry later.
             */
            queue = tslib.__spreadArrays(staged, queue);
            remainingTries--;
            consoleLogger.info("Tries left: " + remainingTries + ".");
            processQueue(DEFAULT_SEND_INTERVAL_MS);
        });
    }, timeOffset);
}
processQueue(INITIAL_SEND_TIME_DELAY_MS);
function addToQueue(evt) {
    if (!evt.eventTime || !evt.message) {
        throw ERROR_FACTORY.create("invalid cc log" /* INVALID_CC_LOG */);
    }
    // Add the new event to the queue.
    queue = tslib.__spreadArrays(queue, [evt]);
}
/** Log handler for cc service to send the performance logs to the server. */
function ccHandler(
// eslint-disable-next-line @typescript-eslint/no-explicit-any
serializer) {
    // The underscores for loggerInstance and level parameters are added to avoid the
    // noUnusedParameters related error.
    return function (_loggerInstance, _level) {
        var args = [];
        for (var _i = 2; _i < arguments.length; _i++) {
            args[_i - 2] = arguments[_i];
        }
        var message = serializer.apply(void 0, args);
        addToQueue({
            message: message,
            eventTime: Date.now()
        });
    };
}

/**
 * @license
 * Copyright 2019 Google Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/* eslint-enble camelcase */
var logger;
// This method is not called before initialization.
function getLogger() {
    if (logger) {
        return logger;
    }
    var ccLogger = ccHandler(serializer);
    logger = new logger$1.Logger('@firebase/performance/cc');
    logger.logHandler = ccLogger;
    return logger;
}
function logTrace(trace) {
    var settingsService = SettingsService.getInstance();
    // Do not log if trace is auto generated and instrumentation is disabled.
    if (!settingsService.instrumentationEnabled && trace.isAuto) {
        return;
    }
    // Do not log if trace is custom and data collection is disabled.
    if (!settingsService.dataCollectionEnabled && !trace.isAuto) {
        return;
    }
    // Do not log if required apis are not available.
    if (!Api.getInstance().requiredApisAvailable()) {
        return;
    }
    // Only log the page load auto traces if page is visible.
    if (trace.isAuto && getVisibilityState() !== VisibilityState.VISIBLE) {
        return;
    }
    if (!settingsService.loggingEnabled ||
        !settingsService.logTraceAfterSampling) {
        return;
    }
    if (isPerfInitialized()) {
        sendTraceLog(trace);
    }
    else {
        // Custom traces can be used before the initialization but logging
        // should wait until after.
        getInitializationPromise().then(function () { return sendTraceLog(trace); }, function () { return sendTraceLog(trace); });
    }
}
function sendTraceLog(trace) {
    if (getIid()) {
        setTimeout(function () { return getLogger().log(trace, 1 /* Trace */); }, 0);
    }
}
function logNetworkRequest(networkRequest) {
    var settingsService = SettingsService.getInstance();
    // Do not log network requests if instrumentation is disabled.
    if (!settingsService.instrumentationEnabled) {
        return;
    }
    // Do not log the js sdk's call to cc service to avoid unnecessary cycle.
    if (networkRequest.url === settingsService.logEndPointUrl.split('?')[0]) {
        return;
    }
    if (!settingsService.loggingEnabled ||
        !settingsService.logNetworkAfterSampling) {
        return;
    }
    setTimeout(function () { return getLogger().log(networkRequest, 0 /* NetworkRequest */); }, 0);
}
function serializer(resource, resourceType) {
    if (resourceType === 0 /* NetworkRequest */) {
        return serializeNetworkRequest(resource);
    }
    return serializeTrace(resource);
}
function serializeNetworkRequest(networkRequest) {
    var networkRequestMetric = {
        url: networkRequest.url,
        http_method: networkRequest.httpMethod || 0,
        http_response_code: 200,
        response_payload_bytes: networkRequest.responsePayloadBytes,
        client_start_time_us: networkRequest.startTimeUs,
        time_to_response_initiated_us: networkRequest.timeToResponseInitiatedUs,
        time_to_response_completed_us: networkRequest.timeToResponseCompletedUs
    };
    var perfMetric = {
        application_info: getApplicationInfo(),
        network_request_metric: networkRequestMetric
    };
    return JSON.stringify(perfMetric);
}
function serializeTrace(trace) {
    var traceMetric = {
        name: trace.name,
        is_auto: trace.isAuto,
        client_start_time_us: trace.startTimeUs,
        duration_us: trace.durationUs
    };
    if (Object.keys(trace.counters).length !== 0) {
        traceMetric.counters = convertToKeyValueArray(trace.counters);
    }
    var customAttributes = trace.getAttributes();
    if (Object.keys(customAttributes).length !== 0) {
        traceMetric.custom_attributes = convertToKeyValueArray(customAttributes);
    }
    var perfMetric = {
        application_info: getApplicationInfo(),
        trace_metric: traceMetric
    };
    return JSON.stringify(perfMetric);
}
function getApplicationInfo() {
    return {
        google_app_id: SettingsService.getInstance().getAppId(),
        app_instance_id: getIid(),
        web_app_info: {
            sdk_version: SDK_VERSION,
            page_url: Api.getInstance().getUrl(),
            service_worker_status: getServiceWorkerStatus(),
            visibility_state: getVisibilityState(),
            effective_connection_type: getEffectiveConnectionType()
        },
        application_process_state: 0
    };
}
function convertToKeyValueArray(obj) {
    var keys = Object.keys(obj);
    return keys.map(function (key) { return ({ key: key, value: obj[key] }); });
}

/**
 * @license
 * Copyright 2019 Google Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var MAX_METRIC_NAME_LENGTH = 100;
var RESERVED_AUTO_PREFIX = '_';
var oobMetrics = [
    FIRST_PAINT_COUNTER_NAME,
    FIRST_CONTENTFUL_PAINT_COUNTER_NAME,
    FIRST_INPUT_DELAY_COUNTER_NAME
];
/**
 * Returns true if the metric is custom and does not start with reserved prefix, or if
 * the metric is one of out of the box page load trace metrics.
 */
function isValidMetricName(name, traceName) {
    if (name.length === 0 || name.length > MAX_METRIC_NAME_LENGTH) {
        return false;
    }
    return ((traceName &&
        traceName.startsWith(OOB_TRACE_PAGE_LOAD_PREFIX) &&
        oobMetrics.indexOf(name) > -1) ||
        !name.startsWith(RESERVED_AUTO_PREFIX));
}

/**
 * @license
 * Copyright 2019 Google Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var Trace = /** @class */ (function () {
    /**
     * @param name The name of the trace.
     * @param isAuto If the trace is auto-instrumented.
     * @param traceMeasureName The name of the measure marker in user timing specification. This field
     * is only set when the trace is built for logging when the user directly uses the user timing
     * api (performance.mark and performance.measure).
     */
    function Trace(name, isAuto, traceMeasureName) {
        if (isAuto === void 0) { isAuto = false; }
        this.name = name;
        this.isAuto = isAuto;
        this.state = 1 /* UNINITIALIZED */;
        this.customAttributes = {};
        this.counters = {};
        this.api = Api.getInstance();
        this.randomId = Math.floor(Math.random() * 1000000);
        if (!this.isAuto) {
            this.traceStartMark = TRACE_START_MARK_PREFIX + "-" + this.randomId + "-" + this.name;
            this.traceStopMark = TRACE_STOP_MARK_PREFIX + "-" + this.randomId + "-" + this.name;
            this.traceMeasure =
                traceMeasureName ||
                    TRACE_MEASURE_PREFIX + "-" + this.randomId + "-" + this.name;
            if (traceMeasureName) {
                // For the case of direct user timing traces, no start stop will happen. The measure object
                // is already available.
                this.calculateTraceMetrics();
            }
        }
    }
    /**
     * Starts a trace. The measurement of the duration starts at this point.
     */
    Trace.prototype.start = function () {
        if (this.state !== 1 /* UNINITIALIZED */) {
            throw ERROR_FACTORY.create("trace started" /* TRACE_STARTED_BEFORE */, {
                traceName: this.name
            });
        }
        this.api.mark(this.traceStartMark);
        this.state = 2 /* RUNNING */;
    };
    /**
     * Stops the trace. The measurement of the duration of the trace stops at this point and trace
     * is logged.
     */
    Trace.prototype.stop = function () {
        if (this.state !== 2 /* RUNNING */) {
            throw ERROR_FACTORY.create("trace stopped" /* TRACE_STOPPED_BEFORE */, {
                traceName: this.name
            });
        }
        this.state = 3 /* TERMINATED */;
        this.api.mark(this.traceStopMark);
        this.api.measure(this.traceMeasure, this.traceStartMark, this.traceStopMark);
        this.calculateTraceMetrics();
        logTrace(this);
    };
    /**
     * Records a trace with predetermined values. If this method is used a trace is created and logged
     * directly. No need to use start and stop methods.
     * @param startTime Trace start time since epoch in millisec
     * @param duration The duraction of the trace in millisec
     * @param options An object which can optionally hold maps of custom metrics and custom attributes
     */
    Trace.prototype.record = function (startTime, duration, options) {
        this.durationUs = Math.floor(duration * 1000);
        this.startTimeUs = Math.floor(startTime * 1000);
        if (options && options.attributes) {
            this.customAttributes = tslib.__assign({}, options.attributes);
        }
        if (options && options.metrics) {
            for (var _i = 0, _a = Object.keys(options.metrics); _i < _a.length; _i++) {
                var metric = _a[_i];
                if (!isNaN(Number(options.metrics[metric]))) {
                    this.counters[metric] = Number(Math.floor(options.metrics[metric]));
                }
            }
        }
        logTrace(this);
    };
    /**
     * Increments a custom metric by a certain number or 1 if number not specified. Will create a new
     * custom metric if one with the given name does not exist.
     * @param counter Name of the custom metric
     * @param num Increment by value
     */
    Trace.prototype.incrementMetric = function (counter, num) {
        if (num === void 0) { num = 1; }
        if (this.counters[counter] === undefined) {
            this.putMetric(counter, 0);
        }
        this.counters[counter] += num;
    };
    /**
     * Sets a custom metric to a specified value. Will create a new custom metric if one with the
     * given name does not exist.
     * @param counter Name of the custom metric
     * @param num Set custom metric to this value
     */
    Trace.prototype.putMetric = function (counter, num) {
        if (isValidMetricName(counter, this.name)) {
            this.counters[counter] = num;
        }
        else {
            throw ERROR_FACTORY.create("invalide custom metric name" /* INVALID_CUSTOM_METRIC_NAME */, {
                customMetricName: counter
            });
        }
    };
    /**
     * Returns the value of the custom metric by that name. If a custom metric with that name does
     * not exist will return zero.
     * @param counter
     */
    Trace.prototype.getMetric = function (counter) {
        return this.counters[counter] || 0;
    };
    /**
     * Sets a custom attribute of a trace to a certain value.
     * @param attr
     * @param value
     */
    Trace.prototype.putAttribute = function (attr, value) {
        var isValidName = isValidCustomAttributeName(attr);
        var isValidValue = isValidCustomAttributeValue(value);
        if (isValidName && isValidValue) {
            this.customAttributes[attr] = value;
            return;
        }
        // Throw appropriate error when the attribute name or value is invalid.
        if (!isValidName) {
            throw ERROR_FACTORY.create("invalid attribute name" /* INVALID_ATTRIBUTE_NAME */, {
                attributeName: attr
            });
        }
        if (!isValidValue) {
            throw ERROR_FACTORY.create("invalid attribute value" /* INVALID_ATTRIBUTE_VALUE */, {
                attributeValue: value
            });
        }
    };
    /**
     * Retrieves the value a custom attribute of a trace is set to.
     * @param attr
     */
    Trace.prototype.getAttribute = function (attr) {
        return this.customAttributes[attr];
    };
    Trace.prototype.removeAttribute = function (attr) {
        if (this.customAttributes[attr] === undefined) {
            return;
        }
        delete this.customAttributes[attr];
    };
    Trace.prototype.getAttributes = function () {
        return tslib.__assign({}, this.customAttributes);
    };
    Trace.prototype.setStartTime = function (startTime) {
        this.startTimeUs = startTime;
    };
    Trace.prototype.setDuration = function (duration) {
        this.durationUs = duration;
    };
    /**
     * Calculates and assigns the duration and start time of the trace using the measure performance
     * entry.
     */
    Trace.prototype.calculateTraceMetrics = function () {
        var perfMeasureEntries = this.api.getEntriesByName(this.traceMeasure);
        var perfMeasureEntry = perfMeasureEntries && perfMeasureEntries[0];
        if (perfMeasureEntry) {
            this.durationUs = Math.floor(perfMeasureEntry.duration * 1000);
            this.startTimeUs = Math.floor((perfMeasureEntry.startTime + this.api.getTimeOrigin()) * 1000);
        }
    };
    /**
     * @param navigationTimings A single element array which contains the navigationTIming object of
     * the page load
     * @param paintTimings A array which contains paintTiming object of the page load
     * @param firstInputDelay First input delay in millisec
     */
    Trace.createOobTrace = function (navigationTimings, paintTimings, firstInputDelay) {
        var route = Api.getInstance().getUrl();
        if (!route) {
            return;
        }
        var trace = new Trace(OOB_TRACE_PAGE_LOAD_PREFIX + route, true);
        var timeOriginUs = Math.floor(Api.getInstance().getTimeOrigin() * 1000);
        trace.setStartTime(timeOriginUs);
        // navigationTimings includes only one element.
        if (navigationTimings && navigationTimings[0]) {
            trace.setDuration(Math.floor(navigationTimings[0].duration * 1000));
            trace.putMetric('domInteractive', Math.floor(navigationTimings[0].domInteractive * 1000));
            trace.putMetric('domContentLoadedEventEnd', Math.floor(navigationTimings[0].domContentLoadedEventEnd * 1000));
            trace.putMetric('loadEventEnd', Math.floor(navigationTimings[0].loadEventEnd * 1000));
        }
        var FIRST_PAINT = 'first-paint';
        var FIRST_CONTENTFUL_PAINT = 'first-contentful-paint';
        if (paintTimings) {
            var firstPaint = paintTimings.find(function (paintObject) { return paintObject.name === FIRST_PAINT; });
            if (firstPaint && firstPaint.startTime) {
                trace.putMetric(FIRST_PAINT_COUNTER_NAME, Math.floor(firstPaint.startTime * 1000));
            }
            var firstContentfulPaint = paintTimings.find(function (paintObject) { return paintObject.name === FIRST_CONTENTFUL_PAINT; });
            if (firstContentfulPaint && firstContentfulPaint.startTime) {
                trace.putMetric(FIRST_CONTENTFUL_PAINT_COUNTER_NAME, Math.floor(firstContentfulPaint.startTime * 1000));
            }
            if (firstInputDelay) {
                trace.putMetric(FIRST_INPUT_DELAY_COUNTER_NAME, Math.floor(firstInputDelay * 1000));
            }
        }
        logTrace(trace);
    };
    Trace.createUserTimingTrace = function (measureName) {
        var trace = new Trace(measureName, false, measureName);
        logTrace(trace);
    };
    return Trace;
}());

/**
 * @license
 * Copyright 2019 Google Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function createNetworkRequestEntry(entry) {
    var performanceEntry = entry;
    if (!performanceEntry || performanceEntry.responseStart === undefined) {
        return;
    }
    var timeOrigin = Api.getInstance().getTimeOrigin();
    var startTimeUs = Math.floor((performanceEntry.startTime + timeOrigin) * 1000);
    var timeToResponseInitiatedUs = performanceEntry.responseStart
        ? Math.floor((performanceEntry.responseStart - performanceEntry.startTime) * 1000)
        : undefined;
    var timeToResponseCompletedUs = Math.floor((performanceEntry.responseEnd - performanceEntry.startTime) * 1000);
    // Remove the query params from logged network request url.
    var url = performanceEntry.name && performanceEntry.name.split('?')[0];
    var networkRequest = {
        url: url,
        responsePayloadBytes: performanceEntry.transferSize,
        startTimeUs: startTimeUs,
        timeToResponseInitiatedUs: timeToResponseInitiatedUs,
        timeToResponseCompletedUs: timeToResponseCompletedUs
    };
    logNetworkRequest(networkRequest);
}

/**
 * @license
 * Copyright 2019 Google Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var FID_WAIT_TIME_MS = 5000;
function setupOobResources() {
    // Do not initialize unless iid is available.
    if (!getIid()) {
        return;
    }
    // The load event might not have fired yet, and that means performance navigation timing
    // object has a duration of 0. The setup should run after all current tasks in js queue.
    setTimeout(function () { return setupOobTraces(); }, 0);
    setTimeout(function () { return setupNetworkRequests(); }, 0);
    setTimeout(function () { return setupUserTimingTraces(); }, 0);
}
function setupNetworkRequests() {
    var api = Api.getInstance();
    var resources = api.getEntriesByType('resource');
    for (var _i = 0, resources_1 = resources; _i < resources_1.length; _i++) {
        var resource = resources_1[_i];
        createNetworkRequestEntry(resource);
    }
    api.setupObserver('resource', createNetworkRequestEntry);
}
function setupOobTraces() {
    var api = Api.getInstance();
    var navigationTimings = api.getEntriesByType('navigation');
    var paintTimings = api.getEntriesByType('paint');
    // If First Input Desly polyfill is added to the page, report the fid value.
    // https://github.com/GoogleChromeLabs/first-input-delay
    if (api.onFirstInputDelay) {
        // If the fid call back is not called for certain time, continue without it.
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        var timeoutId_1 = setTimeout(function () {
            Trace.createOobTrace(navigationTimings, paintTimings);
            timeoutId_1 = undefined;
        }, FID_WAIT_TIME_MS);
        api.onFirstInputDelay(function (fid) {
            if (timeoutId_1) {
                clearTimeout(timeoutId_1);
                Trace.createOobTrace(navigationTimings, paintTimings, fid);
            }
        });
    }
    else {
        Trace.createOobTrace(navigationTimings, paintTimings);
    }
}
function setupUserTimingTraces() {
    var api = Api.getInstance();
    // Run through the measure performance entries collected up to this point.
    var measures = api.getEntriesByType('measure');
    for (var _i = 0, measures_1 = measures; _i < measures_1.length; _i++) {
        var measure = measures_1[_i];
        createUserTimingTrace(measure);
    }
    // Setup an observer to capture the measures from this point on.
    api.setupObserver('measure', createUserTimingTrace);
}
function createUserTimingTrace(measure) {
    var measureName = measure.name;
    // Do not create a trace, if the user timing marks and measures are created by the sdk itself.
    if (measureName.substring(0, TRACE_MEASURE_PREFIX.length) ===
        TRACE_MEASURE_PREFIX) {
        return;
    }
    Trace.createUserTimingTrace(measureName);
}

/**
 * @license
 * Copyright 2019 Google Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var PerformanceController = /** @class */ (function () {
    function PerformanceController(app) {
        this.app = app;
        if (Api.getInstance().requiredApisAvailable()) {
            getInitializationPromise().then(setupOobResources, setupOobResources);
        }
        else {
            consoleLogger.info('Firebase Performance cannot start if browser does not support fetch and Promise or cookie is disabled.');
        }
    }
    PerformanceController.prototype.trace = function (name) {
        return new Trace(name);
    };
    Object.defineProperty(PerformanceController.prototype, "instrumentationEnabled", {
        get: function () {
            return SettingsService.getInstance().instrumentationEnabled;
        },
        set: function (val) {
            SettingsService.getInstance().instrumentationEnabled = val;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PerformanceController.prototype, "dataCollectionEnabled", {
        get: function () {
            return SettingsService.getInstance().dataCollectionEnabled;
        },
        set: function (val) {
            SettingsService.getInstance().dataCollectionEnabled = val;
        },
        enumerable: true,
        configurable: true
    });
    return PerformanceController;
}());

/**
 * @license
 * Copyright 2019 Google Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var DEFAULT_ENTRY_NAME = '[DEFAULT]';
function registerPerformance(instance) {
    var factoryMethod = function (app) {
        if (app.name !== DEFAULT_ENTRY_NAME) {
            throw ERROR_FACTORY.create("FB not default" /* FB_NOT_DEFAULT */);
        }
        if (typeof window === 'undefined') {
            throw ERROR_FACTORY.create("no window" /* NO_WINDOW */);
        }
        setupApi(window);
        SettingsService.getInstance().firebaseAppInstance = app;
        return new PerformanceController(app);
    };
    // Register performance with firebase-app.
    var namespaceExports = {};
    instance.INTERNAL.registerService('performance', factoryMethod, namespaceExports);
}
registerPerformance(firebase);

exports.registerPerformance = registerPerformance;
//# sourceMappingURL=index.cjs.js.map


/***/ }),

/***/ "./node_modules/@firebase/remote-config/dist/index.cjs.js":
/*!****************************************************************!*\
  !*** ./node_modules/@firebase/remote-config/dist/index.cjs.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, '__esModule', { value: true });

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var firebase = _interopDefault(__webpack_require__(/*! @firebase/app */ "./node_modules/@firebase/app/dist/index.cjs.js"));
__webpack_require__(/*! @firebase/installations */ "./node_modules/@firebase/installations/dist/index.esm.js");
var tslib = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
var util = __webpack_require__(/*! @firebase/util */ "./node_modules/@firebase/util/dist/index.cjs.js");
var logger = __webpack_require__(/*! @firebase/logger */ "./node_modules/@firebase/logger/dist/index.esm.js");

/**
 * @license
 * Copyright 2019 Google Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * Implements the {@link RemoteConfigClient} abstraction with success response caching.
 *
 * <p>Comparable to the browser's Cache API for responses, but the Cache API requires a Service
 * Worker, which requires HTTPS, which would significantly complicate SDK installation. Also, the
 * Cache API doesn't support matching entries by time.
 */
var CachingClient = /** @class */ (function () {
    function CachingClient(client, storage, storageCache, logger) {
        this.client = client;
        this.storage = storage;
        this.storageCache = storageCache;
        this.logger = logger;
    }
    /**
     * Returns true if the age of the cached fetched configs is less than or equal to
     * {@link Settings#minimumFetchIntervalInSeconds}.
     *
     * <p>This is comparable to passing `headers = { 'Cache-Control': max-age <maxAge> }` to the
     * native Fetch API.
     *
     * <p>Visible for testing.
     */
    CachingClient.prototype.isCachedDataFresh = function (cacheMaxAgeMillis, lastSuccessfulFetchTimestampMillis) {
        // Cache can only be fresh if it's populated.
        if (!lastSuccessfulFetchTimestampMillis) {
            this.logger.debug('Config fetch cache check. Cache unpopulated.');
            return false;
        }
        // Calculates age of cache entry.
        var cacheAgeMillis = Date.now() - lastSuccessfulFetchTimestampMillis;
        var isCachedDataFresh = cacheAgeMillis <= cacheMaxAgeMillis;
        this.logger.debug('Config fetch cache check.' +
            (" Cache age millis: " + cacheAgeMillis + ".") +
            (" Cache max age millis (minimumFetchIntervalMillis setting): " + cacheMaxAgeMillis + ".") +
            (" Is cache hit: " + isCachedDataFresh + "."));
        return isCachedDataFresh;
    };
    CachingClient.prototype.fetch = function (request) {
        return tslib.__awaiter(this, void 0, void 0, function () {
            var _a, lastSuccessfulFetchTimestampMillis, lastSuccessfulFetchResponse, response, storageOperations;
            return tslib.__generator(this, function (_b) {
                switch (_b.label) {
                    case 0: return [4 /*yield*/, Promise.all([
                            this.storage.getLastSuccessfulFetchTimestampMillis(),
                            this.storage.getLastSuccessfulFetchResponse()
                        ])];
                    case 1:
                        _a = _b.sent(), lastSuccessfulFetchTimestampMillis = _a[0], lastSuccessfulFetchResponse = _a[1];
                        // Exits early on cache hit.
                        if (lastSuccessfulFetchResponse &&
                            this.isCachedDataFresh(request.cacheMaxAgeMillis, lastSuccessfulFetchTimestampMillis)) {
                            return [2 /*return*/, lastSuccessfulFetchResponse];
                        }
                        // Deviates from pure decorator by not honoring a passed ETag since we don't have a public API
                        // that allows the caller to pass an ETag.
                        request.eTag =
                            lastSuccessfulFetchResponse && lastSuccessfulFetchResponse.eTag;
                        return [4 /*yield*/, this.client.fetch(request)];
                    case 2:
                        response = _b.sent();
                        storageOperations = [
                            // Uses write-through cache for consistency with synchronous public API.
                            this.storageCache.setLastSuccessfulFetchTimestampMillis(Date.now())
                        ];
                        if (response.status === 200) {
                            // Caches response only if it has changed, ie non-304 responses.
                            storageOperations.push(this.storage.setLastSuccessfulFetchResponse(response));
                        }
                        return [4 /*yield*/, Promise.all(storageOperations)];
                    case 3:
                        _b.sent();
                        return [2 /*return*/, response];
                }
            });
        });
    };
    return CachingClient;
}());

/**
 * @license
 * Copyright 2019 Google Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var _a;
var ERROR_DESCRIPTION_MAP = (_a = {},
    _a["registration-window" /* REGISTRATION_WINDOW */] = 'Undefined window object. This SDK only supports usage in a browser environment.',
    _a["registration-project-id" /* REGISTRATION_PROJECT_ID */] = 'Undefined project identifier. Check Firebase app initialization.',
    _a["registration-api-key" /* REGISTRATION_API_KEY */] = 'Undefined API key. Check Firebase app initialization.',
    _a["registration-app-id" /* REGISTRATION_APP_ID */] = 'Undefined app identifier. Check Firebase app initialization.',
    _a["storage-open" /* STORAGE_OPEN */] = 'Error thrown when opening storage. Original error: {$originalErrorMessage}.',
    _a["storage-get" /* STORAGE_GET */] = 'Error thrown when reading from storage. Original error: {$originalErrorMessage}.',
    _a["storage-set" /* STORAGE_SET */] = 'Error thrown when writing to storage. Original error: {$originalErrorMessage}.',
    _a["storage-delete" /* STORAGE_DELETE */] = 'Error thrown when deleting from storage. Original error: {$originalErrorMessage}.',
    _a["fetch-client-network" /* FETCH_NETWORK */] = 'Fetch client failed to connect to a network. Check Internet connection.' +
        ' Original error: {$originalErrorMessage}.',
    _a["fetch-timeout" /* FETCH_TIMEOUT */] = 'The config fetch request timed out. ' +
        ' Configure timeout using "fetchTimeoutMillis" SDK setting.',
    _a["fetch-throttle" /* FETCH_THROTTLE */] = 'The config fetch request timed out while in an exponential backoff state.' +
        ' Configure timeout using "fetchTimeoutMillis" SDK setting.' +
        ' Unix timestamp in milliseconds when fetch request throttling ends: {$throttleEndTimeMillis}.',
    _a["fetch-client-parse" /* FETCH_PARSE */] = 'Fetch client could not parse response.' +
        ' Original error: {$originalErrorMessage}.',
    _a["fetch-status" /* FETCH_STATUS */] = 'Fetch server returned an HTTP error status. HTTP status: {$httpStatus}.',
    _a);
var ERROR_FACTORY = new util.ErrorFactory('remoteconfig' /* service */, 'Remote Config' /* service name */, ERROR_DESCRIPTION_MAP);
// Note how this is like typeof/instanceof, but for ErrorCode.
function hasErrorCode(e, errorCode) {
    return e instanceof util.FirebaseError && e.code.indexOf(errorCode) !== -1;
}

/**
 * @license
 * Copyright 2019 Google Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * Attempts to get the most accurate browser language setting.
 *
 * <p>Adapted from getUserLanguage in packages/auth/src/utils.js for TypeScript.
 *
 * <p>Defers default language specification to server logic for consistency.
 *
 * @param navigatorLanguage Enables tests to override read-only {@link NavigatorLanguage}.
 */
function getUserLanguage(navigatorLanguage) {
    if (navigatorLanguage === void 0) { navigatorLanguage = navigator; }
    return (
    // Most reliable, but only supported in Chrome/Firefox.
    (navigatorLanguage.languages && navigatorLanguage.languages[0]) ||
        // Supported in most browsers, but returns the language of the browser
        // UI, not the language set in browser settings.
        navigatorLanguage.language
    // Polyfill otherwise.
    );
}

/**
 * @license
 * Copyright 2019 Google Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * Implements the Client abstraction for the Remote Config REST API.
 */
var RestClient = /** @class */ (function () {
    function RestClient(firebaseInstallations, sdkVersion, namespace, projectId, apiKey, appId) {
        this.firebaseInstallations = firebaseInstallations;
        this.sdkVersion = sdkVersion;
        this.namespace = namespace;
        this.projectId = projectId;
        this.apiKey = apiKey;
        this.appId = appId;
    }
    /**
     * Fetches from the Remote Config REST API.
     *
     * @throws a {@link ErrorCode.FETCH_NETWORK} error if {@link GlobalFetch#fetch} can't
     * connect to the network.
     * @throws a {@link ErrorCode.FETCH_PARSE} error if {@link Response#json} can't parse the
     * fetch response.
     * @throws a {@link ErrorCode.FETCH_STATUS} error if the service returns an HTTP error status.
     */
    RestClient.prototype.fetch = function (request) {
        return tslib.__awaiter(this, void 0, void 0, function () {
            var _a, installationId, installationToken, urlBase, url, headers, requestBody, options, fetchPromise, timeoutPromise, response, originalError_1, errorCode, status, responseEtag, config, state, responseBody, originalError_2;
            return tslib.__generator(this, function (_b) {
                switch (_b.label) {
                    case 0: return [4 /*yield*/, Promise.all([
                            this.firebaseInstallations.getId(),
                            this.firebaseInstallations.getToken()
                        ])];
                    case 1:
                        _a = _b.sent(), installationId = _a[0], installationToken = _a[1];
                        urlBase = window.FIREBASE_REMOTE_CONFIG_URL_BASE ||
                            'https://firebaseremoteconfig.googleapis.com';
                        url = urlBase + "/v1/projects/" + this.projectId + "/namespaces/" + this.namespace + ":fetch?key=" + this.apiKey;
                        headers = {
                            'Content-Type': 'application/json',
                            'Content-Encoding': 'gzip',
                            // Deviates from pure decorator by not passing max-age header since we don't currently have
                            // service behavior using that header.
                            'If-None-Match': request.eTag || '*'
                        };
                        requestBody = {
                            /* eslint-disable camelcase */
                            sdk_version: this.sdkVersion,
                            app_instance_id: installationId,
                            app_instance_id_token: installationToken,
                            app_id: this.appId,
                            language_code: getUserLanguage()
                            /* eslint-enable camelcase */
                        };
                        options = {
                            method: 'POST',
                            headers: headers,
                            body: JSON.stringify(requestBody)
                        };
                        fetchPromise = fetch(url, options);
                        timeoutPromise = new Promise(function (_resolve, reject) {
                            // Maps async event listener to Promise API.
                            request.signal.addEventListener(function () {
                                // Emulates https://heycam.github.io/webidl/#aborterror
                                var error = new Error('The operation was aborted.');
                                error.name = 'AbortError';
                                reject(error);
                            });
                        });
                        _b.label = 2;
                    case 2:
                        _b.trys.push([2, 5, , 6]);
                        return [4 /*yield*/, Promise.race([fetchPromise, timeoutPromise])];
                    case 3:
                        _b.sent();
                        return [4 /*yield*/, fetchPromise];
                    case 4:
                        response = _b.sent();
                        return [3 /*break*/, 6];
                    case 5:
                        originalError_1 = _b.sent();
                        errorCode = "fetch-client-network" /* FETCH_NETWORK */;
                        if (originalError_1.name === 'AbortError') {
                            errorCode = "fetch-timeout" /* FETCH_TIMEOUT */;
                        }
                        throw ERROR_FACTORY.create(errorCode, {
                            originalErrorMessage: originalError_1.message
                        });
                    case 6:
                        status = response.status;
                        responseEtag = response.headers.get('ETag') || undefined;
                        if (!(response.status === 200)) return [3 /*break*/, 11];
                        responseBody = void 0;
                        _b.label = 7;
                    case 7:
                        _b.trys.push([7, 9, , 10]);
                        return [4 /*yield*/, response.json()];
                    case 8:
                        responseBody = _b.sent();
                        return [3 /*break*/, 10];
                    case 9:
                        originalError_2 = _b.sent();
                        throw ERROR_FACTORY.create("fetch-client-parse" /* FETCH_PARSE */, {
                            originalErrorMessage: originalError_2.message
                        });
                    case 10:
                        config = responseBody['entries'];
                        state = responseBody['state'];
                        _b.label = 11;
                    case 11:
                        // Normalizes based on legacy state.
                        if (state === 'INSTANCE_STATE_UNSPECIFIED') {
                            status = 500;
                        }
                        else if (state === 'NO_CHANGE') {
                            status = 304;
                        }
                        else if (state === 'NO_TEMPLATE' || state === 'EMPTY_CONFIG') {
                            // These cases can be fixed remotely, so normalize to safe value.
                            config = {};
                        }
                        // Normalize to exception-based control flow for non-success cases.
                        // Encapsulates HTTP specifics in this class as much as possible. Status is still the best for
                        // differentiating success states (200 from 304; the state body param is undefined in a
                        // standard 304).
                        if (status !== 304 && status !== 200) {
                            throw ERROR_FACTORY.create("fetch-status" /* FETCH_STATUS */, {
                                httpStatus: status
                            });
                        }
                        return [2 /*return*/, { status: status, eTag: responseEtag, config: config }];
                }
            });
        });
    };
    return RestClient;
}());

/**
 * @license
 * Copyright 2019 Google Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * Shims a minimal AbortSignal.
 *
 * <p>AbortController's AbortSignal conveniently decouples fetch timeout logic from other aspects
 * of networking, such as retries. Firebase doesn't use AbortController enough to justify a
 * polyfill recommendation, like we do with the Fetch API, but this minimal shim can easily be
 * swapped out if/when we do.
 */
var RemoteConfigAbortSignal = /** @class */ (function () {
    function RemoteConfigAbortSignal() {
        this.listeners = [];
    }
    RemoteConfigAbortSignal.prototype.addEventListener = function (listener) {
        this.listeners.push(listener);
    };
    RemoteConfigAbortSignal.prototype.abort = function () {
        this.listeners.forEach(function (listener) { return listener(); });
    };
    return RemoteConfigAbortSignal;
}());

/**
 * @license
 * Copyright 2019 Google Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var DEFAULT_VALUE_FOR_BOOLEAN = false;
var DEFAULT_VALUE_FOR_STRING = '';
var DEFAULT_VALUE_FOR_NUMBER = 0;
var BOOLEAN_TRUTHY_VALUES = ['1', 'true', 't', 'yes', 'y', 'on'];
var Value = /** @class */ (function () {
    function Value(_source, _value) {
        if (_value === void 0) { _value = DEFAULT_VALUE_FOR_STRING; }
        this._source = _source;
        this._value = _value;
    }
    Value.prototype.asString = function () {
        return this._value;
    };
    Value.prototype.asBoolean = function () {
        if (this._source === 'static') {
            return DEFAULT_VALUE_FOR_BOOLEAN;
        }
        return BOOLEAN_TRUTHY_VALUES.indexOf(this._value.toLowerCase()) >= 0;
    };
    Value.prototype.asNumber = function () {
        if (this._source === 'static') {
            return DEFAULT_VALUE_FOR_NUMBER;
        }
        var num = Number(this._value);
        if (isNaN(num)) {
            num = DEFAULT_VALUE_FOR_NUMBER;
        }
        return num;
    };
    Value.prototype.getSource = function () {
        return this._source;
    };
    return Value;
}());

/**
 * @license
 * Copyright 2019 Google Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var DEFAULT_FETCH_TIMEOUT_MILLIS = 60 * 1000; // One minute
var DEFAULT_CACHE_MAX_AGE_MILLIS = 12 * 60 * 60 * 1000; // Twelve hours.
/**
 * Encapsulates business logic mapping network and storage dependencies to the public SDK API.
 *
 * See {@link https://github.com/FirebasePrivate/firebase-js-sdk/blob/master/packages/firebase/index.d.ts|interface documentation} for method descriptions.
 */
var RemoteConfig = /** @class */ (function () {
    function RemoteConfig(
    // Required by FirebaseServiceFactory interface.
    app, 
    // JS doesn't support private yet
    // (https://github.com/tc39/proposal-class-fields#private-fields), so we hint using an
    // underscore prefix.
    _client, _storageCache, _storage, _logger) {
        this.app = app;
        this._client = _client;
        this._storageCache = _storageCache;
        this._storage = _storage;
        this._logger = _logger;
        // Tracks completion of initialization promise.
        this._isInitializationComplete = false;
        this.settings = {
            fetchTimeoutMillis: DEFAULT_FETCH_TIMEOUT_MILLIS,
            minimumFetchIntervalMillis: DEFAULT_CACHE_MAX_AGE_MILLIS
        };
        this.defaultConfig = {};
    }
    // Based on packages/firestore/src/util/log.ts but not static because we need per-instance levels
    // to differentiate 2p and 3p use-cases.
    RemoteConfig.prototype.setLogLevel = function (logLevel) {
        switch (logLevel) {
            case 'debug':
                this._logger.logLevel = logger.LogLevel.DEBUG;
                break;
            case 'silent':
                this._logger.logLevel = logger.LogLevel.SILENT;
                break;
            default:
                this._logger.logLevel = logger.LogLevel.ERROR;
        }
    };
    Object.defineProperty(RemoteConfig.prototype, "fetchTimeMillis", {
        get: function () {
            return this._storageCache.getLastSuccessfulFetchTimestampMillis() || -1;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(RemoteConfig.prototype, "lastFetchStatus", {
        get: function () {
            return this._storageCache.getLastFetchStatus() || 'no-fetch-yet';
        },
        enumerable: true,
        configurable: true
    });
    RemoteConfig.prototype.activate = function () {
        return tslib.__awaiter(this, void 0, void 0, function () {
            var _a, lastSuccessfulFetchResponse, activeConfigEtag;
            return tslib.__generator(this, function (_b) {
                switch (_b.label) {
                    case 0: return [4 /*yield*/, Promise.all([
                            this._storage.getLastSuccessfulFetchResponse(),
                            this._storage.getActiveConfigEtag()
                        ])];
                    case 1:
                        _a = _b.sent(), lastSuccessfulFetchResponse = _a[0], activeConfigEtag = _a[1];
                        if (!lastSuccessfulFetchResponse ||
                            !lastSuccessfulFetchResponse.config ||
                            !lastSuccessfulFetchResponse.eTag ||
                            lastSuccessfulFetchResponse.eTag === activeConfigEtag) {
                            // Either there is no successful fetched config, or is the same as current active
                            // config.
                            return [2 /*return*/, false];
                        }
                        return [4 /*yield*/, Promise.all([
                                this._storageCache.setActiveConfig(lastSuccessfulFetchResponse.config),
                                this._storage.setActiveConfigEtag(lastSuccessfulFetchResponse.eTag)
                            ])];
                    case 2:
                        _b.sent();
                        return [2 /*return*/, true];
                }
            });
        });
    };
    RemoteConfig.prototype.ensureInitialized = function () {
        var _this = this;
        if (!this._initializePromise) {
            this._initializePromise = this._storageCache
                .loadFromStorage()
                .then(function () {
                _this._isInitializationComplete = true;
            });
        }
        return this._initializePromise;
    };
    /**
     * @throws a {@link ErrorCode.FETCH_CLIENT_TIMEOUT} if the request takes longer than
     * {@link Settings.fetchTimeoutInSeconds} or
     * {@link DEFAULT_FETCH_TIMEOUT_SECONDS}.
     */
    RemoteConfig.prototype.fetch = function () {
        return tslib.__awaiter(this, void 0, void 0, function () {
            var _this = this;
            return tslib.__generator(this, function (_a) {
                return [2 /*return*/, new Promise(function (resolve, reject) { return tslib.__awaiter(_this, void 0, void 0, function () {
                        var abortSignal, e_1, lastFetchStatus;
                        var _this = this;
                        return tslib.__generator(this, function (_a) {
                            switch (_a.label) {
                                case 0:
                                    abortSignal = new RemoteConfigAbortSignal();
                                    setTimeout(function () { return tslib.__awaiter(_this, void 0, void 0, function () {
                                        return tslib.__generator(this, function (_a) {
                                            // Note a very low delay, eg < 10ms, can elapse before listeners are initialized.
                                            abortSignal.abort();
                                            return [2 /*return*/];
                                        });
                                    }); }, this.settings.fetchTimeoutMillis);
                                    _a.label = 1;
                                case 1:
                                    _a.trys.push([1, 4, , 6]);
                                    return [4 /*yield*/, this._client.fetch({
                                            cacheMaxAgeMillis: this.settings.minimumFetchIntervalMillis,
                                            signal: abortSignal
                                        })];
                                case 2:
                                    _a.sent();
                                    return [4 /*yield*/, this._storageCache.setLastFetchStatus('success')];
                                case 3:
                                    _a.sent();
                                    resolve();
                                    return [3 /*break*/, 6];
                                case 4:
                                    e_1 = _a.sent();
                                    lastFetchStatus = hasErrorCode(e_1, "fetch-throttle" /* FETCH_THROTTLE */)
                                        ? 'throttle'
                                        : 'failure';
                                    return [4 /*yield*/, this._storageCache.setLastFetchStatus(lastFetchStatus)];
                                case 5:
                                    _a.sent();
                                    reject(e_1);
                                    return [3 /*break*/, 6];
                                case 6: return [2 /*return*/];
                            }
                        });
                    }); })];
            });
        });
    };
    RemoteConfig.prototype.fetchAndActivate = function () {
        return tslib.__awaiter(this, void 0, void 0, function () {
            return tslib.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.fetch()];
                    case 1:
                        _a.sent();
                        return [2 /*return*/, this.activate()];
                }
            });
        });
    };
    RemoteConfig.prototype.getAll = function () {
        var _this = this;
        return getAllKeys(this._storageCache.getActiveConfig(), this.defaultConfig).reduce(function (allConfigs, key) {
            allConfigs[key] = _this.getValue(key);
            return allConfigs;
        }, {});
    };
    RemoteConfig.prototype.getBoolean = function (key) {
        return this.getValue(key).asBoolean();
    };
    RemoteConfig.prototype.getNumber = function (key) {
        return this.getValue(key).asNumber();
    };
    RemoteConfig.prototype.getString = function (key) {
        return this.getValue(key).asString();
    };
    RemoteConfig.prototype.getValue = function (key) {
        if (!this._isInitializationComplete) {
            this._logger.debug("A value was requested for key \"" + key + "\" before SDK initialization completed." +
                ' Await on ensureInitialized if the intent was to get a previously activated value.');
        }
        var activeConfig = this._storageCache.getActiveConfig();
        if (activeConfig && activeConfig[key] !== undefined) {
            return new Value('remote', activeConfig[key]);
        }
        else if (this.defaultConfig && this.defaultConfig[key] !== undefined) {
            return new Value('default', String(this.defaultConfig[key]));
        }
        this._logger.debug("Returning static value for key \"" + key + "\"." +
            ' Define a default or remote value if this is unintentional.');
        return new Value('static');
    };
    return RemoteConfig;
}());
/**
 * Dedupes and returns an array of all the keys of the received objects.
 */
function getAllKeys(obj1, obj2) {
    if (obj1 === void 0) { obj1 = {}; }
    if (obj2 === void 0) { obj2 = {}; }
    return Object.keys(tslib.__assign(tslib.__assign({}, obj1), obj2));
}

/**
 * @license
 * Copyright 2019 Google Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * Converts an error event associated with a {@link IDBRequest} to a {@link FirebaseError}.
 */
function toFirebaseError(event, errorCode) {
    var originalError = event.target.error || undefined;
    return ERROR_FACTORY.create(errorCode, {
        originalErrorMessage: originalError && originalError.message
    });
}
/**
 * A general-purpose store keyed by app + namespace + {@link
 * ProjectNamespaceKeyFieldValue}.
 *
 * <p>The Remote Config SDK can be used with multiple app installations, and each app can interact
 * with multiple namespaces, so this store uses app (ID + name) and namespace as common parent keys
 * for a set of key-value pairs. See {@link Storage#createCompositeKey}.
 *
 * <p>Visible for testing.
 */
var APP_NAMESPACE_STORE = 'app_namespace_store';
var DB_NAME = 'firebase_remote_config';
var DB_VERSION = 1;
// Visible for testing.
function openDatabase() {
    return new Promise(function (resolve, reject) {
        var request = indexedDB.open(DB_NAME, DB_VERSION);
        request.onerror = function (event) {
            reject(toFirebaseError(event, "storage-open" /* STORAGE_OPEN */));
        };
        request.onsuccess = function (event) {
            resolve(event.target.result);
        };
        request.onupgradeneeded = function (event) {
            var db = event.target.result;
            // We don't use 'break' in this switch statement, the fall-through
            // behavior is what we want, because if there are multiple versions between
            // the old version and the current version, we want ALL the migrations
            // that correspond to those versions to run, not only the last one.
            // eslint-disable-next-line default-case
            switch (event.oldVersion) {
                case 0:
                    db.createObjectStore(APP_NAMESPACE_STORE, {
                        keyPath: 'compositeKey'
                    });
            }
        };
    });
}
/**
 * Abstracts data persistence.
 */
var Storage = /** @class */ (function () {
    /**
     * @param appId enables storage segmentation by app (ID + name).
     * @param appName enables storage segmentation by app (ID + name).
     * @param namespace enables storage segmentation by namespace.
     */
    function Storage(appId, appName, namespace, openDbPromise) {
        if (openDbPromise === void 0) { openDbPromise = openDatabase(); }
        this.appId = appId;
        this.appName = appName;
        this.namespace = namespace;
        this.openDbPromise = openDbPromise;
    }
    Storage.prototype.getLastFetchStatus = function () {
        return this.get('last_fetch_status');
    };
    Storage.prototype.setLastFetchStatus = function (status) {
        return this.set('last_fetch_status', status);
    };
    // This is comparable to a cache entry timestamp. If we need to expire other data, we could
    // consider adding timestamp to all storage records and an optional max age arg to getters.
    Storage.prototype.getLastSuccessfulFetchTimestampMillis = function () {
        return this.get('last_successful_fetch_timestamp_millis');
    };
    Storage.prototype.setLastSuccessfulFetchTimestampMillis = function (timestamp) {
        return this.set('last_successful_fetch_timestamp_millis', timestamp);
    };
    Storage.prototype.getLastSuccessfulFetchResponse = function () {
        return this.get('last_successful_fetch_response');
    };
    Storage.prototype.setLastSuccessfulFetchResponse = function (response) {
        return this.set('last_successful_fetch_response', response);
    };
    Storage.prototype.getActiveConfig = function () {
        return this.get('active_config');
    };
    Storage.prototype.setActiveConfig = function (config) {
        return this.set('active_config', config);
    };
    Storage.prototype.getActiveConfigEtag = function () {
        return this.get('active_config_etag');
    };
    Storage.prototype.setActiveConfigEtag = function (etag) {
        return this.set('active_config_etag', etag);
    };
    Storage.prototype.getThrottleMetadata = function () {
        return this.get('throttle_metadata');
    };
    Storage.prototype.setThrottleMetadata = function (metadata) {
        return this.set('throttle_metadata', metadata);
    };
    Storage.prototype.deleteThrottleMetadata = function () {
        return this.delete('throttle_metadata');
    };
    Storage.prototype.get = function (key) {
        return tslib.__awaiter(this, void 0, void 0, function () {
            var db;
            var _this = this;
            return tslib.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.openDbPromise];
                    case 1:
                        db = _a.sent();
                        return [2 /*return*/, new Promise(function (resolve, reject) {
                                var transaction = db.transaction([APP_NAMESPACE_STORE], 'readonly');
                                var objectStore = transaction.objectStore(APP_NAMESPACE_STORE);
                                var compositeKey = _this.createCompositeKey(key);
                                try {
                                    var request = objectStore.get(compositeKey);
                                    request.onerror = function (event) {
                                        reject(toFirebaseError(event, "storage-get" /* STORAGE_GET */));
                                    };
                                    request.onsuccess = function (event) {
                                        var result = event.target.result;
                                        if (result) {
                                            resolve(result.value);
                                        }
                                        else {
                                            resolve(undefined);
                                        }
                                    };
                                }
                                catch (e) {
                                    reject(ERROR_FACTORY.create("storage-get" /* STORAGE_GET */, {
                                        originalErrorMessage: e && e.message
                                    }));
                                }
                            })];
                }
            });
        });
    };
    Storage.prototype.set = function (key, value) {
        return tslib.__awaiter(this, void 0, void 0, function () {
            var db;
            var _this = this;
            return tslib.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.openDbPromise];
                    case 1:
                        db = _a.sent();
                        return [2 /*return*/, new Promise(function (resolve, reject) {
                                var transaction = db.transaction([APP_NAMESPACE_STORE], 'readwrite');
                                var objectStore = transaction.objectStore(APP_NAMESPACE_STORE);
                                var compositeKey = _this.createCompositeKey(key);
                                try {
                                    var request = objectStore.put({
                                        compositeKey: compositeKey,
                                        value: value
                                    });
                                    request.onerror = function (event) {
                                        reject(toFirebaseError(event, "storage-set" /* STORAGE_SET */));
                                    };
                                    request.onsuccess = function () {
                                        resolve();
                                    };
                                }
                                catch (e) {
                                    reject(ERROR_FACTORY.create("storage-set" /* STORAGE_SET */, {
                                        originalErrorMessage: e && e.message
                                    }));
                                }
                            })];
                }
            });
        });
    };
    Storage.prototype.delete = function (key) {
        return tslib.__awaiter(this, void 0, void 0, function () {
            var db;
            var _this = this;
            return tslib.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.openDbPromise];
                    case 1:
                        db = _a.sent();
                        return [2 /*return*/, new Promise(function (resolve, reject) {
                                var transaction = db.transaction([APP_NAMESPACE_STORE], 'readwrite');
                                var objectStore = transaction.objectStore(APP_NAMESPACE_STORE);
                                var compositeKey = _this.createCompositeKey(key);
                                try {
                                    var request = objectStore.delete(compositeKey);
                                    request.onerror = function (event) {
                                        reject(toFirebaseError(event, "storage-delete" /* STORAGE_DELETE */));
                                    };
                                    request.onsuccess = function () {
                                        resolve();
                                    };
                                }
                                catch (e) {
                                    reject(ERROR_FACTORY.create("storage-delete" /* STORAGE_DELETE */, {
                                        originalErrorMessage: e && e.message
                                    }));
                                }
                            })];
                }
            });
        });
    };
    // Facilitates composite key functionality (which is unsupported in IE).
    Storage.prototype.createCompositeKey = function (key) {
        return [this.appId, this.appName, this.namespace, key].join();
    };
    return Storage;
}());

/**
 * @license
 * Copyright 2019 Google Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * A memory cache layer over storage to support the SDK's synchronous read requirements.
 */
var StorageCache = /** @class */ (function () {
    function StorageCache(storage) {
        this.storage = storage;
    }
    /**
     * Memory-only getters
     */
    StorageCache.prototype.getLastFetchStatus = function () {
        return this.lastFetchStatus;
    };
    StorageCache.prototype.getLastSuccessfulFetchTimestampMillis = function () {
        return this.lastSuccessfulFetchTimestampMillis;
    };
    StorageCache.prototype.getActiveConfig = function () {
        return this.activeConfig;
    };
    /**
     * Read-ahead getter
     */
    StorageCache.prototype.loadFromStorage = function () {
        return tslib.__awaiter(this, void 0, void 0, function () {
            var lastFetchStatusPromise, lastSuccessfulFetchTimestampMillisPromise, activeConfigPromise, lastFetchStatus, lastSuccessfulFetchTimestampMillis, activeConfig;
            return tslib.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        lastFetchStatusPromise = this.storage.getLastFetchStatus();
                        lastSuccessfulFetchTimestampMillisPromise = this.storage.getLastSuccessfulFetchTimestampMillis();
                        activeConfigPromise = this.storage.getActiveConfig();
                        return [4 /*yield*/, lastFetchStatusPromise];
                    case 1:
                        lastFetchStatus = _a.sent();
                        if (lastFetchStatus) {
                            this.lastFetchStatus = lastFetchStatus;
                        }
                        return [4 /*yield*/, lastSuccessfulFetchTimestampMillisPromise];
                    case 2:
                        lastSuccessfulFetchTimestampMillis = _a.sent();
                        if (lastSuccessfulFetchTimestampMillis) {
                            this.lastSuccessfulFetchTimestampMillis = lastSuccessfulFetchTimestampMillis;
                        }
                        return [4 /*yield*/, activeConfigPromise];
                    case 3:
                        activeConfig = _a.sent();
                        if (activeConfig) {
                            this.activeConfig = activeConfig;
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    /**
     * Write-through setters
     */
    StorageCache.prototype.setLastFetchStatus = function (status) {
        this.lastFetchStatus = status;
        return this.storage.setLastFetchStatus(status);
    };
    StorageCache.prototype.setLastSuccessfulFetchTimestampMillis = function (timestampMillis) {
        this.lastSuccessfulFetchTimestampMillis = timestampMillis;
        return this.storage.setLastSuccessfulFetchTimestampMillis(timestampMillis);
    };
    StorageCache.prototype.setActiveConfig = function (activeConfig) {
        this.activeConfig = activeConfig;
        return this.storage.setActiveConfig(activeConfig);
    };
    return StorageCache;
}());

/**
 * @license
 * Copyright 2019 Google Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * The amount of milliseconds to exponentially increase.
 */
var INTERVAL_MILLIS = 1000;
/**
 * The factor to backoff by.
 * Should be a number greater than 1.
 */
var BACKOFF_FACTOR = 2;
/**
 * The maximum milliseconds to increase to.
 *
 * <p>Visible for testing
 */
var MAX_VALUE_MILLIS = 4 * 60 * 60 * 1000; // Four hours, like iOS and Android.
/**
 * The percentage of backoff time to randomize by.
 * See
 * http://go/safe-client-behavior#step-1-determine-the-appropriate-retry-interval-to-handle-spike-traffic
 * for context.
 *
 * <p>Visible for testing
 */
var RANDOM_FACTOR = 0.5;
/**
 * Based on the backoff method from
 * https://github.com/google/closure-library/blob/master/closure/goog/math/exponentialbackoff.js.
 * Extracted here so we don't need to pass metadata and a stateful ExponentialBackoff object around.
 */
function calculateBackoffMillis(backoffCount) {
    // Calculates an exponentially increasing value.
    // Deviation: calculates value from count and a constant interval, so we only need to save value
    // and count to restore state.
    var currBaseValue = INTERVAL_MILLIS * Math.pow(BACKOFF_FACTOR, backoffCount);
    // A random "fuzz" to avoid waves of retries.
    // Deviation: randomFactor is required.
    var randomWait = Math.round(
    // A fraction of the backoff value to add/subtract.
    // Deviation: changes multiplication order to improve readability.
    RANDOM_FACTOR *
        currBaseValue *
        // A random float (rounded to int by Math.round above) in the range [-1, 1]. Determines
        // if we add or subtract.
        (Math.random() - 0.5) *
        2);
    // Limits backoff to max to avoid effectively permanent backoff.
    return Math.min(MAX_VALUE_MILLIS, currBaseValue + randomWait);
}

/**
 * @license
 * Copyright 2019 Google Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * Supports waiting on a backoff by:
 *
 * <ul>
 *   <li>Promisifying setTimeout, so we can set a timeout in our Promise chain</li>
 *   <li>Listening on a signal bus for abort events, just like the Fetch API</li>
 *   <li>Failing in the same way the Fetch API fails, so timing out a live request and a throttled
 *       request appear the same.</li>
 * </ul>
 *
 * <p>Visible for testing.
 */
function setAbortableTimeout(signal, throttleEndTimeMillis) {
    return new Promise(function (resolve, reject) {
        // Derives backoff from given end time, normalizing negative numbers to zero.
        var backoffMillis = Math.max(throttleEndTimeMillis - Date.now(), 0);
        var timeout = setTimeout(resolve, backoffMillis);
        // Adds listener, rather than sets onabort, because signal is a shared object.
        signal.addEventListener(function () {
            clearTimeout(timeout);
            // If the request completes before this timeout, the rejection has no effect.
            reject(ERROR_FACTORY.create("fetch-throttle" /* FETCH_THROTTLE */, {
                throttleEndTimeMillis: throttleEndTimeMillis
            }));
        });
    });
}
/**
 * Returns true if the {@link Error} indicates a fetch request may succeed later.
 */
function isRetriableError(e) {
    if (!(e instanceof util.FirebaseError)) {
        return false;
    }
    // Uses string index defined by ErrorData, which FirebaseError implements.
    var httpStatus = Number(e['httpStatus']);
    return (httpStatus === 429 ||
        httpStatus === 500 ||
        httpStatus === 503 ||
        httpStatus === 504);
}
/**
 * Decorates a Client with retry logic.
 *
 * <p>Comparable to CachingClient, but uses backoff logic instead of cache max age and doesn't cache
 * responses (because the SDK has no use for error responses).
 */
var RetryingClient = /** @class */ (function () {
    function RetryingClient(client, storage) {
        this.client = client;
        this.storage = storage;
    }
    RetryingClient.prototype.fetch = function (request) {
        return tslib.__awaiter(this, void 0, void 0, function () {
            var throttleMetadata;
            return tslib.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.storage.getThrottleMetadata()];
                    case 1:
                        throttleMetadata = (_a.sent()) || {
                            backoffCount: 0,
                            throttleEndTimeMillis: Date.now()
                        };
                        return [2 /*return*/, this.attemptFetch(request, throttleMetadata)];
                }
            });
        });
    };
    /**
     * A recursive helper for attempting a fetch request repeatedly.
     *
     * @throws any non-retriable errors.
     */
    RetryingClient.prototype.attemptFetch = function (request, _a) {
        var throttleEndTimeMillis = _a.throttleEndTimeMillis, backoffCount = _a.backoffCount;
        return tslib.__awaiter(this, void 0, void 0, function () {
            var response, e_1, throttleMetadata;
            return tslib.__generator(this, function (_b) {
                switch (_b.label) {
                    case 0: 
                    // Starts with a (potentially zero) timeout to support resumption from stored state.
                    // Ensures the throttle end time is honored if the last attempt timed out.
                    // Note the SDK will never make a request if the fetch timeout expires at this point.
                    return [4 /*yield*/, setAbortableTimeout(request.signal, throttleEndTimeMillis)];
                    case 1:
                        // Starts with a (potentially zero) timeout to support resumption from stored state.
                        // Ensures the throttle end time is honored if the last attempt timed out.
                        // Note the SDK will never make a request if the fetch timeout expires at this point.
                        _b.sent();
                        _b.label = 2;
                    case 2:
                        _b.trys.push([2, 5, , 7]);
                        return [4 /*yield*/, this.client.fetch(request)];
                    case 3:
                        response = _b.sent();
                        // Note the SDK only clears throttle state if response is success or non-retriable.
                        return [4 /*yield*/, this.storage.deleteThrottleMetadata()];
                    case 4:
                        // Note the SDK only clears throttle state if response is success or non-retriable.
                        _b.sent();
                        return [2 /*return*/, response];
                    case 5:
                        e_1 = _b.sent();
                        if (!isRetriableError(e_1)) {
                            throw e_1;
                        }
                        throttleMetadata = {
                            throttleEndTimeMillis: Date.now() + calculateBackoffMillis(backoffCount),
                            backoffCount: backoffCount + 1
                        };
                        // Persists state.
                        return [4 /*yield*/, this.storage.setThrottleMetadata(throttleMetadata)];
                    case 6:
                        // Persists state.
                        _b.sent();
                        return [2 /*return*/, this.attemptFetch(request, throttleMetadata)];
                    case 7: return [2 /*return*/];
                }
            });
        });
    };
    return RetryingClient;
}());

var name = "@firebase/remote-config";

/**
 * @license
 * Copyright 2019 Google Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function registerRemoteConfig(firebaseInstance) {
    firebaseInstance.INTERNAL.registerService('remoteConfig', function (app, _, namespace) {
        // Guards against the SDK being used in non-browser environments.
        if (typeof window === 'undefined') {
            throw ERROR_FACTORY.create("registration-window" /* REGISTRATION_WINDOW */);
        }
        // Normalizes optional inputs.
        var _a = app.options, projectId = _a.projectId, apiKey = _a.apiKey, appId = _a.appId;
        if (!projectId) {
            throw ERROR_FACTORY.create("registration-project-id" /* REGISTRATION_PROJECT_ID */);
        }
        if (!apiKey) {
            throw ERROR_FACTORY.create("registration-api-key" /* REGISTRATION_API_KEY */);
        }
        if (!appId) {
            throw ERROR_FACTORY.create("registration-app-id" /* REGISTRATION_APP_ID */);
        }
        namespace = namespace || 'firebase';
        var storage = new Storage(appId, app.name, namespace);
        var storageCache = new StorageCache(storage);
        var logger$1 = new logger.Logger(name);
        // Sets ERROR as the default log level.
        // See RemoteConfig#setLogLevel for corresponding normalization to ERROR log level.
        logger$1.logLevel = logger.LogLevel.ERROR;
        var restClient = new RestClient(app.installations(), 
        // Uses the JS SDK version, by which the RC package version can be deduced, if necessary.
        firebaseInstance.SDK_VERSION, namespace, projectId, apiKey, appId);
        var retryingClient = new RetryingClient(restClient, storage);
        var cachingClient = new CachingClient(retryingClient, storage, storageCache, logger$1);
        var remoteConfigInstance = new RemoteConfig(app, cachingClient, storageCache, storage, logger$1);
        // Starts warming cache.
        // eslint-disable-next-line @typescript-eslint/no-floating-promises
        remoteConfigInstance.ensureInitialized();
        return remoteConfigInstance;
    }, undefined, undefined, true /* allowMultipleInstances */);
}
registerRemoteConfig(firebase);

exports.registerRemoteConfig = registerRemoteConfig;
//# sourceMappingURL=index.cjs.js.map


/***/ }),

/***/ "./node_modules/firebase/dist/index.cjs.js":
/*!*************************************************!*\
  !*** ./node_modules/firebase/dist/index.cjs.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var firebase = _interopDefault(__webpack_require__(/*! @firebase/app */ "./node_modules/@firebase/app/dist/index.cjs.js"));
__webpack_require__(/*! @firebase/auth */ "./node_modules/@firebase/auth/dist/auth.esm.js");
__webpack_require__(/*! @firebase/database */ "./node_modules/@firebase/database/dist/index.cjs.js");
__webpack_require__(/*! @firebase/firestore */ "./node_modules/@firebase/firestore/dist/index.cjs.js");
__webpack_require__(/*! @firebase/functions */ "./node_modules/@firebase/functions/dist/index.cjs.js");
__webpack_require__(/*! @firebase/messaging */ "./node_modules/@firebase/messaging/dist/index.esm.js");
__webpack_require__(/*! @firebase/storage */ "./node_modules/@firebase/storage/dist/index.esm.js");
__webpack_require__(/*! @firebase/performance */ "./node_modules/@firebase/performance/dist/index.cjs.js");
__webpack_require__(/*! @firebase/analytics */ "./node_modules/@firebase/analytics/dist/index.esm.js");
__webpack_require__(/*! @firebase/remote-config */ "./node_modules/@firebase/remote-config/dist/index.cjs.js");

/**
 * @license
 * Copyright 2017 Google Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
console.warn("\nIt looks like you're using the development build of the Firebase JS SDK.\nWhen deploying Firebase apps to production, it is advisable to only import\nthe individual SDK components you intend to use.\n\nFor the module builds, these are available in the following manner\n(replace <PACKAGE> with the name of a component - i.e. auth, database, etc):\n\nCommonJS Modules:\nconst firebase = require('firebase/app');\nrequire('firebase/<PACKAGE>');\n\nES Modules:\nimport firebase from 'firebase/app';\nimport 'firebase/<PACKAGE>';\n\nTypescript:\nimport * as firebase from 'firebase/app';\nimport 'firebase/<PACKAGE>';\n");

module.exports = firebase;
//# sourceMappingURL=index.cjs.js.map


/***/ }),

/***/ "./node_modules/idb/build/idb.js":
/*!***************************************!*\
  !*** ./node_modules/idb/build/idb.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

(function (global, factory) {
   true ? factory(exports) :
  undefined;
}(this, function (exports) { 'use strict';

  function toArray(arr) {
    return Array.prototype.slice.call(arr);
  }

  function promisifyRequest(request) {
    return new Promise(function(resolve, reject) {
      request.onsuccess = function() {
        resolve(request.result);
      };

      request.onerror = function() {
        reject(request.error);
      };
    });
  }

  function promisifyRequestCall(obj, method, args) {
    var request;
    var p = new Promise(function(resolve, reject) {
      request = obj[method].apply(obj, args);
      promisifyRequest(request).then(resolve, reject);
    });

    p.request = request;
    return p;
  }

  function promisifyCursorRequestCall(obj, method, args) {
    var p = promisifyRequestCall(obj, method, args);
    return p.then(function(value) {
      if (!value) return;
      return new Cursor(value, p.request);
    });
  }

  function proxyProperties(ProxyClass, targetProp, properties) {
    properties.forEach(function(prop) {
      Object.defineProperty(ProxyClass.prototype, prop, {
        get: function() {
          return this[targetProp][prop];
        },
        set: function(val) {
          this[targetProp][prop] = val;
        }
      });
    });
  }

  function proxyRequestMethods(ProxyClass, targetProp, Constructor, properties) {
    properties.forEach(function(prop) {
      if (!(prop in Constructor.prototype)) return;
      ProxyClass.prototype[prop] = function() {
        return promisifyRequestCall(this[targetProp], prop, arguments);
      };
    });
  }

  function proxyMethods(ProxyClass, targetProp, Constructor, properties) {
    properties.forEach(function(prop) {
      if (!(prop in Constructor.prototype)) return;
      ProxyClass.prototype[prop] = function() {
        return this[targetProp][prop].apply(this[targetProp], arguments);
      };
    });
  }

  function proxyCursorRequestMethods(ProxyClass, targetProp, Constructor, properties) {
    properties.forEach(function(prop) {
      if (!(prop in Constructor.prototype)) return;
      ProxyClass.prototype[prop] = function() {
        return promisifyCursorRequestCall(this[targetProp], prop, arguments);
      };
    });
  }

  function Index(index) {
    this._index = index;
  }

  proxyProperties(Index, '_index', [
    'name',
    'keyPath',
    'multiEntry',
    'unique'
  ]);

  proxyRequestMethods(Index, '_index', IDBIndex, [
    'get',
    'getKey',
    'getAll',
    'getAllKeys',
    'count'
  ]);

  proxyCursorRequestMethods(Index, '_index', IDBIndex, [
    'openCursor',
    'openKeyCursor'
  ]);

  function Cursor(cursor, request) {
    this._cursor = cursor;
    this._request = request;
  }

  proxyProperties(Cursor, '_cursor', [
    'direction',
    'key',
    'primaryKey',
    'value'
  ]);

  proxyRequestMethods(Cursor, '_cursor', IDBCursor, [
    'update',
    'delete'
  ]);

  // proxy 'next' methods
  ['advance', 'continue', 'continuePrimaryKey'].forEach(function(methodName) {
    if (!(methodName in IDBCursor.prototype)) return;
    Cursor.prototype[methodName] = function() {
      var cursor = this;
      var args = arguments;
      return Promise.resolve().then(function() {
        cursor._cursor[methodName].apply(cursor._cursor, args);
        return promisifyRequest(cursor._request).then(function(value) {
          if (!value) return;
          return new Cursor(value, cursor._request);
        });
      });
    };
  });

  function ObjectStore(store) {
    this._store = store;
  }

  ObjectStore.prototype.createIndex = function() {
    return new Index(this._store.createIndex.apply(this._store, arguments));
  };

  ObjectStore.prototype.index = function() {
    return new Index(this._store.index.apply(this._store, arguments));
  };

  proxyProperties(ObjectStore, '_store', [
    'name',
    'keyPath',
    'indexNames',
    'autoIncrement'
  ]);

  proxyRequestMethods(ObjectStore, '_store', IDBObjectStore, [
    'put',
    'add',
    'delete',
    'clear',
    'get',
    'getAll',
    'getKey',
    'getAllKeys',
    'count'
  ]);

  proxyCursorRequestMethods(ObjectStore, '_store', IDBObjectStore, [
    'openCursor',
    'openKeyCursor'
  ]);

  proxyMethods(ObjectStore, '_store', IDBObjectStore, [
    'deleteIndex'
  ]);

  function Transaction(idbTransaction) {
    this._tx = idbTransaction;
    this.complete = new Promise(function(resolve, reject) {
      idbTransaction.oncomplete = function() {
        resolve();
      };
      idbTransaction.onerror = function() {
        reject(idbTransaction.error);
      };
      idbTransaction.onabort = function() {
        reject(idbTransaction.error);
      };
    });
  }

  Transaction.prototype.objectStore = function() {
    return new ObjectStore(this._tx.objectStore.apply(this._tx, arguments));
  };

  proxyProperties(Transaction, '_tx', [
    'objectStoreNames',
    'mode'
  ]);

  proxyMethods(Transaction, '_tx', IDBTransaction, [
    'abort'
  ]);

  function UpgradeDB(db, oldVersion, transaction) {
    this._db = db;
    this.oldVersion = oldVersion;
    this.transaction = new Transaction(transaction);
  }

  UpgradeDB.prototype.createObjectStore = function() {
    return new ObjectStore(this._db.createObjectStore.apply(this._db, arguments));
  };

  proxyProperties(UpgradeDB, '_db', [
    'name',
    'version',
    'objectStoreNames'
  ]);

  proxyMethods(UpgradeDB, '_db', IDBDatabase, [
    'deleteObjectStore',
    'close'
  ]);

  function DB(db) {
    this._db = db;
  }

  DB.prototype.transaction = function() {
    return new Transaction(this._db.transaction.apply(this._db, arguments));
  };

  proxyProperties(DB, '_db', [
    'name',
    'version',
    'objectStoreNames'
  ]);

  proxyMethods(DB, '_db', IDBDatabase, [
    'close'
  ]);

  // Add cursor iterators
  // TODO: remove this once browsers do the right thing with promises
  ['openCursor', 'openKeyCursor'].forEach(function(funcName) {
    [ObjectStore, Index].forEach(function(Constructor) {
      // Don't create iterateKeyCursor if openKeyCursor doesn't exist.
      if (!(funcName in Constructor.prototype)) return;

      Constructor.prototype[funcName.replace('open', 'iterate')] = function() {
        var args = toArray(arguments);
        var callback = args[args.length - 1];
        var nativeObject = this._store || this._index;
        var request = nativeObject[funcName].apply(nativeObject, args.slice(0, -1));
        request.onsuccess = function() {
          callback(request.result);
        };
      };
    });
  });

  // polyfill getAll
  [Index, ObjectStore].forEach(function(Constructor) {
    if (Constructor.prototype.getAll) return;
    Constructor.prototype.getAll = function(query, count) {
      var instance = this;
      var items = [];

      return new Promise(function(resolve) {
        instance.iterateCursor(query, function(cursor) {
          if (!cursor) {
            resolve(items);
            return;
          }
          items.push(cursor.value);

          if (count !== undefined && items.length == count) {
            resolve(items);
            return;
          }
          cursor.continue();
        });
      });
    };
  });

  function openDb(name, version, upgradeCallback) {
    var p = promisifyRequestCall(indexedDB, 'open', [name, version]);
    var request = p.request;

    if (request) {
      request.onupgradeneeded = function(event) {
        if (upgradeCallback) {
          upgradeCallback(new UpgradeDB(request.result, event.oldVersion, request.transaction));
        }
      };
    }

    return p.then(function(db) {
      return new DB(db);
    });
  }

  function deleteDb(name) {
    return promisifyRequestCall(indexedDB, 'deleteDatabase', [name]);
  }

  exports.openDb = openDb;
  exports.deleteDb = deleteDb;

  Object.defineProperty(exports, '__esModule', { value: true });

}));


/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/public/register/register.page.html":
/*!******************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/public/register/register.page.html ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<ion-header *ngIf=\"!signO\" padding>\n    <div>\n        <ion-button color=\"secondary\" (click)=\"relload()\">Reload <ion-icon name=\"refresh\"></ion-icon></ion-button>\n    </div>\n    <br>\n    <div>\n      Please send a verification email to verify your account\n    </div>\n    \n    <br>\n    <div>\n      <ion-button expand=\"block\" color=\"secondary\" (click)=\"sendVerificationEmail()\">Send Verification Email</ion-button>\n    </div>\n    <br>\n    <div *ngIf=\"sentTimestamp\">\n      Verification email sent at {{sentTimestamp | date:'medium'}}\n    </div>\n\n    <ion-grid slot=\"bottom\">\n      <ion-row>\n        <ion-col>\n          <div><ion-button color=\"success\" (click)=\"goIn()\">Sign up</ion-button></div>\n        </ion-col>\n        <ion-col>\n          <div></div>\n        </ion-col>\n        <ion-col>\n          <div></div>\n        </ion-col>\n        <ion-col>\n          <div><ion-button color=\"dark\" (click)=\"goBack()\">Back</ion-button></div>\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n\n  </ion-header>\n \n  <!-- no need validation -->\n  <ion-content  color=\"primary\" *ngIf=\"signO\">\n    <form  #form=\"ngForm\" (ngSubmit)=\"register(form)\">\n      <ion-grid>\n        <ion-row color=\"primary\" justify-content-center>\n          <ion-col align-self-center size-md=\"6\" size-lg=\"5\" size-xs=\"12\">\n            <div text-center>\n              <h3>Create your account!</h3>\n            </div>\n            <div padding>\n              <ion-item>\n                <ion-input  name=\"name\" type=\"text\" placeholder=\"Name\"  [(ngModel)]='name' required></ion-input>\n              </ion-item>\n              <ion-item>\n                <ion-input name=\"email\" type=\"email\" placeholder=\"your@email.com\" [(ngModel)]='email'required></ion-input>\n              </ion-item>\n              <ion-item>\n                <ion-input name=\"password\" type=\"password\" placeholder=\"Password\" [(ngModel)]='password' required></ion-input>\n              </ion-item>\n              <ion-item>\n                <ion-input name=\"confirm\" type=\"password\" placeholder=\"Password again\" [(ngModel)]='passagain' ngModel required></ion-input>\n              </ion-item>\n            </div>\n            <div padding>\n              <ion-button  size=\"large\" type=\"submit\" [disabled]=\"form.invalid\" (click)='signup()' expand=\"block\">Register</ion-button>\n            </div>\n            <div padding>\n              <ion-button  size=\"large\" (click)=\"loginF()\" expand=\"block\"><ion-icon name=\"logo-facebook\" item-left></ion-icon><ion-label style=\"margin-left:1em;\">Login with Facebook</ion-label></ion-button>\n            </div>\n            <div padding>\n              <ion-button  size=\"large\" (click)=\"loginG()\" expand=\"block\"><ion-icon name=\"logo-google\" item-left></ion-icon><ion-label style=\"margin-left:2em;\">Login with Google</ion-label></ion-button>\n            </div>\n            <div padding>\n                <ion-button size=\"large\"  (click)=\"backToLogin()\" expand=\"block\">I have an acount</ion-button>\n            </div>\n          </ion-col>\n        </ion-row>\n      </ion-grid>\n    </form>\n  </ion-content>\n\n\n"

/***/ }),

/***/ "./src/app/public/register/register.module.ts":
/*!****************************************************!*\
  !*** ./src/app/public/register/register.module.ts ***!
  \****************************************************/
/*! exports provided: RegisterPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterPageModule", function() { return RegisterPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _register_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./register.page */ "./src/app/public/register/register.page.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");







var routes = [
    {
        path: '',
        component: _register_page__WEBPACK_IMPORTED_MODULE_5__["RegisterPage"]
    }
];
var RegisterPageModule = /** @class */ (function () {
    function RegisterPageModule() {
    }
    RegisterPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes),
                _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ReactiveFormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormsModule"]
            ],
            declarations: [_register_page__WEBPACK_IMPORTED_MODULE_5__["RegisterPage"]]
        })
    ], RegisterPageModule);
    return RegisterPageModule;
}());



/***/ }),

/***/ "./src/app/public/register/register.page.scss":
/*!****************************************************!*\
  !*** ./src/app/public/register/register.page.scss ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ion-item {\n  --background: #3880ff;\n  --color: #fff;\n}\n\nion-button {\n  --background: #062f77;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcHVibGljL3JlZ2lzdGVyL0M6XFxVc2Vyc1xcYW5hcyB6aXFcXERlc2t0b3BcXFRlYW1cXFRlYW1Xb3JrLW1hc3Rlci9zcmNcXGFwcFxccHVibGljXFxyZWdpc3RlclxccmVnaXN0ZXIucGFnZS5zY3NzIiwic3JjL2FwcC9wdWJsaWMvcmVnaXN0ZXIvcmVnaXN0ZXIucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQVdBO0VBQ0kscUJBQUE7RUFDQSxhQUFBO0FDVko7O0FEYUE7RUFDSSxxQkFBQTtBQ1ZKIiwiZmlsZSI6InNyYy9hcHAvcHVibGljL3JlZ2lzdGVyL3JlZ2lzdGVyLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIC5lcnJvci1tZXNzYWdlXG4vLyB7XG4vLyAgICAgY29sb3I6IHJlZDtcbi8vICAgICBmb250LXNpemU6IDE0cHg7XG4vLyAgICAgbWFyZ2luLWxlZnQ6IDEwcHg7XG4vLyAgICAgbWFyZ2luLXRvcDogMTBweDtcbi8vIH1cblxuLy8gaW9uLWNvbnRlbnQge1xuLy8gICAgIC8vIC0tYmFja2dyb3VuZDogdXJsKCcuLi8uLi8uLi9hc3NldHMvaWNvbi9jcm9wLmpwZycpIG5vLXJlcGVhdCAxMDAlIDEwMCU7XG4vLyB9XG5pb24taXRlbXtcbiAgICAtLWJhY2tncm91bmQ6ICMzODgwZmY7XG4gICAgLS1jb2xvcjogI2ZmZjtcbn1cblxuaW9uLWJ1dHRvbntcbiAgICAtLWJhY2tncm91bmQ6ICMwNjJmNzc7XG59IiwiaW9uLWl0ZW0ge1xuICAtLWJhY2tncm91bmQ6ICMzODgwZmY7XG4gIC0tY29sb3I6ICNmZmY7XG59XG5cbmlvbi1idXR0b24ge1xuICAtLWJhY2tncm91bmQ6ICMwNjJmNzc7XG59Il19 */"

/***/ }),

/***/ "./src/app/public/register/register.page.ts":
/*!**************************************************!*\
  !*** ./src/app/public/register/register.page.ts ***!
  \**************************************************/
/*! exports provided: RegisterPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterPage", function() { return RegisterPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_fire_database__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/fire/database */ "./node_modules/@angular/fire/database/index.js");
/* harmony import */ var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/fire/auth */ "./node_modules/@angular/fire/auth/index.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _ionic_native_email_composer_ngx__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic-native/email-composer/ngx */ "./node_modules/@ionic-native/email-composer/ngx/index.js");
/* harmony import */ var _ionic_native_facebook_ngx__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic-native/facebook/ngx */ "./node_modules/@ionic-native/facebook/ngx/index.js");
/* harmony import */ var firebase__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! firebase */ "./node_modules/firebase/dist/index.cjs.js");
/* harmony import */ var firebase__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(firebase__WEBPACK_IMPORTED_MODULE_9__);










var RegisterPage = /** @class */ (function () {
    function RegisterPage(router, fb, emailComposer, facebook, db, fireauth, toastController) {
        this.router = router;
        this.fb = fb;
        this.emailComposer = emailComposer;
        this.facebook = facebook;
        this.db = db;
        this.fireauth = fireauth;
        this.toastController = toastController;
        this.hasVerifiedEmail = false;
        this.second = true;
        this.signO = true;
        this.flag = true;
        this.usersList = db.list('/User/');
    }
    ;
    RegisterPage.prototype.loginF = function () {
        return this.facebook.login(['email'])
            .then(function (response) {
            var facebookCredential = firebase__WEBPACK_IMPORTED_MODULE_9__["auth"].FacebookAuthProvider
                .credential(response.authResponse.accessToken);
            firebase__WEBPACK_IMPORTED_MODULE_9__["auth"]().signInWithCredential(facebookCredential)
                .then(function (success) {
                console.log("Firebase success: " + JSON.stringify(success));
            });
        }).catch(function (error) { console.log(error); });
    };
    // async loginF() {
    //   this.facebook.login(['email'])
    //     .then((response: FacebookLoginResponse) => {
    //       this.onLoginSuccess(response);
    //       console.log(response.authResponse.accessToken);
    //     }).catch((error) => {
    //       console.log(error)
    //       alert('error:' + error)
    //     });
    // }
    // onLoginSuccess(res: FacebookLoginResponse) {
    //   // const { token} = res;
    //   const credential = firebase.auth.FacebookAuthProvider.credential(res.authResponse.accessToken);
    //   this.fireauth.auth.signInWithCredential(credential)
    //     .then((response) => {
    //        console.log("Firebase success: " + JSON.stringify(response)); 
    //       this.router.navigate(["/tabs"]);
    //     })
    // }
    // onLoginError(err) {
    //   console.log(err);
    // }
    // loginF(){
    //       this.fireauth.auth.signInWithPopup( new firebase.auth.FacebookAuthProvider()).then(res =>{
    //     console.log("in");
    //     console.log(res);
    //     this.router.navigate(['tabs']);
    //   }).catch(err => {
    //     console.log(err);
    //   })
    // }
    RegisterPage.prototype.loginG = function () {
        this.fireauth.auth.signOut();
    };
    RegisterPage.prototype.ngOnInit = function () {
        var _this = this;
        this.fireauth.authState.subscribe(function (user) {
            if (user) {
                console.log(_this.fireauth.auth.currentUser.email);
                _this.hasVerifiedEmail = _this.fireauth.auth.currentUser.emailVerified;
                _this.second = _this.fireauth.auth.currentUser.emailVerified;
                if (!_this.second && !_this.hasVerifiedEmail) {
                    _this.signO = false;
                }
                // if(this.hasVerifiedEmail){
                //   console.log("add user");
                //   this.router.navigate(['login']);
                // }
            }
        });
    };
    RegisterPage.prototype.backToLogin = function () {
        this.router.navigate(['login']);
    };
    RegisterPage.prototype.signup = function () {
        var _this = this;
        if (this.name != null && this.email != null && this.password != null && this.passagain != null) {
            if (this.password = this.passagain) {
                this.fireauth.auth.createUserWithEmailAndPassword(this.email, this.password)
                    .then(function (res) {
                    if (res.user) {
                        _this.fireauth.authState.subscribe(function (user) {
                            if (user) {
                                user.updateProfile({
                                    displayName: _this.name,
                                    photoURL: "../../../../assets/icon/userPic.jpg"
                                }).then(function () {
                                    // Update successful.
                                }).catch(function (error) {
                                    // An error happened.
                                });
                                var userRef = _this.db.database.ref('users/' + _this.fireauth.auth.currentUser.uid);
                                userRef.set({
                                    'name': _this.name,
                                    'email': _this.fireauth.auth.currentUser.email,
                                    'key': _this.fireauth.auth.currentUser.uid,
                                    'imageURL': "../../../../assets/icon/userPic.jpg",
                                    'vistedPlaces': ["vistedPlaces"],
                                    'savedPlaces': ["savedPlaces"]
                                });
                                // this.usersList.push({
                                //   name: this.fireauth.auth.currentUser.displayName,
                                //   email: this.fireauth.auth.currentUser.email ,
                                //   vistedPlaces: [],
                                //   savedPlaces :[]
                                //   }).then(newUser => { console.log("seucess"); }
                                //   , error => { console.log("error") }
                                // );
                            }
                        });
                    }
                })
                    .catch(function (err) {
                    console.log('signup failed ${err}');
                    console.log(err.message);
                    _this.presentToast(err.message);
                });
            }
            else {
                this.presentToast("Passwords doesnt match");
            }
        }
        else {
            this.presentToast("Please fill the field");
        }
    };
    RegisterPage.prototype.goBack = function () {
        this.db.database.ref('users/' + this.fireauth.auth.currentUser.uid).remove();
        this.fireauth.auth.currentUser.delete();
        this.hasVerifiedEmail = true;
        this.signO = true;
    };
    RegisterPage.prototype.goIn = function () {
        if (this.hasVerifiedEmail) {
            this.usersList.push({
                key_id: new Date().getTime(),
                name: this.name,
                email: this.email,
                password: this.password,
            }).then(function (newUser) { console.log("success"); }, function (error) { console.log("error"); });
            this.signO = true;
        }
        else {
            this.presentToast("Please Verify your Email");
        }
    };
    RegisterPage.prototype.presentToast = function (m) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var toast;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.toastController.create({
                            message: m,
                            duration: 5000
                        })];
                    case 1:
                        toast = _a.sent();
                        toast.present();
                        return [2 /*return*/];
                }
            });
        });
    };
    RegisterPage.prototype.sendVerificationEmail = function () {
        this.fireauth.auth.currentUser.sendEmailVerification();
        this.sentTimestamp = new Date();
    };
    RegisterPage.prototype.relload = function () {
        this.signO = false;
        window.location.reload();
        this.router.navigate(['register']);
    };
    RegisterPage.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"] },
        { type: _ionic_native_email_composer_ngx__WEBPACK_IMPORTED_MODULE_7__["EmailComposer"] },
        { type: _ionic_native_facebook_ngx__WEBPACK_IMPORTED_MODULE_8__["Facebook"] },
        { type: _angular_fire_database__WEBPACK_IMPORTED_MODULE_4__["AngularFireDatabase"] },
        { type: _angular_fire_auth__WEBPACK_IMPORTED_MODULE_5__["AngularFireAuth"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["ToastController"] }
    ]; };
    RegisterPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-register',
            template: __webpack_require__(/*! raw-loader!./register.page.html */ "./node_modules/raw-loader/index.js!./src/app/public/register/register.page.html"),
            styles: [__webpack_require__(/*! ./register.page.scss */ "./src/app/public/register/register.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"],
            _ionic_native_email_composer_ngx__WEBPACK_IMPORTED_MODULE_7__["EmailComposer"],
            _ionic_native_facebook_ngx__WEBPACK_IMPORTED_MODULE_8__["Facebook"],
            _angular_fire_database__WEBPACK_IMPORTED_MODULE_4__["AngularFireDatabase"], _angular_fire_auth__WEBPACK_IMPORTED_MODULE_5__["AngularFireAuth"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["ToastController"]])
    ], RegisterPage);
    return RegisterPage;
}());



/***/ })

}]);
//# sourceMappingURL=public-register-register-module-es5.js.map