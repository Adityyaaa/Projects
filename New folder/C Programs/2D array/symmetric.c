#include<stdio.h>
int main()
{
     int i,j,n,a[10][10],b[10][10],c;
     printf("Enter the number of rows and columns");
     scanf("%d",&n);
     printf("Enter elements of matrix");
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
            b[j][i]=a[i][j];
        }
     }
     for(i=0;i<n;i++)
     {
        for(j=0;j<n;j++)
        {
            c=c+1;
        }
     }
            if(c==n*n)
            {
                printf("Symmetric");
            }
            else
            {
                printf("Not Symmetric");
            }
}