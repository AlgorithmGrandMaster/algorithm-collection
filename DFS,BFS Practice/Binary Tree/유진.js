function makeNode(left, data, right) {
  return { left, data, right };
}

function inorder(root) {
  //left, root, right
  const stack = [];
  const result = [];
  let current = root;
  while (current !== null || stack.length > 0) {
    while (current !== null) {
      stack.push(current);
      current = current.left;
    }
    current = stack.pop();
    result.push(current.data);
    current = current.right;
  }
  return result;
}

function preorder(root) {
  //root, left, right
  const stack = [];
  const result = [];

  stack.push(root);

  while (stack.length > 0) {
    const node = stack.pop();
    result.push(node.data);

    if (node.right) {
      stack.push(node.right);
    }
    if (node.left) {
      stack.push(node.left);
    }
  }

  return result;
}

function postorder(root) {
  //left, right, root
  const stack = [];
  const result = [];

  stack.push(root);

  while (stack.length > 0) {
    const node = stack.pop();
    result.unshift(node.data); // 후위 순회 결과를 맨 앞에 추가합니다.

    if (node.left) {
      stack.push(node.left);
    }

    if (node.right) {
      stack.push(node.right);
    }
  }

  return result;
}

const n4 = makeNode(null, 4, null);
const n5 = makeNode(null, 5, null);
const n6 = makeNode(null, 6, null);
const n7 = makeNode(null, 7, null);
const n2 = makeNode(n4, 2, n5);
const n3 = makeNode(n6, 3, n7);
const root = makeNode(n2, 1, n3);

// const postorderResult = postorder(root);
const Result = preorder(root);

console.log("result:", Result);
