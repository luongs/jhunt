#include <stdio.h>

int * getArray() {
    // static in order to return address from within fnc
    static int r[5];
    int i;

    for (i=0; i<5; i++){
        r[i] = i;
    }
    return r;
}

int main(){

    int *p;
    int i;
    p = getArray();

    for (i=0; i<5; i++){
        printf("%d, ",p[i]);
    }

    return 0;
}
