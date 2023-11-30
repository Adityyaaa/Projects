#include<stdio.h>
int sum();
void main()
{
     int z;
     z=sum();
     printf("%d",z);
}
int sum()
{
    int x,y,c;
    printf("Enter the values of x and y");
    scanf("%d%d",&x,&y);
    c=x+y;
    return(c);
}