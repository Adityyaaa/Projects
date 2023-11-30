#include<stdio.h>
int main()
{
    char a;
    printf("Enter the character");
    scanf("%c",&a);
    if(a>='A' && a<='Z')
    {
        printf("Uppercase");
        a=a+32;
        printf("%c",a);
    }
    else if(a>='a' && a<='z')
    {
        printf("Lowercase");
        a=a-32;
        printf("%c",a);
    }
    else if(a>=48 && a<=57)
    {
        printf("Digit");
    }
    else 
    {
        printf("Speacial character");
    }
}
