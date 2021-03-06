// 1249. Minimum Remove to Make Valid Parentheses (10/20/54172)
// Runtime: 8 ms (85.71%) Memory: 11.86 MB (0.00%) 

#define StructStack(_name, _type) \
    typedef struct _name { \
        _type* data; \
        uint64_t size; \
        uint64_t max; \
        void (*push)(struct _name*, _type); \
        _type (*pop)(struct _name*); \
        _type (*top)(struct _name*); \
        uint8_t (*empty)(struct _name*); \
        void (*clear)(struct _name*); \
        void (*free)(struct _name*); \
    } _name; \
    void push_##_name(_name* stack, _type val) { \
        if (stack->size == stack->max) { \
            return; \
        } \
        stack->data[stack->size++] = val; \
    } \
    _type pop_##_name(_name* stack) { \
        if (stack->size == 0) { \
            return 0; \
        } \
        return stack->data[--stack->size]; \
    } \
    _type top_##_name(_name* stack) { \
        if (stack->size == 0) { \
            return 0; \
        } \
        return stack->data[stack->size - 1]; \
    } \
    uint8_t empty_##_name(_name* stack) { \
        return stack->size == 0; \
    } \
    void clear_##_name(_name* stack) { \
        stack->size = 0; \
    } \
    void free_##_name(_name* stack) { \
        free(stack->data); \
        free(stack); \
    } \
    _name* create_##_name(uint64_t max_size) { \
        _name* stack = malloc(sizeof(_name)); \
        stack->data = calloc(max_size, sizeof(_type)); \
        stack->size = 0; \
        stack->max = max_size; \
        stack->push = &push_##_name; \
        stack->pop = &pop_##_name; \
        stack->top = &top_##_name; \
        stack->empty = &empty_##_name; \
        stack->clear = &clear_##_name; \
        stack->free = &free_##_name; \
        return stack; \
    }

StructStack(Stack, int);

char* minRemoveToMakeValid (char* s) {
    int len = strlen(s);
    char* str = (char*)malloc(len + 1);
    strcpy(str, s);
    Stack* stk = create_Stack(100000);
    
    for (int i = 0; i < len; i++) {
        if (str[i] == '(') {
            stk->push(stk, i);
        }
        else if (str[i] == ')') {
            if (stk->size) {
                stk->pop(stk);
            } else {
                str[i] = '|';
            }
        }
    }
    while (stk->size) {
        str[stk->pop(stk)] = '|';
    }
    
    char* result = (char*)calloc(len + 1, sizeof(char));
    char* token = strtok(str, "|");
    while (token) {
        strcat(result, token);
        token = strtok(NULL, "|");
    }
    
    free(str);
    
    return result;
}