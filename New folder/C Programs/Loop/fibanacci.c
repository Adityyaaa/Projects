#include<stdio.h>
int main()
{
    int i,n,a=0,b=1,c;
    printf("Enter number");
    scanf("%d",&n);
    printf("%d\n%d\n",a,b);
    for(i=1;i<=n-2;i++)
    {
        c=a+b;
        printf("%d\n",c);
        a=b;
        b=c;
    }
}