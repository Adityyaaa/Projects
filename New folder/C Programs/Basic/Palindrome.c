#include<stdio.h>
void main()
{
   int n,a,b,c,rev,t;
   printf("Enter number");
   scanf("%d",&n);
   t=n;
   a=n%10;
   n=n/10;
   b=n%10;
   n=n/10;
   c=n%10;
   rev=a*100+b*10+c*1;
   (t==rev)?printf("palindrome number"):printf("Not a palindrome number");
}