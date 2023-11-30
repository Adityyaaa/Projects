#include<stdio.h>
void main()
{
    int i, j, n;
    printf("Enter n ");
    scanf("%d", &n);
    for(i=n; i>0; i--)
    {
        for(j=1; j<=i; j++)
        {
            printf("%c",'A'-1+i);
        }
        printf("\n");
    }
}