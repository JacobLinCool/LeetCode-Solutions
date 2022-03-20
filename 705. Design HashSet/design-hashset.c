// 705. Design HashSet (3/19/2022)
// Runtime: 96 ms (81.75%) Memory: 25.04 MB (94.89%) 

// Macros and functions in sys/mman.h
extern void* mmap(void* addr, size_t len, int prot, int flags, int fd, off_t offset);
extern int munmap(void* addr, size_t len);

#define SIZE 1000001ULL

typedef struct {
    bool key[SIZE];
} MyHashSet;

MyHashSet* myHashSetCreate() {
    return mmap(NULL, sizeof(MyHashSet), 0b11, 0x22, -1, 0);
}

void myHashSetAdd(MyHashSet* this, int key) {
    this->key[key] = true;
}

void myHashSetRemove(MyHashSet* this, int key) {
    this->key[key] = false;
}

bool myHashSetContains(MyHashSet* this, int key) {
    return this->key[key];
}

void myHashSetFree(MyHashSet* this) {
    munmap(this, sizeof(MyHashSet));
}

/**
 * Your MyHashSet struct will be instantiated and called as such:
 * MyHashSet* obj = myHashSetCreate();
 * myHashSetAdd(obj, key);
 
 * myHashSetRemove(obj, key);
 
 * bool param_3 = myHashSetContains(obj, key);
 
 * myHashSetFree(obj);
*/