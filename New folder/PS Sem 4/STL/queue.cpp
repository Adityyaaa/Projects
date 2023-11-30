#include <iostream>
#include<queue>

using namespace std;

int main ()
{
    queue<int> Q;
    Q.push(1);
    Q.push(2);
    Q.push(3);
    Q.push(4);
    cout<<Q.front()<<endl;
    cout<<Q.size()<<endl;

    Q.pop();

    cout<<Q.front()<<endl;
    cout<<Q.back()<<endl;

    return 0;
}