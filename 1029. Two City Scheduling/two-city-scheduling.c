// 1029. Two City Scheduling (3/25/2022)
// Runtime: 2 ms (80.67%) Memory: 6.03 MB (63.03%) 

int comp(int* a[], int* b[]) {
    return ((*a)[0] - (*a)[1]) - ((*b)[0] - (*b)[1]);
}

int twoCitySchedCost (int* costs[], int costs_size, int* costs_col_size) {
    qsort(costs, costs_size, sizeof(int*), &comp);
    
    int total = 0;
    int half = costs_size / 2;
    
    for (int i = 0; i < half; i++) {
        total += costs[i][0];
    }
    for (int i = half; i < costs_size; i++) {
        total += costs[i][1];
    }
    
    return total;
}
