// 881. Boats to Save People (3/24/2022)
// Runtime: 112 ms (69.26%) Memory: 11.04 MB (41.48%) 

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
