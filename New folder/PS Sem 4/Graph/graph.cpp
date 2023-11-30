#include<iostream>
#include<queue>
#include<algorithm>

using namespace std;

int main()
{
    int V,E;
    cout<<"Input no of vertices";
    cin>>V;
    cout<<"Input no of edges";
    cin>>E;
    vector<int>Adj[V];
    int a,b;

    for(int i = 1; i<=E; i++) {
        cout<<"Input the end point of edge"<<i;
        cin>>a>>b;
        Adj[a].push_back(b);
        Adj[b].push_back(a);
    }
}