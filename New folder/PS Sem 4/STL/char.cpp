#include<iostream>
#include<queue>

using namespace std;

int main ()
{
    queue<char> Q;

    Q.push('H');
    Q.push('i');
    Q.push('j');
    for(int i = 0; i < Q.size(); i++) {
        cout<< Q<< endl;
    }
    return 0;
}