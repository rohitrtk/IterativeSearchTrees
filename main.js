import { binarySearchTreeIterative } from './BinarySearchTreeIterative.js';
import { generalSearchTreeIterative } from './GeneralSearchTreeIterative.js';
import { TreeNode as Node } from './TreeNode.js';

// Works with both binary and general search algorithms.
const test1 = () => {
  const tree = new Node(1);
  tree.children[0] = new Node(2);
  tree.children[0].children[0] = new Node(3);
  tree.children[0].children[1] = new Node(4);
  tree.children[1] = new Node(5);
  tree.children[1].children[0] = new Node(6);
  tree.children[1].children[1] = new Node(7);
  tree.children[1].children[1].children[0] = new Node(8);

  return tree;
}

// Works with the binary search algorithm but the general search
// gets mutilated since the algorithm only checks for 2 children.
const test2 = () => {
  const tree = new Node(1);
  tree.children[0] = new Node(2);
  tree.children[0].children[0] = new Node(3);
  tree.children[0].children[1] = new Node(4);
  tree.children[1] = new Node(5);
  tree.children[1].children[0] = new Node(6);
  tree.children[2] = new Node(7);
  tree.children[2].children[0] = new Node(8);
  tree.children[2].children[0].children[0] = new Node(9);
  tree.children[2].children[1] = new Node(10);
  tree.children[2].children[2] = new Node(11);
  tree.children[2].children[3] = new Node(12);

  return tree;
}

const rootNode = test2();
generalSearchTreeIterative(rootNode);