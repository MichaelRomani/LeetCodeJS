//Time O(n)
//Space O(n)

const kthSmallest = (root, k) => {
  const arr = []
  traverseTree(root, arr)
  return arr[k - 1]
};

const traverseTree = (tree, arr) => {
  if (tree.left) traverseTree(tree.left, arr)
  arr.push(tree.val)
  if (tree.right) traverseTree(tree.right, arr)
}
