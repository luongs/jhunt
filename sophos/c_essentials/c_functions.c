#include <stdio.h>

// function declaration
int max(int num1, int num2);

int main() {
  int a = 100;
  int b = 200;
  int res;

  res = max(a,b);
  printf("Max value is: %d\n",res);

  return 0;
}

int max(int num1, int num2) {
  return num1>num2?num1:num2;
}
