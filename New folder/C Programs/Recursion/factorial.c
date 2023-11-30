#include<stdio.h>
int fac(int);
void main()
{
    int z,n;
    printf("Enter n");
    scanf("%d",&n);
    z=fac(n); 
    printf("%d",z);
}
int fac(int n)
{
    if(n==0 || n==1)
    {
        return(1);
    }
    else
    {
        return (n*fac(n-1)); 
    }
}