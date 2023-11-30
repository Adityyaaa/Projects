#include<stdio.h>
int main()
{
    char a;
    int x,y;
    printf("Enter your choice");
    scanf("%c",&a);
    printf("Enter x,y");
    scanf("%d%d",&x,&y);
    switch(a)
    {
        case 'a':printf("%d",x+y);
        break;

        case 'b':printf("%d",x-y);
        break;

        case 'c':printf("%d",x/y);
        break;

        case 'd':printf("%d",x*y);
        break;

        default:printf("Enter valid choice");
    }

}