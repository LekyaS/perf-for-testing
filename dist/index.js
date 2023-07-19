/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ 543:
/***/ ((module) => {

module.exports = eval("require")("@actions/core");


/***/ }),

/***/ 890:
/***/ ((module) => {

module.exports = eval("require")("@actions/github");


/***/ }),

/***/ 310:
/***/ ((module) => {

module.exports = eval("require")("uuid");


/***/ }),

/***/ 81:
/***/ ((module) => {

"use strict";
module.exports = require("child_process");

/***/ }),

/***/ 147:
/***/ ((module) => {

"use strict";
module.exports = require("fs");

/***/ }),

/***/ 37:
/***/ ((module) => {

"use strict";
module.exports = require("os");

/***/ }),

/***/ 17:
/***/ ((module) => {

"use strict";
module.exports = require("path");

/***/ }),

/***/ 34:
/***/ ((module) => {

"use strict";
module.exports = require("url");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __nccwpck_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			__webpack_modules__[moduleId](module, module.exports, __nccwpck_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete __webpack_module_cache__[moduleId];
/******/ 		}
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__nccwpck_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__nccwpck_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__nccwpck_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__nccwpck_require__.o(definition, key) && !__nccwpck_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__nccwpck_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__nccwpck_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/compat */
/******/ 	
/******/ 	if (typeof __nccwpck_require__ !== 'undefined') __nccwpck_require__.ab = __dirname + "/";
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
(() => {
"use strict";
__nccwpck_require__.r(__webpack_exports__);
/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_0__ = __nccwpck_require__(310);
/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__nccwpck_require__.n(uuid__WEBPACK_IMPORTED_MODULE_0__);

const core = __nccwpck_require__(543);
const github = __nccwpck_require__(890);
const path = __nccwpck_require__(17);
const url = __nccwpck_require__(34);

const os = __nccwpck_require__(37);
const fs = __nccwpck_require__(147);

const main = async () => {
    try {
        /**
         * We need to fetch all the inputs that were provided to our action
         * and store them in variables for us to use.
         **/

        const productpath = getProductPath();
        const configfile = core.getInput('configFile', { required: false });
        var suite;
        var script;

        if (configfile) {
            if (process.platform == 'linux' || process.platform == 'darwin') {
                script = 'cd ' + '"' + productpath + '/cmdline"' + '\n'
                    + 'bash cmdline.sh'
                    + ' -configfile ' + '"' + configfile + '"';
            }
            if (process.platform == 'win32') {
                script = 'cd ' + '"' + productpath + '\\cmdline"' + '\n'
                    + './cmdline.bat'
                    + ' -configfile ' + '"' + configfile + '"';
            }
        }
        else {
            const workspace = core.getInput('workspace', { required: true });
            const project = core.getInput('project', { required: true });
            suite = core.getInput('suite', { required: true });

            var imshared = core.getInput('imShared', { required: false });
            const swapdatasets = core.getInput('swapDatasets', { required: false });
            const duration = core.getInput('duration', false);
            const exportlog = core.getInput('exportLog', false);
            const exportstats = core.getInput('exportStats', { required: false });
            const exportstatshtml = core.getInput('exportStatsHtml', { required: false });
            const exportstatsformat = core.getInput('exportStatsFormat', { required: false });
            const exportstatreportlist = core.getInput('exportStatReportList', { required: false });
            const reporthistory = core.getInput('reportHistory', { required: false });
            const labels = core.getInput('labels', { required: false });
            const overwrite = core.getInput('overwrite', { required: false });
            const publish = core.getInput('publish', { required: false });
            const publish_for = core.getInput('publishFor', { required: false });
            const publishreports = core.getInput('publishReports', { required: false });
            const rate = core.getInput('rate', { required: false });
            const overridermlabels = core.getInput('overrideRmLabels', { required: false });
            const results = core.getInput('results', { required: false });
            const users = core.getInput('users', { required: false });
            const usercomments = core.getInput('userComments', { required: false });
            const varfile = core.getInput('varFile', { required: false });
            const vmargs = core.getInput('vmArgs', { required: false });

            if (!imshared) {
                imshared = getImsharedLoc(productpath);
            }

            if (workspace == null || project == null || suite == null) {
                core.setFailed("WorkSpace,Project & Suite are mandatory parameters");
            }
            if (process.platform == 'linux' || process.platform == 'darwin') {
                script = 'cd ' + '"' + productpath + '/cmdline"' + '\n'
                    + 'bash cmdline.sh'
                    + ' -workspace ' + '"' + workspace + '"'
                    + ' -project ' + '"' + project + '"'
                    + ' -eclipsehome ' + '"' + productpath + '"'
                    + ' -plugins ' + '"' + imshared + '/plugins"';
            }
            else
                if (process.platform == 'win32') {
                    script = 'cd ' + '"' + productpath + '\\cmdline"' + '\n'
                        + './cmdline.bat'
                        + ' -workspace ' + '"' + workspace + '"'
                        + ' -project ' + '"' + project + '"'
                        + ' -eclipsehome ' + '"' + productpath + '"'
                        + ' -plugins ' + '"' + imshared + '\\plugins"';
                }

            script = script.concat(' -suite ' + '"' + suite + '"');

            if (labels) {
                script = script.concat(' -labels ' + '"' + labels + '"');
            }
            if (varfile) {
                script = script.concat(' -varfile ' + '"' + varfile + '"');
            }
            if (swapdatasets) {
                script = script.concat(' -swapdatasets ' + '"' + swapdatasets + '"');
            }
            if (results) {
                script = script.concat(' -results ' + '"' + results + '"');
            }
            if (overwrite) {
                script = script.concat(' -overwrite ' + '"' + overwrite + '"');
            }
            if (exportlog) {
                script = script.concat(' -exportlog ' + '"' + exportlog + '"');
            }
            if (exportstats) {
                script = script.concat(' -exportstats ' + '"' + exportstats + '"');
            }
            if (exportstatreportlist) {
                script = script.concat(' -exportstatreportlist ' + '"' + exportstatreportlist + '"');
            }
            if (exportstatshtml) {
                script = script.concat(' -exportstatshtml ' + '"' + exportstatshtml + '"');
            }
            if (usercomments) {
                script = script.concat(' -usercomments ' + '"' + usercomments + '"');
            }
            if (exportstatsformat) {
                script = script.concat(' -exportstatsformat ' + '"' + exportstatsformat + '"');
            }
            if (publish) {
                script = script.concat(' -publish ' + '"""' + publish + '"""');
            }
            if (publish_for) {
                script = script.concat(' -publish_for ' + '"' + publish_for + '"');
            }
            if (publishreports) {
                script = script.concat(' -publishreports ' + '"' + publishreports + '"');
            }
            if (reporthistory) {
                script = script.concat(' -history ' + '"' + reporthistory + '"');
            }
            if (vmargs) {
                script = script.concat(' -vmargs ' + '"' + vmargs + '"');
            }
            if (users) {
                script = script.concat(' -users ' + '"' + users + '"');
            }
            if (rate) {
                script = script.concat(' -rate ' + '"' + rate + '"');
            }
            if (duration) {
                script = script.concat(' -duration ' + '"' + duration + '"');
            }
            if (overridermlabels) {
                script = script.concat(' -overridermlabels ' + '"' + overridermlabels + '"');
            }
        }


        let tempDir = os.tmpdir();
        let filePath = path.join(tempDir, (0,uuid__WEBPACK_IMPORTED_MODULE_0__.v4)() + '.ps1');
        await fs.writeFileSync(
            filePath,
            script,
            { encoding: 'utf8' });

        console.log(script);
        console.log('========================== Starting Command Output ===========================');
        var spawn = (__nccwpck_require__(81).spawn), child;
        if (process.platform == 'darwin') {
            child = spawn("pwsh", [filePath]);
        }
        else {
            child = spawn("powershell.exe", [filePath]);
        }
        child.stdout.on("data", function (data) {
            console.log(" " + data);
        });
        child.stderr.on("data", function (data) {
            console.log("Errors: " + data);
        });
        child.on("exit", function () {
            console.log("Powershell Script finished");

        });
        await new Promise((resolve) => {
            child.on('close', resolve)
        });
        child.stdin.end();


        var fResultFile = tempDir + path.sep + "CommandLineLog.txt";


        if (fs.existsSync(fResultFile)) {

            var verdictRegex = /--VERDICT=(INCONCLUSIVE|ERROR|PASS|FAIL).*/
            var serverRegex = /--PUBLISH_URL=(.*)/;
            var reportRegex = /--REPORT=(.*)[|]--URL=(.*)/;
            var reports = {};
            var isVerdictSet = false;
            var verdict;
            var publishURL;
            var reportSet = false;

            var data = fs.readFileSync(fResultFile, 'utf-8')
                .split('\n');
            data.forEach(line => {
                if (!isVerdictSet && verdictRegex.test(line)) {
                    var result = verdictRegex.exec(line);
                    verdict = result[1];
                    console.log("Test Result is: " + verdict);
                    isVerdictSet = true;
                    if (verdict == 'ERROR' || verdict == 'FAIL') {
                        core.setFailed("Test Result is: FAIL");
                    }
                }
                else if (publishURL == undefined && serverRegex.test(line)) {
                    var result = serverRegex.exec(line);
                    publishURL = result[1];
                }
                else if (reportRegex.test(line)) {
                    var reps = reportRegex.exec(line);
                    reports[reps[1]] = reps[2];
                    reportSet = true;
                }
            });

            if (!isVerdictSet) {
                console.log("Test Result is: FAIL");
                core.setFailed("Test Result is: FAIL");
            }
            if (publishURL != undefined && reportSet) {
                console.log("");
                console.log("Published Reports information:");
                for (var i in reports) {
                    console.log(i + " : " + url.resolve(publishURL, reports[i]));
                }
            }
        }
        else {
            console.log("Test Result is: FAIL");
            core.setFailed("Test Result is: FAIL");
        }

        console.log("");
    }

    catch (error) {
        core.setFailed(error.message);
    }
}

function isEmptyOrSpaces(dataset) {
    return dataset === null || dataset.match(/^ *$/) !== null;
}

function getProductPath() {
    var productPathVal = process.env.TEST_WORKBENCH_HOME;
    var isValid = isValidEnvVar(productPathVal);
    if (isValid) {
        var stats = fs.statSync(productPathVal);
        isValid = stats.isDirectory();
    }

    if (!isValid) {
        throw new Error("Could not find a valid TEST_WORKBENCH_HOME environment variable pointing to installation directory.");
    }
    return productPathVal;
}
function isValidEnvVar(productPathVal) {
    var valid = true;
    if (productPathVal == null)
        valid = false;

    else {
        productPathVal = productPathVal.toLowerCase();
        if (productPathVal.includes("*") || productPathVal.includes("?") ||
            productPathVal.startsWith("del ") || productPathVal.startsWith("rm "))
            valid = false;
    }

    return valid;
}

function getImsharedLoc(productpath) {
    let ibmloc = null;
    var rollupIndex = productpath.lastIndexOf(path.sep);
    if (productpath.length == rollupIndex + 1) {
        ibmloc = productpath.substring(0, rollupIndex);
        rollupIndex = ibmloc.lastIndexOf("/");
    }
    ibmloc = productpath.substring(0, rollupIndex);
    // Need to add proper sharedlocation HCL/IBM - hardcoded to HCL
    return ibmloc + path.sep + "HCLIMShared";
}
// Call the main function to run the action
main();

})();

module.exports = __webpack_exports__;
/******/ })()
;