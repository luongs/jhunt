#include <stdio.h>

// Only one instance of count will be used for this program
static int count = 5;
// extern sets global variable shared between files
extern void write_extern();
// register places local variable in register instead of RAMmax size 1 word
register int miles; 
