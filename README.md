# emoji-cipher-gentle-hyena
## Description

Let's build a cipher using emoji. High five! 🙌🏽

To complete this goal, you'll create a Node.js module that exports two functions: one to encode a string of alphanumeric characters into emoji, and another to decode an emoji message to the original string.

Here's an example usage:

``` javascript
import {encode, decode} from "emoji-cipher"

encode("secret message")
// => "😸🏃🐴👿🏃🤓 🐥🏃😸😸🌵🌎🏃"

decode("😸🏃🐴👿🏃🤓 🐥🏃😸😸🌵🌎🏃")
// => "secret message"
```

If you're not familiar with Node.js and/or ECMAScript 2015, you'll need to do some research to become familiar with these technologies. For compiling, consider using [Babel](https://babeljs.io/).
## Context

A cipher is "a secret or disguised way of writing; a code" (source: [Google](https://www.google.com/#q=cipher)). Technically, a cipher is a mapping between two sets of symbols.

One of the earliest and simplest ciphers in history is something you may have played with as a child: a [Caesar cipher](https://en.wikipedia.org/wiki/Caesar_cipher).

Translating between different representations of data is a such a common task in programming, and a cipher is a good (and fun) way to become familiar with this process.

As you work on this goal, consider the following questions:
- What does it mean to encode or decode something? Where else are these processes used?
- Which characters will the cipher support? How will the _mapping_ between characters and emoji be represented?
- How should the functions respond to invalid input? What are the possible errors and how should they be handled?
## Specifications
- [ ] Code is packaged as a module that exports (at least) the two functions `encode` and `decode`.
- [ ] Exported functions can encode and decode alphanumeric characters to/from emoji.
- [ ] Tests for both `encode` and `decode` functions are included and passing.
- [ ] All source code is written using ECMAScript 2015 syntax.
- [ ] Source code contains a `README.md` file with instructions and example usage.
## Quality
- [ ] Variables, functions, css classes, etc. are meaningfully named (no comments exist in code to explain functionality - the names serve that function).
- [ ] Repository includes a README file with installation and setup instructions.
- [ ] There is a command to install dependencies (e.g. npm install) and it is specified in the installation and setup instructions of the README. 
- [ ] Every pull request has been reviewed with Prrr.
### Required

_Do not remove these specs - they are required for all goals_.
- [ ] The artifact produced is properly licensed, preferably with the [MIT license](https://opensource.org/licenses/MIT).

---

<!-- LICENSE -->

<a rel="license" href="http://creativecommons.org/licenses/by-nc-sa/4.0/"><img alt="Creative Commons License" style="border-width:0" src="https://i.creativecommons.org/l/by-nc-sa/4.0/80x15.png" /></a>
<br />This work is licensed under a <a rel="license" href="http://creativecommons.org/licenses/by-nc-sa/4.0/">Creative Commons Attribution-NonCommercial-ShareAlike 4.0 International License</a>.
