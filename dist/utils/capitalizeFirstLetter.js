"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.StringUtils = void 0;
class StringUtils {
    static capitalizeFirstLetter(input) {
        if (input.length === 0) {
            return input;
        }
        return input.charAt(0).toUpperCase() + input.slice(1);
    }
}
exports.StringUtils = StringUtils;
