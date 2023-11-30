#include<stdio.h>
int main()
{
      int i,j,n,a[10][10],max;
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
      max=a[0][0];
      for(i=0;i<n;i++)
      {
        for(j=0;j<n;j++)
        {
            if(a[i][j]>max)
            {
                max=a[i][j];
            }
        }
      }
      printf("Max element= ");
      
            printf("%d",max);
}