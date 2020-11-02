class _Node {
    constructor(data, next) {
        this.data = data
        this.next = next
    }
}

class Stack {
    constructor() {
        this.top = null
    }

    push(data) {
        // if stack empty, place on top of stack
        if (this.top === null) {
            this.top = new _Node(data, null)
            return this.top
        }

        // if stack already has something
        // create a new node
        // add data to the new node
        // have pointer point to the top
        const node = new _Node(data, this.top)
        this.top = node
    }

    pop() {
        // remove from the top
        // pointer points to next item
        // next item becomes top of the stack

        const node = this.top
        this.top = node.next
        return node.data
    }
}

const starTrek = new Stack()

function main() {
    starTrek.push('Kirk')
    starTrek.push('Spock')
    starTrek.push('McCoy')
    starTrek.push('Scotty')
}

main()



function peek(stack) {
    let currNode = stack.top

    console.log(currNode)
}

peek(starTrek)



function isEmpty(stack) {
    let currNode = stack.top
    
    if (!currNode) {
        return true
    }
    return false
}

console.log(isEmpty(starTrek))



function display(stack) {
    let currNode = stack.top

    while (currNode !== null) {
        console.log(currNode)
        currNode = currNode.next
    }
}

// display(starTrek)