#include<stdio.h>
int main()
{
    int A[100],B[100],i,n;
    printf("Enter the number of elements");
    scanf("%d",&n);
    printf("Elements of A[100]");
    for(i=0;i<n;i++)
    {
        scanf("%d",&A[i]);
    }
    for(i=0;i<n;i++)
    {
        B[i]=A[i];
    }
    for(i=0;i<n;i++)
    {
       printf("B[100]=%d\n",B[i]);
    }
}