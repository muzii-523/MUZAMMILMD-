/**
 * Auto-upgraded shim for original plugin fetch-quote.js
 * Created to provide a uniform interface: module.exports = { command, description, handler }
 * The original code is backed up as fetch-quote.orig.js.
 * Shim will attempt common exported functions: handler, run, default, or a function named after command.
 */
const orig = require('./fetch-quote.orig.js');
const fallbackCommand = 'fetch-quote';
const command = (orig && (orig.command || orig.name || orig.cmd)) || fallbackCommand;
const description = (orig && (orig.description || orig.desc || orig.help)) || '';
async function handler(sock, msg, args) {
  try {
    if (!orig) return console.warn('Original plugin not found for', command);
    // Common function names
    if (typeof orig.handler === 'function') return await orig.handler(sock, msg, args);
    if (typeof orig.run === 'function') return await orig.run(sock, msg, args);
    if (typeof orig.default === 'function') return await orig.default(sock, msg, args);
    if (typeof orig[command] === 'function') return await orig[command](sock, msg, args);
    // If module itself is a function
    if (typeof orig === 'function') return await orig(sock, msg, args);
    // If original exports an object with a handle property
    if (orig && typeof orig.handle === 'function') return await orig.handle(sock, msg, args);
    console.warn('No runnable export found in plugin', command);
  } catch (e) {
    console.error('Plugin', command, 'error:', e && (e.stack || e.message || e));
  }
}
module.exports = {
  command,
  description,
  handler
};
