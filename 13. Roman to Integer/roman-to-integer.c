// 13. Roman to Integer (3/23/2022)
// Runtime: 4 ms (86.34%) Memory: 5.97 MB (22.10%) 

int romanToInt (char* s) {
    int dict[128] = { 0 };
    dict['I'] = 1;
    dict['V'] = 5;
    dict['X'] = 10;
    dict['L'] = 50;
    dict['C'] = 100;
    dict['D'] = 500;
    dict['M'] = 1000;
    
    int len = strlen(s);
    int ans = dict[s[len - 1]];
    
    for (int i = 0; i < len - 1; i++) {
        if (dict[s[i]] >= dict[s[i + 1]]) {
            ans += dict[s[i]];
        } else {
            ans -= dict[s[i]];
        }
    }
    
    return ans;
}
