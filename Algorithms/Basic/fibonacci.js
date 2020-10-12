// We implement Fibonacci in recursive way

function fibo(n) {
  if (n < 2) return n;
  return fibo(n - 1) + fibo(n - 2);
}

// O(2^n) -_-