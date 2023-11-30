#include<stdio.h>
struct student
{
    char name [100];
    int roll, age;
    float marks;
}s;

void main()
{
    printf("Enter the details\n");
    gets(s.name);
    scanf("%d%d%f",&s.roll,&s.age,&s.marks);  
    puts(s.name);  
    printf("%d\n%d\n%f\n",s.roll,s.age,s.marks); 
}