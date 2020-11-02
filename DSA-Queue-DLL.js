class _Node {
    constructor(value) {
        this.value = value
        this.next = null
        this.prev = null
    }
}

class Queue {
    constructor() {
        this.first = null
        this.last = null
    }

    enqueue(data) {
        let node = new _Node(data)

        if (this.first === null) {
            this.first = node
            node.prev = null
        }

        if (this.last) {
            this.last.next = node
            node.prev = this.last
        }

        // make the new node the last item on the queue
        this.last = node
    }

    dequeue() {
        // if queue is empty, there is nothing to return
        if (this.first === null) {
            return
        }

        const node = this.first
        this.first = this.first.next

        // if this is the last item in the queue
        if (node === this.last) {
            this.last = null
        }

        return node.value
    }
}



let starTrek = new Queue()

function main() {
    starTrek.enqueue('Kirk')
    starTrek.enqueue('Spock')
    starTrek.enqueue('Uhura')
    starTrek.enqueue('Sulu')
    starTrek.enqueue('Checkov')
}

main()



function peek(queue) {
    return queue.first
}

console.log(peek(starTrek))



function isEmpty(queue) {
    if (!queue.first) {
        return true
    }
    return false
}

console.log(isEmpty(starTrek))



function display(queue) {
    let currNode = queue.first

    while (currNode !== null) {
        console.log(currNode)
        currNode = currNode.next
    }
}

display(starTrek)