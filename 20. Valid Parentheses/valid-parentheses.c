// 20. Valid Parentheses (3/13/2022)
// Runtime: 0 ms (94.46%) Memory: 6.82 MB (0.00%) 

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

StructStack(Stack, char);

bool isValid (char* s) {
    Stack* parentheses = create_Stack(10000);
    int len = strlen(s);
    for (int i = 0; i < len; i++) {
        if (strchr("([{", s[i])) {
            parentheses->push(parentheses, s[i]);
            continue;
        }
        
        if (strchr(")]}", s[i])) {
            char top = parentheses->top(parentheses);
            if (s[i] == ')' && top != '(') {
                return false;
            }
            if (s[i] == ']' && top != '[') {
                return false;
            }
            if (s[i] == '}' && top != '{') {
                return false;
            }
            parentheses->pop(parentheses);
        }
    }
    
    return parentheses->empty(parentheses);
}