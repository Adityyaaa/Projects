#include<stdio.h>
void sum(int , int );
void main()
{
     int a,b;
     printf("Enter a and b");
     scanf("%d%d",&a,&b);
     sum(a,b);
}
void sum(int x, int y)
{
int c;
c=x+y;
printf("%d",c);
}