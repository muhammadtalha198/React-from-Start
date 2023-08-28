/*
    in case of single import...
*/

import { apiKey } from "./app";

//----------------------------------------------------------------

/*
    in case of multiple import...
*/
import { apiKey0, apiKey1, apiKey2 } from "./app";

//----------------------------------------------------------------

/*
 import all exports as an object by putting any name.
*/

import * as allApiKeys from "/app";

console.log(allApiKeys.apiKey, allApiKeys.apiKey1);

//----------------------------------------------------------------

/*
in default export case:use any name to import.
*/

import anyNameApiKey from "./app";
console.log(apiKey);
