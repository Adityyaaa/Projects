#include<stdio.h>
int main()
{
    int a[100],n,i,ele,c=0;
    printf("Enter the number of elements");
    scanf("%d",&n);
    printf("Enter elements");
    for(i=0;i<n;i++)
    {
        scanf("%d",&a[i]);
    }
    printf("Enter element to be searched");
    scanf("%d",&ele);
    for(i=0;i<n;i++)
    {
        if(ele==a[i])
        {
            c=c+1;
            printf("Element found at= %d\n",i+1);
        }
    }
    if(c>0)
    {
            printf("\nElements exist %d times",c);   
    }
    else
    {
        printf("Element does not exist");
    }
}