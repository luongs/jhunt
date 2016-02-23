#include <stdio.h>
#include <stdlib.h>
#include <string.h>

int main(){

    char name[100];
    char *desc; 

    strcpy(name, "Sebastien Luong");

    // allocate memory dynamically
    desc = malloc(200* sizeof(char));

    if (desc == NULL){
        fprintf(stderr, "Error - unable to allocate required memory \n");
    }
    else {
        strcpy(desc, "Sebastien is a software engineer"); 
    }

    printf("Name: %s\n", name);
    printf("Desc: %s\n", desc);

    // release memory
    free(desc);

    return 0;
}
