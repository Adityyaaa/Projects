#include <stdio.h>
#include <math.h>

void PowerSet(int arr[], int size)
{
    int power_size = pow(2, size);
    int count, j;

    for(count = 0; count < power_size; count++)
    {
        for(j = 0; j < size; j++)
        {
            if(count & (1<<j))
                printf("%d ", arr[j]);
        }
        printf("\n");
    }
}

int main()
{
    int arr[] = {1, 2, 3};
    int size = sizeof(arr)/sizeof(arr[0]);
    PowerSet(arr, size);
}
