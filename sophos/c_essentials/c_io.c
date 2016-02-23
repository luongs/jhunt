#include <stdio.h>

int main(){
    char str[100];

    printf("Enter a value: ");
    // use fgets instead of gets, it prevents buffer overflow
    fgets(str, sizeof(str), stdin);

    printf("\n You entered: ");
    puts(str);

    return 0;
}
