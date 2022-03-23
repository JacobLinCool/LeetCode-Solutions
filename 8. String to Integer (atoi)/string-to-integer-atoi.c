// 8. String to Integer (atoi) (3/21/2022)
// Runtime: 4 ms (49.45%) Memory: 5.58 MB (76.39%) 

#define base 10LL

int myAtoi (char* str) {
    char* head = str;
    bool overflow = false, no_digits = true;
    int64_t val = 0;
    int32_t sign = 1;

    while (isspace(head[0])) {
        head++;
    }
    if (head[0] == '-') {
        sign = -1;
        head++;
    }
    else if (head[0] == '+') {
        head++;
    }

    int64_t limit = (sign == 1) ? INT_MAX : -(int64_t)INT_MIN;
    while (true) {
        int64_t tmp = 0;

        if (isdigit(head[0])) {
            tmp = head[0] - '0';
        }
        else if (isalpha(head[0])) {
            tmp = (isupper(head[0]) ? head[0] - 'A' : head[0] - 'a') + 10;
        }
        else {
            break;
        }

        if (tmp >= base) {
            break;
        }

        no_digits = false;

        if (val > (limit - (int64_t)tmp) / (int64_t)base) {
            overflow = true;
        }
        else {
            val = val * base + tmp;
        }

        head++;
    }

    return sign * (overflow ? limit : val);
}