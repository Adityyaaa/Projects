/*#include<stdio.h>
void main()
{
     char s[100];
     printf("Enter string\n");
     gets(s);
     puts(s);
}*/


#include<stdio.h>
void main ()
{
    char s[100];
    printf("Enter string");
    scanf("%s",s);
    printf("%s",s);
}
