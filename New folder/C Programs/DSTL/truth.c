#include<stdio.h>
void main ()
{
    int i,j;
    printf("A  B  A&&B\n");
    for(i=0; i<=1; i++)  {
        for(j=0; j<=1; j++)
            printf("%d  %d   %d\n",i, j, i&&j); }
    printf("________________________________________________________\n");

    printf("A  B  A||B\n");
    for(i=0; i<=1; i++)  {
        for(j=0; j<=1; j++)
            printf("%d  %d   %d\n",i, j, i||j); }
    printf("_________________________________________________________\n");

    printf("A  !A\n");
    for(i=0; i<=1; i++)  {
            printf("%d   %d\n",i,!i);  }
}