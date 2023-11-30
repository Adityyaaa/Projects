#include<stdio.h>
int main()

{
    int A[100],B[100],C[100],i,n;
    printf("Enter the size of arrays");
    scanf("%d",&n);
    printf("Enter elements of A[100]");
    for(i=0;i<n;i++)
    {
        scanf("%d",&A[i]);
    }
    printf("Enter elements of B[100]");
    for(i=0;i<n;i++)
    {
        scanf("%d",&B[i]);
    }
    for(i=0;i<n;i++)
    {
        C[i]=A[i]+B[i];
    }
    printf("C[100]");
    for(i=0;i<n;i++)
    {
    printf("%d\n",C[i]);
    }
}