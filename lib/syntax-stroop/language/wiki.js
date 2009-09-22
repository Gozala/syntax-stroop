/**
 * @fileoverview
 * Registers a language handler for Wiki pages.
 *
 * Based on WikiSyntax at http://code.google.com/p/support/wiki/WikiSyntax
 *
 * @author mikesamuel@gmail.com
 */

exports.register = function(PR) {
    PR.registerLangHandler(
        PR.createSimpleLexer(
            [
             // Whitespace
             [PR.PR_PLAIN,       /^[\t\n\r \xA0a-gi-z0-9]+/, null,
              '\t\n\r \xA0abcdefgijklmnopqrstuvwxyz0123456789'],
             // Wiki formatting
             [PR.PR_PUNCTUATION, /^[=*~\^\[\]]+/, null, '=*~^[]']
            ],
            [
             // Meta-info like #summary, #labels, etc.
             [PR.PR_KEYWORD,     /^#[a-z]+\b/, /(?:^|[\r\n])$/],
             // A WikiWord
             [PR.PR_LITERAL,     /^(?:[A-Z][a-z][a-z0-9]+[A-Z][a-z][a-zA-Z0-9]+)\b/
              ],
             // A preformatted block in an unknown language
             ['lang-',           /^\{\{\{([\s\S]+?)\}\}\}/],
             // A block of source code in an unknown language
             ['lang-',           /^`([^\r\n`]+)`/],
             // An inline URL.
             [PR.PR_STRING,
              /^https?:\/\/[^\/?#\s]*(?:\/[^?#\s]*)?(?:\?[^#\s]*)?(?:#\S*)?/i],
             [PR.PR_PLAIN,       /^[\s\S][^#=*~^A-Zh\{`\[]+/]
            ]),
        ['wiki']);
}