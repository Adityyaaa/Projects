#include<stdio.h>
struct salary
{
    char name[50];
    int salary;
}s;

void main()
{
   printf("Enter the details");
   gets(s.name);
   scanf("%d",&s.salary);
   if(s.salary>20000)
   {
    puts(s.name);
   }
}