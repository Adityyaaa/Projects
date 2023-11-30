#include<stdio.h>
int main()
{
    int i,j,a[10][10],m,n,sum=0;
    printf("Enter the number of row and column");
    scanf("%d%d",&m,&n);
    printf("Enter matrix");
    for(i=0;i<m;i++)
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
            if(i==j)
            {
                sum=sum+a[i][j];
            }
        }
    }
    printf("Trace=%d",sum);
}
