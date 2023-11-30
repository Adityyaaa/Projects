#include<stdio.h>
int main()
{
     int a[10],i,n;
     printf("Enter no of array");
     scanf("%d",&n);
     printf("Enter elements of array");
     for(i=0;i<n;i++)
     {
         scanf("%d",&a[i]);
     }
     for(i=0;i<n;i++)
     {
        
         printf("%d\n",a[i]);
     }
}