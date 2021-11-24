import { TreeNode } from "./TreeNode.js";

/**
 * Preorder traversal of a binary search tree.
 * 
 * @param {TreeNode} rootNode 
 */
export const binarySearchTreeIterative = (rootNode) => {
  if(!rootNode) {
    return;
  }

  let stack = [];
  stack.push(rootNode);
  
  while(stack.length > 0) {
    const currentNode = stack.pop();
    const { depth, data } = currentNode;

    console.log(`Depth: ${depth} | Data: ${data}`);

    if(currentNode.children[1]) {
      currentNode.children[1].depth = depth + 1;
      stack.push(currentNode.children[1]);
    }
    if(currentNode.children[0]) {
      currentNode.children[0].depth = depth + 1;
      stack.push(currentNode.children[0]);
    }
  }
}