#include<stdio.h>
int main()
{
    int i,sumo=0,sume=0;
    for(i=1;i<=500;i++)
    {
    if(i%2==0)
    {
        sume=sume+i;
    }
    else
    {
        sumo=sumo+i;
    }
    }
    printf("%d\n%d",sume,sumo);
}