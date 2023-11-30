#include<stdio.h>
int main()
{
     int i,j,n,a[10][10];
     printf("Enter the number of rows and columns");
     scanf("%d",&n);
     printf("Enter elements of rows and columns");
     for(i=0;i<n;i++)
     {
        for(j=0;j<n;j++)
        {
            scanf("%d",&a[i][j]);
        }
     }
     for(i=0;i<n;i++)
     {
        for(j=0;j<n;j++)
        {
            if(i>j)
            {
                a[i][j]=0;
            }
        }
     }
     printf("Symmetric matrix is ");
     for(i=0;i<n;i++)
     {
        for(j=0;j<n;j++)
        {
            printf(" %d",a[i][j]);
        }
     }
}