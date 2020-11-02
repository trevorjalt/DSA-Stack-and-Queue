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

## 3) Check for palindromes using a stack

A palindrome is a word, phrase, or number that is spelled the same forward and backward. For example, “dad” is a palindrome; “A man, a plan, a canal: Panama” is a palindrome if you take out the spaces and ignore the punctuation; and 1,001 is a numeric palindrome. We can use a stack to determine whether or not a given string is a palindrome.

Write an algorithm that uses a stack to determine whether a given input is palindrome or not. Use the following template as a starting point.

````
function is_palindrome(s) {
    s = s.toLowerCase().replace(/[^a-zA-Z0-9]/g, "");
    // Your code goes here
}

// True, true, true, false
console.log(is_palindrome("dad"));
console.log(is_palindrome("A man, a plan, a canal: Panama"));
console.log(is_palindrome("1001"));
console.log(is_palindrome("Tauhida"));
````

````
A:

function is_palindrome(str) {
    s = str.toLowerCase().replace(/[^a-zA-Z0-9]/g, "");

    let stack = new Stack()

    for (let i = 0; i < s.length; i++) {
        stack.push(s[i])
    }

    for (let j = 0; j < s.length; j++) {
        if (s[j] === stack.pop()) {
            continue
        }
        else {
            return false
        }
    }
    return true
}
````

## 4) Matching parentheses in an expression

A stack can be used to ensure that an arithmetic expression has balanced parentheses. Write a function that takes an arithmetic expression as an argument and returns true or false based on matching parenthesis. As a bonus provide a meaningful error message to the user as to what's missing. For example, you are missing a ( or missing a ")".

For version 1, the parentheses you need to consider are ( and ). Finding a close parenthesis without an open parenthesis is an error (report the location of the close); reaching the end of the string while still "holding" an open parenthesis is also an error (report the location of the open).

Extension exercise: Recognize 3 pairs of brackets: (), [], and {}. These must be correctly nested; "([)]" is incorrect, and should report an error at the ), stating that you were expecting a ] but found a ). If this is starting to look and sound very familiar, congratulations - you're beginning to write a simple language parser!

Extension extension exercise: Also recognize 2 types of quote character: "" and ''. Inside quotes, brackets aren't counted at all - in fact, nothing is counted until you reach the corresponding close quote.

````
function langParser(str) {
    const stack = new Stack()

    let langMap = {
        '(': ')',
        '[': ']',
        '{': '}',
    }

    for (let i = 0; i < str.length; i++) {
        // if character is an opening, add to stack
        if (str[i] === '(' || str[i] === '[' || str[i] === '{') {
            stack.push(str[i])
        }
        
        // if character is a closing brace, pop it from the stack
        else {
            let lastChar = ''

            // if stack is empty, exit, else pop off the last char
            if (stack.top === null) {
                return false
            } else {
                lastChar = stack.pop()
            }

            // if lastChar doesn't match the corresponding element in the langMap, return false
            if (str[i] !== langMap[lastChar]) {
                return false
            }
        }
    }

    // if stack isn't empty after completion of for loop, return false
    if (stack.top !== null) {
        return false
    }
    
    return true
}
````

## 5) Sort stack

Write a program to sort a stack such that the smallest items are on the top (in ascending order). You can use an additional stack, but you may not use any other data structure (such as an array, or linked list).

````
function sortStack(stack) {
    let sortedStack = new Stack()

    while (stack.top !== null) {
        let temp = stack.pop()

        while(sortedStack.top !== null && temp > sortedStack.top.data) {
            stack.push(sortedStack.pop())
        }

        sortedStack.push(temp)
    }
    return sortedStack
}
````

## 6) Create a queue using Singly linked list

Walk through the Queue class in the curriculum and understand it well. Then write a Queue class with its core functions (enqueue(), dequeue()) from scratch.

* Create a queue called starTrekQ and add Kirk, Spock, Uhura, Sulu, and Checkov to the queue.

````
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
````

* Implement a peek() function outside of the Queue class that lets you take a peek at what the 1st item in the queue is.

````
function peek(queue) {
    return queue.first
}
````

* Implement a isEmpty() function outside the Queue class that allows you to check if the queue is empty or not

````
function isEmpty(queue) {
    if (!queue.first) {
        return true
    }
    return false
}
````

* Implement a display() function outside of the Queue class that lets you display what's in the queue.

````
function display(queue) {
    let currNode = queue.first

    while (currNode !== null) {
        console.log(currNode)
        currNode = currNode.next
    }
}
````

## 7) Create a queue class using Doubly linked list

Use the items listed in #6 and enqueue them to your queue.

````
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



function isEmpty(queue) {
    if (!queue.first) {
        return true
    }
    return false
}



function display(queue) {
    let currNode = queue.first

    while (currNode !== null) {
        console.log(currNode)
        currNode = currNode.next
    }
}
````

* Check to see who is first one on the Queue?

````
function peek(queue) {
    return queue.first
}
````

## 8) Queue implementation using a stack

There are many ways to implement a queue. You have learned using singly linked list, and doubly linked list. Keeping the concept of a queue in mind, implement a queue using 2 stacks and no other data structure. (You are not allowed to use a doubly linked list or array. Use your stack implementation with a linked list from above to solve this problem.)

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
        this.length = 0
    }

    push(data) {
        // if stack empty, place on top of stack
        if (this.top === null) {
            this.top = new _Node(data, null)
            this.length += 1
            return this.top
        }

        // if stack already has something
        // create a new node
        // add data to the new node
        // have pointer point to the top
        const node = new _Node(data, this.top)
        this.length += 1
        this.top = node
    }

    pop() {
        // remove from the top
        // pointer points to next item
        // next item becomes top of the stack

        const node = this.top
        this.top = node.next
        this.length -= 1
        return node.data
    }
}

class Queue {
    constructor() {
        this.pushStack = new Stack()
        this.popStack = new Stack()
        this.size = 0
    }

    enqueue(value) {
        this.pushStack.push(value)
        this.size = this.pushStack.length + this.popStack.length
    }

    dequeue() {
        if (this.popStack.length > 0) {
            this.size = this.pushStack.length + this.popStack.length - 1
            return this.popStack.pop()
        }

        while(this.pushStack.length > 0) {
            this.popStack.push(this.pushStack.pop())
        }

        this.size = this.pushStack.length + this.popStack.length -1
        return this.popStack.pop()
    }
}



let starTrek = new Queue()

function main() {
    starTrek.enqueue('Kirk')
    starTrek.enqueue('Spock')
    starTrek.enqueue('Uhura')
    starTrek.enqueue('Sulu')
    starTrek.enqueue('Checkov')
    // starTrek.dequeue()
    // starTrek.dequeue()
    // starTrek.dequeue()
    // starTrek.dequeue()
    // starTrek.dequeue()
}

main()



function peek(queue) {
    return queue.pushStack.top
}



function isEmpty(queue) {
    if (!queue.pushStack.top) {
        return true
    }
    return false
}



function display(queue) {
    let currNode = queue.pushStack.top

    while (currNode !== null) {
        console.log(currNode)
        currNode = currNode.next
    }
}
````

## 9) Square dance pairing

As people come to the dance floor, they should be paired off as quickly as possible: man with woman, man with woman, all the way down the line. If several men arrive in a row, they should be paired in the order they came, and likewise if several women do. Maintain a queue of "spares" (men for whom you have no women yet, or vice versa), and pair them as appropriate.

F Jane

M Frank

M John

M Sherlock

F Madonna

M David

M Christopher

F Beyonce

* Female dancer is Jane, and the male dancer is Frank
* Female dancer is Madonna, and the male dancer is John
* Female dancer is Beyonce, and the male dancer is Sherlock
* There are 2 male dancers waiting to dance

````
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
````

## 10) The Ophidian Bank

At the Ophidian Bank, a single teller serves a long queue of people. New customers join the end of the queue, and the teller will serve a customer only if they have all of the appropriate paperwork. Write a representation of this queue; 25% of the time (random), a customer's paperwork isn't quite right, and it's back to the end of the queue. Show what a few minutes of the bank's lobby would look like.