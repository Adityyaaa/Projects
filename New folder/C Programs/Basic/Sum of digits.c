#include<stdio.h>
void main()
{
   int n,a,b,c,S;
   printf("Enter a three digit number");
   scanf("%d",&n);
   a=n%10;
   n=n/10;
   b=n%10;
   n=n/10;
   c=n%10;
   S=a+b+c;
   printf("Sum of digits=%d",S);
}
