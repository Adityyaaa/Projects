#include<stdio.h>
int main()
{
    int i,sum=0;
    for(i=1;i<=500;i++)
    {
        if(500%i==0)
        {
            sum=sum+i;
        }
    }
     if(sum==500)
     {
        printf("P");
     }
     else
     {
        printf("n");
     }
}