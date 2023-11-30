#include<stdio.h>
void main()
{
    char s1[100],s2[100];
    int i,l=0;
    printf("Enter string\n");
    gets(s1);
    for(i=0;s1[i]!=0;i++)
    {
        l=l+1;
    }
    printf("Length=%d\n",l);
    for(i=0;i<l;i++)
    {
        s2[i]=s1[i];
    }
    puts(s2);
} 