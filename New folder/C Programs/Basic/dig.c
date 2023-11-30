#include<stdio.h>
#include<math.h>
int main()
{
    int n,a,b,c,rev,t,x;
    int choice;
    printf("Enter the choice");
    scanf("%d",&choice);
    switch(choice)
    {
        case 1:printf("Enter the number");
        scanf("%d",&n);
        if(n%2==0)
        {
            printf("Even");
        }
        else 
        {
            printf("Odd");
        } 
        break;
        
        case 2:printf("Enter number");
        scanf("%d",&n);
        a=n%10;
        n=n/10;
        b=n%10;
        n=n/10;
        c=n%10;
        rev=a*100+b*10+c*1;
        printf("Reverse=%d",rev);
        break;
        
        case 3:printf("Enter number");
        scanf("%d",&n);
        t=n;
        a=n%10;
        n=n/10;
        b=n%10;
        n=n/10;
        c=n%10;
        rev=a*100+b*10+c*1;
        (t==rev)?printf("palindrome number"):printf("Not a palindrome number");
        break;

        case 4:printf("Enter number");
        scanf("%d",&n);
        t=n;
        a=n%10;
        n=n/10;
        b=n%10;
        n=n/10;
        c=n%10;
        x=(pow(a,3)+pow(b,3)+pow(c,3));
        x==t?printf("Amgstrong"):printf("Not Amgstrong");
        break;
        
        default:printf("Enter valid choice");
        break;


    }
}