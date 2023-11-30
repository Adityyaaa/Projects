#include<stdio.h>
int main()
{
     int i,j,n,sum,fac;
     printf("Enter n");
     scanf("%d",&n);
     for(i=1;i<=n;i++)
     {
         sum=0;
         fac=1;
         for(j=1;j<=i;j++)
         {
             fac=fac*j;
         }
         sum=sum+fac;
     }
     printf("%d",sum);
}