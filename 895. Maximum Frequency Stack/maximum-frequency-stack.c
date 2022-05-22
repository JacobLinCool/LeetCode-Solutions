// 895. Maximum Frequency Stack (12/20/54182)
// Runtime: 421 ms (0.00%) Memory: 67.03 MB (0.00%) 

// Macros and functions in sys/mman.h
#define PROT_READ 0x1
#define PROT_WRITE 0x2
#define MAP_ANONYMOUS 0x20  
#define MAP_PRIVATE 0x02
#define MAP_FAILED ((void *)-1)
extern void* mmap(void* addr, size_t len, int prot, int flags, int fd, off_t offset);
extern int munmap(void* addr, size_t len);

#define SIZE 10000ULL
#define NUMS 1000000001ULL

typedef struct {
    uint16_t most;
    uint16_t counts[NUMS];
    int stacks[SIZE][SIZE];
    uint16_t sizes[SIZE];
} FreqStack;

FreqStack* freqStackCreate() {
    return mmap(NULL, sizeof(FreqStack), PROT_READ | PROT_WRITE, MAP_PRIVATE | MAP_ANONYMOUS, -1, 0);
}

void freqStackPush(FreqStack* this, int val) {
    int count = ++this->counts[val];
    this->stacks[count][++this->sizes[count]] = val;

    if (this->most < this->counts[val]) {
        this->most = this->counts[val];
    }
}

int freqStackPop(FreqStack* this) {
    int val = this->stacks[this->most][this->sizes[this->most]--];

    this->counts[val]--;
    if (this->sizes[this->most] == 0) {
        this->most--;
    }

    return val;
}

void freqStackFree(FreqStack* this) {
    munmap(this, sizeof(FreqStack));
}

/**
 * Your FreqStack struct will be instantiated and called as such:
 * FreqStack* obj = freqStackCreate();
 * freqStackPush(obj, val);
 
 * int param_2 = freqStackPop(obj);
 
 * freqStackFree(obj);
*/