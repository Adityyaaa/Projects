#include<stdio.h>
void main()
{
    char s1[100],s2[100];
    int i;
    printf("Enter the string 1\n");
    gets(s1);
    int l=0;
    for(i=0;s1[i]!=0;i++)
    {
        l=l+1;
    }
    printf("Length of string 1=%d\n",l);
    printf("Enter the string 2\n");
    gets(s2);
    for(i=0;i<l;i++)
    {
        s1[l+i]=s2[i];
    }
    s1[l+i]=0;
    puts(s1);
}
