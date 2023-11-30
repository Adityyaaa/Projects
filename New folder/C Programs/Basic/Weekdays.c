#include<stdio.h>
int main()
{
    int n,a;
    printf("Enter the number");
    scanf("%d",&n);
    a=n%7;
    if (a==1)
    {
        printf("Monday");
    }
    else if(a==2)
    {
      printf("Tuesday");
    }
    else if(a==3)
    {
        printf("Wednesday");
        }
    else if(a==4)
    {
        printf("Thursday");

    }
    else if(a==5)
    {
        printf("Friday");

    }
    else if(a==6)
    {
        printf("Saturday");
    }
    else if(a==7)
    {
        printf("Sunday");
    }
    else
    {
        printf("Invalid Choice");
    }
}