# Working with stacks and queues

## 1) Create a stack class

Walk through the Stack class in the curriculum and understand it well. Then write a Stack class with its core functions (push, pop) from scratch.

* Create a stack called starTrek and add Kirk, Spock, McCoy, and Scotty to the stack.

````
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
````

## 2) Useful methods for a stack
* Using the Stack class above, implement the following helper functions outside of the class:
  * peek(): allows you to look at the top of the stack without removing it

  ````
    function peek(stack) {
        let currNode = stack.top

        console.log(currNode)
    }
  ````

  * isEmpty(): allows you to check if the stack is empty or not

  ````
    function isEmpty(stack) {
        let currNode = stack.top
        
        if (!currNode) {
            return true
        }
        return false
    }
  ````
  * display(): to display the stack - what is the 1st item in your stack?

  ````
    function display(stack) {
        let currNode = stack.top

        while (currNode !== null) {
            console.log(currNode)
            currNode = currNode.next
        }
    }
  ````

* Remove McCoy from your stack and display the stack