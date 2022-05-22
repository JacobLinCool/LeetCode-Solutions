// 881. Boats to Save People (8/15/54196)
// Runtime: 112 ms (68.89%) Memory: 11.04 MB (42.59%) 

int comp (int* a, int *b) {
    return *a - *b;
}

int numRescueBoats (int people[], int people_size, int limit) {
    qsort(people, people_size, sizeof(int), &comp);
    
    int heaviest = people_size - 1;
    int lightest = 0;
    while (lightest <= heaviest) {
        if (people[heaviest] + people[lightest] <= limit) {
            lightest++;
        }
        heaviest--;
    }
    
    return people_size - heaviest - 1;
}
