#include<stdio.h>
int main()
{
   int i,j,a,n;
   for(i=1000;i<=9999;i++)
   {
       n=0;
       j=i;
       while(i>0)
       {
           a=i%10;
           i=i/10;
           n=n*10+a;
       }
       if(n==j)
   {
   printf("%d",j);
   }
   }
}