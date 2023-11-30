#include<stdio.h>
struct sum
{
    char name [50];
    int roll;
    int p,c,m;
}s1,s2;

void main()
{
     int sum1, sum2;
     printf("Enter the details of student 1\n");
     gets(s1.name);
     scanf("%d%d%d%d",&s1.roll,&s1.p,&s1.c,&s1.m);
     puts(s1.name);
     printf("%d\n%d\n%d\n%d\n",s1.roll,s1.p,s1.c,s1.m);
     sum1=s1.p+s1.c+s1.m;

     printf("Enter the details of student 2\n");
     gets(s2.name);
     scanf("%d%d%d%d",&s2.roll,&s2.p,&s2.c,&s2.m);
     puts(s2.name);
     printf("%d\n%d\n%d\n%d\n",s2.roll,s2.p,s2.c,s2.m);
     sum2=s2.p+s2.c+s2.m;
      
     printf("sum1=%d\nsum2=%d",sum1,sum2); 
}