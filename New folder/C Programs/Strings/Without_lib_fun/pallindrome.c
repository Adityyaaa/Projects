#include<stdio.h>
void main()
{
     char s1[100],s2[100];
     int l=0,i,c=0;
     printf("Enter the string 1\n");
     gets(s1);
     for(i=0;s1[i]!=0;i++)
     {
        l=l+1;
     }   
     printf("Length=%d\n",l);
     printf("Enter the string 2\n");
     gets(s2);
     for(i=0;i<l;i++)
     {
        s2[l-1-i]=s1[i];
     }
     for(i=0;i<l;i++)
     {
        if(s1[i]==s2[i])
        {
            c=c+1;
        }
     }
     printf("c=%d\n");
     if(c==l)
     {
        printf("Pallindrome");
     }
     else
     {
        printf("Not pallindrome");
     }
}