#include <stdio.h>
#include <string.h>
#include <math.h>
#include <stdlib.h>

int main() 
{
    char s[1000];
    char c[10];
    int i,l;
    scanf("%s",s);
    l=strlen(s);
    for(i=0;i<10;i++)
    {
        c[i]=0;
    }
    for(i=0;i<l;i++)
    {
        int x= s[i]-'0';
        if(x>=0 && x<=9)
        {
            c[x]++;
        }
    }
    for(i=0;i<10;i++)
    {
        printf("%d ",c[i]);
    }
return 0;
}