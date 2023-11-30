#include<stdio.h>
int main()
{
    int n,a,arm=0,t;
    printf("Enter the number");
    scanf("%d",&n);
    t=n;
    while(n>0)
    {
        a=n%10;
        arm=arm+(a*a*a);
        n=n/10;
    }
    if(arm==t)
    {
        printf("armstrong");
    }
    else
    {
        printf("not");
    }
}