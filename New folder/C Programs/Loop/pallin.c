#include <stdio.h>
#include <math.h>
int main()
{
  int n,a,t,r=0;
  printf("Enter n");
  scanf("%d", &n);
  t=n;
  while(n>0)
  {
    a=n%10;
    n=n/10;
    r=r*10+a;
  }
  if(r==t)
  {
  printf("Pallindrome",t);
  }
  else 
  {
    printf("Not pallindrome",t);
  }
}
