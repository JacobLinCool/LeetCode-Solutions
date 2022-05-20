// 1878. Get Biggest Three Rhombus Sums in a Grid (5/29/2021)
// Runtime: 84 ms (92.25%) Memory: 20.70 MB (81.69%) 

#define rang(a) begin(a), end(a)
template <class T, class C = less<typename T::value_type>>
void sort(T &a, C c = C()) {
    sort(rang(a), c);
}
template <class T> void uniq(T &a) {
    sort(a), a.erase(unique(rang(a)), end(a));
}
class Solution {
public:
    vector<int> getBiggestThree(vector<vector<int>>& a) {
        static int s1[110][110],s2[110][110];
        int n=a.size(),m=a[0].size();
        for(int i=0;i<n+5;++i)
            for(int j=0;j<m+5;++j)
                s1[i][j]=s2[i][j]=0;
        for(int i=0;i<n;++i)
            for(int j=0;j<m;++j){
                s1[i+1][j+1]=s1[i][j]+a[i][j];
            }
        for(int i=0;i<n;++i)
            for(int j=m-1;j>=0;--j){
                s2[i+1][j+1]=s2[i][j+2]+a[i][j];
            }
        vector<int>tmp;
        for(int i=0;i<n;++i)
            for(int j=0;j<m;++j){
                for(int k=0;;++k){
                    int i2=i+k;
                    int j2=j+k;
                    if(i2>=n||j2>=m)break;
                    int i3=i-k;
                    int j3=j+k;
                    if(i3<0)break;
                    int i4=i;
                    int j4=j+k+k;
                    if(j4>=m)break;
                    if(k==0)tmp.push_back(a[i][j]);
                    else{
                    tmp.push_back(s1[i2+1][j2+1]-s1[i][j]+s1[i4+1][j4+1]-s1[i3][j3]+s2[i+1][j+1]-s2[i3][j3+2]+s2[i2+1][j2+1]-s2[i4][j4+2]-a[i][j]-a[i2][j2]-a[i3][j3]-a[i4][j4]);
                    }
                }
            }
        uniq(tmp);
        reverse(begin(tmp),end(tmp));
        while(tmp.size()>3)tmp.pop_back();
        return tmp;
    }
};