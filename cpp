#include <iostream>
using namespace std;


int main() {
    int number;
//changes has been commited
    long double factorial = 1.0;

    cout << "Enter a positive integer: ";
    cin >> number;//B MADE A CHANGE HERE 

    if (n < 0)
        cout << "Error! Factorial of a negative number doesn't exist.";
    else {
        for(int i = 1; i <= n; ++i) {
            factorial *= i;
        }
        cout << "Factorial of " << n << " = " << factorial;    
    }

    return 0;
}