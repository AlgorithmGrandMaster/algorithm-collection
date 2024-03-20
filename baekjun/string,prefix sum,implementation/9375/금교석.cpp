#include <bits/stdc++.h>
using namespace std;

int main()
{
    int setCount;
    cin >> setCount;

    for (int i = 0; i < setCount; i++)
    {
        map<string, int> fashion;
        int count;
        string name, type;

        cin >> count;
        for (int i = 0; i < count; i++)
        {
            cin >> name >> type;
            fashion[type]++;
        }

        long long result = 1;
        for (auto cloth : fashion)
        {
            result *= ((long long)cloth.second + 1);
        }
        result -= 1;
    }
}