#include <sys/types.h>
#include <sys/socket.h>
#include <netdb.h>

int getaddrinfo(const char *node,  // eg: url or IP
                const char *service,   // eg: "http" or port num
                const struct addrinfo *hints,  // points to struct already filled
                struct addrinfo **res);   // ptr to linked list res is result

int socket(int domain, int type, int protocol);

// run program
int status; 
struct addrinfo hints;
struct addrinfo *servinfo;  // points to results

memset(&hints, 0, sizeof hints);  // make sure struct is empty
hints.ai_family = AF_UNSPECT;    // don't care if IPv4 or IPv6
hints.ai_socktype = SOCK_STREAM; // TCP
hints.ai_flags = AI_PASSIVE;     // fill in IP 

if ((status = getaddrinfo(NULL, "3490", &hints, &servinfo)) != 0){
    fprintf(stderr, "getaddrinfo error: %s\n",gai_strerror(status));
    exit(1);
}

// servinfo now points to ll of 1 or more addrinfos

freeaddrinfo(servinfo);   // free linked list
