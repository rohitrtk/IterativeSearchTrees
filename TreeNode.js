/**
 * Using an array to store a nodes children as oppposed to the
 * traditional left and right nodes. This allows a tree to be
 * able to have multiple children.
 */
export class TreeNode {
  constructor(data) {
    this.data = data;
    this.depth = 0;
    this.children = [];
  }
}
