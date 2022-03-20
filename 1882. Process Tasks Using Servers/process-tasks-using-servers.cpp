// 1882. Process Tasks Using Servers (5/30/2021)
// Runtime: 912 ms (21.46%) Memory: 307.84 MB (0.00%) 

struct node{
    int t;//0 server 1 task
    int i;
    int w;
    long long time;
};
bool operator<(node a,node b){
    if(a.time!=b.time){
        return a.time<b.time;
    }
    if(a.t!=b.t){
        return a.t<b.t;
    }
    return a.i<b.i;
}
class Solution {
public:
    vector<int> assignTasks(vector<int>& servers, vector<int>& tasks) {
        vector<int>ans(tasks.size());
        set<node>events;
        set<pair<int,int>>have;
        int tti = 0;
        for(int i=0;i<servers.size();++i){
            have.insert({servers[i],i});
        }
        for(int i=0;i<tasks.size();++i){
            events.insert({1,i,-1,i});
        }
        queue<int>need;
        while(events.size()){
            node e;
            while(true){
            e=*events.begin();
            events.erase(events.begin());
            if(e.t==0){
                have.insert({servers[e.i],e.i});
                //if(e.i==30||e.i==12)
                //cout<<e.time<<":"<<e.i<<"is back"<<endl;
            }else{
                need.push(e.i);
            }
                if(events.empty()||events.begin()->time!=e.time)break;
            }
            while(have.size()&&need.size()){
                auto sid=have.begin()->second;
                //if(sid==30||sid==12)cout<<have.begin()->first<<endl;
                have.erase(have.begin());
                auto tid=need.front();need.pop();
                ans[tid]=sid;
                //if(sid==30||sid==12)cout<<e.time<<":"<<sid<<"work on"<<tid<<endl;
                events.insert({0,sid,servers[sid],e.time+tasks[tid]});
            }
        }
        return ans;
    }
};