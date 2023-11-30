#include<stdio.h>
#include<math.h>
int main()
{
    int sum=0,t,r,n,c=0,s;
    printf("Enter number");
    scanf("%d",&n);
    c=0;
    t=n;
    s=n;
    while(n>0)
    {
        n=n/10;
        c=c+1;
    }
    printf("%d\n",c);
    while(t>0)
    {
        r=t%10;
        t=t/10;
        sum=sum+(pow(r,c));
    }
    if(sum==s)
    {
        printf("\nArmstrong");
    }
    else
    {
        printf("Not Armstrong");
    }

}