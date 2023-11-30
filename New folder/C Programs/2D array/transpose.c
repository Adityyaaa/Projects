#include<stdio.h>
int main()
{
     int i,j,m,n,a[10][10],b[10][10];
     printf("Enter number of rows and columns" );
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
     printf("Transposed Matrix is ");
     for(i=0;i<n;i++)
     {
        for(j=0;j<n;j++)
        {
            printf(" %d",b[j][i]);
        }
     }
}