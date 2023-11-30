int countPrimes(int n){
    int d;
    for (int j = 2; j <n; j++)
    {
        int c = 0;
        for (int i = 1; i <= j; i++)
        {
            if (j % i == 0)
            {
                c = c + 1;
            }
        }
        if (c == 2)
        {
            d= d+1;
        }
    }
    return d;
}