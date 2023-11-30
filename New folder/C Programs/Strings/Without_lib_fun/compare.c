#include<stdio.h>
void main()
{
    char s1[100],s2[100];
    int i,l=0;
    printf("Enter the string 1\n");
    gets(s1);
    for(i=0;s1[i]!=0;i++)
    {
        l=l+1;
    }
    printf("Length=%d\n",l);
    printf("Enter the string 2\n");
    gets(s2);
        if(s1[i]==s2[i])
        {
            printf("Identical");
        }
        else
        {
            printf("Not identical");
        }
}