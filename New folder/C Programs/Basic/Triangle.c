#include<stdio.h>
int main()
{
    int b,p,h;
    printf("Enter the sides");
    scanf("%d%d%d",&b,&p,&h);
    if(b==h && h==p && p==b)
    {
        printf("Equilateral Triangle");
    }
    else if(b==p || b==h || p==h)
    {
        printf("Isoceles Triangle");
    }
    else if(p!=h && b!=p && b!=h)
    {
        printf("Scalene Triagle");
    }
    else if(p*p==b*b+h*h || b*b==p*p+h*h || h*h==p*p+h*h)
    {
        printf("Right angle triangle");
    }
    else 
    {
        printf("Invalid Choice");
    } 
}