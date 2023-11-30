#include<stdio.h>
int main()
{
    float income,tax;
    printf("Enter income");
    scanf("%f",&income);
    if (income<=100000)
    {
        printf("Tax is 0");
    }
    else if(income>100000)
    {
        tax=(0.15*(income-4000));
        printf("Tax is=%f",tax);
    }
}