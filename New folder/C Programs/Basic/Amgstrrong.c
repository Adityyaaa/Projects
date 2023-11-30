#include<stdio.h>
#include<math.h>
int main()
{
   int n,a,b,c,A,t;
   printf("Enter number");
   scanf("%d",&n);
   t=n;
   a=n%10;
   n=n/10;
   b=n%10;
   n=n/10;
   c=n%10;
   A=(pow(a,3)+pow(b,3)+pow(c,3));
   A==t?printf("Amgstrong"):printf("Not Amgstrong");
}