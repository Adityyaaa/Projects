#include<stdio.h>
int main()
{
    int a[100],i,n,sum=0,avg;
    printf("Enter number of elements");
    scanf("%d",&n);
    printf("Enter elements of array");
    for(i=0;i<n;i++)
    {
        scanf("%d",&a[i]);
        sum=sum+a[i];
    }
    for(i=0;i<n;i++)
    {
        printf("element=%d\n",a[i]);
    }
    avg=sum/n;
    printf("sum=%d\navg=%d",sum,avg);
}