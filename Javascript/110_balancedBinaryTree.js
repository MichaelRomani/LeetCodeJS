const isBalanced = root => {
  return check(root) !== -1
};

const check = root => {
  if (root === null) return 0
  const left = check(root.left)
  const right = check(root.right)
  if (left === -1 || right === -1 || Math.abs(left - right) > 1) return - 1
  const num = left > right ? left : right
  return 1 + num
}
