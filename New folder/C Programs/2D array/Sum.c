#include<stdio.h>
int main()
{
     int i,j,m,n,sum=0,a[100][100];
     printf("Enter the number of rows and columns");
     scanf("%d%d",&m,&n);
     printf("Enter elements");
     for(i=0;i<m;i++)
     {
        for(j=0;j<n;j++)
        {
            scanf("%d",&a[i][j]);
            sum=sum+a[i][j];
        }
     }
     for(i=0;i<m;i++)
     {
        for(j=0;j<n;j++)
        {
            printf(" %d",a[i][j]);
        }
     }
     printf("Sum=%d",sum);
}