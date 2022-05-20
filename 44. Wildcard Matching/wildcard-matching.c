// 44. Wildcard Matching (3/14/2022)
// Runtime: 8 ms (67.92%) Memory: 5.79 MB (77.01%) 

bool isMatch(char* str, char* pat) {
    int str_len = strlen(str), pat_len = strlen(pat);
    int str_idx = 0, pat_idx = 0;
    int str_idx_retry = 0, pat_idx_retry = 0;

    while (str_idx < str_len || pat_idx < pat_len) {
        // printf("---\nstr: %s\npat: %s\n", str + str_idx, pat + pat_idx);
        if (pat_idx < pat_len) {
            if (pat[pat_idx] == '*') {
                pat_idx_retry = pat_idx;
                str_idx_retry = str_idx + 1;
                pat_idx++;
                continue;
            }
            else if (pat[pat_idx] == '?' && str_idx < str_len) {
                str_idx++, pat_idx++;
                continue;
            }
            else if (str[str_idx] == pat[pat_idx]) {
                str_idx++, pat_idx++;
                continue;
            }
        }

        if (str_idx_retry > 0 && str_idx_retry <= str_len) {
            str_idx = str_idx_retry;
            pat_idx = pat_idx_retry;
            continue;
        }

        return false;
    }

    return true;
}
