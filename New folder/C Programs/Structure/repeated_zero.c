#include<stdio.h>
void main()
{
    int a[100],b[100],i,j=0,n;
    printf("Enter n ");
    scanf("%d",&n);
    printf("Enter elements of array ");
    for(i=0; i<n; i++)
    {
        scanf("%d",&a[i]);
    }
    for(i=0; i<n; i++)
    {
        b[j]=a[i];
        if(a[i]==0)
        {
            b[j+1]=a[i];
            j++;
        }
        j++;
    }
    for(i=0; i<n; i++)
    {
        a[i]=b[i];
    }
    printf("Array is ");
    for(i=0; i<n; i++)
    {
        printf("%d",a[i]);
    }
}