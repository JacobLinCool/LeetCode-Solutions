// 946. Validate Stack Sequences (3/16/2022)
// Runtime: 6 ms (79.88%) Memory: 6.15 MB (27.93%) 

typedef uint64_t u64;
#define StructVector(_name, _type)                                              \
    typedef struct _name {                                                      \
        _type* data;                                                            \
        u64 size;                                                               \
        u64 capacity;                                                           \
        void (*insert)(struct _name*, u64, _type);                              \
        _type (*remove)(struct _name*, u64);                                    \
        void (*set)(struct _name*, u64, _type);                                 \
        _type (*get)(struct _name*, u64);                                       \
        void (*push)(struct _name*, _type);                                     \
        _type (*pop)(struct _name*);                                            \
        _type (*back)(struct _name*);                                           \
        void (*unshift)(struct _name*, _type);                                  \
        _type (*shift)(struct _name*);                                          \
        _type (*front)(struct _name*);                                          \
        void (*clear)(struct _name*);                                           \
        void (*free)(struct _name*);                                            \
    } _name;                                                                    \
    void insert_##_name(_name* vector, u64 _idx, _type val) {                   \
        if (vector->size == vector->capacity) {                                 \
            vector->capacity <<= 1;                                             \
            vector->data = realloc(vector->data, vector->capacity * sizeof(_type));\
        }                                                                       \
        for (u64 i = vector->size; i > _idx; i--) {                             \
            vector->data[i] = vector->data[i - 1];                              \
        }                                                                       \
        vector->data[_idx] = val;                                               \
        vector->size++;                                                         \
    }                                                                           \
    _type remove_##_name(_name* vector, u64 _idx) {                             \
        if (_idx >= vector->size || _idx < 0) {                                  \
            return -1;                                                           \
        }                                                                       \
        _type val = vector->data[_idx];                                         \
        for (u64 i = _idx; i < vector->size - 1; i++) {                         \
            vector->data[i] = vector->data[i + 1];                              \
        }                                                                       \
        vector->size--;                                                         \
        return val;                                                             \
    }                                                                           \
    void set_##_name(_name* vector, u64 _idx, _type val) {                      \
        if (_idx >= vector->size || _idx < 0) {                                  \
            return;                                                             \
        }                                                                       \
        vector->data[_idx] = val;                                               \
    }                                                                           \
    _type get_##_name(_name* vector, u64 _idx) {                                \
        if (_idx >= vector->size || _idx < 0) {                                  \
            return -1;                                                           \
        }                                                                       \
        return vector->data[_idx];                                              \
    }                                                                           \
    void push_##_name(_name* vector, _type val) {                               \
        insert_##_name(vector, vector->size, val);                              \
    }                                                                           \
    _type pop_##_name(_name* vector) {                                          \
        return remove_##_name(vector, vector->size - 1);                        \
    }                                                                           \
    _type back_##_name(_name* vector) {                                         \
        return get_##_name(vector, vector->size - 1);                           \
    }                                                                           \
    void unshift_##_name(_name* vector, _type val) {                            \
        insert_##_name(vector, 0, val);                                         \
    }                                                                           \
    _type shift_##_name(_name* vector) {                                        \
        return remove_##_name(vector, 0);                                       \
    }                                                                           \
    _type front_##_name(_name* vector) {                                        \
        return get_##_name(vector, 0);                                          \
    }                                                                           \
    void clear_##_name(_name* vector) {                                         \
        vector->size = 0;                                                       \
    }                                                                           \
    void free_##_name(_name* vector) {                                          \
        free(vector->data);                                                     \
        free(vector);                                                           \
    }                                                                           \
    _name* create_##_name() {                                                   \
        _name* vector = malloc(sizeof(_name));                                  \
        vector->size = 0;                                                       \
        vector->capacity = 64;                                                  \
        vector->data = malloc(vector->capacity * sizeof(_type));                \
        vector->insert = &insert_##_name;                                       \
        vector->remove = &remove_##_name;                                       \
        vector->set = &set_##_name;                                             \
        vector->get = &get_##_name;                                             \
        vector->push = &push_##_name;                                           \
        vector->pop = &pop_##_name;                                             \
        vector->back = &back_##_name;                                           \
        vector->unshift = &unshift_##_name;                                     \
        vector->shift = &shift_##_name;                                         \
        vector->front = &front_##_name;                                         \
        vector->clear = &clear_##_name;                                         \
        vector->free = &free_##_name;                                           \
        return vector;                                                          \
    }                                                                           

StructVector(Vector, int);

bool validateStackSequences (int pushed[], int pushed_size, int popped[], int popped_size) {
    Vector* vec = create_Vector();
    
    int pushed_idx = 0, popped_idx = 0;
    while (pushed_idx < pushed_size || popped_idx < popped_size) {
        while (pushed_idx < pushed_size && pushed[pushed_idx] != popped[popped_idx]) {
            vec->push(vec, pushed[pushed_idx++]);
        }
        if (pushed_idx < pushed_size) {
            vec->push(vec, pushed[pushed_idx++]);
        }
        if (vec->back(vec) != popped[popped_idx]) {
            return false;
        }
        while (popped_idx < popped_size && vec->back(vec) == popped[popped_idx]) {
            vec->pop(vec);
            popped_idx++;
        }
    }
    
    bool result = vec->size == 0;
    vec->free(vec);
    return result;
}