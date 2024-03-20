#include <bits/stdc++.h>

using namespace std;
int main()
{
    int n, m, a[15001];
    int cnt = 0;

    ios_base::sync_with_stdio(false);
    cin.tie(NULL);
    cin >> n >> m;
    for (int i = 0; i < n; i++)
        cin >> a[i];

    for (int i = 0; i < n; i++)
    {
        for (int j = i + 1; j < n; j++)
        {
            if (a[i] + a[j] == m)
                cnt++;
        }
    }
    cout << cnt << "\n";
}