#include <stdio.h>
#include <string.h>
#include <math.h>
#include <stdlib.h>

int main() {
    char s[100];
    scanf("%[^\n]",s);
    int l=strlen(s);
    for(int i=0; i<l; i++)
    {
        if(s[i]!=' ')
        printf("%c",s[i]);
        else
        printf("\n");
    }
    return 0;
} 