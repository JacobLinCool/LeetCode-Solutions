// 1663. Smallest String With A Given Numeric Value (12/16/54191)
// Runtime: 37 ms (50.56%) Memory: 15.26 MB (75.66%) 

char* getSmallestString (int n, int k) {
    char* ans = (char*)calloc(n + 1, sizeof(char));

    for (int i = n - 1; i >= 0; i--) {
        int left = k - i;
        ans[i] = left >= 27 ? 'z' : 'a' + left - 1;
        k -= ans[i] - 'a' + 1;
    }

    return ans;
}
