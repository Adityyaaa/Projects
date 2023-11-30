// #include<stdio.h>
// void main() {
//     int n;
//     scanf ("%d", &n);
//     while (n != 0) {
//     int size, mul = 1;
//     scanf ("%d", &size);
//     int arr[size];
//     for (int i = 0; i < size; i++) {
//         scanf ("%d", &arr[size]);
//     }
//     for (int i = 0; i < size; i++) {
//         mul = mul * arr[i];
//     }
//     printf("%d\n", mul);
//     n--;
//     }
// }

#include<bits/stdc++.h>
using namespace std;
int main() {
    int n;
    cin>>n;
    while (n != 0) {
    int size, mul = 1;
    cin>>size;
    int arr[size];
    for (int i = 0; i < size; i++) {
        cin>>arr[i];
    }
    for (int i = 0; i < size; i++) {
        mul = mul * arr[i];
    }
    cout<<mul%1234567<<endl;
    n--;
    }
}