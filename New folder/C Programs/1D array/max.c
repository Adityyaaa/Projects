#include<stdio.h>
int main()
{
    int a[100],n,i,max;
    printf("Enter the number of elements");
    scanf("%d",&n);
    printf("Enter elements");
    for(i=0;i<n;i++)
    {
        scanf("%d",&a[i]);
    }  
    max=a[0];
    for(i=0;i<n;i++)
    {
        if(a[i]>max)
        {
            max=a[i];
        }
    }
    printf("Max element=%d",max);
}