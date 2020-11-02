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

display(starTrek)



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

// True, true, true, false, false, true, true
// console.log(is_palindrome("dad"))
// console.log(is_palindrome("A man, a plan, a canal: Panama"))
// console.log(is_palindrome("1001"))
// console.log(is_palindrome("Tauhida"))
// console.log(is_palindrome("britney"))
// console.log(is_palindrome("Mom"))
// console.log(is_palindrome("abcdcba"))



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

console.log(langParser('(()'))  // false
console.log(langParser('(())'))  // true
console.log(langParser('()()'))  // true
console.log(langParser('(()))'))  // false
console.log(langParser('[[]'))  // false
console.log(langParser('[[]]')) // true
console.log(langParser('[][]'))  // true
console.log(langParser('[[]]]'))  // false
console.log(langParser('([{')) // false
console.log(langParser('([{}])')) // true
console.log(langParser('([{}})')) // false
console.log(langParser('({)[]')) // false
console.log(langParser('()[]')) // true
console.log(langParser('{}[]()')) // true



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


const testStack = new Stack()

function createTestStack() {
    testStack.push(5)
    testStack.push(10)
    testStack.push(3)
    testStack.push(7)
    testStack.push(100)
}

createTestStack(testStack)

let testStack2 = sortStack(testStack)
display(testStack2)