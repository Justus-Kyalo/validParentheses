function validParentheses(str) {
  // Create a stack to store the parentheses
  let stack = [];

  // Iterate through the string
  for (let i = 0; i < str.length; i++) {
    // If the current character is an opening parenthesis, push it onto the stack
    if (str[i] === "(") {
      stack.push(str[i]);
    }
    // If the current character is a closing parenthesis
    else if (str[i] === ")") {
      // Check if the stack is empty
      if (stack.length === 0) {
        // If the stack is empty, there is a closing parenthesis without a corresponding opening parenthesis, so return false
        return false;
      }
      // If the stack is not empty, pop the top element (the most recently added opening parenthesis)
      stack.pop();
    }
  }

  // If the stack is empty at this point, all the parentheses were properly balanced, so return true
  // Otherwise, return false (there were some opening parentheses that were not closed)
  return stack.length === 0;
}
