// Copyright (c) 2012 Ecma International.  All rights reserved.
// Ecma International makes this code available under the terms and conditions set
// forth on http://hg.ecmascript.org/tests/test262/raw-file/tip/LICENSE (the
// "Use Terms").   Any redistribution of this code must retain the above
// copyright and this notice and otherwise comply with the Use Terms.

/*---
es5id: 15.2.3.6-3-227-1
description: >
    Object.defineProperty - 'Attributes' is an Error object that uses
    Object's [[Get]] method to access the 'get' property of prototype
    object (8.10.5 step 7.a)
includes: [runTestCase.js]
---*/

function testcase() {
        var obj = {};
        try {
            Error.prototype.get = function () {
                return "errorGetProperty";
            };
            var errObj = new Error();

            Object.defineProperty(obj, "property", errObj);

            return obj.property === "errorGetProperty";
        } finally {
            delete Error.prototype.get;
        }
    }
runTestCase(testcase);