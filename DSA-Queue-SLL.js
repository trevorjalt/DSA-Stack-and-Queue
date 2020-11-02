class _Node {
    constructor(value) {
        this.value = value
        this.next = null
    }
}

class Queue {
    constructor() {
        this.first = null
        this.last = null
        this.length = 0
    }

    enqueue(data) {
        const node = new _Node(data)

        if (this.first === null) {
            this.first = node
        }

        if (this.last) {
            this.last.next = node
        }

        // make the new node the last item on the queue
        this.length += 1
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

        this.length -= 1
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



function squareDancePairing(dancerQueue) {
    let maleQueue = new Queue()
    let femaleQueue = new Queue()

    for (let i = 0; i < dancerQueue.length; i++) {
        if (dancerQueue[i][0] === 'F') {
            femaleQueue.enqueue(dancerQueue[i])
        } else {
            maleQueue.enqueue(dancerQueue[i])
        }

        if (femaleQueue.first && maleQueue.first) {
            let maleDancer = maleQueue.dequeue().substring(2)
            let femaleDancer = femaleQueue.dequeue().substring(2)

            console.log(`Female dancer is ${femaleDancer}, and the male dancer is ${maleDancer}`)

        }
    }

    if (maleQueue.length > 0) {
        console.log(`There are ${maleQueue.length} male dancers waiting to dance`);
    } else if (femaleQueue.length > 0) {
        console.log(`There are ${femaleQueue.length} fremale dancers waiting to dance`);
    }
}

const dancers = [
    'F Jane',
    'M Frank',
    'M John',
    'M Sherlock',
    'F Madonna',
    'M David',
    'M Christopher',
    'F Beyonce'
]

squareDancePairing(dancers)


