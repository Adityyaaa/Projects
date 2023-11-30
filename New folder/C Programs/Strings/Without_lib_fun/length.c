#include<stdio.h>
void main()
{
     char s[100];
     int i,len;
     printf("Enter the string");
     gets(s);
     for(i=0;s[i]!=0;i++)
     {
        len=len+1;
     }
     printf("%d",len);
}