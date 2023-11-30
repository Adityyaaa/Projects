#include<stdio.h>
void sum();
void main()
{
    sum();
}
void sum()
{
    int a,b,sum;
    printf("Enter a and b");
    scanf("%d%d",&a,&b);
    sum=a+b;
    printf("%d",sum);
}