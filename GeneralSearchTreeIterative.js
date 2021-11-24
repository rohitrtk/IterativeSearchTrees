import { TreeNode } from "./TreeNode.js";

/**
 * Preorder traversal of a tree.
 * 
 * @param {TreeNode} rootNode 
 */
export const generalSearchTreeIterative = (rootNode) => {
  if(!rootNode) {
    return;
  }

  let stack = [];
  stack.push(rootNode);
  
  while(stack.length > 0) {
    const currentNode = stack.pop();
    const { depth, data } = currentNode;

    console.log(`Depth: ${depth} | Data: ${data}`);

    const children = currentNode.children;
    const length = children.length;
    
    for(let i = length - 1; i >= 0; i--) {
      if(children[i]) {
        children[i].depth = depth + 1;
        stack.push(children[i]);
      }
    }
  }
}