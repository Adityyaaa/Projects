#include<stdio.h>
int main()
{
     int i,j,m,n,a[100][100],b[100][100],c[100][100];
     printf("Enter the number of rows and columns");
     scanf("%d%d",&m,&n);
     printf("Enter elements of matrix a");
     for(i=0;i<m;i++)
     {
        for(j=0;j<n;j++)
        {
            scanf("%d",&a[i][j]);
        }
     }
    printf("Enter elements of matrix b");
    for(i=0;i<m;i++)
    {
        for(j=0;j<n;j++)
        {
            scanf("%d",&b[i][j]);
        }
    }
    for(i=0;i<m;i++)
    {
        for(j=0;j<n;j++)
        {
            c[i][j]=a[i][j]+b[i][j];
        }
    }
    printf("sum=");
    for(i=0;i<m;i++)
    {
        for(j=0;j<n;j++)
        {
            printf("%d",c[i][j]);
        }
    }
}