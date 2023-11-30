#include<stdio.h>
int main()
{
      int i,j,n,a[10][10],max1,max2;
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
      max1=max2=a[0][0];
      for(i=0;i<n;i++)
      {
        for(j=0;j<n;j++)
        {
            if(a[i][j]>max1)
            {
                max2=max1;
                max1=a[i][j];
            }
            else if(a[i][j]>max1 && a[i][j]<max2)
            {
                max2=a[i][j];
            }
        }
      }
      printf("Largest element= %d\n",max1);
      printf("Second largest element= %d",max2);
}