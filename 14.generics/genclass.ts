class Box<T> {
    private content: T;

    constructor(content: T) {
        this.content = content;
    }

    getContent(): T {
        return this.content;
    }

    setContent(newContent: T): void {
        this.content = newContent;
    }
}

const boxy = new Box<string>("hello, typescript");
console.log(boxy.getContent());
boxy.setContent("hello js")
console.log(boxy.getContent());
