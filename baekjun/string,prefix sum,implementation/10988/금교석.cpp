#include <bits/stdc++.h>
using namespace std;
string input, reversed;
int main()
{
    cin >> input;
    reversed = input;
    reverse(reversed.begin(), reversed.end());
    if (reversed == input)
        cout << 1 << "\n";
    else
        cout << 0 << "\n";

    return 0;
}
