#include <bits/stdc++.h>

using namespace std;
int main()
{

    int count;
    cin >> count;

    string pattern;
    cin >> pattern;

    array<string, 200> fileNames;
    for (int i = 0; i < count; i++)
    {
        cin >> fileNames[i];
    };

    auto foundIndex = (int)pattern.find('*');
    const string front = pattern.substr(0, foundIndex);
    const string last = pattern.substr(foundIndex + 1);

    for (int i = 0; i < count; i++)
    {

        const string answer = fileNames[i];

        if (front.size() + last.size() > answer.size())
        {
            cout << "NE\n";
            continue;
        }
        const string answerFront = answer.substr(0, front.size());
        const string answerLast = answer.substr(answer.size() - last.size());

        if (answerFront != front || answerLast != last)
        {
            cout << "NE\n";
        }
        else
        {
            cout << "DA\n";
        }
    }
}