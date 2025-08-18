"use strict";
class Box {
    constructor(content) {
        this.content = content;
    }
    getContent() {
        return this.content;
    }
    setContent(newContent) {
        this.content = newContent;
    }
}
const boxy = new Box("hello, typescript");
console.log(boxy.getContent());
boxy.setContent("hello js");
console.log(boxy.getContent());
