#include <stdio.h>
#include <string.h>

// Unions allow storage of different data types 
// in the same memory location. Only one member
// can contain a value at a given time
union Data {
    int i;
    float f;
    char str[20];
};

int main(){
    union Data data;

    // initialization of data must happen once at a time
    // for unions
    data.i = 10;
    printf("data.i: %d\n", data.i);

    data.f = 220.5;
    printf("data.f: %f\n",data.f);
    
    strcpy(data.str, "C Programming");
    printf("data.str: %s\n",data.str);


    return 0;
}
