#include<stdio.h>
#include<string.h>

int max(int a, int b);

int lcs(char* x, char* y, int m, int n) {
    if (m == 0 || n == 0) {
        return 0;
    }
    else if(x[m-1] == y[n-1]) {
        return 1 + lcs(x, y, m-1, n-1);
    }
    else {
        return max(lcs(x, y, m, n-1), lcs(x, y, m-1, n));
    }
}

int max(int a, int b) {
    return (a>b? a : b);
}

int main()
{
    char s1[10], s2[10];
    scanf("%s",&s1);
    scanf("%s",&s2); 
    int m = strlen(s1);
    int n = strlen(s2);
    printf("%d", lcs(s1, s2, m, n));
    return 0;
}