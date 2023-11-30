#include<vector>
#include<iostream>
#include<algorithm>
#include<queue>

using namespace std;

int main()
{
    int V,E;
    cout<<"Input number of vertices ";
    cin>>V;
    cout<<"Input number of edges ";
    cin>>E;
    int i;
    int a,b;
    vector<int>Adj[V];
    vector<int>DAT(V,0);

    //Input the element of graph
    for(int i = 1; i <=E; i++) {
        cout<<"Input the end point of edge "<<i<<" ";
        cin>>a>>b;
        Adj[a].push_back(b);
        DAT[b]++;
    }

    //for print the graph
    for(int i = 0; i < V; i++) {
        cout<<i<<":";
        for(int j = 0; j <Adj[i].size(); j++)
        {
            cout<<Adj[i][j]<<",";
        }
        cout<<endl;
    }

    //To display the size acc to outdegree
    cout<<endl<<"Outdegree are: "<<endl;
    for(int i =0; i < V; i++) {
        cout<<i<<" "<<Adj[i].size()<<endl;
    }

    //DAT Indegree acc to graph
    cout<<endl<<"Indegree are: "<<endl;
    for(int i =0; i < V; i++) {
        cout<<i<<" "<<DAT[i]<<endl;
    }
}