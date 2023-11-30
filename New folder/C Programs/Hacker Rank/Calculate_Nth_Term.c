#include<stdio.h>
void main()
{
    int a,b,c,n;
    scanf("%d%d%d%d",&n,&a,&b,&c);
    int sum=0;
    for(int i=1; i<=n-3; i++) {
        sum = a+b+c;
        a=b;
        b=c;
        c=sum;
    }
    printf("%d",sum);
}