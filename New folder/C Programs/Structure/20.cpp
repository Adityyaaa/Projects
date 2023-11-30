#include <iostream>

using namespace std;

    int main()
{
    int i, j, r, k;
    cout << "Enter no of rows : " << endl;
    cin >> r;
    for (i=1; i<=r; i++){
        for (j=1; j<=(r*3); j++){
           
            if (i<=(r-1)/2){
                for (k=3*((r-1)/2); k>=(3*(i)-2); k--){
                    cout<<"-";
                }
                for (k=1; k<=(i); k++){
                    cout<<".|.";
                }
                for (k=2; k<=(i); k++){
                    cout<<".|.";
                }
                for (k=3*((r-1)/2); k>=(3*(i)-2); k--){
                    cout<<"-";
                }
                break;
            }
            if (i==((r+1)/2)){
                for(k=0; k<((r*3)-7)/2; k++){
                    cout<<"-";
                }
                for (k=0; k<1; k++){
                cout<<"WELCOME";
                }
                for(k=0; k<((r*3)-7)/2; k++){
                    cout<<"-";
                } break;
               
            }
            else if(i>(r-1)/2) {
                for (k=3*((r-5)/2); k<(i-3)*3; k++){
                    cout<<"-";
                }
                for (k=r; k>=(i+1); k--){
                    cout<<".|.";
                }
                for (k=r; k>=(i); k--){
                    cout<<".|.";
                }
                for (k=3*((r-5)/2); k<(i-3)*3; k++){
                    cout<<"-";
                }
                break;  
            }
            }
        cout<< endl;
    }
    return 0;
}