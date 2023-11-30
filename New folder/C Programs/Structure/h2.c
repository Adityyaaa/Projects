#include <stdio.h>
#include <string.h>
#include <math.h>
#include <stdlib.h>



int main() 
{
    int a, b, n, t;
    scanf("%d\n%d", &a, &b);
    t=a>b?a:b;
    n=a<b?a:b;
    for(n;n<=t;n++)
    {
        if(n<10)
        {
        if(n==1)
        printf("one\n");
        
        if(n==2)
        printf("two\n");
        
        if(n==3)
        printf("three\n");
        
        if(n==4)
        printf("four\n");
        
        if(n==5)
        printf("five\n");
        
        if(n==5)
        printf("five\n");
        
        if(n==6)
        printf("six\n");
        
        if(n==7)
        printf("seven\n");
        
        if(n==8)
        printf("eight\n");
        
        if(n==9)
        printf("nine\n");
        }

        if(n>=10) 
        {
            if(n%2==0)
            printf("even\n");
            
            else 
            printf("odd\n");
        }
    }
    
    return 0;
}