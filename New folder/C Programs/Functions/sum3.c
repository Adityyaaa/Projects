#include<stdio.h>
int sum(int ,int);
main()
{
    int a,b,c;
    printf("Enter a and b");
    scanf("%d%d",&a,&b);
    c=sum(a,b);
    printf("%d",c);
}
int sum(int x, int y)
{
    int z;
    z=x+y;
    return(z);
}