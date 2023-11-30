#include<string.h>
#include<stdio.h>
int main()
{
     char s[100];
     int d;
     printf("Enter the string\n");
     gets(s);
     d= strlen(s);
     printf("Length= %d",d);
}