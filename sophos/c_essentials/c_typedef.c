#include <stdio.h>
#include <string.h>

// typedef gives a type a new name

typedef struct Books {
    char title[50];
    char author[50];
    char subject[100];
    int book_id;
} Book;

int main(){

    Book book;

    strcpy(book.title, "C Programming");
    strcpy(book.author, "Blarne Str");
    strcpy(book.subject, "C language");
    book.book_id = 6495407;

    printf("Book title: %s\n",book.title);
    printf("Book author: %s\n", book.author);
    printf("Book subject: %s\n", book.subject);
    printf("Book book_id: %d\n", book.book_id);

    return 0;
}
