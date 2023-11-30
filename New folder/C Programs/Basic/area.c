#include<stdio.h>
int main()
{
    int choice;
    float area,l,b,h,r,S;
    printf("Enter 1 for triangle, 2 for rectangle, 3 for square, 4 for circle");
    scanf("%d",&choice);
    switch(choice)
    {
        case 1:printf("Enter b and h");
        scanf("%f%f",&b,&h);
        area=0.5*l*b;
        printf("Area=%f",area);
        break;

        case 2:printf("Enter l and b");
        scanf("%f%f",&b,&h);
        area=l*b;
        printf("Area=%f",area);
        break;

        case 3:printf("Enter S");
        scanf("%f",&S);
        area=S*S;
        printf("Area=%f",area);
        break;
        
        case 4:printf("Enter r");
        scanf("%f",&r);
        area=3.14*r*r;
        printf("Area=%f",area);
        break;

        default:printf("Invalid Choice");
        break;
    }
}