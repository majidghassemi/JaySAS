// Fibo in iterative way - Good time complexity O(n)
function iterativeFibo(n) {
  let helper = [0, 1];

  for (let i = 2; i <= n; i++) {
    helper.push(helper[i - 1] + helper[i - 2]);
  }

  return helper[n];
}


// Fibonacci in recursive way - That has a bad time complexity
function recursiveFibo(n) {
  if (n < 2) return n;
  return fibo(n - 1) + fibo(n - 2);
}

// O(2^n) -_-
