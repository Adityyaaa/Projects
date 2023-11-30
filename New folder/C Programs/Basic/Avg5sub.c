#include<stdio.h>
int main()
{
    int p,c,m,b,h,per;
    printf("Enter the marks");
    scanf("%d%d%d%d%d",&p,&c,&m,&b,&h);
    per=(p+c+m+b+h)/5;
    if(per>90)
    {
        printf("Grade is A");
    }
    else if(per>80 && per<89)
    {
        printf("Grade is B");
    }
    else if(per>70 && per<79)
    {
        printf("Grade is C");
    }
    else if(per>60 && per<69)
    {
        printf("Grade is D");
    }
    else if(per>50 && per<59)
    {
        printf("Grade is E");
    }
    else
    {
        printf("You are fail",per);
    }
}