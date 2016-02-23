// structs can hold data items of the same kind
#include <stdio.h>
#include <string.h>

struct Books {
  char title[50];
  char author[50];
  char subject[100];
  int book_id;
};

// function declaration
void printBook(struct Books *book);

int main() {
    struct Books Book1;
    struct Books Book2;

    // Book1 
    strcpy(Book1.title, "C programming");
    strcpy(Book1.author, "Blarne Str.");
    strcpy(Book1.subject, "C programming tutorial");
    Book1.book_id = 6495407;

    // Book2
    strcpy(Book2.title, "Meditations");
    strcpy(Book2.author, "Marcus Aurelius");
    strcpy(Book2.subject, "Philosophy");
    Book2.book_id = 6495700;

    // pass address of Book1 to print
    printBook(&Book1);

    printBook(&Book2);

    return 0;
}

void printBook(struct Books *book){
    printf("Book title: %s\n", book->title);
    printf("Book author: %s\n", book->author);
    printf("Book subject: %s\n", book->subject);
    printf("Book book_id: %d\n", book->book_id);
    printf("\n");
}
