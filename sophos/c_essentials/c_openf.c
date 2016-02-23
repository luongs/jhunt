#include <stdio.h>

int main(){
    FILE *fp;

    fp = fopen("/tmp/test.txt", "+w");
    fprintf(fp, "This is testing for frprintf...\n");
    fputs("This is testing for fputs..\n",fp);
    fclose(fp);
    return 0;
}
