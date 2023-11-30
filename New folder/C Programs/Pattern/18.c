#include<stdio.h>
void main()
{
    int a,i,j,n;
    printf("Enter n ");
    scanf("%d",&n);
    for(i=n; i>=1; i--)
    {
         a=i;
        for(j=i; j<n; j++)
        {
            printf(" ");
        }
        for(j=1; j<=a; j++)
        {
            printf("*");
        }
        printf("\n");
    }
}