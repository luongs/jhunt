# Zenefits q2 lexical rank of word

from itertools import permutations
# Complete the function below.


def  get_ranks( words):
    target_word = []
    perm_list = []
    perm_set = set()
    index_list = []

    # Save list of unique sorted permutations of each word
    for word in words:
        target_word.append(word)
        perms = [''.join(p) for p in permutations(word)]
        # Remove duplicates
        perms_set = (set(perms))
        unique_perms = list(perms_set)
        # Sort unique permutations lexically
        unique_perms.sort()
        perm_list.append(unique_perms)


    for i in range(len(target_word)):
        index = perm_list[i].index(target_word[i])
        index_list.append(index)

    return index_list

