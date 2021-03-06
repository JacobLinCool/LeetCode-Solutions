// 792. Number of Matching Subsequences (10/18/53444)
// Runtime: 132 ms (94.03%) Memory: 46.04 MB (71.13%) 

class Solution {
public:
    int numMatchingSubseq(string S, vector<string>& words) {
        vector<pair<int, int>> all[128];
        int res = 0, n = words.size();
        for (int i = 0; i < n; i++) {
            all[words[i][0]].emplace_back(i, 1);
        }
        for (char c : S) {
            auto vect = all[c];
            all[c].clear();
            for (auto it : vect) {
                if (it.second == words[it.first].size()) ++res;
                else all[words[it.first][it.second++]].push_back(it);
            }
        }
        return res;
    }
};