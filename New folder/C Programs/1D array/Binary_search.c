#include<stdio.h>
int main()
{
     int i,n,c=0,mid,a[100],l,f,ele;
     printf("Enter the number of elements");
     scanf("%d",&n);
     printf("Enter elements");
     for(i=0;i<n;i++)
     {
         scanf("%d",&a[i]);
     }
     printf("Enter elements to be searched");
     scanf("%d",&ele);
     f=0;
     l=n-1;
     while(f<=l)
     {
         mid=(f+l)/2;
         if(ele==a[mid])
         {
             c=c+1;
             break;
         }
         else if(ele>a[mid])
         {
             f=mid+1;
         }
         else if(ele<a[mid])
         {
             l=mid-1;
         }
     }
     if(c==1)
     {
         printf("Element found");
     }
     else
     {
         printf("Element not found");
     }
}