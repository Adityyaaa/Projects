#include<stdio.h>
void main()
{
    int i, j, n;
    printf("Enter n ");
    scanf("%d", &n);
    for(i=1; i<=n; i++)
    {
        for(j=n; j>=i; j--)
        {
            printf("%c",'A'-1+i);
        }
        printf("\n");
    }
}