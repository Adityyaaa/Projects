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
     for(i=0;i<l;i++)
     {
        s2[l-1-i]=s1[i];
     } 
     puts(s2);
}