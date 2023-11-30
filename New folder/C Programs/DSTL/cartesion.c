#include<stdio.h>
void main()
{
    int n,m;
    printf("Enter the number of elements in set A and set B\n");
    scanf("%d%d",&n,&m);
    int a[n],b[m];
    printf("Enter the elements of set A\n");
    for(int i=0; i<n; i++) {
        scanf("%d",&a[i]); }
    printf("Enter the elements of set B\n");
    for(int i=0; i<m; i++) {
        scanf("%d",&b[i]); }
    int t= m*n;
    printf("The cartesian product is \n{");
    for (int i=0; i<n; i++) {
        for(int j=0; j<m; j++)
            printf("(%d,%d)",a[i],b[j]);}
    printf("}\nThe number of elements in cartesian product is %d",t);
}