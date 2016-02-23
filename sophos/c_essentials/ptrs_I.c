#include <stdio.h>

int main(){
    int tmp = 20;
    int *ptr;

    ptr = &tmp;  // Store address of tmp in ptr

    printf("Address of tmp var: %x\n", &tmp);
    printf("Address of ptr var: %x\n", ptr);
    printf("Value of ptr var: %d\n", *ptr);

    return 0;
}
