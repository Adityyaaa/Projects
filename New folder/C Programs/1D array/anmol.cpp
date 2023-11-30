#include<iostream>
using namespace std;

int main()
{
    //cin>>amount1;
    //int amount1;
    //cout<<"Enter two amounts";

    //int amount2;
    //cin>>amount2;

    //int sum=amount1+amount2;
    //cout<<"Sum = "<<sum<<endl;
    //return 0;
    //int num;
    //cout<<"Enter the value of num\n";
    //cin>>num;
    //if (num%2==0)
    //{
    //    cout<<"Even";
    //}
    //else
    //{
    //    cout<<"Odd"<<endl;
    //}
    //return 0;
   int n;
   cin>>n;
   for (int i = 1; i <= n; i++)
   {
    for (int j = 1; j <= n; j++)
    {
        if (j<=n-i )
        {
            cout<<" ";
        }

        else
        {
            cout<<"*";
        }
        
    }
    cout<<endl;
   }
    return 0;
} 