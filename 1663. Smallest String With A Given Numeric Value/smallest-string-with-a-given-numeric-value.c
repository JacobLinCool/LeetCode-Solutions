// 1663. Smallest String With A Given Numeric Value (3/23/2022)
// Runtime: 37 ms (52.37%) Memory: 15.26 MB (79.88%) 

char* getSmallestString (int n, int k) {
    char* ans = (char*)calloc(n + 1, sizeof(char));

    for (int i = n - 1; i >= 0; i--) {
        int left = k - i;
        ans[i] = left >= 27 ? 'z' : 'a' + left - 1;
        k -= ans[i] - 'a' + 1;
    }

    return ans;
}
