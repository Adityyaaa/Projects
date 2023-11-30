#include<stdio.h>
#include<math.h>
int main()
{
    int choice;
    int a,b,c,x;
    printf("Enter choice");
    scanf("%d",&choice);
    printf("Enter a,b,c");
    scanf("%d%d%d",&a,&b,&c);
    switch(choice)
    {
        case 1:x=pow(a,3)+ pow(b,3);
        printf("%d",x);
        break;

        case 2:x=a*a+b*b+2*a*b;
        printf("%d",x);
        break;

        case 3:x=pow(c,10)+ pow(b,7)+ pow(a,3);
        printf("%d",x);
        break;

        default:printf("Enter a valid choice");
    }
}
