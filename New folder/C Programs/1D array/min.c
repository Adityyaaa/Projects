#include<stdio.h>
int main()
{
     int a[100],n,i,min;
     printf("Enter the numebr of elements");
     scanf("%d",&n);
     printf("Enter elements of a[100]");
     for(i=0;i<n;i++)
     {
         scanf("%d",&a[i]);
     }
     min=a[0];
     for(i=0;i<n;i++)
     {
         if(a[i]<min)
         {
             min=a[i];
         }
     }
     printf("Minimum elements=%d",min);
}