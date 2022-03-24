// 1879. Minimum XOR Sum of Two Arrays (5/29/2021)
// Runtime: 12 ms (93.24%) Memory: 10.44 MB (38.23%) 

#include <bits/stdc++.h>
using namespace std;
namespace minimum_cost_maximum_flow {
template <class F = int, class C = int> struct minimum_cost_maximum_flow {
    struct edge {
        edge(int _v, F _c, C _w) : v(_v), c(_c), w(_w) {}
        int v;
        F c;
        C w;
    };
    minimum_cost_maximum_flow(int _n, int _src, int _snk,
                              F _all = numeric_limits<F>::max())
        : n(_n), src(_src), snk(_snk), bg(_n), vis(n), dis(n), all(_all),
          flow(0), cost(0) {}
    void add(int u, int v, F c, C w) {
        bg[u].push_back(int(eg.size()));
        eg.push_back(edge(v, c, w));
        bg[v].push_back(int(eg.size()));
        eg.push_back(edge(u, 0, -w));
    }
    int spfa() {
        vector<int> in(n, 0);
        queue<int> qu;
        fill(vis.begin(), vis.end(), 0);
        dis[src] = 0;
        vis[src] = in[src] = 1;
        qu.push(src);
        while (!qu.empty()) {
            int u = qu.front();
            qu.pop();
            in[u] = 0;
            for (int i = 0; i < int(bg[u].size()); ++i) {
                edge &e = eg[bg[u][i]];
                if (e.c != 0 && (!vis[e.v] || dis[u] + e.w < dis[e.v])) {
                    dis[e.v] = dis[u] + e.w;
                    vis[e.v] = 1;
                    if (!in[e.v]) {
                        in[e.v] = 1;
                        qu.push(e.v);
                    }
                }
            }
        }
        return vis[snk];
    }
    F dfs(int u, F f) {
        if (u == snk)
            return f;
        F g = f;
        vis[u] = 1;
        for (int i = 0; i < int(bg[u].size()); ++i) {
            edge &e = eg[bg[u][i]], &ev = eg[bg[u][i] ^ 1];
            if (e.c != 0 && dis[e.v] == dis[u] + e.w && !vis[e.v]) {
                F t = dfs(e.v, min(g, e.c));
                g -= t;
                e.c -= t;
                ev.c += t;
                cost += t * e.w;
                if (g == 0)
                    return f;
            }
        }
        return f - g;
    }
    pair<F, C> run() {
        while (all != 0 && spfa()) {
            F t;
            do {
                fill(vis.begin(), vis.end(), 0);
                flow += (t = dfs(src, all));
                all -= t;
            } while (t != 0);
        }
        return make_pair(flow, cost);
    }
    int n, src, snk;
    vector<vector<int>> bg;
    vector<edge> eg;
    vector<int> vis;
    vector<C> dis;
    F all, flow;
    C cost;
};
} // namespace minimum_cost_maximum_flow
class Solution {
public:
    int minimumXORSum(vector<int>& nums1, vector<int>& nums2) {
        int n=nums1.size();
        minimum_cost_maximum_flow::minimum_cost_maximum_flow f(2*n+2,2*n,2*n+1);
        for(int i=0;i<n;++i)f.add(2*n,i,1,0),f.add(n+i,2*n+1,1,0);
        for(int i=0;i<n;++i)for(int j=0;j<n;++j)f.add(i,n+j,1,(nums1[i]^nums2[j]));
        
        int xabc = 0;
        return f.run().second;
    }
};