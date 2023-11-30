#include<stdio.h>
int main()
{
     int i,n,c,a[100],j;
     printf("Enter number of elements");
     scanf("%d",&n);
     printf("Enter elements");
     for(i=0;i<n;i++)
     {
        scanf("%d",&a[i]);
     }
    for(i=0;i<n;i++)
    {
      c=0;
      for(j=1;j<=a[i];j++)
      {
         if(a[i]%j==0)
         {
            c=c+1;
         }
         }
         if(c==2)
         {
            printf(" %d",a[i]);
         }
      }
    }

/*for(i = 0;i<n;i++)
{
   c=0;
   for(j=1;j<=a[i];j++)
   {
      if(a[i]%j==0)
      c++;
   }
   if(c==2)
   printf("%d ",a[i]);

}

}*/