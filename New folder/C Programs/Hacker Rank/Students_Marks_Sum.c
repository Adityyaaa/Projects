// #include<stdio.h>
// int main()
// {
//     int n, sum=0, i;
//     char g;
//     int a[1000];
//     printf("Enter number ");
//     scanf("%d",&n);
//     for(int i = 0; i < n; i++) {
//         scanf("%d", &a[i]);
//     }
//     printf("Enter gender ");
//     scanf("%ch",&g);
//     if(g == 'b') {
//         printf("hello");
//         for(i = 0; i < n; i=i+2) {
//             sum = sum + a[i];
//         }
//         printf("%d",sum);
//     }
//     else if(g == 'g') {
//         printf("hello");
//         for(i = 1; i < n; i=i+2) {
//             sum = sum + a[i];
//         }
//         printf("%d",sum);
//     }
// }





#include <stdio.h>
#include <string.h>
#include <math.h>
#include <stdlib.h>

//Complete the following function.

int marks_summation(int *marks, int number_of_students, char gender) {
  //Write your code here.
  int i;
  int sum = 0;
  if(gender == 'b') {
        for(i = 0; i < number_of_students; i=i+2) {
            sum = sum + marks[i];
        }
        return sum;
    }
    else if(gender == 'g') {
        for(i = 1; i < number_of_students; i=i+2) {
            sum = sum + marks[i];
        }
        return sum;
    }
}

int main() {
    int number_of_students;
    char gender;
    int sum;
  
    scanf("%d", &number_of_students);
    int *marks = (int *) malloc(number_of_students * sizeof (int));
 
    for (int student = 0; student < number_of_students; student++) {
        scanf("%d", (marks + student));
    }
    printf("gen");
    scanf(" %c", &gender);
    sum = marks_summation(marks, number_of_students, gender);
    printf("%d", sum);
    free(marks);
 
    return 0;
}