#include<stdio.h>
#include<string.h>
int main()
{
     char s1[100], s2[100];
     int d;
     printf("Enter the string");
     gets(s1);
     strcpy(s2,s1);
     strrev(s2);
     strcmp(s1,s2);
     d=strcmp(s1,s2);
     if(d==0)
     {
        printf("Pallindrome");
     }
     else
     {
        printf("Not pallindrome");
     }
}