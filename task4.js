// Бинарное дерево в порядке обхода

import { isTreeNode } from "../_.general/binaryTree";
export const iteration = (root) => {
    const result = [];
    const nodeStack = [];
    let curNode = root;

    while (isTreeNode(curNode) || nodeStack.length > 0) {
        if (isTreeNode(curNode)) {
            nodeStack.push(curNode);
            curNode = curNode.left;
        } else {
            // process a node in stack
            const { val, right } = nodeStack.pop();
            result.push(val);
            curNode = right;
        }
    }
    return result;
};
