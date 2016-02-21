#include <stdio.h>

// variable declaration
extern int a,b,c;
extern float f;

int main(){
    
    // variable definition
    int a,b,c;
    float f;
    
    // initialization
    a = 10;
    b = 20;
    c = a+b;

    printf("value of c: %d \n", c);

    f = 70.0/3.0;
    printf("value of f: %f \n", f);

    return 0;
}
