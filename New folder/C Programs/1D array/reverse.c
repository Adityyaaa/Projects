// #include<stdio.h>
// int main()
// {
//      int a[100],i,n,t; int b[100];
//      printf("Enter number of elements");
//      scanf("%d",&n);
//      printf("Enter elements");
//      for(i=0;i<n;i++)
//      {
//          scanf("%d",&a[i]);
//      }
//      t=0;
//      for(i=n-1 ,t=0;i>=0;i--,t++)
//      {
//         b[i]=a[t];
//         // t=a[i];
//          //a[i]=a[n-1-i];
//          //a[n-1-i]=t;
//      }
//      printf("reversed array is ");
//      for(i=0;i<n;i++)
//      {
//          printf(" 5
//          %d",b[i]);
//      }
// }

#include<stdio.h>
int main()
{
     int a[100],i,n,t;
     printf("Enter number of elements");
     scanf("%d",&n);
     printf("Enter elements");
     for(i=0;i<n;i++)
     {
         scanf("%d",&a[i]);
     }
     t=0;
     for(i=0;i<=n/2;i++)
     {
        t=a[i];
        a[i]=a[n-1-i];
        a[n-1-i]=t;
     }
     printf("Reverse array is");
     for(i=0;i<n;i++)
     {
        printf(" %d",a[i]);
     }
}