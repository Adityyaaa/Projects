#include<stdio.h>
#include<math.h>
int power(int, int);
void main()
{ 
     int a,b,c;
     printf("Enter a and b");
     scanf("%d%d",&a,&b);
     c=power(a,b);
     printf("%d",c);
}
int power(int x,int y)
{
    if(x==0)
    {
        return (1);
    }
    else
    {
        return (x*pow(x,y-1));
    }
} 