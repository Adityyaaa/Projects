#include<stdio.h>
int main()
{
    int a,b,c,d,n,x,y,z;
    printf("Enter 4 digit number");
    scanf("%d%",&n);
    a=n%10;
   n=n/10;
   b=n%10;
   n=n/10;
   c=n%10;
   n=n/10;
   d=n/10;
   x=a>b?a:b;
   y=x>c?y:c;
   z=y>d?y:d;
   printf("Greatest among digits=%d",z);
}