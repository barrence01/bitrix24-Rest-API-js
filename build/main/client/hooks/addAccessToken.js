"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Got can't merge `query` option with other queries if they are string. But that hook can.
 */
exports.default = (accessToken) => (options) => {
    if (!accessToken)
        return;
    if (!options.path)
        return;
    const hasQuery = options.path.includes('?');
    options.path = `${options.path}${hasQuery ? '&' : '?'}access_token=${accessToken}`;
};