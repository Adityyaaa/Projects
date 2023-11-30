#include<stdio.h>
#include<math.h>
int main()
{
    int n,a,b,c,x;
    printf("Enter n,a,b,c");
    scanf("%d%d%d%d",&n,&a,&b,&c);
    if(n==1)
    {
       x=(pow(a,3)+pow(b,3)+pow(c,3)+(3*a*b*c));
       printf("x=%d",x);
    }
    else if(n==2)

    {
        x=(a*a+c*c-(4*a*b));
        printf("x=%d",x);
    }
    else if(n==3)
    {
        x=(pow(a,10)+pow(b,10)-pow(c,10));
        printf("x=%d",x);
    }
    else
    {
        printf("Invalid Choice");
    }
}
