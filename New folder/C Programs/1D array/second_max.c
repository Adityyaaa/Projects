#include<stdio.h>
int main()
{
     int i,n,max1,max2,a[100];
     printf("Enter the number of elements");
     scanf("%d",&n);
     printf("Enter elements");
     for(i=0;i<n;i++)
     {
        scanf("%d",&a[i]);
     }
     max1=max2=a[0];
     for(i=0;i<n;i++)
     {
        if(a[i]>max1)
        {
            max2=max1;
            max1=a[i];
        }
        else if(a[i]>max1 && a[i]<max2)
            {
                max2=a[i];
            }
     }
     printf("Largest element= %d\n",max1);
     printf("Second largest element= %d",max2);
}